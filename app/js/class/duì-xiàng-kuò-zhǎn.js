'use strict';


//属性表达式
{
    let es5_obj = {
        a: 'a',
        b: 'b'
    }

    let a = 'str'
    let es6_obj = {
        [a]: 'str'
    }


    console.log(es5_obj, es6_obj);

}
{
    console.log('字符串', Object.is('abc', 'abc'));
    console.log('数组', Object.is([], []), [] === []);
    console.log('拷贝', Object.assign({a: 'a'}, {b: 'b'}));

    let test = {k: 123, o: 456}
    for(let [key,value] of Object.entries(test)){
        console.log(key, value);
    }
}

{
    //扩展运算符
    // let {a,b,c,...c} ={a:'1',b:'2',c:3,d:4}
}