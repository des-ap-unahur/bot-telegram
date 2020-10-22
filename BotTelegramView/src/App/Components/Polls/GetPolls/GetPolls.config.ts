import editIcon from '../../../Assets/Images/pencil.svg';
import trashIcon from '../../../Assets/Images/delete.svg';

export const generateConfigWithLang = (configParams:any) => {
  const { language, handleOpenDeletePopUp } = configParams

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
          onClick: (dataset:any) => console.log(dataset)
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