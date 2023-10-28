import {initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js'
import { getDatabase, set, get, ref, child, push, onValue } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js'
  

const firebaseConfig = {
    apiKey: "AIzaSyBLOrV8K_-MYavFlHf7HiYwUHmUQSt2YzA",
    databaseURL: " https://empath-866ce-default-rtdb.asia-southeast1.firebasedatabase.app",
    authDomain: "empath-866ce.firebaseapp.com",
    projectId: "empath-866ce",
    storageBucket: "empath-866ce.appspot.com",
    messagingSenderId: "688144290902",
    appId: "1:688144290902:web:2cb7523e3db636e6e717f7",
    measurementId: "G-BC0BZWP1VD"
};

const app = initializeApp(firebaseConfig);
const db  = getDatabase()
const dbRef = ref(getDatabase());



function getdata(){
	get(child(dbRef, `data`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}  



function adddata(timestamp, prompt, mood, score){
    console.log(timestamp, prompt, mood, score)
	set(ref(db, "data/"+timestamp), {
		prompt: prompt,
		mood: mood,
		score: score,
    cluster:""
	});
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
        
        adddata(request.timestamp,request.prompt, request.mood, request.score)
        senddatatopopup()
      if (request.greeting === "hello")
        sendResponse({farewell: "goodbye"});
    }
  );



function senddatatopopup() {
  latest = getdata()
  console.log(latest)
  chrome.runtime.sendMessage({timestamp: timestamp, prompt:prompt, mood:mood, score:score});
}


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "get_data") {
      getdata().then((data) => {
          sendResponse({ data: data });
      });
      return true; 
  }
});


function updateTable(data) {
  if (data) {
      document.getElementById("field1").textContent = data[Object.keys(data)[0]];
     }
}
console.log(data[Object.keys(data)[0]])
console.log(getdata())


