let html = document.querySelector('#html');
let style = document.querySelector('#style');
let div = document.querySelector('#div')

let str = `/* 我是 Blanche
 * 接下来为大家动态地展示我画的一个八卦图
 **/

/*
 * 首先，我需要一个 div
 **/
#div{
    width: 200px;
    height: 200px;
    border: 1px solid black;
}

/* 
 * 将 div 渲染成圆形
 */
#div{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}

/* 
 * 接着，将 div 渲染成一半白一半黑的阴阳模式
 */
#div{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 
 * 使用伪元素将 div 渲染成阴阳两方，天地两部；
 */
#div::before {
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background-color: #fff;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}
#div::after {
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background-color: #000;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

/* 
 * 最后，使用渐变的镜像功能，进一步渲染八卦图，完成一幅太极阴阳图（阴阳鱼互纠太极图）。
 */
#div::before {
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div::after {
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`;

let str2 = "";
let n = -1;

let step = () => {
    n++;
    if (n > str.length - 1) { return }
    if (str[n] == '\n') {
        str2 += "<br>"
    } else if (str[n] == " ") {
        str2 += "&nbsp;"
    }
    else {
        str2 += str[n]
    }
    setTimeout(() => {
        html.innerHTML = str2;
        style.innerHTML = str.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        step();
    }, 100);
}
step();
