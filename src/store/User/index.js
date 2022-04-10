import {reqGetCode,reqUserRegister,reqUserLogin,reqGetUserInfo,reqLogout} from '@/api'
import { setToken,getToken,removeToken } from '@/utils/token'
// 登录与注册的模块
const state={
    code:'',
    token:getToken(),
    userInfo:{}
}
const mutations={
    GETCODE(state,code){
        state.code = code
    },
    USELOGIN(state,token){
        state.token = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    // 清除用户本地数据
    CLEARUSERINFO(state){
        // 清空仓库内的用户数据信息
        state.userInfo={}
        state.token = ''
        // 清空本地存储
        removeToken()
    }
}
const actions={
    // 获取验证码
    async getCode({commit},phone){
      let result = await reqGetCode(phone)
      if(result.code == 200){
          commit('GETCODE',result.data)
      }else{
          return alert('获取验证码失败')
      }
    },
    // 用户注册
    async userRegister({commit},user){
        let result = await reqUserRegister(user)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('注册失败'))
        }
    },
    // 用户登录
    async userLogin({commit},data){
        let result = await reqUserLogin(data)
        // 服务器下发token，用户唯一标识符
        // 将来经常通过token找服务器要用户信息进行展示
        if(result.code == 200){
            commit('USELOGIN',result.data.token)
            // 持久化存储token
            setToken(result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('登录失败'))
        }
    },
    // 获取用户登录信息
    async getUserInfo({commit}){
        let result = await reqGetUserInfo()
        if(result.code == 200){
            commit("GETUSERINFO",result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('获取用户信息失败'))
        }
    },
    // 用户退出登录
    async userLogout({commit}){
        let result = await reqLogout()
        if(result.code == 200){
            commit('CLEARUSERINFO')
            return 'ok'
        }else{
            return Promise.reject(new Error('退出登录失败'))
        }
    }
}
const getters={

}
export default {
    state,
    mutations,
    actions,
    getters
}