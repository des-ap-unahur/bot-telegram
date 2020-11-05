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
      property: 'description',
      nestedTable: 'botResponses'
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

export const inputConfig = () => {
  return [
    {
      type: 'text',
      name: 'name',
      title: 'Nombre',
      handleChange: (e:any) => {console.log(e)},
      value: '',
      emptyFields: false
    },
    {
      type: 'text',
      name: 'command',
      title: 'Comando',
      handleChange: (e:any) => {console.log(e)},
      value: '',
      emptyFields: false
    },
    {
      type: 'text',
      name: 'description',
      title: 'Descripcion',
      handleChange: (e:any) => {console.log(e)},
      value: '',
      emptyFields: false,
      correction: true
    },
    {
      type: 'select',
      name: 'user_type',
      title: 'Tipo de usuario',
      handleChange: (e:any) => {console.log(e)},
      value: '',
      list: [],
      emptyFields: false
    },
    {
      type: 'select',
      name: 'command_type',
      title: 'Tipo de usuario',
      handleChange: (e:any) => {console.log(e)},
      value: '',
      list: [],
      emptyFields: false
    },
    {
      type: 'text',
      name: 'response',
      title: 'Respuesta',
      handleChange: (e:any) => {console.log(e)},
      value: '',
      emptyFields: false,
      correction: true
    },
    {
      type: 'text',
      name: 'file_name',
      title: 'Nombre de archivo',
      handleChange: (e:any) => {console.log(e)},
      value: '',
      emptyFields: false
    },
    {
      type: 'text',
      name: 'url',
      title: 'Url',
      handleChange: (e:any) => {console.log(e)},
      value: '',
      emptyFields: false
    },
  ]
}