import editIcon from '../../../Assets/Images/pencil.svg';
import trashIcon from '../../../Assets/Images/delete.svg';


export const generateConfigWithLang = (configParams:any) => {
  const { language, handleOpenDeletePopUp, handleOpenNewCommand } = configParams

  return [
    {
      name: language.name,
      property: 'name'
    },
    {
      name: language.description,
      property: 'botResponses',
      custom: (property: any) => property && property.description
    },
    {
      name: language.status,
      property: 'status',
      custom: (property: any) => property ? language.active : language.innactive,
      align: 'center'
    },
    {
      name: language.commandType,
      property: 'description',
      nestedTable: 'commandsTypes'
    },
    {
      name: language.userType,
      property: 'description',
      nestedTable: 'userTypes'
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
          onClick: (dataset:any) => { handleOpenNewCommand(dataset) }
        },
        {
          type: 'delete',
          id: 'button-poll-delete',
          title: language.delete,
          icon: trashIcon,
          onClick: (dataset:any) => { handleOpenDeletePopUp(dataset.bot_command_id) }
        },
      ]
    }
  ]
}

export const inputNames = {
  name: 'name',
  command: 'command',
  description: 'description',
  userType: 'userType',
  commandType: 'commandType',
  response: 'response',
  fileName: 'fileName',
  url: 'url',
  tableSelect: "simpleTableSelect"
}

export const inputFirstConfig = (inputParams: any) => {
  const { 
    language, 
    handleChangeInputs,
    name,
    command,
    description,
    userType,
    commandType,
    response,
    userTypesOptions,
    commandTypesOptions,
    emptyFirstFields,
    confirmation
  } = inputParams;

  return [
    {
      type: 'text',
      name: inputNames.name,
      title: language.name,
      handleChange: handleChangeInputs,
      value: name,
      emptyFields: confirmation && emptyFirstFields && !name
    },
    {
      type: 'text',
      name: inputNames.command,
      title: language.command,
      handleChange: handleChangeInputs,
      value: command,
      emptyFields: confirmation && emptyFirstFields && !command
    },
    {
      type: 'text',
      name: inputNames.description,
      title: language.description,
      handleChange: handleChangeInputs,
      value: description,
      emptyFields: confirmation && emptyFirstFields && !description,
      correction: true
    },
    {
      type: 'select',
      name: inputNames.userType,
      title: language.userType,
      handleChange: handleChangeInputs,
      value: userType,
      list: userTypesOptions,
      emptyFields: confirmation && emptyFirstFields && userType
    },
    {
      type: 'select',
      name: inputNames.commandType,
      title: language.commandType,
      handleChange: handleChangeInputs,
      value: commandType,
      list: commandTypesOptions,
      emptyFields: confirmation && emptyFirstFields && !commandType
    },
    {
      type: 'text',
      name: inputNames.response,
      title: language.response,
      handleChange: handleChangeInputs,
      value: response,
      emptyFields: confirmation && emptyFirstFields && !response,
      correction: true
    }
  ]
}

export const inputSecondaryConfig = (inputParams: any) => {
  const { 
    language, 
    handleChangeInputs,
    fileName,
    url,
    emptySecondFields,
    confirmation
  } = inputParams;

  return [
    {
      type: 'text',
      name: inputNames.fileName,
      title: language.filename,
      handleChange: handleChangeInputs,
      value: fileName,
      emptyFields: confirmation && emptySecondFields && !fileName
    },
    {
      type: 'text',
      name: inputNames.url,
      title: language.url,
      handleChange: handleChangeInputs,
      value: url,
      emptyFields: confirmation && emptySecondFields && !url
    },
  ]
}

export const NestedCommandTableConfig = (configParams:any) => {
  const { language } = configParams
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
      name: language.actions,
      align: 'center',
      isActions: true,
      actions: [
        {
          type: 'delete',
          id: 'button-poll-delete',
          title: language.delete,
          icon: trashIcon,
          onClick: (dataset:any) => { console.log(dataset.bot_command_id) }
        },
      ]
    }
  ]
}