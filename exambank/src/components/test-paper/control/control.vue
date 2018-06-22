<!--对题目的控制操作-->
<template>
  <div class="control">
    <ul>
      <li v-for="item in operations" :key="item.index" :class="item.className">
        <b :title="item.content"><i></i></b>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        operations: [{
          className: 'control_btn edit',
          name: '编辑',
          content: '编辑'
        }, {
          className: 'control_btn copy',
          name: '复制',
          content: '复制'
        }, {
          className: 'control_btn logic',
          name: '设置逻辑',
          content: '设置逻辑'
        }, {
          className: 'control_btn delete',
          name: '删除',
          content: '删除'
        }, {
          className: 'control_btn fav',
          name: '收藏',
          content: '收藏'
        }]
      }
    }
  }
</script>
