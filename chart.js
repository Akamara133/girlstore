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


/*for (i = 0; i < storedArray.length; i++) {
             alert(storedArray[i]);
}*/



function addToChart(name, price, quantity){
	

			arrayname.push(name);
			arrayprice.push(price);
			arrayquantity.push(quantity);
		
		
			window.sessionStorage.setItem("name", JSON.stringify(arrayname));
			window.sessionStorage.setItem("price", JSON.stringify(arrayprice));
			window.sessionStorage.setItem("quantity", JSON.stringify(arrayquantity));
			
		alert("Added to the Basket ");
}