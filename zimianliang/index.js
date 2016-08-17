$(function () {
   var g={};
    g.abc = {
        name: "chj",
        clickDiv:function () {
            $d=$('.d');
            $d.click(function(){
                alert("ok");
            });
         }
    }
    g.abc.clickDiv();
});
//定义一个对象
