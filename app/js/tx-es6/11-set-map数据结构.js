{
    let list = new Set();

    list.add(5)
    list.add(7)
    list.add(7)
    list.add(1)

    // console.log(list.size);


    var arr = [1, 3, 3, 4, 5, '5', 6, 7, 4]
    // console.log(arr.length);

    let myset = new Set(arr)

    // console.log(myset);

    // for(let [key, value] of Object.entries(sert)){
    //     console.log(key, value);
    // }

    // myset.delete(1)

    // console.log(myset);
    // console.log('has',myset.has('5'));
    // console.log(myset);

    // myset.clear()
    // console.log(myset);


}

{
    let myset = new Set([1, 2, 3, 4, 2, 1, 2, 2, 3, 4, 3, 2, 1])

    for (let key of myset.keys()) {
        // console.log("key =>",key);
    }
    for (let value of myset.values()) {
        // console.log("value =>",value);
    }

    for (let [key, value]of myset.entries()) {
        // console.log('key',key, '   value',value);
    }
    myset.forEach(function (item) {
        // console.log('firEach=> ',item);
    })

}
{// 1 必须为对象 2. 对象值都是弱引用.(值是地址引用不会关心垃圾回收♻) 3 不能遍历 4 没有clear 方法
    let Weakarr = new WeakSet()

    Weakarr.add(global)

    // console.log(Weakarr.has(global));

    // console.log(global.versions);
}

/**
 * new Map()
 */

require('babel-polyfill')
{


    let my_map = new Map()

    let arr = ['123']

    my_map.set(arr, 456)
    my_map.set(true, 'key 可以是任意数据类型')
    my_map.set(23, '数字作为key 也可以')


    console.log(my_map.get(arr));
    console.log(my_map.get(true));
    console.log(my_map.get(23));

    my_map.delete(23)
    my_map.clear()

    console.log(my_map.size);

}
{
    let weakmap = new WeakMap()
    let o  ={}

    weakmap.set(o, 456)

    console.log(weakmap.get(o));
}