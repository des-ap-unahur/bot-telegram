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
    userTypesList
  } = params;
  
  return [
    {
      type: 'text',
      name: inputNames.name,
      title: language.name,
      handleChange: handleChangeInputs,
      value: name,
      emptyFields: emptyFields
    },
    {
      type: 'select',
      name: inputNames.userType,
      title: language.userType,
      handleChange: handleChangeInputs,
      value: userTypeId,
      list: userTypesList,
      emptyFields: emptyFields
    },
    {
      type: 'text',
      name:inputNames.description,
      title:language.description,
      handleChange:handleChangeInputs,
      value:description,
      emptyFields:emptyFields,
      correction: true
    }
  ]
}

export const inputNames = {
  name: 'name',
  description: 'description',
  userType: 'userType'
}