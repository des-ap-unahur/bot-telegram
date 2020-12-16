export const setCookie = (name:string,value:string,days:number) => {
  var expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export const getCookie = (name: string) => {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

export const removeCookie = (name: string) => {
  var expiry = new Date();
  expiry.setTime(expiry.getTime() - 3600);
  document.cookie = name + "=; expires=" + expiry.toUTCString() + "; path=/";
}