const arr = [1, 2, 3, [1, 1, 1]]
const recursiveSum = (arr) => {
    if (arr.length <= 0) return;
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            sum += recursiveSum(arr[i])
        }
        else sum += arr[i] 
    }
    return sum;
}
//polyfill
Function.prototype.call = function (context, ...args) {
    
}
//Write a function to retrieve query parameters from a URL string

const obj = {"isbn": "123-456-222",  
 "author": 
    {
      "lastname": "Doe",
      "firstname": "Jane"
    },
"editor": 
    {
      "lastname": "Smith",
      "firstname": "Jane"
    },
  "title": "The Ultimate Database Study Guide",  
  "category": ["Non-Fiction", "Technology"]
 }

const findVal = (obj, val = '') => {
    for(let i in obj){
        if(typeof obj[i] === "object"){
            
        }
        else if(obj[i] === val){
            return
        }
    }
}
console.log(recursiveSum(arr))