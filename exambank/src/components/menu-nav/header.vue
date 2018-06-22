<!--头部导航栏-->
<template>
  <el-row type="flex" id="header" class="g_header" justify="space-between">
    <el-col :span="24" class="wrapper">
      <el-col :span="8" :class="collapsed?'logo-collapse-width':'logo-width'">
        <h1 class="logo">
          <router-link to="/index" class="sys-name">
            <img src="../../assets/images/logo.png" srcset="../../assets/images/logo.png" alt="同立方题库"/>同立方题库
          </router-link>
        </h1>
      </el-col>
      <el-col :span="12" class="nav">
        <el-menu
            :default-active="this.$route.path"
            class="el-menu-vertical-demo"
            mode="horizontal"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened
            router
            collapse-transition
        >
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="!item.leaf">
              <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
          </template>
        </el-menu>
      </el-col>
      <el-col :span="4" class="account" :key="item.u_name" v-for="item in account">
        <el-col v-if="item.is_login" id="login_checked" class="logged_in">
          <img class="avatar" alt="avatar" src="../../assets/images/user/3.jpg"/>
          <span class="name">{{item.u_name}}</span>
          <span class="splitor">|</span>
          <a href="javascript:;" id="logout" class="logout">退出</a>
        </el-col>
        <el-col :span="4" v-if="!item.is_login" id="login_checking" class="not_logged_in">
          <a id="login" href="javascript:;" class="btn btn_green btn_small">登录</a>
        </el-col>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
  export default{
    data(){
      return{
        isCollapse: false,
        collapsed: false,
        account: [
          {
            is_login: true,    //是否已登录
            u_name: '企鹅人',   //用户名
            u_avatar: '../assets/images/user/3.jpg'   //用户头像
          }
        ],
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect (key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .sys-name,
  .logged_in .name,
  .logged_in .splitor,
  .logged_in .logout
  {
    color: #fff;
  }
</style>
<style>
  .el-menu--horizontal {
    border-bottom: none;
  }
</style>
