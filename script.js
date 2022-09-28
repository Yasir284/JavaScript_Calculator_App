// 1.  Calculator App:
//   Build a simple calculator app which performs simple arithmetic operations such as
//   addition, subtraction, multiplication and division.

let textView = document.querySelector(".textView");
let btn = document.getElementsByClassName("btn");
let clearBtn = document.querySelector(".red");

function insert(val) {
  if (
    val != "." &&
    isNaN(val) &&
    textView.value.length > 3 &&
    isNaN(textView.value[textView.value.length - 2])
  ) {
    textView.value = textView.value.slice(0, textView.value.length - 3);
  }
  textView.value += val;
}

function back() {
  let text = textView.value.split("");
  console.log(text);
  if (textView.value[textView.value.length - 1] === " ") {
    text.pop();
    text.pop();
  }
  text.pop();
  textView.value = text.join("");
}

function clearCalc() {
  textView.value = "";
}

let operation = {
  "/": function (x, y) {
    return x / y;
  },
  "*": function (x, y) {
    return x * y;
  },
  "+": function (x, y) {
    return x + y;
  },
  "-": function (x, y) {
    return x - y;
  },
};

function getOperatorIndex(text, operator) {
  let index = [];
  text.forEach((item, i) => {
    if (item == operator) {
      index.push(i);
    }
  });
  return index;
}

function equals() {
  let text = textView.value.split(" ");

  let operators = ["/", "*", "+", "-"];
  for (operator of operators) {
    if (text.includes(operator)) {
      let index = getOperatorIndex(text, operator);
      while (index.length > 0) {
        let leftIndex = index[0] - 1;
        let rightIndex = index[0] + 1;
        let left = Number(text[leftIndex]);
        let right = Number(text[rightIndex]);
        let evaluate = operation[operator](left, right);
        text.splice(leftIndex, 3, evaluate);
        index = getOperatorIndex(text, operator);
      }
    }
  }
  return (textView.value = text.join(""));
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "/":
      insert(" / ");
      break;
    case "*":
      insert(" * ");
      break;
    case "+":
      insert(" + ");
      break;
    case "-":
      insert(" - ");
      break;
    case ".":
      insert(e.key);
      break;
    case "Enter":
      equals();
      break;
    case "Backspace":
      back();
      break;
    case "Delete":
      clearCalc();
      break;
    case "0":
      insert(e.key);
      break;
    case "1":
      insert(e.key);
      break;
    case "2":
      insert(e.key);
      break;
    case "3":
      insert(e.key);
      break;
    case "4":
      insert(e.key);
      break;
    case "5":
      insert(e.key);
      break;
    case "6":
      insert(e.key);
      break;
    case "7":
      insert(e.key);
      break;
    case "8":
      insert(e.key);
      break;
    case "9":
      insert(e.key);
      break;

    default:
      break;
  }

  console.log(e.key);
});

// ======Optimized solution =====
// function equals() {
//   let numbers = textView.value.split(" ").filter((item) => !isNaN(item));
//   let operators = textView.value.split(" ").filter((item) => isNaN(item));
//   let allOperators = ["/", "*", "+", "-"];

//   for (ourOperator of allOperators) {
//     while (operators.includes(ourOperator)) {
//       const index = operators.indexOf(ourOperator);
//       const answer = operation[ourOperator](
//         Number(numbers[index]),
//         Number(numbers[index + 1])
//       );
//       numbers.splice(index, 2, answer);
//       operators.splice(index, 1);
//     }
//   }
//   console.log(numbers.join(""));
//   return (textView.value = numbers.join(""));
// }
