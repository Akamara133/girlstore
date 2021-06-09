if ( sessionStorage.getItem("name")==null ) 
    {
		var arrayname = [];
		var arrayprice = [];
		var arrayquantity = [];
    }
	else{
		var arrayname = JSON.parse(sessionStorage.getItem("name"));
		var arrayprice = JSON.parse(sessionStorage.getItem("price"));
		var arrayquantity =JSON.parse( sessionStorage.getItem("quantity"));
		
	}

var total=0;
var tableb = document.getElementById('customers'); 
for (i = 0; i < arrayname.length; i++) {
             //alert(arrayname[i]);
			 
			 
			 
				//var index=i+1;
				
				var tr = document.createElement('TR');
				tableb.appendChild(tr);
				
				var td0 = document.createElement('TD');
				td0.appendChild(document.createTextNode(arrayname[i]));
				tr.appendChild(td0);
						
				var td0 = document.createElement('TD');
				td0.appendChild(document.createTextNode(arrayprice[i]));
				tr.appendChild(td0);
				
				var td0 = document.createElement('TD');
				td0.appendChild(document.createTextNode(arrayquantity[i]));
				tr.appendChild(td0);
				
				var td0 = document.createElement('TD');
				var tot=arrayprice[i]*arrayquantity[i];
				td0.appendChild(document.createTextNode(tot));
				tr.appendChild(td0);
				
				total=total+tot;

			 
}

document.getElementById('total').innerHTML="Price of Element in Your Basket  : " +total+" $";
if(total>1000){
	var discount=total-(total*0.15);
	console.log(discount);
	document.getElementById('totaldiscount').innerHTML="Total Cost(After 15% discount)  : " +discount+" $";
}
function clearbasket(){
	
	sessionStorage.clear();
	var newUrls = "index.html";
	window.location=newUrls;
}
function buybasket(){
	alert("Thank you for your purchase in our Shop!!! See you soon");
	sessionStorage.clear();
	var newUrls = "index.html";
	window.location=newUrls;
}