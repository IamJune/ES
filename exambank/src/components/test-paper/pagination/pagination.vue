<!--页码-->
<template>
  <el-col :span="20" class="survey_pages_tab">
    <a class="pages_preview" href="javascript:;"><i></i></a>
    <!-- 滚动容器 -->
    <div class="pages_wrap">
      <!-- 页码容器 -->
      <ul>
        <li :key="item.name" v-for="item in allPages" :class="item.className" :data-pid="item.datapid">
          <span class="pages_show">{{item.content}}</span>
          <a class="pages_remove" href="javascript:;">×</a>
        </li>
      </ul>
      <!-- 结束页码 -->
      <a class="pages_item pages_end">
        <span class="pages_show">结束页</span>
      </a>
    </div>
    <a class="pages_next" href="javascript:;"><i></i></a>
    <a class="pages_more" href="javascript:;"><i></i></a>
  </el-col>
</template>

<script>
  export default{
    data(){
      return{
        allPages: [{
          className: 'pages_item current',
          datapid: 'p-1-gguJ',
          content: '第1页'
        }]
      }
    }
  }
</script>
