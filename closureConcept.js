// function a() {
//     console.log(b)
// }
// var b = 10;
// a();


// function looping() {
//     for (var i = 0; i < 10; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000);
//     }
// }

// looping();



// function outer() {
//     let name = 'Anjali'
//     return function () {
//         console.log("1", name);
//         var name = 'John'
//         function inner() {
//             console.log("2", name)
//             name++
//             console.log("3", name)
//             var name = 'Rohit'
//             console.log("4", name)
//         }
//         inner()
//     }
// }
// outer()();


// function createCounter() {
//     var count = 0;
//     return function() {
//         return ++count;
//     };
// }
// var counter1 = createCounter(); 
// console.log(counter1()); //1
// console.log(counter1()); //2
// var counter2 = createCounter(); //
// console.log(counter2()); //1


// function multiplier(x) {
//     return function(y) {
//         return x * y;
//     };
// }
// var multiplyBy5 = multiplier(5); //
// var multiplyBy10 = multiplier(10);
// console.log(multiplyBy5(3)); //5*3 -> 15
// console.log(multiplyBy10(2)); //10*2 => 20

// function outer() {
//     var x = 1;
//     function inner() {
//         console.log(x);
//     }
//     x = 2;
//     return inner;
// }
// var closureFunc = outer(); //
// closureFunc(); //2

// function outer() {
//     var x = 1;
//     return function(y) {
//         console.log(x + y);
//     };
// }
// var closureFunc1 = outer();  //1
// var closureFunc2 = outer(); //1
// closureFunc1(2); //3
// closureFunc2(3); //4

const user = {
    email: 'mail@hmail.com',
    updateEmail: (email) => {
        this.email = email
    }
}

user.updateEmail("newmail@k.com")
console.log(user.email, this.email)

// console.log("b val", b)