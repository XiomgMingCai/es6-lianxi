/**
 * Created by xiongmingcai on 17/5/29.
 */
{
    let item = {t:1}
    let map  = new Map()
    let set = new Set()
    let obj = []

    //增
    map.set('t',1)
    set.add(item)
    obj['t']=1
    //查
    map.has('t')
    set.has('t')
    't' in obj.log //true
    //改
    map.set('t',2)
    item.t=2 //set 修改引用就行
    obj['t'] =2
    //删
    map.delete('t')
    set.delete(item)
    delete obj['t']

    // 总结 1. 开发中优先使用 Map 2. 数据唯一性优先考虑Set
}