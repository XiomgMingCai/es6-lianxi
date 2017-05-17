/*{
 let tell = function*() {
 yield 'a'
 yield 'b'

 return 'c'
 }

 let k = tell()

 console.log(k.next());
 console.log(k.next());
 console.log(k.next());
 console.log(k.next());
 }

 {
 let obj = {
 name:'xiaoMing',
 age:'23',
 }

 obj[Symbol.iterator] = function* () {
 yield 1
 yield 2
 yield 4
 }

 for(let value of obj){
 console.log('value', value);
 }
 }

 {
 let state  = function* () {
 while (1){
 yield  'A'
 yield  'B'
 yield  'C'
 }
 }

 let states= state()

 console.log(states.next());
 console.log(states.next());
 console.log(states.next());
 console.log(states.next());
 }

 {
 let state  = async function () {
 while (1){
 await  'A'
 await  'B'
 await  'C'
 }
 }

 let states= state()

 console.log(states.next());
 console.log(states.next());
 console.log(states.next());
 console.log(states.next());
 }*/

{
    let draw = function (count) {
        //具体的抽奖逻辑
        console.log(`剩余${count} 次`);
    }

    let residue = function*(count) {
        while (count > 0) {
            count--
            yield  draw(count)
        }
    }

    window.star = residue(5);

}

{
    //HTTP 长轮询
    let polling = function*() {
        yield  new Promise(function (resolve, reject) {
            // ajax 请求
            setTimeout(function () {
                console.info("ajax请求");
                resolve({code: 4})
            }, 200)
        })
    }

    let pull = function () {
        let generator = polling()
        //执行一次ajax 请求
        let step = generator.next();
        //拿到Promise
        step.value.then(function (msg) {
            if (msg.code != 0) {//过期
                setTimeout(function () {
                    console.info('wait');
                    pull()
                }, 800)
            } else {
                console.info(msg);
            }
        })
    }
    pull()


}