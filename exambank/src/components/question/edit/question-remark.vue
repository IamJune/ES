<!--题目的备注-->
<template>
  <el-row justify="space-around">
    <el-col :span="2" class="q_remark">备注</el-col>
    <el-col :span="22" class="input_area"><el-input v-model="q_remark"></el-input></el-col>
  </el-row>
</template>

<script>
  export default{
    data(){
      return{
        q_remark: ''
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
</style>
