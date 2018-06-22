<!--量表题-->
<template>
  <div>
    <el-row class="editor_question">
      <div class="inner star">
        <QTitle></QTitle>
        <QRemark></QRemark>
        <SelectType :qType = 'q_type' @changeQuestion="changeQuestion"></SelectType>
        <el-row class="row editor_options" style="padding-left: 15px;">
          <label>量表类型
            <el-select v-model="select_lb_type" name="starShow" class="lb_range_number" size="mini">
              <el-option
                v-for="item in lb_type_list"
                :key="item.id"
                :label="item.content"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </label>
          <label class="starNum" style="margin: 0 20px;">量表范围
            <el-input-number v-model="rangeNumber" controlsPosition="right" @change="handleChangeNumber" class="editor_input number_input" size="mini" :min="2" :max="100" name="starNum"></el-input-number>
          </label>
          <label>起始数值
            <el-input-number v-model="startNumber" controlsPosition="right" @change="handleChangeNumber" class="editor_input number_input" size="mini" name="starBeginNum"></el-input-number>
          </label>
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
        q_type: '量表题',
        q_title: '',
        q_remark: '',
        select_lb_type: '满意度',
        rangeNumber: 5,
        startNumber: 1,
        //量表题的量表类型
        lb_type_list: [{
          id: 0,
          content: '满意度'
        }, {
          id: 1,
          content: '认同度'
        }, {
          id: 2,
          content: '重要度'
        }, {
          id: 3,
          content: '愿意度'
        }, {
          id: 4,
          content: '符合度'
        }]
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
      handleChangeNumber (value) {
        console.log(value);
      }
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
  .lb_range_number {
    width: 130px;
    margin-left: 10px;
  }
</style>

