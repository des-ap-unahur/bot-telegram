
export const generateConfigWithLang = (configParams: any) => {
    const { language } = configParams

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
       
            name: language.userType,
            
      }
 
 
    ]
}