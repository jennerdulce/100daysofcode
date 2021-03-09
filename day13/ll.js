// create Node class: value, next
class Node {
  constructor(value){
    this.value = value;
    this.next = null
  }
}

// create LL class: head
class LinkedList{
  constructor(){
    this.head = null;
  }

  insertFront(value){
    let node = new Node(value);
    // if empty
    if (!this.head){
      this.head = node
    } else {
      let oldHead = this.head
      this.head = node
      this.head.next = oldHead
    }
  }

  insertBack(value){
    let node = new Node(value)
    if(!this.head){
      this.head = node
    } else {
      // start at the beginning traverse to the end
      let current = this.head
      while(current.next){
        current = current.next
      }
      current.next = node
    }
  }

  insertBefore(value, newValue){
    let current = this.head;
    let node = new Node(newValue)
    if (this.head.value === value){
      let oldHead = this.head
      this.head = node;
      this.head.next = oldHead
    } else {
     while (!current.next.value === value){
       console.log(current)
       current = current.next
     }

     node.next = current.next;
     current.next = node
     console.log(current.next)
    }
  }

  insertAfter(value, newValue){
    let current = this.head;
    let node = new Node(newValue)
    if (current.value === value){
      node.next = current.next
      current.next = node;
    } else {
      while(!current.value === value){
      current = current.next
    }
      node.next = current.next;
      current.next = node;
    }
  }

  include(value){
    if(!head){
      return false;
    } else {
      // start at the head
      current = this.head
      while (current) {
        if (current.value === value){
          return true;
        }
        current = current.next
     }
    }
    return false;
  }

  toString(){
    let current = this.head
    let string = ''
    while(current){
      string += `{ ${current.value} } -> `
      current = current.next
    }
    string += 'NULL'
    return string
  }
}

const ll = new LinkedList();
ll.insertFront(100)
ll.insertFront(200)
ll.insertBack(300)
// ll.insertAfter(100, 777)
ll.insertBefore(300,999)
ll.toString()