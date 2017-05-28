var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // reject('error')
            resolve();
        }, time);
    })
}
let start = async function () {
    let 一到十 = [1,2,3,4,5,6,7,8,9,10];

    for(let i of 一到十){
        console.log(`当前是第${i}次等待..`);
        await sleep(1000);
    }

}


start()


