import editIcon from '../../../Assets/Images/pencil.svg';
import trashIcon from '../../../Assets/Images/delete.svg';

export const commandNotEditable = [5, 6, 12, 13, 10]

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
          disabled: (dataset: any) => Boolean(commandNotEditable.includes(dataset.command_type_id)),
          onClick: (dataset:any) => { handleOpenNewCommand(dataset) }
        },
        {
          type: 'delete',
          id: 'button-poll-delete',
          title: language.delete,
          icon: trashIcon,
          disabled: (dataset: any) => Boolean(commandNotEditable.includes(dataset.command_type_id)),
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
  buttonList: 'buttonList',
  coordinates: 'coordinates',
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
    confirmation,
    editMode
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
      emptyFields: confirmation && emptyFirstFields && !userType,
      disabled: editMode
    },
    {
      type: 'select',
      name: inputNames.commandType,
      title: language.commandType,
      handleChange: handleChangeInputs,
      value: commandType,
      list: commandTypesOptions,
      emptyFields: confirmation && emptyFirstFields && !commandType,
      disabled: editMode
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
    confirmation,
    editMode
  } = inputParams;

  return [
    {
      type: 'text',
      name: inputNames.fileName,
      title: language.filename,
      handleChange: handleChangeInputs,
      value: fileName,
      emptyFields: confirmation && emptySecondFields && !fileName,
      disabled: editMode
    },
    {
      type: 'text',
      name: inputNames.url,
      title: language.url,
      handleChange: handleChangeInputs,
      value: url,
      emptyFields: confirmation && emptySecondFields && !url,
      disabled: editMode
    },
  ]
}

export const coordinateOrButtonListInputConfig = (inputParams: any) => {
  const { 
    language, 
    handleChangeInputs,
    emptyFirstFields,
    confirmation,
    isAButtonCommand,
    coordinates,
    buttonList,
    editMode
  } = inputParams;

  return {
    type: 'text',
    name: isAButtonCommand ? inputNames.buttonList : inputNames.coordinates , 
    title: isAButtonCommand ? language.buttons : language.coordinates ,
    handleChange: handleChangeInputs,
    value: isAButtonCommand ? buttonList : coordinates,
    emptyFields: confirmation && emptyFirstFields && !(coordinates || buttonList),
    correction: true,
    disabled: editMode
  }
}

export const NestedCommandTableConfig = (configParams:any) => {
  const { language, handleDeleteNestedCommand, editMode } = configParams
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
          disabled: editMode,
          onClick: (dataset:any) => { handleDeleteNestedCommand(dataset.bot_command_id) }
        },
      ]
    }
  ]
}