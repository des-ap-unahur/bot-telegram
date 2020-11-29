

export const generateConfigWithLang = (configParams: any) => {
  const { language } = configParams;
  
  return [
    {
      name: 'Nombre de usuario',
      property: 'tel_username'
    },
    {
      name: language.name,
      property: 'tel_first_name'
    },
    {
      name: language.lastName,
      property: 'tel_last_name'
    },
    {
      name: language.dni,
      property: 'guaraniUser',
      custom: (guaraniUsers: any) => guaraniUsers && guaraniUsers.dni 
    },
    {
      name: 'Email',
      property: 'guaraniUser',
      custom: (guaraniUsers: any) => guaraniUsers && guaraniUsers.email
    },
    {
      name: 'Numero de telefono',
      property: 'guaraniUser',
      custom: (guaraniUsers: any) => guaraniUsers && guaraniUsers.phone_number
    },
    {
      name: language.userType,
      property: 'userTypes',
      custom: (userTypes: any) => userTypes && userTypes.description,
    },
  ]
}