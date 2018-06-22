<!--填空题-->
<template>
  <div>
    <el-row class="editor_question">
      <div class="inner">
        <el-row justify="space-around">
          <el-col :span="2" class="q_title">内容</el-col>
          <el-col :span="22" class="input_area">
            <el-col v-model="q_title" aria-required="true" contenteditable="true" class="question_title mod_editor inline_editor">
              <p>题目：<span class="mod_fillblank" data-nostyle="true" @click="showPopup">________</span></p>
            </el-col>
          </el-col>
        </el-row>
        <QRemark></QRemark>
        <SelectType :qType = 'q_type' @changeQuestion="changeQuestion"></SelectType>
        <!--分割线-->
        <el-row>
          <el-col class="split"></el-col>
        </el-row>
        <!--按钮-->
        <ControlBtn @cancleAddNewQuestion="cancleAddNewQuestion" @confirmAddNewQuestion="confirmAddNewQuestion"></ControlBtn>
      </div>
    </el-row>

    <el-row id="setting_mask" class="ui-popup-backdrop"></el-row>
    <el-row id="tk_setting_dialog" style="display:none; position: fixed; outline: 0px; left: 431px; z-index: 1000005;"
            class="ui-popup ui-popup-modal ui-popup-show ui-popup-bottom-left ui-popup-follow ui-popup-focus"
            role="alertdialog">
      <CompleteSetting></CompleteSetting>
    </el-row>
  </div>
</template>

<script>

  import SelectType from '../edit/select_type.vue'
  import ControlBtn from '../edit/edit_control.vue'
  import CompleteSetting from '../edit/complete-setting.vue'
  import QRemark from '../edit/question-remark.vue'

  export default {
    data () {
      return {
        q_type: '填空题',
        q_title: '',
        q_remark: '',
        popup: {x: '', y: ''}
      }
    },
    components: {
      SelectType,
      ControlBtn,
      CompleteSetting,
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
      showPopup: function (event) {
        var e = event || window.event;
        this.popup.x = e.pageX
        this.popup.y = e.pageY
        var tkDialog = document.getElementById('tk_setting_dialog');
        var setMask = document.getElementById('setting_mask');
        tkDialog.style.left = this.popup.x + 'px';
        tkDialog.style.top = this.popup.y + 'px';
        setMask.style.display = 'block';
        tkDialog.style.display = 'block';
      }
    }
  }
</script>

<style scoped>
  .ui-popup-backdrop {
    opacity: 0;
    display:none;
    background: rgb(0, 0, 0);
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    user-select: none;
    z-index: 1000003;
  }
  .editor_question .el-row {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .input_area {
    padding-right: 15px;
  }
  .split {
    margin-top: 8px;
    border-top: 1px solid #e0e0e0;
  }
</style>
