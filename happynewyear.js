var canvas=new fabric.Canvas('c');
var b, B=[];
canvas.add(b=new fabric.Text(
	'text, image, line, and circle',{
		id:'B['+B.length+']', left:15, top:375, angle:10, fill:'red'
	}
)), B.push(b);
var option={
	onChange: canvas.renderAll.bind(canvas) ,
	easing	: fabric.util.ease.easeOutBounce
};
var duration1=9000;
var onComplete1=function(){
	b.set({
		fill:'green', stroke:'black', strokeWidth:1,
		shadow:'rgba(0,0,0,0.3) 5px 5px 5px', fontWeight:'bold'
	});
	option.onComplete=onComplete2;
	option.duration=duration2;
	b.animate({angle:10},option);
}
var duration2=3000;
var onComplete2=function(){
	b.setGradient('fill', {
		x1:0, y1:0, x2:b.width, y2:b.height/2,
		colorStops: {
		    0:"red", 0.05:"orange", 0.1:"green", 0.25:"blue", 0.7:"purple", 1:"black"
		}
	});
	option.onComplete=undefined;
	b.animate({angle:0},option);
	canvas.add(b=new fabric.Text(
		'Hello!',{
			id:'B['+B.length+']', left:90, top:20,
			fill:'orange', stroke:'black', strokeWidth:1,
			shadow:'rgba(0,0,0,0.3) 5px 5px 5px', fontWeight:'bold'
		}
	)), B.push(b);
	canvas.add(b=new fabric.Text(
	'大家新年好!',{
			id:'B['+B.length+']', left:b.left+b.width+20, top:b.top,
			fill:'#C00', stroke:'#CC3', strokeWidth:.3,
			shadow:'rgba(0,0,0,0.3) 5px 5px 5px', fontWeight:'bold', fontFamily: '微軟正黑體'
		}
	)), B.push(b);
//	showAllObjects();
}
option.onComplete=onComplete1;
option.duration=duration1;
b.animate({angle:0},option);