export const removeSensitiveCase = (string:string):string => {
  const stringToLowerCase = string.toLowerCase()
  const charReplace = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    à: "a",
    è: "e",
    ì: "i",
    ò: "o",
    ù: "u",
    '_': ' '
  }

  const replaceAccents = (str) =>{
    const expr = /[áàéèíìóòúù_]/gi;
    let res = str.replace(expr, e => {
      return charReplace[e];
    });
    return res;
  }
  
  return replaceAccents(stringToLowerCase)
}