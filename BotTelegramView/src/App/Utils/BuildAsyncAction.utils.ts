import api from '../Services/Api.service';
import AsyncActionsParams from '../Interfaces/AsyncActionsParams.interface';


const buildAsyncAction = ({name, endpoint: originEndpoint, method: defaultMethod, response }:AsyncActionsParams) => {
  const actionsTypes = {
    [name + 'Attempt']: `${name}-attempt`,
    [name + 'Success']: `${name}-success`,
    [name + 'Failure']: `${name}-failure`
  }

  const storeActions:any = {
    [name + 'Attempt']: pseudoDispatch(name, 'Attempt', actionsTypes),
    [name + 'Success']: pseudoDispatch(name, 'Success', actionsTypes),
    [name + 'Failure']: pseudoDispatch(name, 'Failure', actionsTypes)
  }
  
  const asyncActionRequest = (requestOptions?:any) => {
    return async (dispatch:any) => {
      const actionName = name + 'Attempt'
      dispatch(storeActions[actionName](requestOptions.data))

      let options: any = {
        method: 'GET',
        headers: {
          'Cache-Control': '',
          'Content-Type': '',
          'credentials': 'include'
        }
      }

      //copy endpoint
      let endpoint = originEndpoint;

      if (defaultMethod && defaultMethod !== 'GET') {
        options.method = defaultMethod

        // default headers:
        options.headers['Cache-Control'] = 'no-cache'
        options.headers['Content-Type'] = 'application/json'
        options.headers['credentials'] = 'include'

        // add request body
        options.data = requestOptions.data
      }

      const { method, headers, qs, url, params, param_1, param_2, param_3, customProperties }:any = requestOptions;

      if (requestOptions.data && requestOptions.data.id) {
        endpoint = endpoint.replace(':id', requestOptions.data.id)
      }
      if(param_1) {
        endpoint = endpoint.replace(':param_1', param_1)
      }
      if(param_2) {
        endpoint = endpoint.replace(':param_2', param_2)
      }
      if(param_3) {
        endpoint = endpoint.replace(':param_3', param_3)
      }

      if (method) {
        options.method = method
      }

      if (headers && typeof headers === 'object') {
        options.headers = {
          ...options.headers,
          ...headers
        }
      }

      if (customProperties && typeof customProperties === 'object') {
        options = {
          ...options,
          ...customProperties,
        }
      }

      if (qs && typeof qs === 'object') {
        options.qs = qs
      }

      if (url)
        options.url = url

      if (params)
        options.params = params

      return api(endpoint, options)
        .then((payload) => {
          if (!payload) return // error swallowed
          if (options.returnPromise){
            return payload
          } else {
            dispatch(storeActions[name + 'Success'](payload))
          }
        })
        .catch((error) => {
          console.log('catch err', error)
          if(!error || (error && (error.status === 403 || error.status === 401))){
            dispatch({type: 'restart-state', payload: error || {}});
          }
          else if(500 <= error.status && error.status < 600){
            dispatch(storeActions[name + 'Failure'](error));
          }
          else{
            dispatch(storeActions[name + 'Failure'](error));
          }
        })
    }
  }

  storeActions[name + 'Request'] = asyncActionRequest;

  return { actionsTypes, actionCreators: storeActions }
}

const pseudoDispatch = (name:string, cicleState:string, actionsTypes:any) => {
  return function (payload:any) {
    return {
      type: actionsTypes[name + cicleState],
      payload
    }
  }
}

export default buildAsyncAction;