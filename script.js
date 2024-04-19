function enter(){
	var uname=document.getElementById("uname").value;
	var upass=document.getElementById("upass").value;
	
	if(uname == "cabalpogi" && upass == "iloveyou143"){
		var result = confirm("Successfully Login");
		if(result == true) {
	    window.location.href="home.html";
		}
		
	}
	if(uname != "cabalpogi" && upass == "iloveyou143"){
		alert("Incorrect Username");
	}
	if(uname == "cabalpogi" && upass != "iloveyou143"){
		alert("Incorrect Password")
	}
}

function logout(){
	var result = confirm("Do you want to continue?");
	if(result == true) {
		window.location.href="log.html";
	
	}
	else{
			 event.preventDefault();
		
	}
}