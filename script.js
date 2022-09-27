// 1.  Calculator App:
//   Build a simple calculator app which performs simple arithmetic operations such as
//   addition, subtraction, multiplication and division.

let textView = document.querySelector(".textView");
let btn = document.getElementsByClassName("btn");
let clearBtn = document.querySelector(".red");

function insert(value) {
  if (isNaN(value) && isNaN(textView.value[textView.value.length - 2])) {
    textView.value = textView.value.slice(0, textView.value.length - 1);
  }
  textView.value += value;
}

function back() {
  let text = textView.value.split("");
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
  let numbers = textView.value.split(" ").filter((item) => !isNaN(item));
  let operators = textView.value.split(" ").filter((item) => isNaN(item));
  let allOperators = ["/", "*", "+", "-"];

  for (ourOperator of allOperators) {
    while (operators.includes(ourOperator)) {
      const index = operators.indexOf(ourOperator);
      const answer = operation[ourOperator](
        Number(numbers[index]),
        Number(numbers[index + 1])
      );
      numbers.splice(index, 2, answer);
      operators.splice(index, 1);
    }
  }
  console.log(numbers.join(""));
  return (textView.value = numbers.join(""));
}
// 22 + 5 + 12 / 2 / 2 + 1
// if (text.includes(operator)) {
//   let index = getOperatorIndex(text, operator);
//   while (index.length > 0) {
//     let leftIndex = index[0] - 1;
//     let rightIndex = index[0] + 1;
//     let left = parseInt(text[leftIndex]);
//     let right = parseInt(text[rightIndex]);
//     let evaluate = operation[operator](left, right); //4
//     text.splice(leftIndex, 3, evaluate);
//     index = getOperatorIndex(text, operator);
//   }
// }
