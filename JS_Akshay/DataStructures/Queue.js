//enuqueue - add
// dequeue - remove
//peek 
//is Empty
class Queue{
    constructor(){
        this.items =[];
    }
    enqueue(ele){
        this.items.push(ele);
    }
    dequeue(){
        return this.items.shift();
    }

    isEmpty(){
        return this.items.length === 0;
    }
    peek(){
        if(!this.isEmpty){
            return this.items[0];
        }
        else{
            return null;
        }
    }

    size(){
            return this.items.length;
    }
    print(){
        console.log(this.items.toString());
    }
}

// const que = new Queue();
// console.log(que.isEmpty());
// que.enqueue(30);
// que.enqueue(40);
// que.dequeue();
// que.print();



class OptiQueue{
    constructor(){
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(ele){
        this.items[this.rear] = ele;
        this.rear ++;
    }
    dequeue(){
        const item = this.items[this.front];
        delete this.item[this.front];
        this.front++;
        return item;
    }
    isEmpty(){
        return this.rear-this.front === 0;
    }

    size(){
        return this.rear-this.front;
    }
    print(){
        console.log(this.items);
    }

    
}

const Que1= new OptiQueue();
Que1.enqueue(10);
Que1.enqueue("Nikki");
Que1.enqueue("Neem Water");
Que1.print();

