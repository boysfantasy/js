//js 变量提升 hoisting
$(function () {
   var g={};
    g.abc = {
        name: "chj",
        alertName:function () {
            alert(this.name);
         },
        test1:function(){
            var v='Hello world';
            alert(v);
        },
        test2:function(){
            var v='Hello world';
            (function (){
                alert(v);
            })();
        },
        test3:function(){
            var v='Hello world';
            (function (){

                alert(v);
                var v="i love you"
            })();
        }
    };
    //g.abc.test1();//输出hello world 正常
    //g.abc.test2();//输出hello world 正常
    //g.abc.test3();//输出undefined 非正常 关于变量提升

    //变量体恒提到函数top 的地方，变量提升只会提升声明不会吧赋值也提升上来
    (function(){
        var a='one';
        var b='two';
        var c='three';
    })();
   // 实际上他是这个样子的：
    (function(){
        var a, b,c;
        a='one';
        b='two';
        c='three';
    })();
    //g.abc.test3();的代码实际是这样的
    (function(){
        var v='hello world';
        (function (){
          var v;
            alert(v);
            v='i love you';
        })();
    })();
    //所以才会提示说undefined
    //2.2 函数提升
    // 一种是函数表达式，另外一种是函数声明方式。
    // 我们需要重点注意的是，只有函数声明形式才能被提升。

    (function(){
        foo();
        function foo(){
          alert("wo laizi foo");
        };
    })();
    //函数声明方式提升成功 弹出 我wo laizi foo
    (function(){
        foo();
        var foo=function foo(){
            alert("wo laizi foo");
        };
    })();
    //函数声明方式提升失败，foo is not a function
});

