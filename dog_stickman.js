// dog_stickman.js
// canvas event handlers
var canvas=new fabric.Canvas('c'); // reference canvas of id="c";
var option={
	onChange: canvas.renderAll.bind(canvas) ,
	easing	: fabric.util.ease.easeOutBounce
};
// big text animating on canvas
var b, B=[];
canvas.add(b=new fabric.Text(
	'text, image, line, and circle',{
		id:'B['+B.length+']', left:15, top:375, angle:10, fill:'red'
	}
)), B.push(b);
var duration1=9000;
var onComplete1=function(){
	b.set({
		stroke:'black', strokeWidth:1, fill:'green',
		shadow:'rgba(0,0,0,0.3) 5px 5px 5px', fontWeight:'bold'
	});
	option.onComplete=onComplete2;
	option.duration=duration2;
	b.animate({angle:10},option);
}
var duration2=3000;
var onComplete2=function(){
	b.setGradient('fill', { // colorful
		x1:0, y1:0, x2:b.width, y2:b.height/2,
		colorStops: {
		    0:"red", 0.05:"orange", 0.1:"green", 0.25:"blue", 0.7:"purple", 1:"black"
		}
	});
	option.onComplete=undefined; // no more animation
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
// dog image animating on canvas
var dog, I=[];
var DogImg=document.getElementById('DogImg') // image DogImg
canvas.add(dog=new fabric.Image(DogImg, {
	id:'I['+I.length+']', left:-25, top:160, angle:0, opacity:0.3
})), I.push(dog);
option.onComplete=undefined;
dog.animate('angle',-30,option);
canvas.add(dog=new fabric.Image(DogImg, {
	id:'I['+I.length+']', left:185, top:360, angle:0, opacity:0.3
})), I.push(dog);
dog.animate('angle',-30,option);
fabric.Image.fromURL('http://fabricjs.com/article_assets/9.png', function(webDog) {
	dog=webDog;
	dog.set({
		id:'I['+I.length+']', left:-48, top:15, opacity: 0.30
	});
	canvas.add(dog), I.push(dog);
	dog.animate('angle',-30,option);
});
// stickman animating on canvas
var L=[], C=[], T=[];
function makeLine(coords) {
	var line;
	canvas.add(line=new fabric.Line(coords, {
		id:'L['+L.length+']', fill:'red', stroke:'red', strokeWidth:5, selectable:false
	})), L.push(line);
	return line;
}
function makeCircle(radius, cx, cy, headLine, tailLine1, tailLine2, tailLine3) {
	var circle, text;
	canvas.add(circle=new fabric.Circle({
		id:'C['+C.length+']', left:cx-radius-175, top:cy-radius-50,
		hasControls:false, hasBorders:false,
		headLine:headLine, tailLine1:tailLine1, tailLine2:tailLine2, tailLine3:tailLine3,
		strokeWidth:5, radius:radius, fill:'#fff', stroke:'#666'
	})), C.push(circle);
	canvas.add(text=new fabric.Text('C'+(C.length-1).toString(16),{
		id:'T['+T.length+']', left:cx-4-175, top:cy-4-50, fontSize: 10
	})), T.push(text);
	text.circle=circle, circle.text=text;
	if(tailLine1)
		tailLine1.headCircle=circle;
	if(tailLine2)
		tailLine2.headCircle=circle;
	if(tailLine3)
		tailLine3.headCircle=circle;
	if(headLine){
		headLine.tailCircle=circle;
		var left=headLine.left
		var top =headLine.top 
		headLine.left-=175, headLine.top-=50;
		headLine.animate({
			left:left, top :top
		},option);
	}
	option.duration=9900;
	circle.animate({'left':cx-radius,'top':cy-radius},option);
	text  .animate({'left':cx-4     ,'top':cy-4     },option);
	return circle;
}
L0=makeLine([ 250, 125, 250, 175 ]),
L1=makeLine([ 250, 175, 250, 250 ]),
L2=makeLine([ 250, 250, 200, 350 ]),
L3=makeLine([ 250, 250, 300, 350 ]),
L4=makeLine([ 250, 175, 218, 175 ]),
L5=makeLine([ 250, 175, 282, 175 ]),
L8=makeLine([ 218, 175, 198, 195 ]);
L6=makeLine([ 198, 195, 175, 225 ]),
L9=makeLine([ 282, 175, 302, 195 ]);
L7=makeLine([ 302, 195, 325, 225 ]);
C0=makeCircle(20, L0.x1, L0.y1, null, L0),
C1=makeCircle(20, L0.x2, L0.y2, L0, L1, L4, L5),
C2=makeCircle(20, L1.x2, L1.y2, L1, L2, L3),
C3=makeCircle(12, L2.x2, L2.y2, L2),
C4=makeCircle(12, L3.x2, L3.y2, L3),
C5=makeCircle(12, L4.x2, L4.y2, L4, L8),
C6=makeCircle(12, L5.x2, L5.y2, L5, L9),
C7=makeCircle(12, L6.x2, L6.y2, L6),
C8=makeCircle(12, L7.x2, L7.y2, L7),
C9=makeCircle(8, L8.x2, L8.y2, L8, L6),
Ca=makeCircle(8, L9.x2, L9.y2, L9, L7);
var T0=T[0], T1=T[1], T2=T[2], T3=T[3], T4=T[4], T5=T[5], T6=T[6], T7=T[7], T8=T[8], T9=T[9], Ta=T[10];
var G;
setTimeout(function(){
	G = new fabric.Group(
		[ L8, C9, L9, Ca,
		  L0, L1, L2, L3, L4, L5, L6, L7,
		  C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, Ca,
		  T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, Ta ], 
		{ id:'G', left:150, top:100, angle:-10 }
	);
	canvas.add(G);
	G.animate('angle',0,option);
},13000);
// show all objects on fabric canvas
var attributes='type,fill,stroke,strokeWidth,left,top,width,height,angle,radius,cx,cy,x1,y1,x2,y2,text';
var showAllObjects=function(){
	console.log(canvas._objects.map(function(o,i){
	return i+' '+o.type+
		(o.id    ?' id='    +o.id       :'')+
		' left='+o.left+' top='+o.top+' width='+o.width+' height='+o.height+
		(o.angle ?' angle=' +o.angle    :'')+
		(o.radius?' radius='+o.radius   :'')+
		(o.x1    ?' x1='    +o.x1       :'')+
		(o.y1    ?' y1='    +o.y1       :'')+
		(o.x2    ?' x2='    +o.x2       :'')+
		(o.y2    ?' y1='    +o.y2       :'')+
		(o.type==='text'   ?' text="'+o.text+'"' :'')+
		(o._originalElement? ' src="'+o._originalElement.currentSrc+'"':'')
}).join('\n'))}