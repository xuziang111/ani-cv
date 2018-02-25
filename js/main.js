!function(){
let css1 = `/* 
* 面试官你好，我是XXX
* 只用文字作做我介绍太单调了
* 我就用代码来介绍吧
* 首先准备一些样式
*/
*{
 transition: all 1s;
}
html{
 background:#005555;
 font-size:16px;
}
.styleBox{
 width: 45%; 
 left: 0; 
 margin:1em;
 position: fixed; 
 height: 95vh;
 overflow:auto;
 border: 1px solid #aaa;
 padding: 16px;
 box-sizing:border-box; 
}
/* 代码看不清我需要一点代码高亮 */
.token.selector{ color: #690; }
.token.punctuation{color:#999;}
.token.property{ color: #905; }
.token.function{color:#DD4A68;}
.token.comment{ color:#708090;}
html{color:white;}
/* 加一个看起来不错的3D效果 */
html{perspective: 1000px}
.styleBox {
  position: fixed; left: 0; top: 0;
  transition: none;
  transform: rotateY(10deg) translateZ(-100px) ;
}
/* 现在自我介绍 */
/* 首先需要一张白纸 */
#paper{
  position: fixed; 
  right: 0;
  background-color:white;
  margin:1em;
  box-sizing:border-box; 
  width: 50%;  
  padding: 1em;
  height: 95vh;
  color:black;
}
#paper > .content {
  display: block;  
}
/* 于是我就可以在白纸上写字了，请看右边 */
`
let md = `
# 自我介绍
我是xxx
1996 年 12 月出生
XXX 学校毕业
自学前端一年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
- [一个导航网站](https://lolimy.club/start/)
- [一个无缝轮播](https://lolimy.club/simple-slideshow/slides-demo-3/)
- [一个画板](https://lolimy.club/canvas/)

# 联系方式
- QQ 584788096
- Email xxxxxxxx
- 手机 xxxxxxx


- [此简历代码](https://github.com/xuziang111/ani-cv)
`

let css2 = `
/* 接下来用一个优秀的库 marked.js
* 把 Markdown 变成 HTML
*/
`
let css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`

function writerCss(prefix,code,fn){
  let domCode = document.querySelector('#code')
  let styleBox = document.querySelector('.styleBox')
  let n = 0
  let id = setInterval(function(){
  n += 1
  domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css);
  styleTag.innerHTML = prefix + code.substring(0,n)
  styleBox.scrollTo(0,styleBox.scrollHeight)
  if(n >= code.length){
    window.clearInterval(id)
    fn && fn.call()
  }
},40)

}
function writerMarkdown(prefix,code,fn){
  let paper = document.querySelector('#paper > .content')
  let n = 0
  let id = setInterval(function(){
  n += 1
  paper.innerHTML = prefix + code.substring(0,n)
  if(n >= code.length){
    window.clearInterval(id)
    fn && fn.call()
  }
},10)
}

writerCss('',css1,()=>{
  writerMarkdown('',md,() =>{
    writerCss(css1,css2,() =>{
      let paper = document.querySelector('#paper > .content')
      paper.innerHTML = marked(md)
      writerCss(css1 + css2,css3)
    })
  })
})
}
