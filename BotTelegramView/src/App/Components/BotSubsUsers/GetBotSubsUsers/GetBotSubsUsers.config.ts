
export const generateConfigWithLang = (configParams: any) => {
  const { language } = configParams;
  
  return [
    {
      name: language.dni,
      property: 'dni'
    },
    {
      name: language.lastName,
      property: 'last_name'
    },
    {
      name: language.name,
      property: 'first_name'
    },
    
  ]
}