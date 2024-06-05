const getOutput = (arr) => {
    let newArr = [];
    newArr[0] = arr[0];
    for (let i = 1; i < arr.length; i++){
        newArr[i] += arr[i] || 0
    }
    console.log(newArr)
}

function pascalsTriangle (numRows) {
    let newArr = [];
    for (let i = 0; i < numRows; i++) {
        let innerArr = [];
        let j = 0;
        while (j <= i) {
            if (i == 0) {
                innerArr.push(1)
            }
            else {
                getOutput(newArr)
                console.log(newArr[i - 1])
            }
            // console.log(newArr)
            j++;
        }
        newArr.push(innerArr)
    }
    console.log(newArr)
    return newArr
};

pascalsTriangle(5)