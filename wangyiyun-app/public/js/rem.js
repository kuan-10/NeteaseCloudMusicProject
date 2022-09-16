function remSize(){
    //根据设备宽度获取rem，首先要获取设备宽度
    let deviceWidth=document.documentElement.clientWidth||window.innerWidth
    if(deviceWidth>=750)//苹果手机一般是750的宽度
    {
        deviceWidth=750
    }
    else if(deviceWidth<=320){
        deviceWidth=320
    }
    document.documentElement.style.fontSize=(deviceWidth/7.5)+'px'//设置html字体大小
    //1rem等于deviceWidth除7.5
    document.querySelector('body').style.fontSize=0.3+'rem'

}
remSize()
window.onresize=function(){
    remSize()//当窗口变化的时候，调用这个函数

}