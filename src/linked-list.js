class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
    this.tail = null
  }

  append(data){
    if(this.head){
      this.tail.next = new Node(data)
      this.tail = this.tail.next
    }else{
      this.head = new Node(data)
      this.tail = this.head
    }
    
    this.size++
    return this.tail
  }

  shift(){
    if(!this.head) return null

    let removedNode = this.head
    this.head = this.head.next
    return removedNode.data
  }

  remove(data){
    if(this.head.data === data) {
      return this.shift()
    }
    
    let node = this.head
    while(node.next && node.next.data !== data){
      node = node.next
    }
    
    if(node.next){
      let removedNode = node.next
      node.next = removedNode.next
      removedNode.next = null
      return removedNode.data
    }

    return null
  }

  insert(position, data){
    if(position > this.size) return null

    let newNode = new Node(data)
    
    // If insert at the beginning
    if(position === 0){
      newNode.next = this.head
      this.head = newNode
      return newNode.data
    }

    // If insert at the end of list
    if(position === this.size){
      this.tail.next = newNode
      this.tail = newNode
      return newNode.data
    }
    
    // If insert in middle or end of list
    let counter = 0
    let node = this.head
    while(node.next !== null){
      if(counter+1 === position) {
        newNode.next = node.next
        node.next = newNode
        return newNode.data
      }
      node = node.next
      counter++
    }

    return null
  }

  find(data){
    let node = this.head
    while(node.next !== null){
      if(node.data === data) return node
      node = node.next
    }
    return null
  }

  print(){
    let node = this.head
    while(node !== null){
      console.log(node.data)
      node = node.next
    }
  }
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.print()

console.log("-----")

list.insert(1, 3)
list.print()

console.log("-----")

list.remove(3)
list.print()