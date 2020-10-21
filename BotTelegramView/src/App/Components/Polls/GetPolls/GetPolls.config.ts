import fileSearchIcon from '../../../Assets/Images/file-search.svg';
import trashIcon from '../../../Assets/Images/delete.svg';

export const generateConfigWithLang = (configParams:any) => {
  const { language, handleDeletePoll } = configParams

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
          onClick: (poll_id:number) => console.log(poll_id)
        },
        {
          type: 'delete',
          id: 'button-documents-delete',
          title: language.delete,
          icon: trashIcon,
          onClick: (dataset:any) => { handleDeletePoll(dataset.poll_id) }
        },
      ]
    }
  ]
}