<!--试卷维护页面-->
<template>
  <el-container>
    <el-header style="padding: 0;">
      <!--<Header></Header>-->
      <ControlMenu></ControlMenu>
    </el-header>
    <el-container>
      <el-row id="container" class="g_container">
        <el-col :span="24" class="survey_background_wrap"></el-col>
        <el-col class="editor_container" style="display: block;">
          <!-- 左边栏 -->
          <LeftMenu @addNewQuestion="addNewQuestion"></LeftMenu>
          <!-- 主体 -->
          <el-row class="editor_main" style="background-color: #f0f0f0;">
            <div class="survey_wrap">
              <!--页码-->
              <Pagination></Pagination>
              <!--内容-->
              <el-row class="survey_main">
                <el-col class="survey_title">
                  <el-col class="inner" style="float: none;">
                    <h1 class="title_content" contenteditable="true">{{big_title}}</h1>
                  </el-col>
                </el-col>
                <el-col class="survey_prefix">
                  <el-col class="inner" style="float: none;">
                    <div class="prefix_content" contenteditable="true">
                      <p>{{big_prefix}}</p>
                    </div>
                  </el-col>
                </el-col>
                <el-col class="survey_container">
                  <el-col class="page">
                    <!--每种题型的结构-->
                    <div v-for="(item, index) in questionList" :key="item.index" v-if="questionList">
                      <el-row class="question question_radio required" v-if="item.q_type === 'q_danxuan'">
                        <div class="inner">
                          <el-col class="title">
                            <el-col role="presetation">
                              <span class="title_index"><span class="question_index">{{index+1}}</span>.</span>
                              <h3 class="title_text"><p>{{item.title}}</p></h3>
                            </el-col>
                          </el-col>
                          <el-col class="description" v-if="item.remark">{{item.remark}}</el-col>
                          <div class="inputs">
                            <div class="option_item" v-for="sub in item.q_options" :key="sub.index" style="width: 100%;">
                              <el-radio v-model="item.dx_value" :label="sub.content" style="line-height: 40px;"></el-radio>
                            </div>
                          </div>
                        </div>
                        <div class="control_mask"></div>
                        <ControlOperation></ControlOperation>
                      </el-row>
                      <el-row class="question question_select required" v-if="item.q_type === 'q_xiala'">
                        <div class="inner">
                          <el-col class="title">
                            <el-col role="presetation">
                              <span class="title_index"><span class="question_index">{{index+1}}</span>.</span>
                              <h3 class="title_text"><p>{{item.title}}</p></h3>
                            </el-col>
                          </el-col>
                          <el-col class="description" v-if="item.remark">{{item.remark}}</el-col>
                          <div class="inputs">
                            <el-select v-model="item.xl_select_value" class="survey_form_input" placeholder="--请选择--" style="border:none;" size="small">
                              <el-option
                                v-for="sub in item.q_options"
                                :key="sub.index"
                                :label="sub.label"
                                :value="sub.content"
                                style="line-height: 40px;">
                              </el-option>
                            </el-select>
                          </div>
                        </div>
                        <div class="control_mask"></div>
                        <ControlOperation></ControlOperation>
                      </el-row>
                      <el-row class="question question_checkbox required" v-if="item.q_type === 'q_duoxuan'">
                        <div class="inner">
                          <el-col class="title">
                            <el-col role="presetation">
                              <span class="title_index"><span class="question_index">{{index+1}}</span>.</span>
                              <h3 class="title_text"><p>{{item.title}}</p></h3>
                            </el-col>
                          </el-col>
                          <el-col class="description" v-if="item.remark">{{item.remark}}</el-col>
                          <div class="inputs">
                            <div class="option_item" v-for="sub in item.q_options" :key="sub.index" style="width: 100%;">
                              <el-checkbox :label="sub.content" style="line-height: 40px;"></el-checkbox >
                            </div>
                          </div>
                        </div>
                        <div class="control_mask"></div>
                        <ControlOperation></ControlOperation>
                      </el-row>
                      <el-row class="question question_text required" v-if="item.q_type === 'q_danhang_wb'">
                        <div class="inner">
                          <el-col class="title">
                            <el-col role="presetation">
                              <span class="title_index"><span class="question_index">{{index+1}}</span>.</span>
                              <h3 class="title_text"><p>{{item.title}}</p></h3>
                            </el-col>
                          </el-col>
                          <el-col class="description" v-if="item.remark">{{item.remark}}</el-col>
                          <div class="inputs">
                            <input class="survey_form_input" type="text"/>
                          </div>
                        </div>
                        <div class="control_mask"></div>
                        <ControlOperation></ControlOperation>
                      </el-row>
                      <el-row class="question question_textarea required" v-if="item.q_type === 'q_duohang_wb'">
                        <div class="inner">
                          <el-col class="title">
                            <el-col role="presetation">
                              <span class="title_index"><span class="question_index">{{index+1}}</span>.</span>
                              <h3 class="title_text"><p>{{item.title}}</p></h3>
                            </el-col>
                          </el-col>
                          <el-col class="description" v-if="item.remark">{{item.remark}}</el-col>
                          <div class="inputs">
                            <textarea role="textbox" class="survey_form_input" rows="5" cols="60"></textarea>
                          </div>
                        </div>
                        <div class="control_mask"></div>
                        <ControlOperation></ControlOperation>
                      </el-row>
                      <el-row class="question question_star required" v-if="item.q_type === 'q_liangbiao'">
                        <div class="inner">
                          <el-col class="title">
                            <el-col role="presetation">
                              <span class="title_index"><span class="question_index">{{index+1}}</span>.</span>
                              <h3 class="title_text"><p>{{item.title}}</p></h3>
                            </el-col>
                          </el-col>
                          <el-col class="description" v-if="item.remark">{{item.remark}}</el-col>
                          <div class="inputs">
                            <el-col class="rating_area rating_type_default">
                              <span class="star_tip">{{lb_type[item.lb_type].good}}</span>
                              <el-radio-group class="star_item" v-model="item.lb_value" v-for="sub in item.range" :key="sub.index">
                                <el-radio :label="sub" class="rating survey_form_rating"></el-radio>
                              </el-radio-group>
                              <span class="star_tip">{{lb_type[item.lb_type].bad}}</span>
                            </el-col>
                          </div>
                        </div>
                        <div class="control_mask"></div>
                        <ControlOperation></ControlOperation>
                      </el-row>
                      <el-row class="question question_text_multiple required" v-if="item.q_type === 'q_tiankong'">
                        <div class="inner">
                          <el-col class="title">
                            <el-col role="presetation">
                              <span class="title_index"><span class="question_index">{{index+1}}</span>.</span>
                              <h3 class="title_text">
                                <p class="tk_input_area">{{item.title}}</p>
                              </h3>
                            </el-col>
                          </el-col>
                          <el-col class="description" v-if="item.remark">{{item.remark}}</el-col>
                        </div>
                        <div class="control_mask"></div>
                        <ControlOperation></ControlOperation>
                      </el-row>
                    </div>

                    <ul class="create-new-question">
                      <li :is="item.component" :text="item.text" v-for="item in newQuestion" @cancleAddNewQuestion="cancleAddNewQuestion" @confirmAddNewQuestion="confirmAddNewQuestion" @changeQuestion="changeQuestion"></li>
                    </ul>

                    <a name="bottom-anchor"></a>
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
  </el-container>
</template>

<script>
  //<!--状态管理-->
  import { mapActions, mapGetters } from 'vuex'

  import Header from '../menu-nav/header.vue'
  import ControlMenu from '../menu-nav/control-menu.vue'
  import LeftMenu from '../menu-nav/left-menu.vue'
  import RightMenu from '../menu-nav/right-menu.vue'
  import Pagination from './pagination/pagination.vue'
  import ControlOperation from './control/control.vue'

  import Danxuan from '../question/types/single-choice.vue'
  import Duoxuan from '../question/types/multiple-choice.vue'
  import Xiala from '../question/types/drop-down.vue'
  import Scale from '../question/types/scale.vue'
  import Danhangwenben from '../question/types/single-line.vue'
  import Duohangwenben from '../question/types/multiline.vue'
  import Tiankong from '../question/types/completion.vue'

  export default{
    data(){
      return{
        currentPage: 1,
        allPages: [{
          className: 'pages_item current',
          datapid: 'p-1-gguJ',
          content: '第1页'
        }],
        big_title: '试卷标题',
        big_prefix: '为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！',
        questionList: [{
          q_type: 'q_danxuan',//单选题
          title: '单选题',
          remark: '我是单选题备注',
          dx_value: '',
          q_options: [{
            content: '我是选项一',
            label: '我是选项一'
          }, {
            content: '我是选项二',
            label: '我是选项二'
          }]
        }, {
          q_type: 'q_xiala',//下拉题
          title: '下拉题',
          remark: '我是下拉题备注',
          xl_select_value: '',
          q_options: [{
            content: '我是选项一',
            label: '我是选项一'
          }, {
            content: '我是选项二',
            label: '我是选项二'
          }]
        }, {
          q_type: 'q_duoxuan',//多选题
          title: '多选题',
          remark: '我是多选题备注',
          q_options: [{
            content: '我是选项一',
            label: '我是选项一'
          }, {
            content: '我是选项二',
            label: '我是选项二'
          }]
        }, {
          q_type: 'q_danhang_wb',//单行文本题
          title: '单行文本题',
          remark: '我是单行文本题备注'
        }, {
          q_type: 'q_duohang_wb',//多行文本题
          title: '多行文本题',
          remark: '我是多行文本题备注'
        }, {
          q_type: 'q_liangbiao',//量表题
          title: '量表题',
          remark: '我是量表题备注',
          lb_value: '',
          lb_type: 3,//对应上面的数组lb_type[{},{},...]
          range: 10,
          start: 1
        }, {
          q_type: 'q_tiankong',//填空题
          title: '知行____，止于_____________________,______。',
          remark: '我是填空题备注',
          tk_type: 'number'
        }, {
          q_type: 'q_danxuan',//单选题
          title: '单选题',
          remark: '我是单选题备注',
          dx_value: '',
          q_options: [{
            content: '我是选项一',
            label: '我是选项一'
          }, {
            content: '我是选项二',
            label: '我是选项二'
          }]
        }, {
          q_type: 'q_xiala',//下拉题
          title: '下拉题',
          remark: '我是下拉题备注',
          xl_select_value: '',
          q_options: [{
            content: '我是选项一',
            label: '我是选项一'
          }, {
            content: '我是选项二',
            label: '我是选项二'
          }]
        }],
//        新建的题目
        newQuestion: [],
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
      Header,
      ControlMenu,
      LeftMenu,
      RightMenu,

      Pagination,
      ControlOperation,
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
//      滚动到底部
        location.href = '#bottom-anchor';
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
        vm.newQuestion = [];
      }
    },
    created: function () {
      var vm = this;
      vm.clear();
    }
  }
</script>

