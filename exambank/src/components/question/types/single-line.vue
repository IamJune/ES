<!--单行文本题-->
<template>
  <div>
    <el-row class="editor_question">
      <div class="inner">
        <QTitle></QTitle>
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
        q_type: '单行文本题',
        q_title: '',
        q_remark: ''
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
    }
  }
</script>

<style scoped>
  .editor_question .el-row {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .split {
    margin-top: 8px;
    border-top: 1px solid #e0e0e0;
  }
</style>
