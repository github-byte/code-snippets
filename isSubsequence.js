function isSubsequence(s, t) {
    let j=0;
    for (let i = 0; i < t.length && j<s.length; i++) {
        console.log(s[j], t[i])
        if(s[j] === t[i]){
            j++;
        }
    }
    if(j == s.length) return true;
    else return false;
}
let s = "abc";
let t = "ahbgdc"
console.log(isSubsequence(s, t))

function pascalsTriangle (numRows){
    let newArr = [];
    for (let i = 0; i < numRows; i++) {
        let innerArr = [];
        let j=0;
        console.log(i,j)
        while(j<=i){
            j++;
        }
    }
    return newArr
}

pascalsTriangle(5)