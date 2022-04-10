import Vue from 'vue'
import App from './App.vue'
//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import typeNav from "@/components/TepyNav";
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 引入elementUI组件
import { Button, MessageBox} from 'element-ui';
// 引入路由相关文件
import router from '@/router';
// 引入仓库进行注册
import store from './store'
//全局组件:第一个参数 组件名字，第二个参数:哪个组件
Vue.component(typeNav.name,typeNav);
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
// 注册element组件
Vue.use(Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// 引入MockServe.js----mock数据
import '@/mock/mockServe';
// 全局引入swiper样式
import 'swiper/css/swiper.css'
// 统一接口api文件央里面全部请求函数
// 统一引入
import * as API from '@/api'
// 引入插件 
import Vuelazyload from 'vue-lazyload'
// 引入懒加载需要的图片
import dct from '@/assets/222.gif'
Vue.use(Vuelazyload,{
  // 懒加载默认的图片
  loading:dct
});
// 引入表单校验插件
import './plugins/validate'
new Vue({
  render: h => h(App),
  // 全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由信息:当这里书写router的时候，组件身上都拥有$route,$routerl属性
  router,
  // 注册仓库：组件实例的身上会多一个属性$store属性
  store
}).$mount('#app')
