import { reqGoodInfo,reqAddorUpdateShopCart } from "@/api";
// 封装游客临时身份模块uuid ----生存一个随机字符串
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodInfo:{},
    // 游客临时身份
    uuid_token:getUUID()
}
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}
const actions = {
    async getGoodInfo({commit},skuId){
       let result = await reqGoodInfo(skuId)
       if(result.code==200){
           commit('GETGOODINFO',result.data)
       }
    },
    // 将产品添加到购物车中
    async addorUpdateShopCart({commit},{skuId,skuNum}){
        // 加入购物车返回的结果
        // 发请求：前台将参数带给服务器，服务器写入数据成功，并没有返回其他的数据
        // 只是返回code=200，代表这次操作成功
        // 注意：async函数执行返回的结果一定是Promise 
        // 而Promise的执行结果 要么成功|要么失败
        // 因为服务器没有返回其余数据,因此不需要三连环存储数据
        let result = await reqAddorUpdateShopCart(skuId,skuNum)
        // console.log(result)
        //代表服务器加入购物车成功
        if(result.code == 200){
            return 'ok'
        }else{
            // 代表加入购物车失败
            return Promise.reject(new Error('加入购物车失败'))
        }
    }
}
const getters = {
    //路径导航简化的数据
    categoryView(state){
        return state.goodInfo.categoryView || {}
    },
    //简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    //产品售卖属性的简化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}