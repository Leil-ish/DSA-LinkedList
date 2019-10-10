class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertAt(ptr, item) {
        if (this.head === null) {
          this.insertFirst(item);
        }
        let currNode = this.head;
        let prevNode = this.head;
        let i = 0;
    
        while (i !== ptr) {
          if (!currNode.next) {
            console.log('This index does not exist. Use insertLast to add to the end of the list.');
            return;
          }
          prevNode = currNode;
          currNode = currNode.next;
          i++;
        }
    
        let pushedItem = prevNode;
        let newItem = new _Node(item, prevNode.next);
        pushedItem.next = newItem;
      }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item1, item2) {
        if(this.head === null) {
            this.insertFirst(item1);
        } else {
            let currNode = this.head;
            let prevNode = this.head;
            while ((currNode !== null) && (currNode.value !== item2)) {
                prevNode = currNode;
                currNode = currNode.next;
            }
            if(currNode === null) {
                return;
            }
            prevNode.next = new _Node(item1, currNode);
        }
    }

    insertAfter(item, ptr) {
        if(this.head === null) {
            this.insertFirst(item);
        } else {
            let currNode = this.head;
            let nextNode = this.head;
            while ((currNode !== null) && (currNode.value !== ptr)) {
                currNode = currNode.next;
                nextNode = currNode.next;
            }
            currNode.next = new _Node(item, nextNode);
        }
    }

    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next ===null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function main() {
    const SLL = new LinkedList();

    SLL.insertFirst('Apollo')
    SLL.insert('Boomer')
    SLL.insert('Helo')
    SLL.insert('Husker')
    SLL.insert('Starbuck')

    SLL.insert('Tauhida')

    SLL.remove('squirrel')

    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo')

    SLL.insertAt('Kat, 3')

    SLL.remove('Tauhida')

    size(SLL);
    isEmpty(SLL);
    findPrevious(SLL, 'Tom');
    findLast(SLL);
    middleList(SLL);
    display(SLL);
}

function display(list) {
    if (list.head) {
      console.log(list.head.value);
    } else {
      console.log('Empty List');
      return;
    }
  }

  function size(list) {

    let currNode = list.head;
    let i = 0;
  
    while (currNode.next !== null) {
      currNode = currNode.next;
      i++;
    }
    console.log(i);
    return i;
  }
  
  
  function isEmpty(list) {
    if (list.head) {
      console.log('false');
    } else {
      console.log('true');
    }
  }

  function findPrevious(list, key) {
    if (!list.head) {
      return;
    }
  
    let currNode = list.head;
    let prevNode = list.head;
  
    while (currNode.value !== key) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    console.log(prevNode.value);
    return prevNode.value;
  }
  
  function findLast(list) {
    if (!list.head) {
      return;
    }
  
    let currNode = list.head;
  
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
  
    console.log(currNode.value);
    return currNode.value;
  }

  //Removes duplicates from the list by causing the pointer value to skip any duplicates and point to the next item
  function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

function reverse(list){
  let node = list;
  let previous = null;

  while(node){
    let save = node.next;
    node.next = previous;
    previous = node;
    node = save;
  }
  return previous;
}

const findThirdFromEnd = list => {
    if (!list.head) {
      return console.log('This List has no items');
    }
  
    let listLength = showListSize(list);
  
    if (listLength <= 2) {
      return console.log('This list doesn\'t even have that many items');
    }
    let counter = 0;
    let targetIndex = listLength-3;
  
    let currentNode = list.head;
    while (counter < targetIndex && currentNode !== null) {
      currentNode = currentNode.next;
      counter++;
    }
  
    console.log(currentNode.value);
  };
  
  const middleOfList = list => {
    let counterNode = list.head;
    let fastCounter = list.head;
  
    if (showListSize(list)%2 === 0) {
      while (fastCounter.next.next !== null) {
        counterNode = counterNode.next;
        fastCounter = fastCounter.next.next ? fastCounter.next.next : fastCounter.next;
      }
    }
    if (!showListSize(list)%2 === 0) {
      while (fastCounter.next !== null) {
        counterNode = counterNode.next;
        fastCounter = fastCounter.next.next ? fastCounter.next.next : fastCounter.next;
      }
    }
  }

  function cycleList(sll) {
       let currNode = sll.head;
       let seen = []
       while(currNode){
         seen.push(currNode);
         currNode = currNode.next;
         console.log(seen);
         if(seen.includes(currNode.next)) {
           return true;
         }
       }
       return false;
     }

     function hasCycle(head){
        let slow = head;
        let fast = head;
      
        while(fast !== null && fast.next !== null){
          slow = slow.next;
          fast = fast.next.next;
          if(slow === fast){
            return true;
          }
        }
        return false;
      }

      
      const sortList = function(head) {
        if (head === null || head.next === null) {
            return head;
        }
        
        let prev = null;
        let slow = head;
        let fast = head;
        
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
        }
    
        prev.next = null;
        
        const l1 = sortList(head);
        const l2 = sortList(slow);
        return merge(l1, l2);
    };
    
    function merge(l1, l2) {
        const head = new ListNode();
        let current = head;
       
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            
            current = current.next;
        }
    
        current.next = (l1 === null) ? l2 : l1;
        
        return head.next;
    }
