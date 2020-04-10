const $numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const $dot = document.getElementById("dot");
const $operators = ["+", "-", "*", "/", "="];
const $equal = document.getElementById("eq");
const $clear = document.getElementById("clear");
const $display = document.getElementById("display");
let $buttons_pressed = document.getElementById("keys");
let $values = [];
let $vNum = 0;
let op = false;
let $result = 0;
let $opKey;

$buttons_pressed.addEventListener("click", ev => {
    console.log(op, $values.length);
    let $key = ev.target.textContent;
    if ($key == "AC") {
        $display.innerHTML = "0";
        op == false;
        $values = [];
        $vNum = 0;
    } else if ($vNum.length != 0 && $operators.includes($key)) {
        if ($values.length == 2) {
            switch ($opKey) {
                case "+": $result = (parseFloat($values[0]) + parseFloat($values[1])).toFixed(4);
                    if (parseFloat($result) == parseInt($result)) $result = parseInt($result);
                    break;
                case "-": $result = (parseFloat($values[0]) - parseFloat($values[1])).toFixed(4);
                    if (parseFloat($result) == parseInt($result)) $result = parseInt($result);
                    break;
                case "*": $result = (parseFloat($values[0]) * parseFloat($values[1])).toFixed(4);
                    if (parseFloat($result) == parseInt($result)) $result = parseInt($result);
                    break;
                case "/": $result = (parseFloat($values[0]) / parseFloat($values[1])).toFixed(4);
                    if (parseFloat($result) == parseInt($result)) $result = parseInt($result);
                    break;

            }
            $values[0] = $result;
            if ($opKey != "=") {
                $display.innerHTML = $result;
            }
        }
        $opKey = $key;
        op = false;
        if ($key != "=") {
            $vNum = 1;
        } else {
            $vNum = 0;
            $values.pop();
        }
    } else {
        if ($numbers.includes($key) && (op == false || $display.innerHtml == 0)){
            $display.innerHTML = $key;
            $values[$vNum] = $display.innerHTML;
            op = true;
        } else {
            if (($numbers.includes($key)|| $key == ".") && $display.innerHTML.length <= 5) {
                if (!($display.innerHTML.includes(".") && $key == ".")) {
                    $display.innerHTML += $key;
                    $values[$vNum] = $display.innerHTML;
                    op = true;
                }
            }
        }
    }
});
