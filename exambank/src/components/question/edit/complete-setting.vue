<!--填空题设置-->
<template>
  <div i="dialog" class="ui-dialog dialog_fillblank_setting">
    <div class="ui-dialog-arrow-a"></div>
    <div class="ui-dialog-arrow-b"></div>
    <table class="ui-dialog-grid">
      <tbody>
      <tr>
        <td i="header" class="ui-dialog-header">
          <button i="close" class="ui-dialog-close" title="cancel" style="display: none;">×</button>
          <div i="title" class="ui-dialog-title" id="title:1522664534805">填空设置</div>
        </td>
      </tr>
      <tr>
        <td i="body" class="ui-dialog-body">
          <div i="content" class="ui-dialog-content" id="content:1522664534805">
            <div class="item">
              <div class="item_title">文本验证</div>
              <div class="item_content">
                <select name="validate" id="fillblank_setting_validate">
                  <option
                    v-for="item in tk_validate_list"
                    :key="item.index"
                    :value="item.name"
                    :label="item.label"
                  >
                    {{item.content}}
                  </option>
                </select>
              </div>
            </div>
            <div class="item">
              <div class="item_title">最多填写</div>
              <div class="item_content"><input type="number" id="fillblank_setting_maxlength">字</div>
            </div>
            <div class="item">
              <div class="item_title">必填</div>
              <div class="item_content"><input type="checkbox" id="fillblank_setting_required"></div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td i="footer" class="ui-dialog-footer">
          <div i="statusbar" class="ui-dialog-statusbar" style="display: none;"></div>
          <div i="button" class="ui-dialog-button">
            <button type="button" i-id="保存" autofocus="" class="ui-dialog-autofocus">保存</button>
            <button type="button" i-id="取消" @click="hideSetDialog">取消</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        tk_validate_value: '不限',
        tk_validate_list: [{
          name: '',
          label: '不限',
          content: '不限'
        }, {
          name: 'number',
          label: '数字',
          content: '数字'
        }, {
          name: 'date',
          label: '日期（2018-04-03）',
          content: '日期（2018-04-03）'
        }, {
          name: 'email',
          label: '电子邮箱',
          content: '电子邮箱'
        }, {
          name: 'chinese',
          label: '中文',
          content: '中文'
        }, {
          name: 'english',
          label: '英文',
          content: '英文'
        }, {
          name: 'url',
          label: '网址',
          content: '网址'
        }, {
          name: 'idCard',
          label: '身份证号码',
          content: '身份证号码'
        }, {
          name: 'qq',
          label: 'QQ号',
          content: 'QQ号'
        }, {
          name: 'mobile',
          label: '手机号码(仅支持大陆地区)',
          content: '手机号码(仅支持大陆地区)'
        }, {
          name: 'phone',
          label: '电话号码',
          content: '电话号码'
        }]
      }
    },
    methods: {
      hideSetDialog: function () {
        var tkDialog = document.getElementById('tk_setting_dialog');
        var setMask = document.getElementById('setting_mask');
        setMask.style.display = 'none';
        tkDialog.style.display = 'none';
      }
    }
  }
</script>
