<!--下拉题-->
<template>
  <div>
    <el-row class="editor_question">
      <div class="inner">
        <QTitle></QTitle>
        <QRemark></QRemark>
        <SelectType :qType = 'q_type' @changeQuestion="changeQuestion"></SelectType>
        <el-row class="row editor_options" v-for="item in dynamicOptions" :key="item.index">
          <el-col :span="16" :offset="2" class="option_input_wrap mod_editor inline_editor" contenteditable="true">{{item}}</el-col>
          <a href="javascript:;" class="btn btn_del btn_del_option" @click="handleClose_option(item)">×</a>
        </el-row>
        <el-row class="row editor_options">
          <el-col :span="16" :offset="2" class="option_input_wrap option_create">
            <span @click="handleAdd_option" class="add_option">新建选项</span>
          </el-col>
        </el-row>
        <!--分割线-->
        <el-row>
          <el-col class="split"></el-col>
        </el-row>
        <!--按钮-->
        <ControlBtn @cancleAddNewQuestion="cancleAddNewQuestion" @confirmAddNewQuestion="confirmAddNewQuestion"></ControlBtn>
      </div>
    </el-row>
  </div>
</template>

<script>
  import SelectType from '../edit/select_type.vue'
  import ControlBtn from '../edit/edit_control.vue'
  import QTitle from '../edit/question-title.vue'
  import QRemark from '../edit/question-remark.vue'

  export default {
    data () {
      return {
        q_type: '下拉题',
        q_title: '',
        q_remark: '',
        dynamicOptions: ['选项', '选项']
      }
    },
    components: {
      SelectType,
      ControlBtn,
      QTitle,
      QRemark
    },
    methods: {
      confirmAddNewQuestion: function () {
        this.$emit('confirmAddNewQuestion')
      },
      cancleAddNewQuestion: function () {
        this.$emit('cancleAddNewQuestion')
      },
      changeQuestion: function (...data) {
        var vm = this;
        var questionType = data[0]
        vm.$emit('changeQuestion',questionType);
      },
      handleClose_option (item) {
        this.dynamicOptions.splice(this.dynamicOptions.indexOf(item), 1);
      },
      handleAdd_option () {
        this.dynamicOptions.push('');
        console.log(this.dynamicOptions);
      }
    }
  }
</script>

<style scoped>

  .editor_question .el-row {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .btn_del_option {
    color: #999999;
    position: absolute;
    top: 5px;
    margin-left: 15px;
    z-index: 1;
  }
  .split {
    margin-top: 8px;
    border-top: 1px solid #e0e0e0;
  }
</style>

