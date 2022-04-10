import {reqShopCartList,reqDeleteCart,reqCheckCart} from '@/api'
const state = {
    shopCarList:[]
}
const mutations = {
    GETSHOPCARTLIST(state,shopCarList){
        state.shopCarList = shopCarList
    }
}
const actions = {
    // 获取购物车列表数据
    async getShopCarList({commit}){
       let result = await reqShopCartList()
       if(result.code == 200){
           commit('GETSHOPCARTLIST',result.data)
       }
    },
    // 删除购物车的某一个产品
    async deleteCartById({commit},skuId){
        let result = await reqDeleteCart(skuId)
        if(result.code ==200) {
            // console.log(result)
            return 'ok'
        }else{
            return Promise.reject(new Error('删除购物车产品失败'))
        }
    },
    // 切换购物车某个产品的选择状态
    async upDateCheckCart({commit},{skuId,isChecked}){
      let result = await reqCheckCart(skuId,isChecked)
      if(result.code ==200){
          return 'ok'
      }else{
          return Promise.reject(new Error('选择失败'))
      }
    },
    // 删除全部勾选的产品
    deleteAllCheckedCart({getters,dispatch}){
        // context:小仓库,commit【提交mutations修改state】 getters【计算属性】dispatch【派发actions】 state【当前仓库数据】
        // 获取购物车中全部的产品（是一个数组)
        let PromiseAll = []
        getters.shopCarList.cartInfoList.forEach(item => {
            let promise =  item.isChecked== 1 ?dispatch('deleteCartById',item.skuId):''
            // 将每一次返回的Promise添加到数组中
            PromiseAll.push(promise)
        });
        // 只要全部的p1|p2...都成功，返回结果即为成功
        // 如果有一个失败，返回结果即为失败
        return Promise.all(PromiseAll)
    },
    // 切换全部产品的选择状态
    updateAllCartIsChecked({state,dispatch},isChecked){
        // console.log(state)
        // 数组
        let promiseAll = []
        state.shopCarList[0].cartInfoList.forEach((item) =>{
            let promise = dispatch('upDateCheckCart',{skuId:item.skuId,isChecked})
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    },
}
const getters = {
    shopCarList(state){
        return state.shopCarList[0] || {}
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}