# Linked Lists

## Linked Lists
### What is a Linked List
- List of nodes that are linked to each other in a linear fashion
- each node referenes the next node in the link

### Terminology
- node:
  - individual items/links that live in a linked list
  - contains data
- next:
  - each node has a property called next which references the next node
- head:
  - refers to the first node in a linked list
- current:
  - references a type of a node that is currently being looked at.
  - used and changed while traversing through a linked list
- singly:
  - refers to the number of references a node has
  - a node has a single reference which is the next node after it
- doubly:
  - refers to a node having 2 references
  - a node has 2 references, next and previous

### Traversal
- use the `next` property of a node to traverse between nodes
- using `next` in conjunction with a `while` loop key to hopping from node to node
  - the `current` node is set at the head and then updated to the next node repeatedly in the while loop
  - when the `next` value is `null` indicates the end of the linked list

### BIG O
- describes how complex code is using algebraic terms
  - dependent on time and space
- provides transparency into time and space without running the code

## What's a Linked List, Anyway pt1
- Many ways to organize data, trick is knowing which tool is the right one to use

### Linear Data Structures
- a sequence and an order to how they are constructed and traversed
  - i.e. game of hopscotch
  - you perform in order from start to end
- non-linear items dont have to be in order

### Memory Management
- arrays are static data structures
  - NEEDS a certain amount of memory
- linked lists are dynamic data structures
  - bytes/memory can be scattered

### Parts of a linked list
- Head, Node, Next, Null, Values

## What's a Linked List, Anyway pt2
### Big O
- major points to consider for algorithms: how much time it requires at runtime given how much time and memory it needs
  - amount of time it takes for an action to run based on the amount of elements we pass into it (n)
- O(1) -> constant
- O(n) function -> linear
- O(n^2) -> just avoid this if you can

### Growing a linked list
- expand linked lists by rearranging the `next` and `previous` pointers
- inserting at the head:
  - start with the head node
  - make new node and set its `next` to previous head node
  - set new node as the head
  - inserting at the beginning is good because it takes the same amount of time to process no matter how long the list is
- inserting at the tail:
  - find the last node (where tail === null)
  - create new node
  - set the pointer to null
  - direct preceding node to our new node
  - is bad if we have a big list because we have to traverse from the head all the way to the tail. in order. no skipping

![Array VS Linked List](./arrayvslinkedlist.jpeg)

### References:
- [Linked Lists](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-05/resources/singly_linked_list.html)
- [What's a Linked List, Anyway pt1](https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d)
- [What's a Linked List, Anyway pt2](https://medium.com/basecs/whats-a-linked-list-anyway-part-2-131d96f71996)