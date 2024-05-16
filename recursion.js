// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const ob1 = {
    name_ns: "John",
    age_bb: 72,
    ob2: {
      address_fs: "H.No 8",
      age_fs: 55,
      ob3: {
        ob4: {
          city_sv: "Bangalore",
          age_sv: 30,
          ob5: {
            age_562: 7
          }
        }
      }
    },
    ob6: {
      age_525: 19
    }
  };
  
  function convertToCamel (obj)  {
      for(let i in obj){
          if(typeof obj[i] === 'object'){
              convertToCamel(obj[i]);
          }
          else {
              if(i){
                  const words = i.split("_")
                  if(words.length > 1){
                      let newWord = words[0] + words[1][0].toUpperCase() + words[1].slice(1)
                      obj[newWord] = obj[i];
                      delete obj[i]
                  }
              }
          }
      }
  }
  console.log(convertToCamel(ob1), JSON.stringify(ob1))
  function recur (obj) {
      let sum = 0;
      for(let i in obj){
          if(typeof obj[i] !== 'object'){
              if(i == 'age') {
                  console.log(obj[i])
                  sum += obj[i]
              }
          }
          else  sum += recur(obj[i]);
      }
      return sum
  }
  const summer = [[1,2,3,4],2,4,3,4]
  const sumFunc = (arr) => {
      let sum = 0
      for(let i=0;i<arr.length;i++){
          if(Array.isArray(arr[i])){
              sum += sumFunc(arr[i])
          }
          else sum += arr[i]
      }
      return sum;
  }
  
  
  console.log(sumFunc(summer));
  function recurClosure (a) {
      return function (b){
          return b ? recurClosure(a+b) : a;
      }
  }
  const ans = recurClosure(2)(2)(3)(6)(1)()
  console.log(ans)
  function sumAges(obj, sumObj = 0) {
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        console.log(sumObj)
        sumAges(obj[key], sumObj); // Recursive call for nested objects
      } else if (key === 'age' && typeof obj[key] === 'number') {
        sumObj += obj[key]; // Add age to the sum
      }
    }
  }
  
  const sumContainer = 0 ;
  sumAges(ob1, sumContainer);
  console.log(sumContainer); 
  let ageSum = 0
  console.log("Try programiz.pro", sumAges(ob1));