{
    var str = 'string\n';
    console.log(str.includes('r')); //是否包含
    console.log(str.startsWith('str')); //是否str 开始
    console.log(str.endsWith('ing\r')); //是否str 结束
    // console.log(str.repeat(200)) //是否str 结束
}
require('babel-polyfill')
{
    console.log('1'.padStart(5, 0));
    console.log('1'.padEnd(5, 0));

}
{
    var user = {
        name: '小明',
        age: 23
    }
    console.log(`我的名字叫: ${user.name}今年: ${user.age}`)

    function 翻译(语言,...arg) {
        // ..对单词进行加工
        return  `${语言}`
    }

}
{
    console.log(String.raw `Hi\n!`);
    console.log(`Hi\n!`);
}