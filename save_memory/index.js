//内存泄露是指一块被分配的内存既不能使用，又不能回收，直到浏览器进程结束。
// 在C++中，因为是手动管理内存，内存泄露是经常出现的事情。而现在流行的C#
// 和Java等语言采用了自动垃圾回收方法管理内存，正常使用的情况下几乎不会发生内存泄露。
// 浏览器中也是采用自动垃圾回收方法管理内存，但由于浏览器垃圾回收方法有bug，会产生内存泄露。
$(function(){
    //1 当页面中元素被移除或者替换时，若元素绑定事件仍没有被移除，在ie 中不会做适当处理，
    // 此时要先手动移除事假，不然回存在内存泄漏的问题
    var btn=document.getElementsByClassName('d');
    //alert(btn);
    //btn[0].onclick=function(){
    //    btn[0].innerHTML="hello ";
    //};
    //代码应该改成如下
    btn[0].onclick = function(){
        btn[0].onclick = null;
        btn[0].innerHTML = "Processing...";
    }
});