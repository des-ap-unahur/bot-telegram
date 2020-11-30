import React, { useState, useEffect } from 'react';
import { language, LanguageContext } from '../Config/Lang/Lang.languaje';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import authActions from "../Store/Actions/Auth.action";
import { setLocalValue } from "../Utils/LocalStorage.utils"
import { GlobalStateInterface } from '../Interfaces/GlobalState.interface';
import { LangProviderInterface } from '../Interfaces/LangProvider.interface';

const actionCreators = Object.assign({}, authActions.actionCreators);

const LanguageProvider = ({children, changeAuthLanguage, langAuth }: LangProviderInterface) => {
  const { ES, EN } = language;
  const [ languageProvider, setLanguageProvider ] = useState(ES);
  const [ lang, setLang ] = useState(langAuth)

  useEffect(()=> {
    lang && setLocalValue('lang', lang)
    
    switch(langAuth){
      case 'ES':
        setLanguageProvider(ES)
        break;
      case 'EN':
        setLanguageProvider(EN)
        break;
      default:
        setLanguageProvider(ES)
    }
    
    langAuth && setLang(langAuth)
  }, [lang, langAuth])
  
  const changeLanguage = (e:any): void => {
    changeAuthLanguage(e.target.value)
  };

  return (
    <LanguageContext.Provider value={{
      lang,
      changeLanguage,
      language: languageProvider
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

const mapStateToProps = (state: GlobalStateInterface) => ({
  langAuth: state.auth && state.auth.lang
});
  
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);