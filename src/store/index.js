import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import home from './Home'
import search from './Search'
import login from './Login'
import register from './Register'
import detail from './Detail'
import shopcart from './Shopcart'
import user from './User'
import trade from './Trade'
// 对外暴露store类的一个实例
export default new Vuex.Store({
    // 实现vuex仓库模块式开发存储数据
    modules:{
        home,
        search,
        login,
        register,
        detail,
        shopcart,
        user,
        trade
    }
})