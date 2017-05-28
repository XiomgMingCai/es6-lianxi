{
    let arr = Array.of(1, 2, '3434', [4, 5, 6, [7, 8, 9]])

    // console.log(arr);

    for (let i of arr) {
        // console.log(i);
    }

    ['hello ', 'world', ' Hi'].forEach(function (item) {
        // console.log(item);
    })
    // console.log(Array.of());
}

{
    //可以把转换成数组
    // console.log(Array.from('foo'));
    let arr = [1, 2, 3, 4, 5, 6]

    let test = Array.from(arr, function (item) {
        return item * 2
    })

    // console.log(test);
}
{
    let arr = [1, 2, 3, 4, 5, 6]

    arr.fill(0, 3, 5)

    // console.log(arr);

    let demo = new Array(5).fill(0)
    // console.log(demo);
}
require('babel-polyfill')
{
    let obj = [
        {'全局配置': ['silent', 'optionMergeStrategies', 'devtools', 'errorHandler', 'ignoredElements']},
        {'全局 API': ['Vue.extend', 'Vue.set', 'Vue.delete']},
    ]

    obj.forEach(function (item) {
        // console.log(Object.keys(item));
        // console.log(Object.values(item));
    })

    let arr = [-11, '-5', 'Vue.extend', 'Vue.set', 'Vue.delete', 'c', 'ls']


    for (let key of arr.keys())
        // console.log(key);


        for (let [index, value] of arr.entries()) {
            // console.log(index, value);
        }
}

let arr2 = ['w', 'y', 'k', 'o', 'p'];
for (let i of arr2.values()) {
    // console.log(i);
}
{
    //交换值的api
    // console.log([0,1, 2, 3, 5, 6, 7, 8].copyWithin(0,3,4));
}
{
    let result = [6, 7, 8, 9, 0, 1, 2, 3, 4, 5].find(function (item) {
        return item > 3
    })

    // console.log(result);//返回数组中第一个大于3 的
}

{
    let result = [6, 7, 8, 9, 0, 1, 2, 3, 4, 5].findIndex(function (item) {
        return item > 3
    })

    // console.log(result);//返回数组中第一个大于3 的 索引值

    var fakeArray01 = {0: 'a', 1: 'b', length: 2};//这是一个标准的有伪数组对象
    let es6arr = Array.from(fakeArray01)
    console.log('es6arr',es6arr[0]);
    console.log('es6arr',es6arr[1]);
    let es5arr2= Array.prototype.slice.call(fakeArray01)
    console.log('es5arr2',es5arr2[0]);
    console.log('es5arr2',es5arr2[1]);
}

