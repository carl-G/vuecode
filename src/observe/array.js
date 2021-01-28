// 会影响到数组本身结构的方法： push, shift, unshift, pop, reverse, sort, splice

let oldArrayMethods = Array.prototype;

export let arrayMethods = Object.create(oldArrayMethods)


const methods = [
    'push',
    'shift',
    'unshift',
    'pop',
    'reverse',
    'sort',
    'splice'
]

methods.forEach(methods => {
    arrayMethods[methods] = function(...args) {
        const result = oldArrayMethods[methods].apply(this,args);

        let inserted; // 当前用户插入的数据
        let ob = this.__ob__
        switch(methods) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
                inserted = args.slice(2)
            default:
                break;     
        }
        if(inserted) ob.observerArray(inserted)
        return result
    }
})