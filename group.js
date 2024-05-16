// const cars = [
//     {
//         'make': 'audi',
//         'model': 'r8',
//         'year': '2012'
//     }, {
//         'make': 'audi',
//         'model': 'rs5',
//         'year': '2013'
//     }, {
//         'make': 'ford',
//         'model': 'mustang',
//         'year': '2012'
//     }, {
//         'make': 'ford',
//         'model': 'fusion',
//         'year': '2015'
//     }, {
//         'make': 'kia',
//         'model': 'optima',
//         'year': '2012'
//     },
// ];

// const grouping = (cars) => {
//     const obj2 = cars.reduce((obj, curr) => {
//         const { make = '' } = curr || {}
//         if (obj[make]) {
//             delete curr.make;
//             let array = obj[make];
//             array.push(curr);
//             // obj[make] = array;
//         }
//         else {
//             delete curr.make;
//             obj[make] = [{ ...curr }]
//         }
//         return obj;
//     }, {})
//     return obj2;
// }


// function delayWithValue(delay, value) {
//     // Your code here
// }

// var x = 23;

// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })(); 


// let hero = {
//     powerLevel: 99,
//     getPower(){
//       return this.powerLevel;
//     }
//   }
//   let getPower = hero.getPower;
//   console.log(getPower());   //99
//   console.log(hero.getPower())
  
//   let hero2 = {powerLevel:42};
//   console.log(getPower.apply(hero2));  //42
  


  // Code 2
  
//   const a = function(){
//     console.log(this);
  
//     const b = {
//       func1: function(){
//         console.log(this);
//       }  
//     }
  
//     const c = {
//       func2: ()=>{
//         console.log(this);
//       }
//     }
  
//     b.func1();
//     c.func2();
//   }
  
//   a();
  


//   // Code 3
  
//   const bolly = {
//     name:"Vivek",
//     f: function(){
//       var self = this;
//       console.log(this);
//       (function(){
//         console.log(this.name);
//         console.log(self.name);
//       })();
//     }
//   }
//   bolly.f();

// Example usage:
// delayWithValue(2000, "Hello")
//     .then(result => console.log(result));
// console.log("in group", grouping(cars))


// (function(a){
//     let b = 12;
//     console.log(this.b)
//     return (function(){
//       console.log(this.b);
//       a = 23;
//     })()
//   })(45);
  
  // Code 2
  
  // Each time bigFunc is called, an array of size 700 is being created,
  // Modify the code so that we don't create the same array again and again
  
//   function bigFunc(element){
//     let newArray = new Array(700).fill('♥');
//     return newArray[element];
//   }
  
//   console.log(bigFunc(599)); // Array is created
//   console.log(bigFunc(670)); // Array is created again
  
  // Code 3
  
  // The following code outputs 2 and 2 after waiting for one second
  // Modify the code to output 0 and 1 after one second.
  
  function randomFunc(){
    for(var i = 0; i < 2; i++){
      setTimeout(()=> console.log(i),1000);
    }
  }
  randomFunc();