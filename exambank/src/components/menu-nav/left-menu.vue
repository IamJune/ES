<!--左侧菜单-->
<template>
  <el-row class="editor_sidebar">
    <el-col :span="21" class="tab">
      <a class="tab_item current" href="javascript:;" data-tab="question_type">题目控件</a>
    </el-col>
    <el-col :span="21" id="menu" class="tab_content question_type" style="display: block;">
      <ul>
        <li :key="item.name" v-for="item in questionType" :class="item.class" :data-type="item.datatype" @click="addQuestion(item.datatype)">
          <a href="javascript:;"><span class="ico"><i></i></span>{{item.content}}</a>
        </li>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default{
    data(){
      return{
        questionType: [{
          class: 'type_item radio',
          datatype: 'q_danxuan',
          name: '单选题',
          content: '单选题'
        }, {
          class: 'type_item select',
          datatype: 'q_xiala',
          name: '下拉题',
          content: '下拉题'
        }, {
          class: 'type_item checkbox',
          datatype: 'q_duoxuan',
          name: '多选题',
          content: '多选题'
        }, {
          class: 'type_item text',
          datatype: 'q_danhang_wb',
          name: '单行文本题',
          content: '单行文本题'
        }, {
          class: 'type_item textarea',
          datatype: 'q_duohang_wb',
          name: '多行文本题',
          content: '多行文本题'
        }, {
          class: 'type_item star',
          datatype: 'q_liangbiao',
          name: '量表题',
          content: '量表题'
        }, {
          class: 'type_item text_multiple',
          datatype: 'q_tiankong',
          name: '填空题',
          content: '填空题'
        }]
      }
    },
    computed: {
      ...mapGetters(['selectedNewQuestion'])
    },
    methods: {
      ...mapActions(['selectedLock','selectedUnlock']),

      addQuestion: function (questionType) {
        var vm = this;
        if(vm.selectedNewQuestion == false){
          vm.$emit('addNewQuestion',questionType);
        }else{
          this.$notify({
            title: '警告',
            message: '请先完成当前题目的创建，再创建下一题',
            type: 'warning'
          });
        }
      }
    }
  }
</script>
<style scoped>
  .tab_content {
    text-align: left;
  }
</style>
