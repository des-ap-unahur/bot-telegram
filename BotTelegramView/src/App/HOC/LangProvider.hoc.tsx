import React, { useState, useEffect } from 'react';
import { language, LanguageContext, languageOptions } from '../Config/Lang/Lang.languaje';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import authActions from "../Store/Actions/Auth.action";
import { setLocalValue } from "../Utils/LocalStorage.utils"
import GlobalStateInterface from '../Interfaces/States/GlobalState.interface';
import LangProviderInterface from '../Interfaces/Language/LangProvider.interface';

const actionCreators = Object.assign({}, authActions.actionCreators);

const LanguageProvider = ({children, changeAuthLanguage, langAuth }: LangProviderInterface) => {
  const { ES } = language;
  const [ languageProvider, setLanguageProvider ] = useState(ES);
  const [ lang, setLang ] = useState(langAuth)

  useEffect(()=> {
    lang && setLocalValue('lang', lang)

    languageOptions.find( 
      langOption =>  langOption.lang === langAuth && setLanguageProvider(langOption.value)
    )

    langAuth && setLang(langAuth)
  }, [lang, langAuth, languageOptions.length])
  
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