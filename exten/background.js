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
			return snapshot.val()
		}
	})
}



function adddata(timestamp, prompt, mood, score){
    console.log(timestamp, prompt, mood, score)
	set(ref(db, "data/"+timestamp), {
		prompt: prompt,
		mood: mood,
		score: score,
    cluster:""
	});
    sendtopopup()   
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.type == "forbackground"){
            console.log(sender.tab ?"from a content script:" + sender.tab.url : "from the extension");
      
            adddata(request.timestamp,request.prompt, request.mood, request.score)
            if (request.greeting === "hello")
                sendResponse({farewell: "goodbye"});
        }
      
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




// chart js

    // Replace this with your actual mood data and chart configuration
    const moodData = {
      emoji: "😊",
      text: "Happy"
  };

  // Current Mood
  const currentMoodEmoji = document.getElementById("currentMoodEmoji");
  const currentMoodText = document.getElementById("currentMoodText");
  currentMoodEmoji.textContent = moodData.emoji;
  currentMoodText.textContent = moodData.text;

  // Mood Over the Past 6 Hours Chart
  const moodChart = document.getElementById("moodChart").getContext("2d");
  const chartData = {
      labels: ["6 hours ago", "5 hours ago", "4 hours ago", "3 hours ago", "2 hours ago", "1 hour ago"],
      datasets: [{
          label: "Mood",
          data: [5, 4, 3, 4, 5, 4], // Replace with actual mood data
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1
      }]
  };
  const chartConfig = {
      type: "line",
      data: chartData,
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  max: 5,
                  stepSize: 1
              }
          }
      }
  };
  new Chart(moodChart, chartConfig);