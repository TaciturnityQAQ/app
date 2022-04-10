import {reqAddressInfo,reqOrderInfo} from '@/api'
const state={
    addressInfo: [],
    orderInfo:{}
}
const mutations={
    GETADDRESS(state,addressInfo){
        state.addressInfo = addressInfo
    },
    GETORDER(state,orderInfo){
        state.orderInfo = orderInfo
    }
}
const actions={
    // 获取用户地址信息
    async getAddressInfo({commit}){
        let result = await reqAddressInfo()
        if(result.code == 200){
            commit('GETADDRESS',result.data)
        }
    },
    // 获取用户订单交易页信息
    async getOrderInfo({commit}){
        let result = await reqOrderInfo()
        if(result.code ==200){
            commit('GETORDER',result.data)
        }
    }
}
const getters={}
export default {
    state,
    mutations,
    actions,
    getters
}