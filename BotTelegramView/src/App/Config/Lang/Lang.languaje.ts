import { createContext } from 'react';
import EN from './En.languaje';
import ES from './Es.languaje';

export const language = { EN: EN, ES: ES } 

export const LanguageContext = createContext({
  lang: 'ES',
  changeLanguage: (e:any): void => {},
  language: language.ES
});
