
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value =""
}

function claculate(){
  try{
      display.value = eval(display.value)
  }catch(error){
    display.value ="Errror"
  }
}



document.addEventListener("keydown", (e) => {
  const key = e.key;

  // numbers & dot
  if ((key >= "0" && key <= "9") || key === ".") {
    appendToDisplay(key);
  }

  // operators
  else if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendToDisplay(key);
  }

  // enter = calculate
  else if (key === "Enter") {
    e.preventDefault(); // stop form submit
    claculate();
  }

  // backspace
  else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  // clear
  else if (key === "Escape") {
    clearDisplay();
  }
});
