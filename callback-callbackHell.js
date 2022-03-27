//--------call back function
function myFunc(callBackFunction) {
    // console.log(callBackFunction)
    callBackFunction()
}

function callBackFunction() {
    console.log("Call back function is on process")
}

myFunc(callBackFunction)

//---------
function callback1(doHome) {
    doHome()
}

function callback2(goToSchool) {
    goToSchool()
}

function callback3(getHomework) {
    getHomework()
}

function callbackHell() {
    callback1(function () {
        callback2(function () {
            callback3(function () {
                console.log("callback3")
            })
        })
    })
}


Array.prototype.mapA = function (callback) {
    let output = [],
        arrayLength = this.length;
    for (let i = 0; i < arrayLength; i++) {
        let result = callback(this)
        output.push(result)
    }
    console.log("mapA TEST")
}

const courses = ["Js", "Php", "Java"]


let myArr = ["Bubble tea", "Mixed rice cake", "Dry beef salad"]

Array.prototype.newForEach = function (callback) {
    console.log("newForEach on process")
    for (let index in this) {
        console.log(index)
        // if (this.hasOwnProperty(index)) {
        //     callback(this[index], index, this) //error
        // }
    }
}

myArr.newForEach() //error
console.log("end NewForEach")