let btnNode = document.getElementById('btnSubmit')
let inputNode = document.getElementById('inputText')
btnNode.addEventListener(("click"), () => {
    document.getElementById("showText").innerHTML = inputNode.value;
})

function countChars(str) {
    let obj = {};
    let charArr = str.split("");
    charArr.forEach(element => {
        if (obj[element]) {
            obj[element] += 1;
        }
        else obj[element] = 1
    });
    return obj
}

const arr = [{ name: "xyz", org: "acs" }, { name: "abc", org: "acs" }, { name: "abc", org: "new" }, { name: "axe", org: "any" }]
function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}
function sortArrByName(arr) {
    arr = arr.sort((a, b) => a.name < b.name ? -1 : 1)
    return arr;
}

// // console.log(countChars("loadingcharacterswelcometoairtel"));
console.log("in name2332", sortArrByName(arr));

function count(num) {
    let count = 0;
    return function (val) {
        const result = num + val;
        return result + count++;
    }
}
var a = count(5);
var b = count(5);
console.log(a(3));  //8
console.log(b(3));  //9
console.log(a(3));  //10
console.log(a(3));  //11
console.log(b(3));  //12

// function removeDuplicate(str) {
//     let obj = {};
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         if(!obj[str[i]]){
//             obj[str[i]] = 1;
//         }
//         else obj[str[i]] += 1;
//     }

//     for(let i=0;i<str.length;i++){
//         if(obj[str[i]] == 1){
//             newStr += str[i]
//         }
//     }
//     return newStr;
// }

// console.log("in rems661", removeDuplicate("azxxzy"));