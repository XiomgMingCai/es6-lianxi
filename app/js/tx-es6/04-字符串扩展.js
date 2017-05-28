{
    // console.log('a', `\u0061`);
    // console.log('s', `\u20BB7`);
    // console.log('s', `\u{20BB7}`);
    var s = '𠮷'
}

{
    // es5
    // console.log(s.length);

    // console.log(s.charAt(0));
    // console.log(s.charAt(1));

    // console.log(s.charCodeAt(0));
    // console.log(s.charCodeAt(1));
}

{
    //es6
    let s = '𠮷a'
    console.log(s.length);
    console.log('code0', s.codePointAt(0));
    console.log('code0', s.codePointAt(0).toString(16));
    console.log('code0', s.codePointAt(1))
    console.log('code0', s.codePointAt(2).toString())


}

{
    // es5
    console.log('es5', String.fromCharCode('0x20bb7'));
    // es6
    console.log(String.fromCodePoint('0x20bb7'));
}


{
    let str = `\u{20bb7}abc`
    for (let i = 0; i < str.length; i++) {
        console.log('es5', str[i]);
        /*
         es5 �
         es5 �
         es5 a
         es5 b
         es5 c
        */
    }
    for (let code of str) {
        console.log('es6', code);

        /*
         es6 𠮷
         es6 a
         es6 b
         es6 c
        */
    }
}




