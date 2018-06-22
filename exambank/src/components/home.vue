<!--主页-->
<template>
  <el-row class="container">
    <!--头部导航栏-->
    <Header></Header>
    <!--主体内容-->
    <el-main class="content-container">
      <!--面包屑-->
      <el-col :span="24" class="breadcrumb-container">
        <strong class="menu-title">{{$route.name}}</strong>
        <el-breadcrumb separator="/" class="breadcrumb-inner">
          <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
            {{ item.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <!--内容-->
      <el-col :span="24" class="content-wrapper">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-col>
    </el-main>
  </el-row>
</template>

<script>
  import Header from './menu-nav/header.vue'

  export default{
    data(){
      return{
      }
    },
    components: {
      Header
    },
    methods: {
    }
  }
</script>

<style scoped>
  .menu-title {
    width: 200px;
    float: left;
    color: #475669;
    margin-left: 320px;
    text-align: left;
  }
  @media screen and (max-width: 1450px){
    .menu-title {
      margin-left: 250px;
    }
  }
  .breadcrumb-inner {
    position: absolute;
    font-size: 13px;
    line-height: 1.6;
    left: 20px;
  }
  .el-breadcrumb__item__inner {
    transition: color .15s linear;
    color: #48576a;
  }
  .el-breadcrumb__separator {
    margin: 0 8px;
    color: #bfcbd9;
  }
</style>
<style>
  .home-carousel .el-carousel__container {
    height:642px;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #97a8be;
    cursor: text;
  }
</style>
