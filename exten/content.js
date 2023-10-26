
var data = '';
document.addEventListener('keydown', (event)=> {    
	if (event.key=="."){
		console.log(data)
		data = ""
	}
	else {
		data+=event.key
	}
});


