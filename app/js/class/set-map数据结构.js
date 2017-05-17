/*
/!*
{
    let list = new Set();
    list.add(5)
    list.add(7)
    list.add(7)

    console.log(list);
    console.log(`list.size: ${list.size}`);
}

{
    let arr = [1, 2, 3, 4, 5, 6, 7]

    let list = new Set(arr);

    console.log(list.size);
}

{

    let arr = ['1', 2, 3, 4, 1, 2, 1, 3, 4, 1, 1, 2, 3, 3]

    console.log(new Set(arr));

}
*!/
/!*

{
    let arr = ['add', 'delete', 'clear', 'has']
    let  list = new Set(arr)
   /!* console.log(list.has('add'));
    console.log('delete \r '+ list.delete('add') ,list);
    console.log('clear \r '+ list.clear() ,list);
*!/
}

{
    let arr = ['add', 'delete', 'clear', 'has']
  /!*  for (let key of arr ){
        console.log(key);
    }*!/

    for (let key of arr.keys()){
        console.log(key);
    }
    for (let value of arr.values()){
        console.log(value);
    }
    for (let [key, value] of arr.entries()){
        console.log(`arr key :${key} value :${value}`);
    }

    arr.forEach(function (item) {
        console.log(item);
    })
}
*!/

{
    let Weakobj = new WeakSet()
    // console.log(Weakobj.add({name: 'xiaoMing'}));//只能存储对象
}

{
    var m = new Map();
    var o = {p: "Hello World"};

    m.set(o, "content")
    console.log(m.get(o));
    // "content"
    console.log(m.has(o));

   let person =  new Map([ ["name", "张三"], ["title", "Author"]]);
    console.log(person.get('name'));
    console.log(person.size);
    console.log(person.delete('title'));
    console.log(person.get('title'));
    //
}

{
    let  a = 'srt'
    var map = new Map();

    map.set(a, 555);
    console.log(map.get(a))
}
{

  /!*  var sfs = {
        name:'xiaoming',
        2:23
    }
    console.log(sfs.name);

    let abc = new Map()

    abc.set(2,23)
    console.log('abc.get'+abc.get(2));*!/

}*/

{
    let Weak_Map = new WeakMap();
    let  o  =  {}

    Weak_Map.set(o, 'hello world ! ')

    console.log(Weak_Map.get(o));
    console.log("size",Weak_Map.size);
    console.log("clear",Weak_Map.clear());
    /**
     * 1 只能接受对象 做为key 值
     * 2 没有 size  不能使用 clear
     * 3 不能 遍历
     */
}
