export function validateUrl(url) {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$','i')
  return pattern.test(url)
}

export function setAuth(auth) {
  window.localStorage.setItem('auth', JSON.stringify(auth))
}

export function clearAuth() {
  window.localStorage.removeItem('auth')
}

export function getAuth() {
  if (window.localStorage.getItem('auth'))
    return JSON.parse(window.localStorage.getItem('auth'))
  else
    return null;
}

export function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + "=([^;]*)"
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

export function setCookie(name, value, options) {
  options = options || {}

  let { expires } = options

  if (typeof expires == "number" && expires) {
    let d = new Date()
    d.setTime(d.getTime() + expires * 1000)
    expires = options.expires = d
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString()
  }

  value = encodeURIComponent(value)

  let updatedCookie = name + "=" + value

  for (let propName in options) {
    updatedCookie += "; " + propName
    let propValue = options[propName]
    if (propValue !== true) {
      updatedCookie += "=" + propValue
    }
  }

  document.cookie = updatedCookie
}
