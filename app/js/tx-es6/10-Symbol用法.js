{
    let a1 = Symbol();
    let a2 = Symbol()
    // console.log(a1 === a2);
    // console.log(Object.is(a1,a2));

    let a3 = Symbol.for('a3')
    let a4 = Symbol.for('a3')

    // console.log(a3 === a4);
    // console.log(Object.is(a3, a4));
}
{

    let obj = {
        [Symbol.for('abc')]: '我是独一无二的 abc',
        abc: 345,
        z: 567
    }
    // console.log(obj);

    for(let [key, value] of Object.entries(obj)){
        // console.log(key, value);
    }
    //获取Symbol value
    Object.getOwnPropertySymbols(obj).forEach(function (item) {
        // console.log(obj[item]);
    })
    //那到每一个值
    Reflect.ownKeys(obj).forEach(function (item) {
        console.log(obj[item]);
    })
}