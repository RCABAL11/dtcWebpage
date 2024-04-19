function isPalindrome() {
    var input = document.getElementById("numberInput").value;
	
	var reversedInput = input.split("").reverse().join("");
	
	var uniquenumbers = [...new Set(input.split(""))];
	uniqueNumbers.sort();
	
	var result = document.getElementById("result");
	if(input === reversedInput){
		result.innerHTML = `Yes, <span>'${input.value}'</span> is a palindrome!`;
		result.innerHTML = "<br> Result: " + uniqueNumbers;
		
	}else
	{
		result.innerHTML = `No, <span>'${input.value}'</span> isn't a palindrome!`;
	}

}