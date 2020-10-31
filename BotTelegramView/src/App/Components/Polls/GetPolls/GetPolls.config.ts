import editIcon from '../../../Assets/Images/pencil.svg';
import trashIcon from '../../../Assets/Images/delete.svg';

export const generateConfigWithLang = (configParams:any) => {
  const { language, handleOpenDeletePopUp, handleOpenPollPopUp } = configParams

  return [
    {
      name: language.name,
      property: 'name'
    },
    {
      name: language.description,
      property: 'description'
    },
    {
      name: language.userType,
      property: 'description',
      nestedTable: 'userType'
    },
    {
      name: language.actions,
      align: 'center',
      isActions: true,
      actions: [
        {
          type: 'view',
          id: 'button-poll-edit',
          title: language.edit,
          icon: editIcon,
          onClick: (dataset:any) => { handleOpenPollPopUp(dataset) }
        },
        {
          type: 'delete',
          id: 'button-poll-delete',
          title: language.delete,
          icon: trashIcon,
          onClick: (dataset:any) => { handleOpenDeletePopUp(dataset.poll_id) }
        },
      ]
    }
  ]
}

export const generateInputConfig = (params:any) => {
  const {
    language,
    handleChangeInputs,
    name,
    description,
    userTypeId,
    emptyFields,
    userTypesList,
    confirmation
  } = params;
  
  return [
    {
      type: 'text',
      name: inputNames.name,
      title: language.name,
      handleChange: handleChangeInputs,
      value: name,
      emptyFields: emptyFields && confirmation
    },
    {
      type: 'select',
      name: inputNames.userType,
      title: language.userType,
      handleChange: handleChangeInputs,
      value: userTypeId,
      list: userTypesList,
      emptyFields: emptyFields && confirmation
    },
    {
      type: 'text',
      name:inputNames.description,
      title:language.description,
      handleChange:handleChangeInputs,
      value:description,
      emptyFields: emptyFields && confirmation,
      correction: true
    }
  ]
}

export const inputNames = {
  name: 'name',
  description: 'description',
  userType: 'userType',
  numberOfQuestions: 'numberOfQuestions'
}

export const numberOfQuestionsConfig = [
  {id: 1, name:'1'},
  {id: 2, name:'2'},
  {id: 3, name:'3'},
  {id: 4, name:'4'},
  {id: 5, name:'5'},
  {id: 6, name:'6'},
  {id: 7, name:'7'},
  {id: 8, name:'8'},
  {id: 9, name:'9'},
  {id: 10, name:'10'}
]
