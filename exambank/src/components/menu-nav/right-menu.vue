<!--右侧菜单-->
<template>
  <el-row class="editor_lib">
    <a class="lib_toggle_button lib_open" @click="showRightTab">
      <i></i>
      <span>展开题库</span>
    </a>
    <div class="lib_title">
      <h3>题库</h3>
      <a href="javascript:;" class="lib_close">&times;</a>
    </div>
  </el-row>
</template>

<script>

  export default{
    data(){
      return{

      }
    },
    components: {
    },
    methods: {
      //显示与隐藏右边的 题库信息
      showRightTab: function (event) {
      }
    }
  }
</script>
