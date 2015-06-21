function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}
 
setTimeout(function(){
	loadjscssfile("http://qupei.oss-cn-qingdao.aliyuncs.com/chrome/lagou/js/lagou-address-remote.js", "js") //dynamically load and add this .js file
},1000);

console.log('load finsh')
/*
//若不使用云配置，将http://qupei.oss-cn-qingdao.aliyuncs.com/chrome/lagou/js/lagou-address-remote.js中的js脚本粘至此处即可.

*/