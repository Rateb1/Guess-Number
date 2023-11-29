const msg = document.getElementById("msg");
const randomNum = getRandomNumber();

// Define siting
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

//   Speech Object Example
let recognition = new window.SpeechRecognition();
// Start
recognition.start();
// Event
recognition.addEventListener("result", onspeak);
// Function
function onspeak(e) {
  const message = e.results[0][0].transcript;
  writeMessage(message);
  checkNumber(message);
}
// Write Message
function writeMessage(message) {
  msg.innerHTML = `<div>You Said: </div>
  <span class="box">${message}</span>`;
}
// Check Number
function checkNumber(message) {
  const num = +message;
  if (Number.isNaN(num)) {
    msg.innerHTML += `<div>That Is Not A Valid Number</div>`;
    return;
  }
  if (num > 100 || num < 0) {
    msg.innerHTML = `<div>Number Must Be Between 0 and 100</div>`;
  }
  if (num === randomNum) {
    document.body.innerHTML = `<div class = "win"><h2>Heyyy You Find The Correct Number!!! <br><br> It Was ${num}</h2>
        <button class="play-again" id="play-again"><a href="index.html">Play Again</a></button></div>

    `;
  } else if (num > randomNum) {
    msg.innerHTML += "<div>GO LOWER</div>";
  } else {
    msg.innerHTML += "<div>GO HIGHER</div>";
  }
}
// event
recognition.addEventListener("end", (e) => {
  recognition.start();
});
// Random Number
function getRandomNumber() {
  return Math.round(Math.random() * 100);
}

console.log(randomNum);
