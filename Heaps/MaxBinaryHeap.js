const utils = require('./utils')

class MaxBinaryHeap{
    constructor(){
        //we will use an array to model structure of the heap 
        this.structure = [41,39,33,18,27,12]
    }
    insert(value){
        //add to the end of an array and bubble up
        const values = this.structure
        this.structure.push(value)
        let index = this.structure.length - 1
        let parentIndex = Math.floor((index - 1) / 2)
        while(values[index] > values[parentIndex]){
            //if greater than parent, swap
            let temp;
            temp = values[index]
            values[index] = values[parentIndex]
            values[parentIndex] = temp
            index = parentIndex
            parentIndex = Math.floor((index - 1) / 2)
            if(parentIndex < 0){
                break;
            }
        }
    }
    extractMax(){
        //this is the reason that it is good for priority Queue
        const values = this.structure
        let length = values.length
        utils.swap(values, 0, length - 1)
        values.pop()
        length -= 1

        const element = values[0]
        let index = 0
        let leftChild, rightChild, rightChildIdx, leftChildIdx, maxVal
        while(index < length){            
            leftChildIdx = 2 * index + 1 
            rightChildIdx = 2 * index + 2 
            if(leftChildIdx < length){
                leftChild = values[leftChildIdx]
                rightChild = values[rightChildIdx]
                if(leftChild > element){
                    if(rightChildIdx < length){
                        maxVal = utils.getMax(values, leftChildIdx, rightChildIdx)
                        utils.swap(values, index, maxVal)
                        index = maxVal
                  
                    } else { 
                        utils.swap(values, index, leftChildIdx)
                        index = leftChildIdx
                        
                    }
                } else if(rightChild > element){
                        utils.swap(values, index, rightChildIdx)
                        index = rightChildIdx
             
                    }
                }else {
                    index += 1          

                }
            }
            return element
        }

    }



let heap = new MaxBinaryHeap()
heap.insert(55)
heap.insert(1)
heap.insert(12)
heap.insert(28)
heap.extractMax()

console.log(heap.structure)