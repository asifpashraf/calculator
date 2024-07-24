const screen = document.getElementById("screen");

function show(input){
    screen.value += input;
}


function clearDisplay(input){
    screen.value ="";
}

function calculate(input){
    screen.value = eval(screen.value)
}
function backspace(input){
    screen.splice(-1,1)=input;
}