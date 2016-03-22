var t = setInterval(fun,3000);
var num = 0;
function fun(){	
	var nums = num*-59.1+"em";	
	//$(".btn li").eq(num).css("background-color","red").siblings().css("background-color","white");
	$(".btn li").eq(num).css("opacity","1").siblings().css("opacity",".4");
	$(".view").animate({"margin-left":nums},2000);
	//++在上面时，下面的4改成3，0改成-1
	num++;
	num = num == 4 ? 0 : num;
}
$(".btn li").mouseenter(function(){
	clearInterval(t);
}).mouseleave(function(){
	t = setInterval(fun,3000);
}).click(function(){
	var index = $(this).index();
	var result = index*-59.1+"em";
	num = index;
	$(".view").animate({"margin-left":result},2000);

	$(".btn li").eq(index).css("opacity","1").siblings().css("opacity",".4");
	
})
