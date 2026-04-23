
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}


function cekKurungSeimbang(ekspresi) {
  const stack = new Stack();

  for (let char of ekspresi) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }


  return stack.isEmpty();
}


const testCases = [
  "(2 + 3) * (4 - 1)",
  "((a + b)",
  ")(",
  "((()))",
  "(a + b) * (c + d)",
];

testCases.forEach((exp) => {
  console.log(`'${exp}' → Seimbang: ${cekKurungSeimbang(exp)}`);
});
