
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const User_LS = "cuurentUser",
  SHOWING_ON = "showing";

//localStorage.clear();

function saveName(name){
  localStorage.setItem("name",name);
  loadName();
}

function handleSubmit(event) {
  //Default is Refresh. so prevent Default event
  event.preventDefault();
  saveName(input.value);
}

function askForName() {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  greeting.innerText = "Hello " + text;
}

function loadName() {

  const currentUser = localStorage.getItem("name");

  if (currentUser == null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }

}

function init() {
  loadName();
}

init();