function message(){
	var fname=document.getElementById("fname").value;
	var lname=document.getElementById("lname").value;
	var email=document.getElementById("email").value;
	var mobile=document.getElementById("mobile").value;
	var msg=document.getElementById("msg").value;
	
	if(fname === "" || lname === "" || email === "" || mobile === "" || msg === ""){
		
	alert('Fields Can`t be Empty!');
	}
	
	else{
		alert('Your Message is Successfully Sent!');
	}
}