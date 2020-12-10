exports.factorial=function(a){
       var fact=1;
	   for(var i=1;i<=a;++i)
	   {
	      fact=fact*i;
	   }
	   return fact;	   
}

exports.myprime=function(a){
	if(a%2!=0)
		return true;
	return false;
}

exports.printable=function(a){
	var t=[];
	for(var i=1;i<=10;i++)
	{
		t.push(i+"x"+a+"="+parseInt(a*i)+"\r\n");
	}
	return t;
}