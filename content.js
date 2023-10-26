
var data = '';
document.addEventListener('keydown', (event)=> {    
	if (event.key=="."){
		const d = new Date();
		let time = d.getTime();
		console.log(data, time)
		data = ""
	}
	else {
		data+=event.key
	}
});


