let p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Resolved 1")
    }, 1000);
})

let p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Resolved 2")
    }, 300);
})

Promise.any([p1,p2]).then((res) => {
    console.log('response', res)
}).catch(() => "err")

Promise.myAll = function(promiseArr){
    return new Promise((resolve, reject) => {
        promiseArr.forEach((element, i) => {
            element.then((res) => {
                if(res){
          resolve(res);
                }
            }).catch(() => reject())
        });
    })
}

Promise.myAll([p1,p2]).then((res) => {          
    console.log('response262', res)
}).catch(() => "err")