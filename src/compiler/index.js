// ast语法树 是用对象来描述原生语法的   虚拟dom 用对象来描述dom节点

const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`;
const qnameCapture = `((?:${ncname}\\:)?${ncname})`;
const startTagOpen = new RegExp(`^<${qnameCapture}`) // 标签开头的正则 捕获的内容是标签名
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`) // 匹配标签结尾的</div>
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)'+|([^\s"'=<>`]+)))?/;
const startTagClose = /^\s*(\/?)>/;
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g

function parseHTML(html) {
    // 不停的去解析html字符串
    while (html) {
        let textEnd = html.indexOf('<')
        if(textEnd === 0) {
            // 如果当前索引为0 肯定是一个标签 开始标签 结束标签
            let startTagMatch = parseStartTag()
            break
        }
    }
    function advance(n) {
        html = html.substring(n)
    }
    function parseStartTag() {
        let start = html.match(startTagOpen)
        if(start) {
            const match = {
                tagName: start[1],
                attrs: []
            }
            advance(start[0].length);
            
        }
        let end,attr;
        while(!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
            advance(start[0].length); // 取出属性
            // match.attr.push({name:,value:});
        }
        console.log(html)
    }
}


export function compileToFunction(template) {
    let root = parseHTML(template)
    return function render() {

    }
}