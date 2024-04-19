function enter(){
	var uname=document.getElementById("uname").value;
	var upass=document.getElementById("upass").value;
	
	if(uname == "cabalpogi" && upass == "iloveyou143"){
		var result = confirm("Successfully Login");
		if(result == true) {
	    window.location.href="mainpage.html";
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
	if(result == false) {
		 event.preventDefault();
	}
	else{
		
		window.location.href="log.html";
	}
}

function home(){
	window.location.href="home.html";
}

let btnBack = document.querySelector('button');
	 
	  btnBack.addEventListener('click', () => {
	  window.history.back();
	  });
	  