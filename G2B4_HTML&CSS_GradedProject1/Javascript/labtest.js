function loadDateTime(){
	const today = new Date();
	const formatedDate = today.toISOString().substring(0,10);
	console.log(formatedDate);
	document.getElementById("currentDate").value = formatedDate;
	document.getElementById("currentDate").min = formatedDate;
	const hour = today.getHours();
	const min = today.getMinutes();
	var time = hour + ":" + min;
	console.log(time);
	document.getElementById("currentTime").value = time;
}
loadDateTime();

function validateCheckbox(){
	let cvalid = true;
	let checkboxes = document.getElementsByName("test");
	console.log(checkboxes);
	for(let checkbox of checkboxes){
		if(checkbox.checked){
			cvalid = false;
			return true;
		}
	}
	if(cvalid){
		alert("please check atleast one checkbox")
		return false;
	}
}

function validateRadio(){
	let rvalid = true;
	let radios = document.getElementsByName("copy");
	console.log(radios);
	for(let radio of radios){
		if(radio.checked){
			rvalid = false;
			return true;
		}
	}
	if(rvalid){
		alert("please any one radio button")
		return false;
	}
}

function validate(){
	let checkboxResult = validateCheckbox();
	let radioResult = validateRadio();
	if(checkboxResult==true && radioResult==true){
		return true;
	} else{
		return false;
	}
}