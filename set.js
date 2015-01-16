// set.js 定義指令 (set) 與 set 可將 畫面上 物件 的 屬性 設為 指定值

function doSet(obj,att,val){
// doSet ( val att obj -- )
	obj=obj||vm.dStack.pop(), att=att||vm.dStack.pop(),
	val=val||vm.dStack.pop();
	var lst=Array.isArray(obj)?obj:[obj];
	lst.forEach(function(o){
		if(o.set)
			o.set(att,val);
		else if(o.setAttribute)
			o.setAttribute(att,val);
		else 
			o[att]=val;
	})
}
vm.addWord('(set)',doSet);
// (set) ( val att obj -- )
vm.addWord('set',function(){
// set ( val obj <att> -- ) or (val <obj.att> -- )
// C1.left-5 set C1.left C1.radius+5 set C1.radius
// C1.left-5 C1 set left C1.radius+5 C1 set radius
	var att, i, obj, x, val;
	att=vm.nextToken(), i=att.lastIndexOf('.');
	if(i<0)
		obj=vm.dStack.pop();
	else{
		x=att.substr(0,i), att=att.substr(i+1), obj=eval(x);
	}
	if(vm.compiling){
		if(i>0)vm.compileCode('doLit',att);
		vm.compileCode('doLit',obj);
		vm.compileCode('(set)');
	} else
		doSet(obj,att,vm.dStack.pop());
},'immediate');