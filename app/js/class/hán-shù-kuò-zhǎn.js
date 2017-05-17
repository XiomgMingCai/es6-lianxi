{
    function test(x, y='wolrd') {
        console.log('默认值',x, y);
    }

    test('hello ')
}

{
    let  x = 'text';
    function test(x, y=x) {
        console.log(x, y);//kill kill
    }
    test('kill')
}

{
    function test3(...arg) {
        for(let v of arg){
            console.log('rest', v);
        }
    }

    test3(1,2,3,4,5,6,7,'a')
}

{
    console.log(...[1, 2, 3]);
    console.log('a',...[1, 2, 3]);
}

{
    console.log('=>');
    let arrow = v => v*2
    let arrow2 = () => 'hello world !'

    console.log(arrow(4));
    console.log(arrow2());
}

{
    function tail(x) {
        console.log('tail',x);
    }

    function fun(param) {
        tail(param)
    }

    fun('委托调用  hello world! ')
}