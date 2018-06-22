<!--头部下面的操作-->
<template>
  <el-row type="flex" class="g_subheader" justify="space-between">
    <el-col class="g_content">
      <el-col :span="24" id="tk_set_do" class="g_content">
        <el-col :span="12" class="survey_options published" style="display: block;">
          <el-menu :default-active="activeName3" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item
              class="control-menu-li"
              :key="item.name"
              v-for="(item,index) in titleTabs3"
              :id="item.id"
              :class="item.class"
              :label="item.title"
              :index="item.name"
              :name="item.name">
              <i :class="item.iconClass"></i>
              {{item.content}}
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
  export default{
    data(){
      return{
        activeName3: '',
        titleTabs3: [{
          id: 'print_survey',
          class: '',
          iconClass: 'ico ico_print',
          title: '打印',
          name: 'first',
          content: '打印'
        }, {
          id: 'preview_survey',
          class: '',
          iconClass: 'ico ico_preview',
          title: '预览',
          name: 'third',
          content: '预览'
        }, {
          id: '',
          class: 'btn_share_box',
          iconClass: 'ico ico_share',
          title: '分享',
          name: 'fourth',
          content: '分享'
        }],
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
  .control-menu-li {
    float: right;
  }
</style>
<style>
  .control-menu-li:hover {
    color: #2f8cdb;
  }
</style>
