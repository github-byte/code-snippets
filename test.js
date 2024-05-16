//polyfills
//bind 1st is obj
// Function.prototype.mybind = function mybind(...args) {
//     let obj = this;
//     return function (...args2) {
//         obj.call(args[0], ...args.slice(1), ...args2)
//     };
// }
// function myFunc(place1, place2) {
//     console.log(this.firstname + ' ' + place1 + place2);
// }
// let user = {
//     firstname: 'Mita'
// }
// let newFunc = myFunc.mybind(user);
// // let fun3 = newFunc('doon');

// Array.prototype.findThird = function findThird() {
//     const arr = this
//     return arr[2];
// }

//polyfill for forEach
// Array.prototype.myForEach = (callback) => {
//     let arr = this;
//     console.log("ins for earc33", arr, this)
//     // for (let i = 0; i < arr.length; i++) {
//     //     return callback(arr[i]);
//     // }
// }
// let arr = [1,2,3];
// [1,2,3,4].myForEach((item) => {
//     // console.log('in',item);
// })

console.log("inside test33")
Array.prototype.myForEach = function (callback) {
    // console.log("ins for ses3", callback, this);
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, this)
    }
}

let arr1 = [1, 2, 3, 4];
// arr1.myForEach((el, i, e) => {
//     console.log(el, i, e);
// })

Array.prototype.myMap = function (callback) {
    const arr = this;
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let ans = callback(arr[i], i, this)
        newArr.push(ans)
    }
    return newArr;
}

Array.prototype.myFilter = function (callback) {
    let arr = this;
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i)) {
            newArr.push(arr[i])
        }
    }
    return resArr;
}

Array.prototype.myReduce = function (cb, iv) {
    let arr = this;
    let acc = iv ? iv : arr[0];
    for (let i = (iv === undefined) ? 0 : 1; i < arr.length; i++) {
        if (arr[i]) {
            acc = cb.call(undefined, acc, arr[i], i);
        }
    }
    return acc;
}

Function.prototype.myCall = function (obj, ...args) {
    obj.func = this;
    return obj.func(...args)
}

Function.prototype.myApply = function (obj, args) {
    obj.func = this
    return obj.func(...args)
}

Function.prototype.myBind = function (obj, ...args1) {
    // const 
    obj.func = this
    return function (...args2) {
        return obj.func(...args1, ...args2)
    }
}

const arrMap1 = arr1.filter((item, i) => item / 0)
const arrMap2 = arr1.filter((item, i) => item / 0)
let person = {
    a: 1,
    b: 2
}

function printAge(b, c) {
    console.log(this.a, b, c)
}

const arr2 = [1, 2, [2, 4, 4, [3, 4, 4, 4, [3, 3, 3]]]]
// printAge.call(person, 23)
// printAge.myCall(person, 23)
const fun = printAge.myBind(person, 22)
function flatter(arr, depth, newArr) {
    console.log('in', depth);
    if (arr.length === 0 || (depth === 0)) return newArr;
    for (let i = 0; i < arr.length; i++) {
        const newItem = arr[i]
        if (!Array.isArray(newItem)) {
            newArr.push(arr[i])
        }
        else {
            flatter(newItem, depth !== null ? depth-- : depth, newArr);
        }
    }
    // console.log('my arr2', newArr)
    return newArr
}
Array.prototype.myFlat = function (depth = null) {
    let newArr = []
    // if (this.length === 0 || (depth === 0)) return newArr;
    for (let i = 0; i < this.length; i++) {
        const newItem = this[i]
        if (!Array.isArray(newItem) && (depth > 0 || depth === null)) {
            newArr.push(newItem)
        }
        else if (depth !== 0) {
            newItem.myFlat(depth - 1)
        }
    }
    // console.log('my arr2', newArr)
    return newArr
    // return flatter(this, depth, newArr)
}
// console.log(arr2.flat())

function deepCopy(val) {
    if (['string', 'number', 'boolean'].includes(typeof val)) {
        return val
    }
    else if (Array.isArray(val)) {
        return val.map((item) => deepCopy(item));
    }
    else if (typeof val === 'object') {
        for (let i in val){
            return deepCopy(i)
        }
    }
}
let obj = { a: 1, b: { c: 2, d: 2 } }
let arr = [1, 2, [3, 4]]
let newObj = deepCopy(obj);
let arrCopy = deepCopy(arr)
arrCopy[2].push(3)
newObj.b.c = { d: 12 }
// console.log(arr)
console.log(newObj, obj)
//reduce
// let r1 = arr1.reduce((acc, curr) => acc + curr, 0)
// arr1.reduce((acc, curr) => console.log(acc, curr), 0)
// arr1.myReduce((acc, curr) => console.log(acc, curr), 0)
// console.log('in map', r1);