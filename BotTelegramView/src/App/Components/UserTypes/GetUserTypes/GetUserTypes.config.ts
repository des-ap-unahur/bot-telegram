import fileSearchIcon from '../../../Assets/Images/file-search.svg';
import trashIcon from '../../../Assets/Images/delete.svg';

export const generateConfigWithLang = (configParams:any) => {
  const { language, handleDeleteUserType } = configParams

  return [
    {
      name: language.type,
      property: 'type'
    },
    {
      name: language.description,
      property: 'description'
    },
    {
      name: language.user_type_id,
      property: 'user_type_id'
    },
    {
      name: language.actions,
      align: 'center',
      isActions: true,
      actions: [
        {
          type: 'view',
          id: 'button-documents-view',
          title: language.view,
          icon: fileSearchIcon,
          disabled: true,
          onClick: (user_type_id:number) => console.log(user_type_id)
        },
        {
          type: 'delete',
          id: 'button-documents-delete',
          title: language.delete,
          icon: trashIcon,
          onClick: (dataset:any) => { handleDeleteUserType(dataset.user_type_id) }
        },
      ]
    }
  ]
}