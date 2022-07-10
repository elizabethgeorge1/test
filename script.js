//DOM Manipulation: To Change the color of the submit button to gray upon submitting the form.
function change() {
  document.getElementById("btn").style.backgroundColor = "grey";
  document.getElementById("btn").style.color = "white";

  const isValidEmail = validateEmail(); //call validaateEmail()
  if (!isValidEmail) {
    document.getElementById("btn").disabled = false;
    alert("You have entered an invalid email address!");
    return;
  }
  document.getElementById("btn").disabled = true;
}

//Regex: Validate email.
function validateEmail() {
  var email = document.getElementById("email").value;
  console.log(email);

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

//Event: Employee Form
const form = document.getElementById("contact-form");

form.addEventListener("submit", callbackFunction);

function callbackFunction(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  console.log(formDataObj);
}

//Debounce: Delay submit by 2 sec.
const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
document.getElementById("btn").addEventListener(
  "click",
  debounce((e) => {
    console.log("clicked");
  }, 2000)
);
