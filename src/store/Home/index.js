// home模块的小仓库
import {reqCategoryList,reqBannerList,reqFloorList} from '@/api'
// state:仓库存储数据的地方
const state ={
    // state中数据默认初始值别瞎写,服务器返回对象，服务器返回数组。【根据接口返回值初始化的】
    // home仓库中存储三级菜单的数据
    categoryList:[],
    // 轮播图的数据
    bannerList:[],
    // floor组件的数据
    floorList:[]
}
//mutations :修改state的唯一于段
const mutations ={
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList.slice(0,17)
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
//action:处理action,可以书写自己的业务逻辑，也可以处理异步
//这里可以书写亚务逻辑，但是不能修改state
const actions ={
    async cateGoryList({commit}){
        let result = await reqCategoryList()
        if (result.code==200) {
            commit('CATEGORYLIST',result.data)
        }
    },
    // 获取首页轮播图的数据
    async getBannerList({commit}){
        let result = await reqBannerList()
        if(result.code==200){
            commit('BANNERLIST',result.data)
        }
    },
    async getFloorList({commit}){
        let result = await reqFloorList()
        if(result.code==200){
            commit('FLOORLIST',result.data)
        }
    }
}
// getters;理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters ={
    
}
export default {
    state,
    mutations,
    actions,
    getters
}