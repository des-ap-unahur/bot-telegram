export const generateCommandConfigWithLang = (configParams:any) => {
  const { language } = configParams

  return [
    {
      name: language.name,
      property: 'name'
    },
    {
      name: language.description,
      property: 'botResponses',
      custom: (property: any) => property && property.description
    },
    {
      name: language.status,
      property: 'status',
      custom: (property: any) => property ? language.active : language.innactive,
      align: 'center'
    },
    {
      name: language.commandType,
      property: 'description',
      nestedTable: 'commandsTypes'
    },
    {
      name: language.userType,
      property: 'description',
      nestedTable: 'userTypes'
    },
  ]
}

export const generatePollConfigWithLang = (configParams:any) => {
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
      property: 'description',
      nestedTable: 'userType'
    }
  ]
}

export const generateCardInfo = (configParams: any) => {
  const { 
    language,
    totalSubscribers,
    newLastAdmission,
    totalPolls,
    totalCommands
  } = configParams;
  
  return [
    {
      name: language.totalSubscribers,
      value: totalSubscribers
    },
    {
      name: language.newLastAdmission,
      value: newLastAdmission
    },
    {
      name: language.totalPolls,
      value: totalPolls
    },
    {
      name: language.totalCommands,
      value: totalCommands
    }
  ]
}