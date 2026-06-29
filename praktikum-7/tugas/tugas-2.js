class MinStack {
    constructor() {
        this.stackData = [];
        this.stackMin = [];
    }

    push(value) {
        this.stackData.push(value);

        if (
            this.stackMin.length === 0 ||
            value <= this.stackMin[this.stackMin.length - 1]
        ) {
            this.stackMin.push(value);
        }
    }

    pop() {
        if (this.stackData.length === 0) {
            return null;
        }

        const removed = this.stackData.pop();

        if (removed === this.stackMin[this.stackMin.length - 1]) {
            this.stackMin.pop();
        }

        return removed;
    }

    peek() {
        if (this.stackData.length === 0) {
            return null;
        }

        return this.stackData[this.stackData.length - 1];
    }

    getMin() {
        if (this.stackMin.length === 0) {
            return null;
        }

        return this.stackMin[this.stackMin.length - 1];
    }

    isEmpty() {
        return this.stackData.length === 0;
    }

    print() {
        console.log(this.stackData.join(" -> "));
    }
}

const stack = new MinStack();

stack.push(5);
stack.push(3);
stack.push(7);
stack.push(2);

console.log("getMin() =", stack.getMin()); // 2

stack.pop(); // hapus 2
console.log("getMin() =", stack.getMin()); // 3

stack.pop(); // hapus 7
console.log("getMin() =", stack.getMin()); // 3