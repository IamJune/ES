<!--试题维护页面-->
<template>
  <el-container>
    <el-row id="container" class="g_container">
      <el-col :span="24" class="survey_background_wrap"></el-col>
      <el-col class="editor_container" style="display: block;">
        <!-- 左边栏 -->
        <LeftMenu @addNewQuestion="addNewQuestion"></LeftMenu>
        <!-- 主体 -->
        <el-row class="editor_main" style="background-color: #f0f0f0;">
          <div class="survey_wrap">
            <!--内容-->
            <el-row class="survey_main">
              <el-col class="survey_title">
                <el-col class="inner" style="float: none;">
                  <h1 class="title_content">{{questionType}}</h1>
                </el-col>
              </el-col>

              <el-col class="survey_container">
                <el-col class="page">
                    <ul>
                      <li :is="item.component" :text="item.text" v-for="item in newQuestion" @cancleAddNewQuestion="cancleAddNewQuestion" @confirmAddNewQuestion="confirmAddNewQuestion" @changeQuestion="changeQuestion"></li>
                    </ul>
                </el-col>
              </el-col>
              <el-col class="survey_suffix" style="display: none;"></el-col>
            </el-row>
          </div>
        </el-row>
        <!-- 题库 -->
        <RightMenu></RightMenu>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
  //<!--状态管理-->
  import { mapActions, mapGetters } from 'vuex'

  import LeftMenu from '../menu-nav/left-menu.vue'
  import RightMenu from '../menu-nav/right-menu.vue'

  import Danxuan from './types/single-choice.vue'
  import Duoxuan from './types/multiple-choice.vue'
  import Xiala from './types/drop-down.vue'
  import Scale from './types/scale.vue'
  import Danhangwenben from './types/single-line.vue'
  import Duohangwenben from './types/multiline.vue'
  import Tiankong from './types/completion.vue'

  export default{
    data(){
      return{
        newQuestion: [],
        questionType: '请从左边选择题目类型',
        //      量表题的量表类型的首尾文字
        lb_type: [{
          good: '非常满意',
          bad: '非常不满意'
        }, {
          good: '非常认同',
          bad: '非常不认同'
        }, {
          good: '非常重要',
          bad: '非常不重要'
        }, {
          good: '非常愿意',
          bad: '非常不愿意'
        }, {
          good: '非常符合',
          bad: '非常不符合'
        }]
      }
    },
    components: {
      LeftMenu,
      RightMenu,

      Danxuan,
      Duoxuan,
      Xiala,
      Scale,
      Danhangwenben,
      Duohangwenben,
      Tiankong
    },
    computed: {
      ...mapGetters(['selectedNewQuestion'])
    },
    methods: {
      ...mapActions(['selectedLock','selectedUnlock']),

//    动态添加题目
      addNewQuestion: function (...data) {
        var vm = this;
        var componentName,text;

        var qType = data[0];
//      锁定
        vm.selectedLock();

        if(qType){
          switch (qType){
            case 'q_danxuan': {componentName = 'Danxuan';text = '单选题';break;}
            case 'q_duoxuan': {componentName = 'Duoxuan';text = '多选题';break;}
            case 'q_xiala': {componentName = 'Xiala';text = '下拉题';break;}
            case 'q_danhang_wb': {componentName = 'Danhangwenben';text = '单行文本题';break;}
            case 'q_duohang_wb': {componentName = 'Duohangwenben';text = '多行文本题';break;}
            case 'q_liangbiao': {componentName = 'Scale';text = '量表题';break;}
            case 'q_tiankong': {componentName = 'Tiankong';text = '填空题';break;}
            default: break;
          }
        }else{
           componentName = 'Danxuan';
           text = '单选题';
        }
        if(componentName){
          vm.newQuestion.push({
            'component': componentName,
            'text': text
          });
          vm.questionType = text;
        }
      },
//    改变题目类型
      changeQuestion: function (...data) {
        var vm = this;
        var qType = data[0];
        vm.newQuestion.shift();
        vm.addNewQuestion(qType);
      },
      /*保存新建题目*/
      confirmAddNewQuestion: function () {
        var vm = this;
        vm.$confirm('确认提交吗？', '提示', {}).then(() => {
          //        发送数据到后台，若保存成功，提示
          vm.$notify({
            title: '成功',
            message: '题目保存成功',
            type: 'success'
          });
//        若保存失败，提示
//        this.$notify.error({
//          title: '错误',
//          message: '题目保存失败'
//        });
          //        清空
          vm.clear();
//        解除锁定
          vm.selectedUnlock();
        })
      },
      /*取消新建题目*/
      cancleAddNewQuestion:function () {
        var vm = this;
        vm.$notify.info({
          title: '消息',
          message: '已经取消'
        });

//        清空
        vm.clear();
  //        解除锁定
        vm.selectedUnlock();

      },
      //显示与隐藏右边的 题库信息
      showRightTab: function (event) {
      },
      clear:function () {
        var vm = this;
        vm.questionType = '请从左边选择题目类型';
        vm.newQuestion = [];
      }
    },
    created: function () {
      var vm = this;
      vm.clear();
    }
  }
</script>





