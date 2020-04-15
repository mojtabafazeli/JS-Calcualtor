//declarations
let $numsArr = [null, null];
let $result = null;
let $opKey = null;
let $numsArrInd = 0
let $previousKey = "number";

//elements handlers
const $numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const $dot = document.getElementById("dot");
const $operators = ["+", "-", "*", "/", "="];
const $equal = document.getElementById("eq");
const $clear = document.getElementById("clear");
const $display = document.getElementById("display");
let $buttons_pressed = document.getElementById("keys");

//functions
function ClearScreen() {
    $display.innerHTML = 0;
    $numsArr= [null, null]
    $previousKey = null;
    $opKey = null;    
    $result = null;
    $numsArrInd = 0;
    
}

function Calculate(num1, num2 , opKey) {
    let result;
    switch (opKey) {
                case "+":
                    result = (parseFloat(num1) + parseFloat(num2)).toFixed(4);
                    if (parseFloat(result) == parseInt(result)) result = parseInt(result);
                    break;
                case "-":
                    result = (parseFloat(num1) - parseFloat(num2)).toFixed(4);
                    if (parseFloat(result) == parseInt(result)) result = parseInt(result);
                    break;
                case "*":
                    result = (parseFloat(num1) * parseFloat(num2)).toFixed(4);
                    if (parseFloat(result) == parseInt(result)) result = parseInt(result);
                    break;
                case "/":
                    result = (parseFloat(num1) / parseFloat(num2)).toFixed(4);
                    if (parseFloat(result) == parseInt(result)) result = parseInt(result);
                    break;

            }
    if (parseFloat($result) == parseInt($result)) result = parseInt(result);
    return result;
    
}

//key event listener
$buttons_pressed.addEventListener("click", ev => {
    //catching the key pressed
    let $key = ev.target.textContent;
    //check if it is the AC
    if ($key == "AC") {
        ClearScreen();
    //check if it is operator key
    } else if ($operators.includes($key)) {
        if ($numsArr[0] != null) {
            $previousKey = "operator";
            if ($numsArr[1] != null) {
                $numsArr[0] = Calculate($numsArr[0], $numsArr[1], $opKey);
                $numsArr[1] = null;
                $opKey = "=";
                $display.innerHTML = $numsArr[0];
            }
            if ($key != "=") {$opKey = $key;}
        }
    } else {
        
        if($previousKey == "operator") {
            $display.innerHTML = $key;
            if ($opKey == "=") {$numsArrInd = 0
            } else {$numsArrInd = 1;}
            $numsArr[$numsArrInd] = parseFloat($key);
        }  else if ($key == ".") {
            if (!($display.innerHTML.includes("."))) {
                $display.innerHTML += $key;
                $numsArr[$numsArrInd] = $display.innerHTML;
                };
        } else {
            if($display.innerHTML.includes('.')) {
                $display.innerHTML += $key;
                $numsArr[$numsArrInd] = parseFloat($display.innerHTML);
            } else {
                 $numsArr[$numsArrInd] = (parseFloat($display.innerHTML) * 10 ) + parseFloat($key);
                   $display.innerHTML = $numsArr[$numsArrInd];
               }
        }
        $previousKey = "number"
    }
    
});
    