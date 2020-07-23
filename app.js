// set time and display
const time = document.getElementById("time");
setInterval(() => {
  const date = new Date();
  let hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const ampm = hour < 12 ? "AM" : "PM";

  hour = hour % 12 || 12;

  const currenttime = ` ${addzero(hour)}:${addzero(min)}:${addzero(
    sec
  )}${ampm}`;
  time.innerHTML = currenttime;
}, 1000);

function addzero(time) {
  return time < 10 ? "0" + time : time;
}

//set greeting
function greet() {
  const greeting = document.getElementById("greeting");
  let date = new Date();

  let hour = date.getHours();

  if (hour < 12) {
    greeting.textContent = "Good Morning";
    document.body.style.backgroundImage = "url(./image/morning.jpg)";
    document.body.style.color = "#111";
  }
  if (hour < 18) {
    greeting.textContent = "Good Afternoon";
    document.body.style.backgroundImage = "url(./image/afternoon.jpg)";
  } else {
    greeting.textContent = "Good Evening";
    document.body.style.backgroundImage = "url(./image/night.jpg)";
  }
}
greet();

// get and set name
const name = document.getElementById("name");
const schedule = document.getElementById("schedule");
name.addEventListener("keypress", setname);
name.addEventListener("blur", setname);
schedule.addEventListener("keypress", setschedule);
schedule.addEventListener("blur", setschedule);

function getname() {
  if (localStorage.getItem("name") === null) {
    name.textContent = `[Please enter your name]`;
  } else {
    name.textContent = localStorage.getItem("name");
  }
}
getname();

// set name
function setname(e) {
  if (e.type === "keypress") {
    //check if enter is pressed
    if (e.keyCode === 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// set schedule

function setschedule(e) {
  if (e.type === "keypress") {
    //check if enter is pressed
    if (e.keyCode === 13) {
      localStorage.setItem("schedule", e.target.innerText);
      schedule.blur();
    }
  } else {
    localStorage.setItem("schedule", e.target.innerText);
  }
}

//get schedule
function getschedule() {
  if (localStorage.getItem("schedule") === null) {
    schedule.textContent = `[Please enter your schedule]`;
  } else {
    schedule.textContent = localStorage.getItem("schedule");
  }
}

getschedule();
