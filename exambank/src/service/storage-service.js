/**
 * Created by raytine on 2018/6/14.
 */
let prefix = 'cube'
export default {
  keys: {
    member: 'member',
    user: 'user'
  },
  get (name) {
    let value = localStorage.getItem(prefix + name)
    if (/^\{.*\}$/.test(value)) value = JSON.parse(value)
    return value
  },
  set (name, value) {
    if (typeof value == typeof {}) value = JSON.stringify(value)
    localStorage.setItem(prefix + name, value)
  },
  remove (name) {
    localStorage.removeItem(prefix + name)
  },
  clear () {
    localStorage.clear()
  },
  getSession (name) {
    let value = sessionStorage.getItem(prefix + name)
    if (/^\{.*\}$/.test(value)) value = JSON.parse(value)
    return value
  },
  setSession (name, value) {
    if (typeof value == typeof {}) value = JSON.stringify(value)
    sessionStorage.setItem(prefix + name, value)
  },
  removeSession (name) {
    sessionStorage.removeItem(prefix + name)
  },
  clearSession () {
    sessionStorage.clear()
  },
  getUser () {
    return this.get(this.keys.user)
  },
  setUser (value) {
    this.set(this.keys.user, value)
  },
  getMember () {
    return this.get(this.keys.member)
  },
  setMember (value) {
    this.set(this.keys.member, value)
  }
}
