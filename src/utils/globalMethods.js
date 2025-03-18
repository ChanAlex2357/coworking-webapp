export function myGlobalFunction() {
  // ...implementation of your global function...
  console.log('Global function called')
}

export function addJsonToSession(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export function getJsonFromSession(key) {
  return JSON.parse(sessionStorage.getItem(key))
}
