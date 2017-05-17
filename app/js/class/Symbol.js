{
    let a1 = Symbol()
    let a2 = Symbol()
    console.log(a1 === a2);

    let a3 = Symbol.for('a3')
    let a4 = Symbol.for('a3')
    // alert(a3 === a4);//true
}

{
    let a1 = Symbol.for('abc')
    let obj = {
        [a1]: '123',
        'abc': 345,
        'c': 456
    }

    console.log(JSON.stringify(obj, undefined, 4));
    console.log(obj);
    for (let [key, value] of Object.entries(obj)) {
        console.log('let of ', key, value);
    }
    console.log('getOwnPropertySymbols');
    Object.getOwnPropertySymbols(obj).forEach(function (item) {
        console.log(obj[item]);
    })

    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('ownKeys', item, obj[item]);
    })
}