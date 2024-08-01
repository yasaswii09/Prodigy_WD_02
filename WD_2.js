// Get the stopwatch elements
const stopwatchDisplay = document.getElementById("stopwatch-display");
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");
const lapButton = document.getElementById("lap-button");
const lapList = document.getElementById("lap-list");

// Initialize the stopwatch variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;
let lapTimes = [];

// Start the stopwatch
startButton.addEventListener("click", function() {
  isRunning = true;
  startButton.disabled = true;
  pauseButton.disabled = false;
  intervalId = setInterval(updateStopwatch, 1000);
});

// Pause the stopwatch
pauseButton.addEventListener("click", function() {
  isRunning = false;
  startButton.disabled = false;
  pauseButton.disabled = true;
  clearInterval(intervalId);
});

// Reset the stopwatch
resetButton.addEventListener("click", function() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  lapTimes = [];
  stopwatchDisplay.textContent = "00:00:00";
  lapList.innerHTML = "";
  isRunning = false;
  startButton.disabled = false;
  pauseButton.disabled = true;
});

// Lap the stopwatch
lapButton.addEventListener("click", function() {
  const lapTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  lapTimes.push(lapTime);
  const lapListItem = document.createElement("li");
  lapListItem.textContent = lapTime;
  lapList.appendChild(lapListItem);
});

// Update the stopwatch display
function updateStopwatch() {
  seconds++;
  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes >= 60) {
    hours++;
    minutes = 0;
  }
  stopwatchDisplay.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}