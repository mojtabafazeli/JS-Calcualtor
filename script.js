const $numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const $dot = document.getElementById("dot");
const $operators = ["+", "-", "*", "/", "="];
const $equal = document.getElementById("eq");
const $clear = document.getElementById("clear");
const $display = document.getElementById("display");
let $buttons_pressed = document.getElementById("keys");
let $values = [null];
let $vNum = 0;
let op = false;
let $result = 0;
let $opKey;

$buttons_pressed.addEventListener("click", ev => {
    console.log($opKey);
    let $key = ev.target.textContent;
    if ($key == "AC") {
        $display.innerHTML = "0";
        op == false;
        $values = [];
        $vNum = 0;
    } else if ($operators.includes($key) && $values[0] != null) {
        if ($values.length == 2) {
            switch ($opKey) {
                case "+":
                    $result = (parseFloat($values[0]) + parseFloat($values[1])).toFixed(4);
                    if (parseFloat($result) == parseInt($result)) $result = parseInt($result);
                    break;
                case "-":
                    $result = (parseFloat($values[0]) - parseFloat($values[1])).toFixed(4);
                    if (parseFloat($result) == parseInt($result)) $result = parseInt($result);
                    break;
                case "*":
                    $result = (parseFloat($values[0]) * parseFloat($values[1])).toFixed(4);
                    if (parseFloat($result) == parseInt($result)) $result = parseInt($result);
                    break;
                case "/":
                    $result = (parseFloat($values[0]) / parseFloat($values[1])).toFixed(4);
                    if (parseFloat($result) == parseInt($result)) $result = parseInt($result);
                    break;

            }
            if ($result != "NaN") {
                $values[0] = $result;
            } else {
                $result = $values[0];
            }
            if ($opKey != "=") {
                $display.innerHTML = $result;
            }
        }
        $opKey = $key;
        op = false;
        console.log($values[0]);
        if ($key != "=" && $values.length == 1) {
            $vNum = 1;
        } else {
            if ( $result == $values[0]) {
                $vNum = 1;
                $values.pop();
            } else {
                $vNum = 0;
            }
        }
    } else {
        if ($numbers.includes($key) && (op == false || $display.innerHtml == 0)) {
            $display.innerHTML = $key;
            $values[$vNum] = $display.innerHTML;
            op = true;
        } else {
            if (($numbers.includes($key) || $key == ".") && $display.innerHTML.length <= 5) {
                if (!($display.innerHTML.includes(".") && $key == ".")) {
                    $display.innerHTML += $key;
                    $values[$vNum] = $display.innerHTML;
                    op = true;
                }
            }
        }
    }
});
