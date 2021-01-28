import {arrayMethods} from './array.js'
import {isObject, def} from '../utils/index'
// 把data中的数据 都使用object.defineProperty重新定义 es5
// 因为object.defineProperty 不能兼容ie8 所以vue2不能兼容ie8版本

class Observer {
    constructor(value) {
        // vue如果数据层数过多，需要递归去解析对象中的属性，依次增加set和get方法 （vue3得到解决）
       
        def(value,'__ob__',this)
        if(Array.isArray(value)) { //为了性能考虑 区分一下数组和对象
            value.__proto__ = arrayMethods
            this.observerArray(value)
        } else {
            this.walk(value)
        }
        
    }
    walk(data) {
        let keys = Object.keys(data)
        keys.forEach((key) => {
            defineReactive(data,key, data[key])
        })
      
    }
    observerArray(value) {
        for(let i = 0; i < value.length; i++) {
            observe(value[i])
        }
    }
    
}

function defineReactive(data, key, value) {
    observe(value) // 递归实现深度检测
    Object.defineProperty(data, key, {
        configurable: true,
        enumerable: false,
        get() {
            return value;
        },
        set(newValue) {
            if(newValue === value) return 
            observe(value) // 继续劫持用户设置的值， 因为有可能用户设置的值是一个对象
            console.log('值发生了变化')
            value = newValue
        }
    })
}

export function observe(data) {
    let isObj = isObject(data)
    console.log(isObj)
    if(!isObj) return

    return new Observer(data) // 用来观测数据
}