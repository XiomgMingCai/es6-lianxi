{
    let o = 1
    let k = 2
    let es5 = {
        o: o,
        k: k
    }
    let es6 = {
        o,
        k
    }
}
{
    var es5fun = {
        show: function () {
            // console.log('show');
        }
    }
    es5fun.show()

    let es6fun = {
        show(){
            // console.log('es6show');
        }
    }
    es6fun.show()

}
{
    let es5 = {
        name: '经纪人老宋',
        abc: function () {
            // console.log(233);
        }
    }
    es5['abc']()
    // console.log(es5['name']);


    //属性表达式
    let a = '[这样子就变成表达式了]'

    // console.log([a]);


    let es6 = {
        [a]: 'c'
    }

    // console.log(es6);

}

{
    function factorialize(num) {
        if (num > 0)
            return (num * factorialize(num - 1));
        else
            return -1;
    }

    // console.log(factorialize(5));
}

{
    //尾调用
    function factorial(n, total) {
        if (n === 1) return total;
        return factorial(n - 1, n * total);
    }

    // console.log(factorial(5, 1));
}

{
    // console.log('字符串', Object.is('string', 'string'));/*Object.is 等于 ===*/
    // console.log('数组', Object.is([],[]) );
    // console.log('数组是引用类型所以', []===[] );
}

{

    var o1 = {a: 1};
    var o2 = {b: 2};
    var o3 = {c: 3};

    let result = {};
    var obj2 = Object.assign(result, o1, o2, o3)
    //不会拷贝继承的属性
    //不会拷贝不可枚举的属性

    //
    // console.log('obj2',obj2);
    //
    // console.log('o1',o1);
    // console.log('o3',o3);
    // console.log('result',result);
}
{

    for(let [key, value] of Object.entries(obj2)){
        console.log(key, value);
    }

}
