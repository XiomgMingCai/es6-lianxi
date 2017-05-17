/*
 //数据结构的横象对比
 {

 let map = new Map()
 let arr = []

 arr.push({name:'xiaoMing'});

 map.set('name', 'zhangSan')
 //查
 arr.find(function (item) {
 console.log(item.t);
 })
 console.log(map.has('name'));
 // 改
 console.log(map.set('name', '233'));
 console.log('arr.forEach',arr);
 console.log(arr.forEach(function (item) {
 item.name?item.name  = 'xiaoFang': ''
 }));
 console.log(JSON.stringify(arr,undefined,4));
 //删除
 map.delete('name')

 let index = arr.findIndex(item => item.name)

 console.log('index',index);
 arr.splice(index,1)

 console.log(JSON.stringify(arr,undefined,4));
 }*/
/*
 {
 let set = new Set()
 let arr = []

 set.add({t: 1})
 arr.push({t: 1})

 console.log(set.has({t: 1}));
 arr.forEach(function (item) {
 console.log(item.t);
 });


 }*/

{
    let item = {t: 1};

    let map = new Map()
    let set = new Set()
    let obj = {}
    //增
    map.set('t', 1)
    set.add(item)
    obj['t'] = 1

    console.log(obj, map, set);
    // 查
    console.info({
        map_exist:map.has('t'),
        set_exist:set.has('t'),
        obj_exist:'t' in obj
    });
    //删除
    map.delete('t')
    set.delete(item)
    delete obj['t']
    console.info({
        map_exist:map.has('t'),
        set_exist:set.has('t'),
        obj_exist:'t' in obj
    });
}
