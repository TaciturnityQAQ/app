// 引入mockjs模块
import Mock, { mock } from 'mockjs'
// 把JSON数据格式引入进来[JSON数据格式根本没用对外暴露，但是可以引入]
// webpack默认对外暴露的:图片、JSON数据格式
import banner from './banner.json'
import floor from './floor.json'

// mock数据
Mock.mock("/mock/banner",{code:200,data:banner}) // 模拟首页大轮播图的数据
Mock.mock("/mock/floor",{code:200,data:floor})