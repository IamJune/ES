<!--题目的名称-->
<template>
  <el-row justify="space-around">
    <el-col :span="2" class="q_title">题目</el-col>
    <el-col :span="22" class="input_area"><el-input v-model="q_title" aria-required="true"></el-input></el-col>
  </el-row>
</template>

<script>
  export default{
    data(){
      return{
        q_title: ''
      }
    }
  }
</script>

<style scoped>
  .q_title,.q_remark {
    padding-left: 15px;
    line-height: 40px;
    text-align: right;
    padding-right: 15px;
  }
  .input_area {
    /*padding-right: 15px;*/
  }
</style>
