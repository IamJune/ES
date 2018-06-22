<!--“取消”、“确定”按钮-->
<template>
  <el-row class="editor_control">
    <el-col>
      <el-button type="primary" class="btn btn_small btn_blue btn_confirm" @click="confirmAddNewQuestion">保存</el-button>
      <el-button class="btn btn_small btn_white btn_cancel" @click="cancelAddNewQuestion">取消</el-button>
    </el-col>
  </el-row>
</template>

<script>

  export default {

    methods: {
      confirmAddNewQuestion: function () {
        this.$emit('confirmAddNewQuestion')
      },
      cancelAddNewQuestion: function () {
        this.$emit('cancleAddNewQuestion')
      }
    }
  }
</script>
