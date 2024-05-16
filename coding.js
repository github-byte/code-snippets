var name = "Dipannita";
(function () {
    console.log(this.name);
})()

let obj = {
    name: "Ans",
    a: function (params) {
        console.log(this.name);
    },
    b: () => {
        console.log(this.name);
    }
}

obj.a();
obj.b();


// const object = {
//     message: "Hello",
//     logMessage () {
//         console.log(this.message);
//     }
// }

// setTimeout(() => {
//     object.logMessage;
// }, 300);

// const ob2 = {
//     message: "Hello"
// }

// function giver () {
//     console.log(this.message);
// }
// const ans = giver.bind(ob2)

function sum(a) {
    return (b) => {
        console.log('insdee', a, b)
        return b ? sum(a + b) : a;
    }
}

function debounce(func, delay) {
    let timer = 0
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {

            func(args)
        }, delay)
    }
}
const filler = () => {
    console.log("inside filler7263")
    let doc = document.getElementById("print");
    const ele = document.getElementById('inputBox')
    doc.innerHTML = ele.value
}
const showInput = () => {
    console.log("is in input")
    let doc = document.getElementById("print");
    const ele = document.getElementById('inputBox')
    ele.addEventListener('keydown', (e) => {
        // debounce(console.log("inside233", e.target.value), 1000)
        let bounce = debounce(filler, 1000);
        bounce();
    })
}
showInput();

var x = 5;

(function() {
  console.log("iffe2",x);
  var x = 10;
})();
console.log("inside sum234", sum(2)(3)(9)());

var a = 1;

function outer() {
  var b = 2;

  function inner() {
    var c = 3;
    console.log(a + b + c);
  }

  inner();
}

outer();

let arr = [1,2,4]
Array.prototype.myReduce = function(func, initialVal){
    const arr = this;
    let acc = initialVal ? initialVal : arr[0]
    let newArr = [];
    for(let i = initialVal ? 1 : 0;i< this.length;i++){
        acc = newArr.push(func(acc, arr[i], i))
    }
}
let x = arr.reduce((a, c) => a+c, arr[0])
console.log("nsns",x)