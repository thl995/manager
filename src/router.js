import Vue from 'vue'
import router from 'vue-router'
Vue.use(router)
import Login from './pages/Login.vue'

export default new router({
    routes:[
        {path:'/',name:'login',component:Login},
        {path:'/index',name:'index',component:()=>import('./pages/Index.vue'),children:[
            {path:'/index/manager',component:()=>import('./pages/manager/Manager.vue')},
            {path:'/index/manageradd',component:()=>import('./pages/manager/ManagerAdd.vue')},
            {path:'/index/account',component:()=>import('./pages/account/Account.vue')},
            {path:'/index/accountadd',component:()=>import('./pages/account/AccountAdd.vue')},
            {path:'/index/accountchange',component:()=>import('./pages/account/AccountChange.vue')},
            {path:'/index/outgoinglist',component:()=>import('./pages/outgoing/Outgoinglist.vue')},
            {path:'/index/outgoingreback',component:()=>import('./pages/outgoing/Outgoingreback.vue')},
            {path:'/index/outgoingsell',component:()=>import('./pages/outgoing/OutgoingSell.vue')},
            {path:'/index/stockadd',component:()=>import('./pages/stock/StockAdd.vue')},
            {path:'/index/stockmanager',component:()=>import('./pages/stock/Stockmanager.vue')},
            {path:'/index/totalsell',component:()=>import('./pages/totalmaager/Totalsell.vue')},
            {path:'/index/totalstock',component:()=>import('./pages/totalmaager/TotalStock.vue')},
            {path:'/index/vipadd',component:()=>import('./pages/vip/VipAdd.vue')},
            {path:'/index/accountmanager',component:()=>import('./pages/vip/Accountmanager.vue')},
        ]}
    ]
})

