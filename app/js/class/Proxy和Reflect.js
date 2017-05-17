// 代理和反映
{
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    }

    let monitor = new Proxy(obj, {
        //拦截对象属性的读取
        get(target, key){
            return target[key].replace('2017', '2018')
        },
        /**
         * 拦截对象设置属性
         * @param target object对象(target :目标)
         * @param key
         * @param value
         * @returns {*}
         */
        set(target, key, value){
            if (key === 'name') {
                return target[key] = value
            } else {
                return target[key]
            }
        },
        //拦截 key in object 操作
        has(target, key){
            if (key === 'name') {
                return target[key]
            } else {
                return false
            }
        },
        //拦截delete
        deleteProperty(target, key){
            //下滑线开头的删除 否则不删除
            if (key.indexOf('_') > -1) {
                delete  target[key]
                return true
            }else {
                return target[key]
            }

        },
        //拦截 Object.keys(), Object.getOwnPropertySymbols(), Object.getOwnPropertyNames()
        ownKeys(target){
            return Object.keys(target).filter(item => item != 'time')
        }

    })

/*    console.log(monitor.time);
    monitor.name = 'imooc'

    console.log(monitor.name);
    console.log(delete  monitor.time);
    console.log(delete  monitor._r);

    console.log('has', 'name' in monitor, 'time' in monitor);
    console.log(monitor);*/

    console.log('ownKeys',Object.keys(monitor));

    console.log(monitor);
}

//////////////////////////////////////////


{
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    }

    console.log('reflect get', Reflect.get(obj, 'time'));
    console.log('reflect set', Reflect.set(obj, 'imooc'));
    console.log('reflect has', Reflect.has(obj, 'name'));
}