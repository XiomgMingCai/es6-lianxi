/*
 {
 let ajax = function (callback) {
 setTimeout(function () {
 if (Math.random() > 0.5) {
 callback('(:')
 } else {
 callback("):")
 }
 }, 2000)
 }

 ajax(function (data) {
 console.log(data);
 })
 }
 */

/*{
 let ajax = function () {
 return new Promise(function (resolve, reject) {
 setTimeout(function () {
 if (Math.random() > 0.5) {
 resolve('(:')
 } else {
 reject('^ - ^ !')
 }
 }, 2000)
 })
 }
 ajax().then(function (data) {
 console.log(data);
 }, function (data) {
 console.log(data);

 }).catch(function (err) {
 console.log('catch',err);
 })
 }/!**!/*/

/*
 {
 let ajax = function (num) {
 return new Promise(function (resolve, reject) {
 if (num) {
 resolve()
 }else {
 throw Error('err')
 }

 })
 }
 ajax().then(function (data) {
 console.log(data);
 }, function (data) {
 console.log(data);

 }).catch(function (err) {
 console.log('catch',err);
 })
 }*/
/*{
    //所有图片加载完再添加至页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img')
            img.src = src;
            img.onload = function () {
                resolve(img)
            }
            img.onerror =function (err) {
                reject(err)
            }
        })
    }
    function showImgs(imgs) {
        imgs.forEach(function (img) {
            document.body.appendChild(img)
        })
    }

    Promise.all([
        loadImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgx51J_7qyBZFwtkUTjvV8wfOUyb6pN2yczMkYOz85f0SNjDe5'),
        loadImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ptkO7vx9EJuwH5s77RG-3iJgr5m5S_uuI1BvCe_7ZEM2qMeheA'),
        loadImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFynE3clrgzCU2ZDw9SDn5gM2JuwEsCE37Qf4S6uBlJljejEYWg')
    ]).then(showImgs)
}*/

{
    //加载完一张 就去渲染
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img')
            img.src = src;
            img.onload = function () {
                resolve(img)
            }
            img.onerror =function (err) {
                reject(err)
            }
        })
    }

    function showImgs(img) {
        let p = document.createElement('p')
        p.appendChild(img)
        document.body.appendChild(p)
    }

    Promise.race([
        loadImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgx51J_7qyBZFwtkUTjvV8wfOUyb6pN2yczMkYOz85f0SNjDe'),
        loadImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ptkO7vx9EJuwH5s77RG-3iJgr5m5S_uuI1BvCe_7ZEM2qMeheA'),
        loadImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFynE3clrgzCU2ZDw9SDn5gM2JuwEsCE37Qf4S6uBlJljejEYWg')
    ]).then(showImgs)
}

{

}