<template>
  <div class="index">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside style="width:260px">
          <el-menu
            default-active="1-2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            unique-opened
          >
            <el-submenu v-for="item in menuList" :key="item.menu" :index="item.index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.menu}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="child in item.childern" :key="child.item" :index="child.path">{{child.item}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      menuList:[
        {index:'/manager',icon:'',menu:'商品管理',
        childern:[
        {path:'/index/manager',item:'商品管理'},
        {path:'/index/manageradd',item:'添加商品'}
        ]},
        {index:'/account',icon:'',menu:'账号管理',
        childern:[
        {path:'/index/account',item:'账号管理'},
        {path:'/index/accountadd',item:'添加账号'},
        {path:'/index/accountchange',item:'修改密码'},
        ]},
        {index:'/stock',icon:'',menu:'进货管理',
        childern:[
        {path:'/index/stockmanager',item:'库存管理'},
        {path:'/index/stockadd',item:'添加库存'}
        ]},
        {index:'/outgoing',icon:'',menu:'出货管理',
        childern:[
        {path:'/index/outgoinglist',item:'销售列表'},
        {path:'/index/outgoingsell',item:'商品出库'},
        {path:'/index/outgoingreback',item:'商品退货'},
        ]},
        {index:'/totalmaager',icon:'',menu:'统计管理',
        childern:[
        {path:'/index/totalsell',item:'销售统计'},
        {path:'/index/totalstock',item:'进货统计'}
        ]},
        {index:'/vipmanager',icon:'',menu:'会员管理',
        childern:[
        {path:'/index/accountmanager',item:'账号管理'},
        {path:'/index/vipadd',item:'添加会员'}
        ]},
      ]
    }
  }
};
</script>

<style lang="less" scoped>
.index {
  height: 100%;
  width: 100%;
  .el-container {
    height: 100%;
    width: 100%;
    .el-header {
      height: 60px;
      background: aqua;
    }
    .el-aside {
      height: 100%;
      background: #545C64;
      .el-menu{
          border: none;
      }
    }
    .el-main {
      flex: 1;
      background: cornflowerblue;
    }
    .el-footer {
      height: 80px;
      background: brown;
    }
  }
}
</style>