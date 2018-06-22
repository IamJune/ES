import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import NotFound from '@/components/404'
import Home from '@/components/home'
import Index from '@/components/index'
import CreateQuestion from '@/components/question/new-question'
import QuestionList from '@/components/question/question-list'
import ImportQuestion from '@/components/question/import-question'
import ImportPaper from '@/components/test-paper/import-paper'
import CreatePaper from '@/components/test-paper/new-paper'
import PaperList from '@/components/test-paper/paper-list'
import PaperScoreAnalyze from '@/components/analyze/score-analyze'
import MyQuestionPaper from '@/components/mine/my-questions-papers'

const cubeES = [
  {
    name: '登录',
    path: '/login',
    component: Login,
    hidden: true
  },
  {
    name: '找不到页面',
    path: '/404',
    component: NotFound,
    hidden: true
  },
  {
    name: '首页',
    path: '/index',
    component: Index,
    hidden: true
  },
  {
    path: '/',
    hidden: true,
    redirect: { path: '/index' }
  },
  {
    name: '题目维护',
    path: '/question',
    component: Home,
    children: [
      {name: '新建题目', path: '/new_question', component: CreateQuestion},
      {name: '题目列表', path: '/question_list', component: QuestionList},
      {name: '导入题目', path: '/import_question', component: ImportQuestion}
    ]
  },
  {
    name: '试卷维护',
    path: '/paper',
    component: Home,
    children: [
      {name: '新建试卷', path: '/new_paper', component: CreatePaper},
      {name: '试卷列表', path: '/paper_list', component: PaperList},
      {name: '导入试卷', path: '/import_paper', component: ImportPaper}
    ]
  },
  {
    name: '统计分析',
    path: '/analyze',
    component: Home,
    children: [
      {name: '试卷成绩分析', path: '/paperScore_analyze', component: PaperScoreAnalyze},
    ]
  },
  {
    name: '我的',
    path: '/mine',
    component: Home,
    leaf: true,//只有一个节点
    children: [
      {name: '我的试题', path: '/my_question_paper', component: MyQuestionPaper}
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/login' }
  }
]
const router = new Router({
  mode: 'history',
  base: 'cubeES',
  routes: cubeES
})

Vue.use(Router)
export default router
