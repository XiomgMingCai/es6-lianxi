{
    function test(x, y = 'world!~') {
        // console.log(x, y);
    }

    test('hello ')
}

{
    let x = 'test'

    function test2(x, y = x) {
        // console.log('作用域问题', x, y);
    }

    // test2()
    //undefined undefined
    function test3(z, y = x) {
        // console.log('作用域问题', z, y);
    }

    test3('kill')
    //  kill test
}

{
    function test(...arg) {
        for (let item of arg) {
            // console.log('rest', item);
        }
    }

    test(1, 2, 3, 4, 5, 6)


    // console.log('a',...[1, 2, 3, 4, 5]);
}
{ //   函数   参数   返回值
    let arrow = v => v * 2
    // console.log(typeof arrow);
    // console.log(typeof arrow);
    //   函数   参数   返回值
    let arrow2 = () => 2;

    // console.log(arrow2());
    // es5
    (function () {
        console.log(233);
    })()



}

{
    ( () => {
        console.log(233);
    })()
}

{
    //伪调用
    function tail(x) {
        // console.log('tail', x);
    }

    function fx(x) {
        return tail(x)
    }

    fx(2)


}

{


}