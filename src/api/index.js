// 当前这个模块： API进行统一管理
import requests from './ajax'
import mockRequests from './mockAjax'
// 三级联动接口
// /api/product/getBaseCategoryList get 无参数
// 对外暴露一个函数 只要外部调用这个函数，就向服务器发起ajax请求、获取咱们的三级菜单数据。当前咱们这个函数里需要把服务器返回结果返回即可。
export const reqCategoryList =()=>{
    return requests({url:'/product/getBaseCategoryList',method:'get'})
    //切记:当前函数执行需要把服务器返回结果返回
}
// 获取banner (Home首页轮播图接口)
export const reqBannerList = ()=>{return mockRequests.get('/banner')}
// 获取floor 数据
export const reqFloorList = () => mockRequests.get('/floor')
// 获取搜索模块数据  地址：/api/list 请求方式：post 参数：需要带参数
// 当前这个函数需不需要接受外部传递参数
// 当前这个接口，给服务器传递参数params，至少是一个空对象
export const reqSearchInfo = (params) => requests({
    url:'/list ',
    method:'post',
    data:params
})
// 获取产品详情信息的接口URL: / api/item/{ skuId }   请求方式:get
export const reqGoodInfo = (skuId) => requests({url:`/item/${skuId}`,method:'get'})
// 将产品添加到购物车中（获取更新某一个产品的个数)
// /cart/addToCart/{ skuId }/{ skuNum } 请求方式：post
export const reqAddorUpdateShopCart = (skuId,skuNum) =>requests({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'})
// 获取购物车列表 临时数据
export const reqShopCartList = () => requests({url:'/cart/cartList',method:'get'})
// 删除购物车数据 /cart/deleteCart/{skuId} 请求方式 delete
export const reqDeleteCart = (skuId)=> requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
// 切换商品选中状态 /cart/checkCart/{skuId}/{isChecked} get
export const reqCheckCart = (skuId,isChecked) =>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
// 获取验证码 /api/user/passport/sendCode/{phone} get
export const reqGetCode = (phone) =>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
// 用户注册 /api/user/passport/register post
export const reqUserRegister = (data) =>requests({url:'/user/passport/register',data,method:'post'})
// 用户登录 /api/user/passport/login post 
export const reqUserLogin = (data) =>requests({url:'/user/passport/login',data,method:'post'})
// 获取用户信息 /user/passport/auth/getUserInfo get 
export const reqGetUserInfo=()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})
// 用户退出登录 /user/passport/logout get
export const reqLogout=()=>requests({url:'/user/passport/logout',method:'get'})
// 获取用户地址信息 /user/userAddress/auth/findUserAddressList get
export const reqAddressInfo=()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})
// 获取订单交易页信息 /order/auth/trade
export const reqOrderInfo=()=>requests({url:'/order/auth/trade',method:'get'})
// 提交订单 /order/auth/submitOrder?tradeNo={tradeNo} post
export const reqSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})
// 获取订单支付信息 /payment/weixin/createNative/{orderId} get
export const reqPayInfo=(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

// 查询支付订单状态 /payment/weixin/queryPayStatus/{orderId} get
export const reqPayStatus=(orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

// 获取我的订单列表 /order/auth/{page}/{limit} get
export const reqMyOrder=(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})

