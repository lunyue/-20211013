//发布订阅模式：可以用组件之间的传值，比如父子传值，爷孙传值等度可以
var Event =(function(){
    var list ={},listen,trigger,remove;
    listen= function(key,fn){
        if(!listen[key]){//listen对象中key值存在
            list[key]=[]//则将list对象赋值为空数组
        }
        list[key].push(fn)//将函数添加到list对象的key值中
    }
    trigger=function(){
        //对应的key值取出来
        var key=Array.prototype.shift.call(arguments)
        var fns =list[key]
        if(!fns || fns.length==0){
            return
        }
        for(var i=0,fn;fn=fns[i++];){
            fn(...arguments)
        }
    }
    remove=function(key,fn){
        var fns=list[key]
        if(!fns){
        return false
        }
        if(!fn){
            fn&&(fns.length=0)
        }else{
            for(var i=fns.length-1;i>=0;i--){
                var _fn=fns[i]
                if(_fn==fn){
                    fns.splice(i,1)
                }
            }
        }
    }
    return{
        listen,
        remove,
        trigger
    }    
})()
export default Event