# chrome-lagou-add
chrome插件，使拉勾网lagou.com职位列表中显示公司地址
###0.01
1. 初始版本

###0.02
1.针对lagou.com于2015/06/19网页样式更新造成插件无法正常显示进行修改。

2.尝试使用云配置，将主要功能的js放置在aliyun的OSS中（remote/lagou-address-remote.js）。

###0.03 2015/06/21

1. 设置1000ms延时，解决因网络缓慢导致原页面dom还未生成完毕 插件无法生效的问题
