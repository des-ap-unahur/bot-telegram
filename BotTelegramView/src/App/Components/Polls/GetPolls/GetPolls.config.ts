import fileSearchIcon from '../../../Assets/Images/file-search.svg';
//import reverseIcon from '../../../Assets/Images/reverse.svg';

export const generateConfigWithLang = (configParams:any) => {
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
        }
      ]
    }
  ]
}