import axios from 'axios';
import constants from '../../../Config/Constants.config';

const api = axios.create({
  baseURL: constants.get('/endpoints/server'),
  validateStatus: (status) => status < 404, // throw only error for statusCodes >= 404
})

function addErrorData (error) {
  error.name = 'RequestError'
  error.message = error.message || error.name
  if (!error.message) {
    let message
    try {
      message = JSON.stringify(error.stack)
    } finally {
      error.message = message || 'RequestError'
    }
  }
  throw error.response
}

function checkStatus (response) {
  const { status } = response
  if (!status) {
    throw new Error('statusNotFound')
  }

  if (status >= 400 || response.data.code >= 400) {
    throw response
  }

  return response
}

api.interceptors.response.use(checkStatus, addErrorData)

export default api