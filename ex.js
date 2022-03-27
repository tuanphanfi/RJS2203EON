console.log('---------------------------test 1---------------------------')

let myArr =  [0, 5, 4, 2, 8]
let sumMyArr = 0

for (let i = 0; i < myArr.length; i++){
    sumMyArr += myArr[i]
}

let sumTest = 0 ;
let sumTest1 = 0 ;
myArr.map((item, index)=>{
    sumTest +=item
})

myArr.forEach((item,index)=>{
    sumTest1 +=item
})

console.log("sumMyArr",sumMyArr)
console.log("sumTest", sumTest)
console.log("sumTest1", sumTest1)



console.log('---------------------------test 2---------------------------')
let outputEx2 = []

const person = [
	{ name: 'John', age: 24 },
	{ name: 'Pete', age: 25 },
	{ name: 'Mary', age: 28 }
]

person.map((item)=>{
    outputEx2.push(item.name)
})
console.log("outputEx2",outputEx2)



console.log('---------------------------test 3---------------------------')

arr1 = ['John', 'Pete', 'Mary']
arr2 = ['Mary', 'Henry', 'Harry']

let myArrEx3 = [...arr1,...arr2]
console.log("Before remove dup item myArrEx3",myArrEx3)

// find duplicate item
let duplicateItem = ''
arr1.map((item, index)=>{
    let test = arr2.includes(item)
    if(test==true){
        duplicateItem = item
        console.log("The duplicated item",duplicateItem, index)
    }
})

// find index of duplicated item
let indexDuplicatedItem = myArrEx3.indexOf(duplicateItem)

// remove it
myArrEx3.splice(indexDuplicatedItem, 1)
console.log("After remove dup item myArrEx3",myArrEx3)


