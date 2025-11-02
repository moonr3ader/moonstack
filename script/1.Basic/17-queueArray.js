class myQueue {
    constructor(capacity) {
     
        //Maximum number of elements the queue can hold.
        this.capacity = capacity;
     
          // Array to store queue elements.
        this.arr = new Array(capacity);
     
          // Current number of elements in the queue.
        this.size = 0;
    }

    //Maximum number of elements the queue can hold.
    isEmpty() {
        return this.size === 0;
    }

    // Check if full
    isFull() {
        return this.size === this.capacity;
    }

    // Enqueue
    enqueue(x) {
        if (this.isFull()) {
            console.log("Queue is full!");
            return;
        }
        this.arr[this.size] = x;
        this.size++;
    }

    // Dequeue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return;
        }
        for (let i = 1; i < this.size; i++) {
            this.arr[i - 1] = this.arr[i];
        }
        this.size--;
    }

    // Get front element
    getFront() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return -1;
        }
        return this.arr[0];
    }
    
     // Get rear element
    getRear() {
        if (this.isEmpty()) {
            console.log("Queue is empty!");
            return -1;
        }
        return this.arr[this.size - 1];
    }
}

//Driver Code
let q = new myQueue(3);

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log("Front:", q.getFront());  

q.dequeue();
console.log("Front:", q.getFront()); 
console.log("Rear:", q.getRear()); 

q.enqueue(40);