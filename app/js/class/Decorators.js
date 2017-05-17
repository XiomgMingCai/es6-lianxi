{
    let readonly = function (target, name, descriptor) {
        descriptor.writable = false
        return descriptor
    }

    class Test {
        @readonly
        time() {
            return '2017 -5 -17'
        }
    }

    let test = new Test()
    /*  test.time = function () {
     console.log(233);
     }*/
    console.log(test.time());
}

{
    let typename = function (target, name, descriptor) {
        target.myname = 'xiaoMing'

    }
    @typename
    class Person {

    }

    console.log(Person.myname);
    //core-decorators
}

{
    let log = function (type) {
        return function (target, name, descriptor) {
            let src_method = descriptor.value
            descriptor.value = (...arg) => {
                src_method.apply(target, arg)
                //广告埋点逻辑
                console.log(`log s : +> ${type}`);
            }
        }
    }
    class AD{
        @log('show')
        show (){
            console.log('ad is show');
        }
        @log('click')
        click(){
            console.log('ad is click');
        }
    }

    let ad = new AD()
    ad.show()
    ad.click()

}