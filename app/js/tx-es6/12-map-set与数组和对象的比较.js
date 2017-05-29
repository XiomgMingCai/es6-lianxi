{
    let map = new Map;
    let arr = [];
    // 增;
    map.set('t', 1);
    arr.push({t: 1});


    //查
    map.has('t');
    arr.find(item => item.t);

    //改
    map.set('t', 2);
    arr.forEach(function (item) {
        item.t ? item.t = 2 : null
    });

    //删除
    map.delete('t');
    arr.splice(arr.findIndex(item => item.t), 1);

}

{
    let set = new Set();
    let arr = new Array();

    // 增
    set.add({t: 1})
    arr.push({t: 1})

    // 查
    console.log(set.has(t));
    console.log(arr.find(item => item.t));
    //改
    set.forEach(function (item) {
        item.t ? item.t = 2 : ''
    })
    arr.forEach(item => item.t ? item.t : '')
    // 删
    set.forEach(item => item.t? set.delete(item):'')
    let index = arr.findIndex( item => item.t)
    arr.splice(index, 1)

}
