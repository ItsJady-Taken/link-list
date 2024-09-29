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
            if (index < 0 || index >= this.size()) {
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
            if (head === null) {
                return null;
            }
            if (head === tail) {
                const value = head.value;
                head = null;
                tail = null;
                return value;
            }
         
            const value = tail.value;
            tail.value = null;
            tail.nextNode = null;
            return value;   
        },
        getHead(){
            return head;   
        },
        getTail(){
            return tail;
        },
        find(value){
          for(let i = 0; head !== null; i++){
              if (head.value === value) {
                  return i;
              }
              head = head.nextNode;
          }  
          return null;
        },
        contain(value){
            for(let i = 0; head !== null; i++){
                
                if (head.value === value) {
                    return true;
                }
                head = head.nextNode;
            }
            return false;    
        },
        toString(){
            let str = "";
            let current = head;
            while (current !== null) {  
                str += ` (${current.value}) ->`;
                current = current.nextNode;
               if (current === null) {
                    str += " null";
                }
            }
          
            return str;
        }

    }
}

function Node(value = null, nextNode = null) {
    return {
        value,
        nextNode
    }
}

const list = LinkList();

list.appendValue("dog")
list.appendValue("cat")
list.appendValue("dolphin")
list.appendValue("elephant")
list.appendValue("fox")
list.appendValue("giraffe")
list.prependValue("lion")

console.log(list.toString()); //(lion) -> (dog) -> (cat) -> (dolphin) -> (elephant) -> (fox) -> (giraffe) -> null

