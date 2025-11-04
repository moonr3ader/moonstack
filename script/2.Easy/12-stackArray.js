// // 12-stackArray.js

// STACK USING ARRAY
// declaration of stack
class myStack{
    // constructor
    constructor(cap){
        //array to store elements
        this.arr = new Array(cap);

        // maximum size of stack
        this.capacity = cap;

        // index of top element
        this.top = -1;
    }

    // operations on stack
    // 1. PUSH
    push(x){
        if(this.top === this.capacity - 1){
            console.log('Stack Overflow');
            return;
        }
        
        this.arr[++this.top] = x;
    }

    // 2. POP
    pop(){
        if(this.top === -1){
            console.log('Stack underflow');
            return -1;
        }

        return this.arr[this.top--];
    }

    // 3. TOP OR PEEK
    peek(){
        if(this.top === -1){
            console.log('Stack is Empty');
            return -1;
        }
        return this.arr[this.top];
    }

    // 4. isEmpty
    isEmpty(){
        return this.top === -1;
    }

    // 5. isFull
    isFull(){
        return this.top === this.capacity - 1;
    }

}
// DRIVER CODE
let st = new myStack(4);
st.push(1);
st.push(2);
st.push(3);
st.push(4);

console.log(st);
console.log("Popped: " + st.pop());
console.log("Top element: " + st.peek());
console.log("Is the stack empty: " + (st.isEmpty() ? "Yes" : "No"));
console.log("Top element: " + st.peek());
console.log("Is stack full: " + (st.isFull() ? "Yes" : 'No'));