export default {
  isLogin () {
    let userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'))
    return (userInfo && userInfo.id)
  }
}
