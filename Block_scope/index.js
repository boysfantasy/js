$(function () {
   var g={};
    g.abc = {
        name: "chj",
        alertName:function () {
            alert(this.name);
         }
    }
    g.init=function(){
        for(var i=0;i<3;i++)
        {
            var a=[];
             a[i]=function(){
                alert(i);
            }
        }
       if(i==3)
       {
           var index=1;
       }
     //  alert(i);//输出三  for的并没有块级作用域
       // alert(index);//输出一  if 没有块级作用域
    }
    g.init();
    //也就是说，JS并不支持块级作用域，它只支持函数作用域，而且在一个函数中的任
// 何位置定义的变量在该函数中的任何地方都是可见的。


//解决办法 在if 或者for 里面添加函数作用域
    g.save=function(){
        (function(){
            for(var i=0;i<3;i++)
            {

            }
        })();
        alert(i)//undefine
    }
    g.save();
});


