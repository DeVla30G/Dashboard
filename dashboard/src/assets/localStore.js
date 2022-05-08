class LocalStore {
  get (key) {
    if (!localStorage.getItem(key)) {
      return false
    }
    return localStorage.getItem(key)
  }

  set (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export default LocalStore
