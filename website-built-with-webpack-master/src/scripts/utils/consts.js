// 当前 host
var HOST = window.location.host
// 开发
var DEVELOPMENT = 'DEVELOPMENT'
// 生产
var PRODUCTION = 'PRODUCTION'

// 当前环境
const ENV = (function () {
  if (HOST === 'localhost:8080') {
    return DEVELOPMENT
  } else {
    return PRODUCTION
  }
})()

// 基础地址
var BASE_URL = (function () {
  if (ENV === DEVELOPMENT) {
    return 'http://localhost:8080'
  } else {
    return 'http://production.com'
  }
})()

module.exports = {
  BASE_URL: BASE_URL
}