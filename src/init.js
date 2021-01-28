import {initState} from './state'
import {compileToFunction} from './compiler/index'
export function initMixin(Vue) {
    Vue.prototype._init = function(option) {
        console.log(option)
        const vm = this // vue使用this.$options指代的就是用户传递的属性
      
        vm.$options = option
        // 初始化状态
        initState(vm)

        // 如果用户传入了el 属性，需要将页面渲染出来，实现挂载流程
        if(vm.$options.el) {
            vm.$mount(vm.$options.el)
        }
    }
    Vue.prototype.$mount = function (el) {
        const vm = this;
        const option = vm.$options
        el = document.querySelector(el)

        // 默认渲染顺序 render => template => el
        if(!option.render) {
            // 对模版进行编译
            let template = option.template; // 取出模版
            if (!template && el) { // 存在模版
                template = el.outerHTML;
            } else {
                // el
            }
            compileToFunction(template)
            console.log(template, 'template ')
        }
    }
}

