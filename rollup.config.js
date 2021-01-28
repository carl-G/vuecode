import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'


export default {
    input : './src/index.js', // 以哪个文件为打包的入口
    output: {
        file: './dist/umd/vue.js', // 出口路径
        name: 'Vue', // 制定打包后全局变量的名字
        format: 'umd', //统一模块规范
        sourcemap: true, // es6->es5 开启源码调试，可以找到源代码的报错位置
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        process.env.ENV=== 'development' ? serve({ // 只有在开发环境才启动服务
            open: true,
            openPage: '/public/index.html', // 默认打开html的路径
            port: 3000,
            contentBase: '' // 以当前路径启动服务
        }) : null
    ]
}