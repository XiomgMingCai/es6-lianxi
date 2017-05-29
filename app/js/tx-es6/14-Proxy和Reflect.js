/**
 * Created by XiongMingCai on 17/5/29.
 */

{
    let obj = new Proxy({}, {
        get: function (target, key, receiver) {
            console.log(`getting ${key}!`);
            return Reflect.get(target, key, receiver);
        },
        set: function (target, key, value, receiver) {
            console.log(`setting ${key}!`);
            return Reflect.set(target, key, value, receiver);
        }
    });

    obj.count = 1
    obj.count
}
{

    let proxy = new Proxy({}, {
        get: function(target, key) {
            console.log(key);
            return 35;
        }
    });

    proxy.time; // 35
    proxy.name // 35
    proxy.title // 35
}



{
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    }

    let monotor = new Proxy(obj, {
        //拦截对象属性的读取
        get(target, key){
            return target[key].replace(2017, 2018)
        },
        //拦截对象设置属性
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
                delete  target[key];
                return true
            } else {
                return target[key]
            }

        },
        // 拦截 Object.keys(),
        // 拦截 Object.getOwnPropertySymbols(),
        // 拦截 Object.getOwnPropertyNames()
        ownKeys(target){
            return Object.keys(target)
                .filter(item => item != 'time')
        }

    })
}
{
    let obj = {
        time: '2017-03-11',
        name: 'net',
        _r: 123
    }

    // console.log('reflect get', Reflect.get(obj, 'time'));
    // console.log('reflect set', Reflect.set(obj, 'imooc'));
    // console.log('reflect has', Reflect.has(obj, 'name'));
}
{
    // Proxy Reflect 实现一个解耦合 验证模块
    function validator(target, validator) {
        return new Proxy(target, {
            _validator: validator,
            //拦截对象设置属性
            set(target, key, value, proxy){
                if (target.hasOwnProperty(key)) {
                    let va = this._validator[key]
                    if (va(!!value)) {
                        return Reflect.set(target, key, value, proxy)
                    } else {
                        return Error(`不能设置${key}到${value}`)
                    }
                } else {
                    throw Error(`${key} 不存在`)
                }
            }
        })
    }

    //过滤条件
    let presonValidaators = {
        name(val){
            return typeof val === 'string'
        },
        age(val){
            return typeof val === "number" && val > 18
        }
    }

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            return validator(this, presonValidaators);
        }
    }

    let person = new Person('lilei', 30)
    // console.log(person);
    // console.log(person.name = 48);

}
