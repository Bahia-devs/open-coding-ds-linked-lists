class Node{
  constructor(data){
    this.data = data
    this.prev = null
  }
}

class Stack{
  constructor(){
    this.top = null
  }

  push(data){
    let newNode = new Node(data)
    
    if(this.top) {
      newNode.prev = this.top
      this.top = newNode
    }else{
      this.top = newNode
    }

    return newNode.data
  }

  pop(){
    if(!this.top) return null

    let removedNode = this.top
    this.top = this.top.prev
    return removedNode
  }

  print(){
    let node = this.top
    while(node !== null){
      console.log(node.data)
      node = node.prev
    }
  }
}

// ----

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.print()

console.log("---")

stack.pop()
stack.pop()
stack.print()