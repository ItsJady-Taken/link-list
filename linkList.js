function LinkList() { 
    let head = null;
    let tail = null;
    return {
        appendValue(value){
            const node = Node(value);
            if (head === null) {
                head = node;
                tail = node;
            }
            else {
                tail.nextNode = node;
                tail = node;
            }
        },
        prependValue(value){
            const node = Node(value);
            if (head === null) {
                head = node;
                tail = node;
            }
            else {
                node.nextNode = head;
                head = node;
            }
        },
        size(){
            let count = 0;
            let current = head;
            while (current !== null) {
                count++;
                current = current.nextNode;
            }
            return count;
        },
        at(index){
            if (index < 0) {
                return null;
            }
            for(let i = 0; head !== null; i++){
                if (i === index){ 
                    return head.value;
                }
                head = head.nextNode;
            }             
        },   
        
        popNode(){
            let current = head;
            if (current === null) {
                return null;
            }
            if (head === tail) {
                const value = head.value;
                head = null;
                tail = null;
                return value;
            }
            while (head.nextNode !== tail) {
                head = head.nextNode;
            }
            const value = tail.value;
            tail = head;
            head.nextNode = null;
            return value;   
        },
        getHead(){
            if (head === null) {
                return null;
            }
            for (let i = 0; head !== null; i++) {
               return `${head[i]} -> ${head[i + 1]}`; 
            }    
            
            
        },
        getTail(){
            return tail;
        },

    }
}

function Node(value = null, nextNode = null) {
    return {
        value,
        nextNode
    }
}

const list = LinkList();

list.appendValue(5)
list.appendValue(6)
list.appendValue(7)
list.appendValue(8)
list.appendValue(9)
list.prependValue(10)
list.popNode()
console.log(list.getTail());

