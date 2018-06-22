<!--编辑题型、是否必填-->
<template>
  <el-row class="row editor_type">
    <el-col :span="6" :offset="2">
      <el-select v-model="selected_type" id="question_type" size="small" @change="changeQtype(selected_type)">
        <el-option
          v-for="item in q_types"
          :key="item.name"
          :label="item.label"
          :value="item.content"
        >
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="6" :offset="1" class="q_must">
      <el-checkbox v-model="must">必填</el-checkbox>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data(){
      return{
        selected_type: '',
        q_types: [ {
          name: 'first',
          label: '单选题',
          content: 'q_danxuan'
        }, {
          name: 'second',
          label: '下拉题',
          content: 'q_xiala'
        }, {
          name: 'third',
          label: '多选题',
          content: 'q_duoxuan'
        }, {
          name: 'fourth',
          label: '单行文本题',
          content: 'q_danhang_wb'
        }, {
          name: 'fifth',
          label: '多行文本题',
          content: 'q_duohang_wb'
        }, {
          name: 'sixth',
          label: '量表题',
          content: 'q_liangbiao'
        }, {
          name: 'seventh',
          label: '填空题',
          content: 'q_tiankong'
        }],
        must: true
      }
    },
    props: ['qType'],
    methods:{
      changeQtype: function (questionType) {
        var vm = this;
        vm.$emit('changeQuestion',questionType);
      }
    },
    created: function () {
      var vm = this;
      vm.selected_type = vm.qType;
    }
  }
</script>

<style scoped>
  .q_must {
    line-height: 40px;
  }
</style>
