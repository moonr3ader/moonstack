// 13-dynamicStack.js
class myStack{
    constructor(){
        this.arr = [];
    }

    push(x){
        this.arr.push(x);
    }

    pop(){
        if(this.arr.length === 0){
            console.log("Stack Underflow");
            return -1;
        }
        return this.arr.pop();
    }
    peek(){
        if(this.arr.length === 0){
            console.log("Stack is empty");
            return -1;
        }
        return this.arr[this.arr.length - 1];
    }

    isEmpty(){
        return this.arr.lenght === 0;
    }

    size(){
        return this.arr.length;
    }
}

// Driver Code
let st = new myStack();

// pushing elements
st.push(1);
st.push(2);
st.push(3);
st.push(4);

// popping one element
console.log("Popped:", st.pop());

// checking top element
console.log("Top element:", st.peek());

// checking if stack is empty
console.log("Is stack empty:", st.isEmpty() ? "Yes" : "No");

// checking current size
console.log("Current size:", st.size());