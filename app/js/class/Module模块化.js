/*
export let  a= 123;

export function test() {
    console.log('function');
}

export class Perosn{
    test(){
        console.log('class');
    }
}*/


let a = 123;

function test() {
    console.log('function');
}

class Perosn {
    test() {
        console.log('class');
    }
}

export default {
    a,
    test,
    Perosn
}
