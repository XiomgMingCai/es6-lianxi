{
    console.log('b', 0B11110111);
    console.log('b', 0o767);
}
{
    console.log('15', Number.isFinite(15));
    console.log('NaN', Number.isFinite(NaN));
    console.log('true', Number.isFinite(true));
    console.log('isNaN true==>', Number.isNaN(true));
    console.log('0', Number.isFinite(0));
    console.log('0isNaN', Number.isNaN(0));
    console.log('NaN', Number.isNaN(NaN));
}
{
    //要判断此参数是否为整数
    console.log('1', Number.isInteger(1));
    console.log('25.2', Number.isInteger(25.2));
    console.log('最大', Number.isInteger(Number.MAX_SAFE_INTEGER));
    console.log('最小', Number.isInteger(Number.MIN_SAFE_INTEGER));

}

{

    //Number.isSafeInteger() 方法用来判断传入的参数值是否是一个“安全整数”
    // （safe integer）。一个安全整数是一个符合下面条件的整数：
    console.log('一个安全整数', Number.isSafeInteger(Number.MIN_SAFE_INTEGER + Number.MIN_SAFE_INTEGER));

}

{
    //Math.trunc() 方法会将数字的小数部分去掉，只留整数部分。
    console.log(Math.trunc(4.1));
    console.log(Math.trunc(4.9));

    console.log(Math.sign(0));
    console.log(Math.sign(-1));
    console.log(Math.sign(5));
    console.log('Math.sign 50 ->'+Math.sign("50"));
    console.log(Math.sign('string'));
    /*
     0
     -1
     1
     NaN
     */
}

{
    console.log('8', Math.cbrt(8));

    Promise
}