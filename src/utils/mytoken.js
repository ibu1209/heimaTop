// 存储数据
export function localSet (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

// 取出数据
export function localGet (key) {
  return JSON.parse(window.localStorage.getItem(key))
}

// 删除数据
export function localDel (key) {
  window.localStorage.removeItem(key)
}
