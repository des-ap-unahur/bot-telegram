


export const generateConfigWithLang = (configParams: any) => {
  const { language } = configParams;
  
  return [
    {
      name: language.name,
      property: 'first_name'
    },
    {
      name: language.lastName,
      property: 'last_name'
    },
    {
      name: language.dni,
      property: 'dni'
    },
    {
      name: language.userType,
      property: 'botUsers',
      custom: (property: any) => property && property.userTypes && property.userTypes.description,
    },
  ]
}