/**
 * Created by linjinxia on 2015/11/16.
 * 这是插件的js代码，使用时需要将此js文件引入在所有js文件最开头的位置
 */
if (addEventListener) {
    window.addEventListener('load', initial);
} else {
    window.attachEvent('onload', initial);
}

function initial() {
    var index = 0; //第几页
    var lock = 0; //当有页面在滚动时，不能连续点击
    //构造函数
    function Slide() {}
    window.Slide = Slide; //全局变量，外部可以访问
    //原型
    Slide.prototype.initialize = function(speed, time) { //初始化页面各种数据
        cWidth = document.documentElement.clientWidth; //页面宽度
        cHeight = document.documentElement.clientHeight; //页面高度
        slide = getClassName(document, "slide")[0]; //外部的div
        slideContainer = getClassName(document, "slideContainer")[0]; //页面容器
        slidePage = getClassName(document, "slidePage"); //每个页面
        slideLeft = getClassName(document, "slideLeft")[0]; //左箭头
        slideRight = getClassName(document, "slideRight")[0]; //右箭头
        slideLeftHeight = getStyle(slideLeft, "height");
        slide.style.height = cHeight + "px"; //设置页面高度
        slide.style.width = cWidth + "px"; //设置页面宽度
        slideContainer.style.width = cWidth * slidePage.length + "px";
        //设置每个页面高度
        for (var i = 0; i < slidePage.length; i++) {
            slidePage[i].style.height = cHeight + "px";
            slidePage[i].style.width = cWidth + "px";
        }
        //设置箭头在页面的位置
        slideLeft.style.top = cHeight / 2 - getNumber(slideLeftHeight) / 2 + "px";
        slideRight.style.top = slideLeft.style.top;
        slideContainer.style.left = -index * cWidth + "px";
        slideLeft.onclick = function() {
            Slide.prototype.move(speed, time, -1);
        }
        slideRight.onclick = function() {
            Slide.prototype.move(-speed, time, 1);
        }
        window.onresize = function() {
            Slide.prototype.initialize(80, 20);
        }
    }
    Slide.prototype.move = function(speed, time, dir) {
        var innerIndex = index;
        if (lock == 0) {
            lock = 1;
            setTimeout(function() {
                setTime(speed, time, dir, innerIndex);
                index = index + dir;
            }, time);
        }
    }

    function setTime(speed, time, dir, innerIndex) { //speed:移动速度；time:每次移动时间；dir:决定左右移动，左为-1，右为1
        if (innerIndex == (slidePage.length - 1) && dir == 1) {
            slideContainer.appendChild(slidePage[0]);
            innerIndex = innerIndex - dir;
            index = innerIndex;
            slideContainer.style.left = -innerIndex * cWidth + "px";
        }
        if (innerIndex == 0 && dir == -1) {
            slideContainer.insertBefore(slidePage[slidePage.length - 1], slidePage[0]);
            innerIndex = innerIndex - dir;
            index = innerIndex;
            slideContainer.style.left = -innerIndex * cWidth + "px";
        } else if (Math.abs(Math.abs(slideContainer.offsetLeft) - (innerIndex + dir) * cWidth) > 0 && Math.abs((innerIndex + dir) * cWidth - Math.abs(slideContainer.offsetLeft)) >= Math.abs(speed)) {
            slideContainer.style.left = slideContainer.offsetLeft + speed + "px";
        } else {
            slideContainer.style.left = slideContainer.offsetLeft + (Math.abs(slideContainer.offsetLeft) - (innerIndex + dir) * cWidth) + "px";
            lock = 0;
            return;
        }
        setTimeout(function() {
            setTime(speed, time, dir, innerIndex);
        }, time)
    }
    //获取元素样式
    function getStyle(obj, attr) {
        if (obj.currentStyle) { //IE
            return obj.currentStyle[attr];
        } else { //其他浏览器
            return getComputedStyle(obj, null)[attr];
        }
    }
    //转化为整型
    function getNumber(str) {
        return parseInt(str.substring(0, str.length - 2));
    }
    //定义document.getElementsByClassName，兼容IE6,7,8
    function getClassName(obj, Name) {
        if (obj.getElementsByClassName) {
            return obj.getElementsByClassName(Name);
        } else {
            var aTag = obj.getElementsByTagName('*');
            var aRes = [];
            var arr = [];
            for (var i = 0; i < aTmp.length; i++) {
                arr = aTag[i].className.split(' ');
                for (var j = 0; j < arr.length; j++) {
                    if (arr[j] == Name) {
                        aRes.push(aTag[i]);
                    }
                }
            }
            return aRes;
        }
    }
    /*
        var slide = new Slide(); //对象实例化
        slide.initialize(80,20);
    */
}