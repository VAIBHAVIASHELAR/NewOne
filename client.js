var m=require("./mymodule.js");
var http=require("http");
var fs=require("fs");
var url=require("url");
var qstring=require("querystring");

function process_request(req,res){
	const p=url.parse(req.url);
	console.log("query string : "+p.query)
	console.log("path : "+p.path);
	console.log(req.url);
	switch(p.pathname){
		case "/":
		     fs.readFile("form.html",function(err,data){
				 if(err){
					    res.end("error");
						console.log("error");
				 }else{
					 res.end(data);
				 }
			});
			break;
	  case "/calc":
                var d=qstring.parse(p.query);// /calc?num=3&sub=SUBMIT...........d={num:3,sub:"SUBMIT"}
                console.log("in calc");
                console.log(d.num);
                if(d.num<=5)
                {
                    //-------factorial----------------
                var factans=m.factorial(d.num);
                res.end("factorial is :: "+factans);
               
                }
                else if(d.num>5 && d.num<=10)
                {
                    //resp.end("The number is "+d.num);
                    var tabans=m.printable(d.num);
                    
                    res.end("the table of "+d.num+" is as follows\r\n"+tabans);
                }
                else
                {
                    var primeno=m.myprime(d.num);
                    if(primeno==true)
                    {
                        res.end("Its a prime number");
                    }
                    else
                    {
                        res.end("Its NOT!!! a prime number");
                    }
                }
			      		
	}
	
}
var srv=http.createServer(process_request);
srv.listen(8181);
console.log("server running on port 8181");
