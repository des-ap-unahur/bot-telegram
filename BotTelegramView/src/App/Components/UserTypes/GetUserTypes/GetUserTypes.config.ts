export const generateConfigWithLang = (configParams:any) => {
  const { language } = configParams

  return [
    {
      name: language.userTypeId,
      property: 'user_type_id'
    },
    {
      name: language.type,
      property: 'description'
    }
  ]
}