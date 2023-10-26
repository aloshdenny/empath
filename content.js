
var data = '';
document.addEventListener('keydown', (event)=> {    
	if (event.key=="0"){
		console.log(data)
		data = ""
	}
	else {
		data+=event.key
	}
});


