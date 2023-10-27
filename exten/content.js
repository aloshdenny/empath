// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


async function sendtodb(timestamp, prompt, mood, score) {
	console.log(timestamp, prompt, mood, score)
	const response = await chrome.runtime.sendMessage({timestamp: timestamp, prompt:prompt, mood:mood, score:score});
	console.log(response);
}


var data = '';
document.addEventListener('keydown', (event)=> { 
	
	//console.log(event.key.length)
	if ((event.key=="." || event.key=="?")&& data.length>50){
		const d = new Date()
		const time = d.getTime()
		console.log(data, time)
		temp = data
		query({"inputs": data}).then((response) => {
			console.log(JSON.stringify(response));
			sendtodb(time, temp, response[0][0]["label"], response[0][0]["score"])
		})
		
		data = ""
	}
	else if (event.key == "Backspace"){
		data = data.slice(0, data.length-1)
	}
	else if (event.key.length == 1) {
		data+=event.key
	}
});


async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/arpanghoshal/EmoRoBERTa",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

function updateTable(data) {
    if (data) {
        document.getElementById("field1").textContent = data.field1;
        document.getElementById("field2").textContent = data.field2;
        document.getElementById("field3").textContent = data.field3;
    }
}

chrome.runtime.sendMessage({ action: "get_data" }, function (response) {
    if (response.data) {
        updateTable(response.data);
    }
});



