<!--首页-->
<!--主页-->
<template>
  <el-row class="container">
    <!--头部导航栏-->
    <el-row type="flex" id="header" class="g_header" justify="space-between">
      <el-col :span="24" class="wrapper">
        <el-col :span="8" :class="collapsed?'logo-collapse-width':'logo-width'">
          <h1 class="logo">
            <router-link to="/index" class="sys-name">
              <img src="../assets/images/logo.png" srcset="../assets/images/logo.png" alt="同立方题库"/>同立方题库
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
            <img class="avatar" alt="avatar" src="../assets/images/user/3.jpg"/>
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
    <!--主体内容-->
    <el-main class="content-container">
      <el-carousel class="home-carousel">
        <el-carousel-item class="bg-img">
          <div class="text-wraper1">
            <h2>多种方式创建编辑题目试卷</h2>
            <h3>自由创建、导入题目，两种方式随意选择</h3>
          </div>
        </el-carousel-item>
        <el-carousel-item class="bg-img">
          <div class="text-wraper2">
            <h2>方便简约的题库系统</h2>
            <h3>简约好用，轻松开启在线考试</h3>
          </div>
        </el-carousel-item>
        <el-carousel-item class="bg-img">
          <div class="text-wraper3">
            <h2>数据实时在线分析</h2>
            <h3>回收数据实时在线统计，图表化展示，清晰直观</h3>
          </div>
        </el-carousel-item>
        <el-carousel-item class="bg-img">
          <div class="text-wraper4">
            <h2>跨终端跨平台自适应</h2>
            <h3>PC、手机、平板终端自适应，随时随地做题</h3>
          </div>
        </el-carousel-item>
      </el-carousel>

      <el-col class="entry">
        <el-col class="welcome" justify="space-between">
          <div class="welcome-text">
            欢迎进入
            <span>同立方题库</span>
          </div>
          <router-link to="/new_question" class="sys-name">
            <el-button class="entry-btn">立即使用</el-button>
          </router-link>
        </el-col>
      </el-col>
    </el-main>
    <el-footer class="g_footer">
      <p>Copyright © 2015-<span class="copyright_end">2018</span>CubeSpace. All Right Reserved.</p>
      <p>
        <span>深圳市同立方科技有限公司 版权所有</span>
        <a href="http://www.icubespace.com/" class="link" target="_blank" title="关于我们">关于我们</a>
      </p>
    </el-footer>
  </el-row>
</template>

<script>
  import Header from './menu-nav/header.vue'

  export default{
    data(){
      return{
        isCollapse: false,
        collapsed: false,
        account: [
          {
            is_login: true,    //是否已登录
            u_name: '企鹅人',   //用户名
            u_avatar: './assets/images/user/3.jpg'   //用户头像
          }
        ]
      }
    },
    components: {
      Header
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
  .home-carousel {
    background-size: cover;
    background-position: 50% 0;
    margin: -20px;
    position: relative;
    height: 642px;
    background-image: url("../assets/images/carousel-img/index_sliders_bg.jpg");
  }
  .bg-img {
  }
  .text-wraper1,
  .text-wraper2,
  .text-wraper3,
  .text-wraper4{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    float: left;
    text-align: center;
  }
  .text-wraper1 h2,
  .text-wraper2 h2,
  .text-wraper3 h2,
  .text-wraper4 h2{
    color: #fff;
    font-size: 50px;
    padding-top: 110px;
    margin-top: 0;
    font-weight: normal;
    margin-bottom: 0;
  }
  .text-wraper1 h3,
  .text-wraper2 h3,
  .text-wraper3 h3,
  .text-wraper4 h3{
    margin-top: -3px;
    font-size: 20px;
    color: #fff;
    font-weight: normal;
  }
  .entry {
    position: relative;
    display: flex;
    margin-top: 20px;
  }
  .welcome {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    padding: 47px 0;
    border-bottom: 1px solid #eaeaea;
  }
  .welcome-text {
    font-size: 14px;
    color: #999;
    text-align: left;
  }
  .welcome-text span {
    color: #58a6e7;
    font-size: 30px;
    margin-right: 5px;
  }
  .entry-btn {
    top: 47px;
    right: 0;
    height: 48px;
    line-height: 48px;
    padding: 0 41px;
    position: absolute;
    background-color: #ff472c;
    color: #fff;
    border: 1px solid #ff472c;
  }
  .entry-btn:hover {
    background-color: #c9250d;
    border: 1px solid #c9250d;
  }
  .g_footer {
    height: 84px;
    background-color: #fff;
    text-align: center;
    overflow: hidden;
    zoom: 1;
    position: relative;
  }
  .g_footer p {
    color: #c5c5c5;
    font-size: 14px;
  }
  .g_footer p:first-child {
    margin-top: 20px;
  }
  .g_footer a {
    color: #c5c5c5;
    font-size: 14px;
  }
  .g_footer .link {
    color: #c5c5c5;
  }
  .g_footer .link:hover{
    color: #3d98ea;
  }
  .sys-name,
  .logged_in .name,
  .logged_in .splitor,
  .logged_in .logout
  {
    color: #fff;
  }
  .g_header .wrapper {
    width: 1000px;
  }
  .g_header .account{
    text-align: right;
  }
  .g_header .logo {
    position: absolute;
    top: 0;
    left: 0px;
    height: 100%;
    font-size: 20px;
    margin: 0;
    font-weight: normal;
  }
  .g_header .account {
    position: absolute;
    top: 0;
    right: 0px;
    height: 100%;
    font-size: 13px;
    text-align: right;
  }
</style>
<style>
  .home-carousel .el-carousel__container {
    height:642px;
  }
  .el-menu--horizontal {
    border-bottom: none;
  }
</style>
