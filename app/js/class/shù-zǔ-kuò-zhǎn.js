{
    let arr = Array.of(3, 4, 7, 9, 11)
    console.log(arr);

    let empty = Array.of()
    console.log(empty);
}

{
    let p = document.querySelectorAll('p')
    let parr = Array.from(p)
    parr.forEach(function (p) {
        console.log(p);
    })


    console.log(Array.from([1, 3, 5], function (item) {
        return item * 2
    }));
}

{
    console.log(['a', 'b', 'c'].fill(7));
    console.log(['a', 'b', 'c'].fill(7,1,3));
}

{
    for(let index of ['1','ks','msg'].keys()){
        // console.log(index);
    }
    for(let values of ['1','ks','msg'].values()){
        console.log(values);
    }
}

{
    console.log('copyWithin');
    console.log([0,1, 2, 3, 4, 5, 6, 7].copyWithin(0,4,5))
}
{
    console.log('find ');
    console.log([1, 2, 3, 4, 5, 6].find(function (item) {
        return item > 3
    }));
    console.log('findIndex');
    console.log( '大于13 的从 '+[10,11, 12, 13, 14, 15, 16].findIndex(function (item) {
        return item > 13
    }));
}