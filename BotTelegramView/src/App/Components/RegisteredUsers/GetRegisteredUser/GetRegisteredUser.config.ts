import fileSearchIcon from '../../../Assets/Images/file-search.svg';
import trashIcon from '../../../Assets/Images/delete.svg';

export const generateConfigWithLang = (configParams: any) => {
    const { language, handleDeleteRegisteredUser } = configParams

    return [
      {
        name: language.name,
        property: 'first_name'
      },
      {
        name: language.dni,
        property: 'dni'
      },
      {
        name: language.name,
        property: 'user_id'
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
            onClick: (user_id:number) => console.log(user_id)
          },
          {
            type: 'delete',
            id: 'button-documents-delete',
            title: language.delete,
            icon: trashIcon,
            onClick: (dataset:any) => { handleDeleteRegisteredUser(dataset.user_id) }
          },
        ]
      }
    ]
}