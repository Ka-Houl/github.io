(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{387:function(t,r,e){"use strict";e.r(r);var n=e(8),a=Object(n.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"css-知识清单"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css-知识清单"}},[t._v("#")]),t._v(" CSS 知识清单")]),t._v(" "),r("h2",{attrs:{id:"选择器及优先级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择器及优先级"}},[t._v("#")]),t._v(" 选择器及优先级")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/hCaRwKswMVdK8ZrYfqcTcA",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS选择器有哪些？优先级？哪些属性可以继承？"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"7199832444835659837"}},[t._v("探究 CSS 选择器性能真相")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7200685976526815291#heading-18",target:"_blank",rel:"noopener noreferrer"}},[t._v("再次认识 CSS 优先级"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"bfc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7072174649735381029",target:"_blank",rel:"noopener noreferrer"}},[t._v("了解 BFC、IFC、GFC 和 FFC"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"水平与垂直居中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#水平与垂直居中"}},[t._v("#")]),t._v(" 水平与垂直居中")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/r17roT-aEdElmmgNeg7qdg",target:"_blank",rel:"noopener noreferrer"}},[t._v("元素水平垂直居中的方法有哪些？如果元素不定宽高呢？"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/sisterAn/blog/issues/119",target:"_blank",rel:"noopener noreferrer"}},[t._v("实现元素水平垂直居中的 N 种方式"),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"水平居中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#水平居中"}},[t._v("#")]),t._v(" 水平居中")]),t._v(" "),r("ul",[r("li",[t._v("内联元素："),r("code",[t._v("text-align: center")])]),t._v(" "),r("li",[t._v("块级元素："),r("code",[t._v("margin: 0 auto")])]),t._v(" "),r("li",[t._v("内联块实现：将行内多个元素设定为 inline-block 行内块，然后在父元素添加 text-align。")]),t._v(" "),r("li",[t._v("弹性布局："),r("code",[t._v("justify-content: center")]),t._v("。")]),t._v(" "),r("li",[t._v("固定宽度-外边距偏移：先相对于父元素向右偏离半个父元素宽度，然后使用负左外边距(负 margin)校正居中元素的偏移量。")]),t._v(" "),r("li",[t._v("固定宽度-外边距适配：(position: absolute; left: 0; right: 0; margin: 0 auto)")]),t._v(" "),r("li",[t._v("未知宽度：当定位元素未知宽度时，使用 transform 对自身进行偏移可以解决这个问题(left + transform)")])]),t._v(" "),r("h4",{attrs:{id:"垂直居中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#垂直居中"}},[t._v("#")]),t._v(" 垂直居中")]),t._v(" "),r("ul",[r("li",[t._v("单行内联元素：设置内联元素的高度 height 和行高 line-height 相等，从而使元素垂直居中。")]),t._v(" "),r("li",[t._v("表格布局：使用表格布局的 vertical-align: middle 可以实现子元素的垂直居中。")]),t._v(" "),r("li",[t._v("弹性布局：为父元素设置为 flex 弹性布局，并设置布局方向 flex-direction 为垂直，子元素适配 justify-content 为居中即可实现垂直居中")]),t._v(" "),r("li",[t._v("精灵元素：利用精灵元素（Ghost Element）技术实现垂直居中，即在父容器内放一个 100% 高度的伪元素，让 文本 和 伪元素 垂直对齐，从而达到垂直居中的目的。")]),t._v(" "),r("li",[t._v("固定高度-外边距偏移：当居中元素的 高度和宽度 已知时，垂直居中问题就很简单。通过 绝对定位 元素距离顶部 50%，并设置 margin-top 向上偏移元素高度的一半，就可以实现垂直居中了。")]),t._v(" "),r("li",[t._v("固定高度-外边距适配")]),t._v(" "),r("li",[t._v("未知高度：与 块级元素-有滚动条 实现效果类似，只是对定位元素自身的偏移使用 transform 实现(top + transform)")]),t._v(" "),r("li",[t._v("图片垂直居中："),r("code",[t._v("font-size: 0")]),t._v("。在 font-size 不为 0 时，图片设置垂直居中时的中线位置并不是它的父元素的绝对中线位置，它们会有一个和字符 x 高度相关的高度差。设置 font-size 为 0，会消除这个高度差，使图片的中线位置和父元素中线重合。")])]),t._v(" "),r("h4",{attrs:{id:"水平垂直居中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#水平垂直居中"}},[t._v("#")]),t._v(" 水平垂直居中")]),t._v(" "),r("ul",[r("li",[t._v("文本元素：通过设置父元素容器 text-align 实现水平居中，设置一致的高度（height）和行高（line-height）实现对子元素的垂直居中，垂直居中元素设置 vertical-align 以及 line-height 为 initial 实现子元素内部的基准线垂直居中")]),t._v(" "),r("li",[t._v("固定垂直居中元素的宽高：相对于父元素容器左边距和上边距坐标偏移 50%，通过计算垂直居中元素宽/高，利用负 margin 偏移自身宽/高的 50%。或者通过设置上下左右坐标为 0，外边距自适应 auto 实现垂直居中。两种处理手法都需要设置垂直居中元素为标准盒模型。")]),t._v(" "),r("li",[t._v("不确定垂直居中元素的宽高：相对于父元素容器左边距和上边距坐标偏移 50%，使用 transform + translate 将垂直居中元素自身偏移负 50%，使用标准盒模型")]),t._v(" "),r("li",[t._v("弹性布局：父元素设置为弹性布局容器，并将 justify-content 和 align-items 设置为 center 居中")]),t._v(" "),r("li",[t._v("网格布局：父元素设置为网格布局容器，垂直居中元素设置外边距 margin 为自适应 auto 即可")])]),t._v(" "),r("h2",{attrs:{id:"布局与响应式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#布局与响应式"}},[t._v("#")]),t._v(" 布局与响应式")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/aKHUQUAKkcrXzDgIkJliUg",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/OORqq5uK8jgjDV2Hkx0baA",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flex弹性盒布局"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/5rs7f7SCclJnG88Veb-P9g",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grid网格布局"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/5N5ZMIzACWj08mrZAa7fKg",target:"_blank",rel:"noopener noreferrer"}},[t._v("响应式设计"),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"双栏布局"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#双栏布局"}},[t._v("#")]),t._v(" 双栏布局")]),t._v(" "),r("p",[t._v("左固定右适应：")]),t._v(" "),r("ul",[r("li",[t._v("float + margin")]),t._v(" "),r("li",[t._v("float + margin 偏移")]),t._v(" "),r("li",[t._v("float + overflow(BFC)")]),t._v(" "),r("li",[t._v("table")]),t._v(" "),r("li",[t._v("绝对定位")]),t._v(" "),r("li",[t._v("flex")]),t._v(" "),r("li",[t._v("grid")])]),t._v(" "),r("p",[t._v("左适应右固定:")]),t._v(" "),r("ul",[r("li",[t._v("float + margin")]),t._v(" "),r("li",[t._v("table")]),t._v(" "),r("li",[t._v("flex")]),t._v(" "),r("li",[t._v("grid")])]),t._v(" "),r("h4",{attrs:{id:"三栏布局"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三栏布局"}},[t._v("#")]),t._v(" 三栏布局")]),t._v(" "),r("p",[t._v("两侧栏固定宽度，中间栏自适应")]),t._v(" "),r("ul",[r("li",[t._v("float")]),t._v(" "),r("li",[t._v("绝对定位")]),t._v(" "),r("li",[t._v("表格布局")]),t._v(" "),r("li",[t._v("弹性布局")]),t._v(" "),r("li",[t._v("网格布局")]),t._v(" "),r("li",[t._v("圣杯布局")]),t._v(" "),r("li",[t._v("双飞翼布局")])]),t._v(" "),r("h2",{attrs:{id:"伪类与伪元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#伪类与伪元素"}},[t._v("#")]),t._v(" 伪类与伪元素")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/",target:"_blank",rel:"noopener noreferrer"}},[t._v("总结伪类与伪元素"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/lgwebdream/FE-Interview/issues/18",target:"_blank",rel:"noopener noreferrer"}},[t._v("css 伪类与伪元素区别"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"css-隐藏页面元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css-隐藏页面元素"}},[t._v("#")]),t._v(" CSS 隐藏页面元素")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/1tnP66WsEZHEDNcNV2srRA",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS中，有哪些方式可以隐藏页面元素？区别?"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7065871783232012318",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 CSS 中隐藏元素的 10 种方法"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"css-画一个三角形"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css-画一个三角形"}},[t._v("#")]),t._v(" CSS 画一个三角形")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/KtKFnuRtK-PDESrVeGclEw",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS如何画一个三角形？原理是什么？"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7075884138900750372",target:"_blank",rel:"noopener noreferrer"}},[t._v("纯 CSS 实现三角形的 3 种方式"),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"利用-border"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#利用-border"}},[t._v("#")]),t._v(" 利用 border")]),t._v(" "),r("div",{staticClass:"language-css line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".triangle")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" solid"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transparent transparent #000 transparent"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br")])]),r("h4",{attrs:{id:"利用-clip-path-剪裁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#利用-clip-path-剪裁"}},[t._v("#")]),t._v(" 利用 clip-path 剪裁")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.html.cn/tool/css-clip-path/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS clip-path 生成器"),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"language-css line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".triangle")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #000"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("clip-path")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("polygon")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0% 0%"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 50% 100%"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 100% 0%"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br")])]),r("h2",{attrs:{id:"支持小于12px-的文字方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#支持小于12px-的文字方式"}},[t._v("#")]),t._v(" 支持小于12px 的文字方式")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/4z3uYqqWV9IvJkXCXGrhvg",target:"_blank",rel:"noopener noreferrer"}},[t._v("让Chrome支持小于12px 的文字方式有哪些？区别？"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"视差滚动效果"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#视差滚动效果"}},[t._v("#")]),t._v(" 视差滚动效果")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/zidEa2l1cG7wgTCdxXgFvw",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何使用CSS完成视差滚动效果?"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"回流与重绘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#回流与重绘"}},[t._v("#")]),t._v(" 回流与重绘")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/hLnFQmfScwK9bWwn6sMlmw",target:"_blank",rel:"noopener noreferrer"}},[t._v("怎么理解回流跟重绘？什么场景下会触发？"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"获取页面元素的位置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取页面元素的位置"}},[t._v("#")]),t._v(" 获取页面元素的位置")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2009/09/find_element_s_position_using_javascript.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("用Javascript获取页面元素的位置"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6898575556796022797",target:"_blank",rel:"noopener noreferrer"}},[t._v("各种高度clientHeight/scrollHeight/offsetHeight及应用"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844903811463512077",target:"_blank",rel:"noopener noreferrer"}},[t._v("元素 offset client scroll 相关属性简介"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"flex-布局和-grid-布局"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flex-布局和-grid-布局"}},[t._v("#")]),t._v(" Flex 布局和 Grid 布局?")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7004622232378966046",target:"_blank",rel:"noopener noreferrer"}},[t._v("彻底理解CSS Flexbox布局"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7160485893810667534",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解 CSS Grid 布局"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7197279149337395260#heading-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flex 布局和 Grid 布局怎么选"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"主题切换方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主题切换方案"}},[t._v("#")]),t._v(" 主题切换方案")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7134594122391748615",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端主题切换方案"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6862274734373994509",target:"_blank",rel:"noopener noreferrer"}},[t._v("深色模式在 Web 端的适配方案"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"css-渲染优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css-渲染优化"}},[t._v("#")]),t._v(" CSS 渲染优化")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844903648833568776",target:"_blank",rel:"noopener noreferrer"}},[t._v("关键渲染路径中的 CSS 解析和渲染"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7168629736838463525#heading-13",target:"_blank",rel:"noopener noreferrer"}},[t._v("用 content-visibility 提高渲染性能"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6942661408181977118",target:"_blank",rel:"noopener noreferrer"}},[t._v("仅使用CSS提高页面渲染速度"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"移动端适配"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#移动端适配"}},[t._v("#")]),t._v(" 移动端适配")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7085931616136069156",target:"_blank",rel:"noopener noreferrer"}},[t._v("超详细讲解H5移动端适配"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/7163932925955112996",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据大屏适配方案"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"css-动画"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css-动画"}},[t._v("#")]),t._v(" CSS 动画")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/azcij-vOQ16XOUnaF83npA",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS3常见动画有哪些？实现方式？"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://newbyvector.github.io/2018/05/01/2015-05-01/",target:"_blank",rel:"noopener noreferrer"}},[t._v("requestAnimationFrame理解与实践"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6889226357851553805",target:"_blank",rel:"noopener noreferrer"}},[t._v("你可能不知道的Animation动画技巧与细节"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://jelly.jd.com/article/5fda117df708c8014219e056",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器动画帧渲染与执行机制探索"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://jelly.jd.com/article/6006b1035b6c6a01506c87a7",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS3动画之逐帧动画"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844904126653202440",target:"_blank",rel:"noopener noreferrer"}},[t._v("requestAnimationFrame，终结定时器动画时代！"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844903630483488782",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 和 JS 动画底层原理及如何优化其性能"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844904185121488910",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端也要懂物理 —— 惯性滚动篇"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844903615920898056#heading-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("animation、transition、transform、translate傻傻分不清"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844904165462769678",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入解析你不知道的 EventLoop 和浏览器渲染、帧动画、空闲回调"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"canvas"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#canvas"}},[t._v("#")]),t._v(" canvas")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6948740584819392525",target:"_blank",rel:"noopener noreferrer"}},[t._v("Canvas知识总结"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844904019605848072#heading-12",target:"_blank",rel:"noopener noreferrer"}},[t._v("高质量前端快照方案：来自页面的「自拍」"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6939742079295848462",target:"_blank",rel:"noopener noreferrer"}},[t._v("可视化研发之线的画法：直线，曲线，动画（Canvas版）"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6926010284578603021",target:"_blank",rel:"noopener noreferrer"}},[t._v("教你实现微信8.0『炸裂』的🎉表情特效"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6924866572972457992",target:"_blank",rel:"noopener noreferrer"}},[t._v("详解 Canvas 路径动画"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://jelly.jd.com/article/5fd321225fd2b30146b91a7f",target:"_blank",rel:"noopener noreferrer"}},[t._v("一起聊聊canvas曲线那些事"),r("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=a.exports}}]);