{
    let a, b, c;
    [a, b] = [1, 2]

    // console.log(a, b);
}

{
    let a, b, rest;
    [a, b, ...rest] = [1, 2, 3, 4, 5, 8]
    // console.log(a, b, rest);
}

{
    let a, b;
    ({a, b} = {a: 1, b: 2})
    // console.log(a, b);
}

{
    let a, b, c;
    ({a, b, c =3} = {a: 1, b: 2})
    // console.log(a, b,c);
}

{
    let a = 'world';
    let b = 'hello';
    [a, b] = [b, a]

    // console.log(a, b);
}
{
    function f() {
        return [1, 2]
    }

    let a, b;

    [a, b] = f()

    // console.log(a, b);
}
{
    function f() {
        return [1, 2, 3, 4, 5, 6]
    }

    let a, b;

    [a, , , , b] = f()

    // console.log(a, b);
}
{
    function f() {
        return [1, 2, 3, 4, 5, 6]
    }

    let a, b;

    [a, , ...b] = f()

    // console.log(a, b);
}
{
    const person = {
        name: 'xiaoming',
        age: 23
    }
    //名字要对应
    let {name, age} = person
    // console.log(name, age);
}
{
    const doc = {
        title: ' # 标题',
        codes: [
            {type: 'css', code: 'p { color: red }'},
            {type: 'js', code: 'var a = 10'},
        ]
    }

    let {title: my_title, codes:[{},{code:my_code}]} = doc

    // console.log(my_title, my_code);
}