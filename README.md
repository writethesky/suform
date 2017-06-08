# suform
美化表单控件

# 依赖

jquery 2.1.4+



# 支持

目前仅支持，单选框、复选框、下拉列表框，其它表单元素，敬请期待……

# 使用



* 引入jQuery文件

`<script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>`

* 引入js文件
`<script type="text/javascript" src="suform.js" ></script>`

* 引入皮肤文件
`<link rel="stylesheet" href="skin/default.css" />`

* 在需要美化的表单元素中，添加 `suform` 属性

# 重新渲染
当表单元素发生变化（增加、减少）时，需要重新渲染

调用  `suform.update();` 即可

# 皮肤
* 如果对皮肤有定制化需要，复制`default.css`文件并重命名后，修改其中样式内容即可
* 不要忘了，此时，需要引入的皮肤文件不再是`default.css`，而是您自定义的皮肤文件