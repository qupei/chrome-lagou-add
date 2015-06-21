# chrome-lagou-add
chrome插件，使拉勾网lagou.com职位列表中显示公司地址
###Version:0.1
1. 初始版本

###Version:0.2
1.针对lagou.com于2015/06/19网页样式更新造成插件无法正常显示进行修改。

2.尝试使用云配置，将主要功能的js放置在aliyun的OSS中（remote/lagou-address-remote.js）。

###Version:0.3 2015/06/21

1. 设置1000ms延时，解决因网络缓慢导致原页面dom还未生成完毕 插件无法生效的问题

2. 原页面翻页改为AJAX无刷新导致初始化的loadAddress无法加载并且底部会重新渲染导致底部翻页按钮事件失效，改为使用DOMNodeInserted监控DOM发生变化时再次为翻页按钮绑定事件
