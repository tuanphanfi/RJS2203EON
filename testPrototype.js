Array.prototype.foreach2 = function (callback) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index);
        }
    }
}

let myGymExerciseArr = ['Bench press', 'Upper bench press', 'Shoulder Push Up', 'Triceps', 'Biceps']

// myGymExerciseArr.forEach2(function (excercise, index, array) {
//     console.log(excercise, index, array)
// })

Array.prototype.mapA = function (callback) {
    let output = [],
        arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
        let result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

// myGymExerciseArr.mapA(function (element){
//     console.log(element)
// })


Array.prototype.foreach2 = function (callback) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}

myGymExerciseArr.foreach2(function (excercise, index, array) {
    console.log(excercise, index, array)
})