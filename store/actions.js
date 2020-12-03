import * as types from './mutationTypes'

//登录相关
export const loginWechatAuth = function ({
  commit,
  state
}, query) {
  let data = {
    code: query,
  }
  return new Promise(((resolve, reject) => {
    
  }))
}

//设置状态
export const setLoginStatus = function ({
  commit,
  state
}, query) {
  if (query == 0 || query == 1) {
    //上线打开注释，本地调试注释掉
    // removeToken()
    // removeUserInfo()
  }
  
}

//保存用户个人信息
export const setUserInfo = function ({
  commit,
  state
}, query) {
	
}

//保存用户token
export const setToken = function ({
  commit,
  state
}, query) {
  
}

export const LogOut = function({
  commit,
  state
}) {
  return new Promise((resolve, reject) => {
    commit('SET_TOKEN', '')
    commit('SET_USERINFO', '')
    commit('SET_LOGIN_STATUS', 0)
    resolve()
  })
}
