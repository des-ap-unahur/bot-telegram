export const capitalize = (string:string) => {
  if(!isNaN(Number(string))){
    return string
  }
  const stringWithUnderLine = string.replace(/_/g, ' ')
  const stringCapitalize = stringWithUnderLine[0].toUpperCase() + stringWithUnderLine.slice(1);
  return stringCapitalize;
}

export const capitalizeStrings = (string:string) => {
  const strings = string.split(' ');
  const stringsCapitalize = strings.map(str => capitalize(str));
  return stringsCapitalize.toString().replace(/,/g, ' ');
}