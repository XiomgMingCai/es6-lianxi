{
    let regex = new RegExp('xyz', 'i')
    let regex2 = new RegExp(/xyz/i)
    // console.log(regex.test('xyz123'), regex2.test('xyz123'));
}

{
    let regex3 = new RegExp(/xyz/ig, 'i')
    // console.log(regex3.flags);//是否开启粘连模式
}
{
    let str = 'bbb_bb_b'
    let a1 = /b+/g;
    let a2 = /b+/y;

    // console.log('都是全局匹配',a1.exec(str), a2.exec(str));
    // console.log('第二个字符串必须为b 不能为下化线',a1.exec(str), a2.exec(str));

    // console.log(a1.sticky, a2.sticky);
}
// u 修饰符号
{
    // console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
    // console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));

    //false
    // console.log(/\u{61}/.test('a'));
    // console.log(/\u{61}/u.test('a'));

    console.log(`\u{20bb7}`);

    let s = '𠮷'

    console.log(/^.$/.test(s));
    console.log(/^.$/u.test(s));

    console.log(/𠮷{2}/.test('𠮷𠮷'));
    console.log(/𠮷{2}/u.test('𠮷𠮷'));

//    .  不能匹配超过两个2个字符
//    u  不能匹配个2个字符
}