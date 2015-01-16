// extData.js 讓 jef 能認得 色碼 及 物件屬性 放上 data stack
vm.extData=function(tkn){
	if(tkn.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/))
		return tkn;									// hex rgb value #ff0 or #123456 --> '#ff0' or '#123456'
	if(tkn.match(/^#[0-9a-f]{4}$/))
		return 'rgba('+
			parseInt(tkn.charAt(1),16)*255/15+','+
			parseInt(tkn.charAt(2),16)*255/15+','+
			parseInt(tkn.charAt(3),16)*255/15+','+
			parseInt(tkn.charAt(4),16)/15+')';		// hex rgba value #ff08 --> rgba(255,255,0,.52)
	if(tkn.match(/^#[0-9a-f]{8}$/))
		return 'rgba('+
			parseInt(tkn.substr(1,2),16)+','+
			parseInt(tkn.substr(3,2),16)+','+
			parseInt(tkn.substr(5,2),16)+','+
			parseInt(tkn.substr(7,2),16)/255+')';	// hex rgba value #ffff0080 --> rgba(255,255,0,.52)
	var o;
	if(o=vm[tkn])
		return vm[tkn];								// vm attribute --> base
	if(o=eval(tkn))
		return o;									// js value -- C1, C1.radius, [C3,C4,T3,T4].top
}
