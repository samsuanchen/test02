// pset.js �w�q���O (+set) �P +set �i�N �e���W ���� �� �ݩ� �W�[ ���w��
function doPSet(obj,att,val){
// doPSet ( val att obj -- )
	obj=obj||vm.dStack.pop(), att=att||vm.dStack.pop(),
	val=val||vm.dStack.pop();
	var lst=Array.isArray(obj)?obj:[obj];
	lst.forEach(function(o){
		if(o.set)
			o.set(att,o.get(att)+val);
		else if(o.setAttribute)
			o.setAttribute(parseInt(att,o.getAttribute(att))+val);
		else 
			o[att]+=val;
	})
	canvas.renderAll();
}
vm.addWord('(+set)',doPSet);
// (+set) ( val att obj -- )
vm.addWord('+set',function(){
// +set ( val obj <att> -- ) or (val <obj.att> -- )
// -5 +set C1.left 5 +set C1.radius
// -5 C1 +set left 5 C1 +set radius
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
		vm.compileCode('(+set)');
	} else
		doPSet(obj,att,vm.dStack.pop());
},'immediate');
// vm.addWord('dbg',function(){
// });
