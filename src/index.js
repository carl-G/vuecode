import {initMixin} from './init'

// 核心函数
function Vue(option) {
    // console.log(option, 'Vue')
    this._init(option)
}

initMixin(Vue)


export default Vue