
/**
 * 
 * @param {*} data 当前数据是不是对象
 */
function isObject(data) {
    return data !== null && typeof data === 'object'
}

function def(data,key,value) {
    Object.defineProperty(data,key, {
        enumerable: false,
        configurable: false,
        value
    })
}



export {
    isObject,
    def
}