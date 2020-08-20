export const getLocalValue = (name:any) => {
  try {
    const serializedData = localStorage.getItem(name);
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData)
  } catch (err) {
    return undefined;
  }
};

export const setLocalValue = (name:any, value:any) => {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(name, serializedData);
  } catch {
    
  }
};

export const removeLocalValue = (name:any) => {
  try {
    localStorage.removeItem(name);
  } catch {

  }
};