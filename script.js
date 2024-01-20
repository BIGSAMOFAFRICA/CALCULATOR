const display = document.querySelector(".display");
const button = document.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","="];
let output = ""

const calculate = (btnvalue) => {
    if(btnvalue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"))
    } else if(btnvalue === "AC"){
      output = ""
    } else if(btnvalue ==="DEL"){
      output = output.toString().slice(0, -1)
    } else{
        if(output === "" && specialChars.includes(btnvalue)) return;
        output += btnvalue;
    }
    display.value = output;
};
button
.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));  
});