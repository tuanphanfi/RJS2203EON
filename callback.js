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

let myGymExerciseArr = ['Bench press', 'Upper bench press', 'Shoulder Push Up', 'Triceps', 'Biceps']

Array.prototype.mapA = function (callback) {
    let output = [],
        arrayLength = this.length;
    for (let i = 0; i < arrayLength; i++) {
        let result = callback(this)
        output.push(result)
    }
    console.log("mapA TEST")
}



Array.prototype.newForEach = function (callback) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}


myGymExerciseArr.newForEach(function (excercise, index, array) {
    console.log(excercise, index, array)
}) 