{
    let arg, fast;
    [fast, ...arg] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    for (let i of arg) {
        // console.log(i);
    }
}

{

    let a, b
    ({a, b} = {a: 'xiaoming', b: '23'})

    // console.log(a, b);

}
{
    let age = '小明', name = '23';
    [name, age] = [age, name]
    // console.log(name, age);
}

{
    function getArr() {
        return [1, 2, 3, 4, 5]
    }

    let a, arg;
    [a, , ...arg] = getArr()
    // console.log(a, arg);
}

{
    let name, age;
    ({age, name=0} = {name: 'xiaoming', age: '张三',})//调换顺序输出变量不变
    console.log(name);
}

{
    // JSON
   function getDoc() {
       return{
           title:"我爱祖国",
           类容:[{
               title:'祖国山河美',
               deoc:'adfadsafasdfafdasffdasdsaassf'
           }]
       }
   }
   let {title:esTitle,类容:[{title:cnTitle}]} = getDoc()
    console.log(esTitle, cnTitle);
}