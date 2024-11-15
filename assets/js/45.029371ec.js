(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{383:function(t,a,s){"use strict";s.r(a);var i=s(8),e=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css-盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-盒模型"}},[t._v("#")]),t._v(" CSS 盒模型")]),t._v(" "),a("p",[t._v("浏览器的渲染引擎就会根据"),a("strong",[t._v("基础盒模型(CSS basic box model)")]),t._v(" ，将所有元素划分为一个个矩形的盒子，这些盒子的外观，属性由 CSS 来决定。")]),t._v(" "),a("p",[t._v("可以认为每个 html 元素都是一个方块，然后这个方块又包着几个小方块，如同盒子一层层的包裹着，这就是所谓的"),a("strong",[t._v("盒模型")]),t._v("。")]),t._v(" "),a("p",[t._v("盒模型由外而内包括：外边距（margin）、边框（border）、填充（亦称内边距）（padding）、内容（content）。但是，盒模型有标准盒模型和 IE 盒模型之分：")]),t._v(" "),a("ul",[a("li",[t._v("W3C 盒模型(标准盒模型)")]),t._v(" "),a("li",[t._v("IE 盒模型(怪异盒模型)")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("盒模型由外边距（margin）、边框（border）、填充（亦称内边距）（padding）、内容（content）。组成。但盒子由 content + padding + border 这几部分"),a("strong",[t._v("决定盒子的大小")]),t._v("，如果再加上 margin 那决定的是"),a("strong",[t._v("盒子占据的位置")]),t._v("，而不是盒子的大小！margin 虽然是盒模型的组成成分，但盒子的大小与 margin 没半毛钱关系！")])]),t._v(" "),a("p",[t._v("通过 box-sizing 设置，默认值是 content-box 。")]),t._v(" "),a("h2",{attrs:{id:"w3c-盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#w3c-盒模型"}},[t._v("#")]),t._v(" W3C 盒模型")]),t._v(" "),a("h3",{attrs:{id:"设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[t._v("#")]),t._v(" 设置")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"图示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图示"}},[t._v("#")]),t._v(" 图示")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/images/css/W3C%E7%9B%92%E6%A8%A1%E5%9E%8B.png",alt:"W3C 盒模型"}})]),t._v(" "),a("p",[t._v("盒子的大小：width/height = content(content-box)")]),t._v(" "),a("p",[t._v("盒子的大小只由内容 content 决定，不包含 border 和 padding。")]),t._v(" "),a("p",[t._v("盒子的实际尺寸 =  内容（设置的宽/高） + 内边距 + 边框")]),t._v(" "),a("h2",{attrs:{id:"ie-盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ie-盒模型"}},[t._v("#")]),t._v(" IE 盒模型")]),t._v(" "),a("h3",{attrs:{id:"设置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-2"}},[t._v("#")]),t._v(" 设置")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"图示-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图示-2"}},[t._v("#")]),t._v(" 图示")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/images/css/IE%E7%9B%92%E6%A8%A1%E5%9E%8B.png",alt:"IE 盒模型"}})]),t._v(" "),a("p",[t._v("盒子的大小：width/height = content + padding + border(border-box)")]),t._v(" "),a("p",[t._v("盒子的大小由 content + padding + border 决定。")]),t._v(" "),a("p",[t._v("盒子的实际尺寸 = 设置的宽/高 = 内容 + 内边距 + 边框")]),t._v(" "),a("h3",{attrs:{id:"获取盒模型宽高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取盒模型宽高"}},[t._v("#")]),t._v(" 获取盒模型宽高")]),t._v(" "),a("ul",[a("li",[t._v("访问元素内联样式宽高："),a("code",[t._v("element.style.width")])]),t._v(" "),a("li",[t._v("访问元素计算宽高（仅支持 IE 查询）："),a("code",[t._v("element.currentStyle.width")])]),t._v(" "),a("li",[t._v("访问元素计算宽高（支持主流浏览器）："),a("code",[t._v("window.getComputedStyle(element).width")])]),t._v(" "),a("li",[t._v("访问元素计算宽高（支持主流浏览器）取到的是盒子总宽度："),a("code",[t._v("element.getBoundingClientRect().width")])])]),t._v(" "),a("h2",{attrs:{id:"视觉格式化模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视觉格式化模型"}},[t._v("#")]),t._v(" 视觉格式化模型")]),t._v(" "),a("p",[t._v("CSS 视觉格式化模型（visual formatting model）是用来处理和在视觉媒体上显示文档时使用的计算规则。该模型会根据盒子的边界来渲染盒子，通常盒子会创建一个包含其子元素的包含块，但是子元素并不由包含块所限制，当子元素跑到包含块的外面时称为溢出（overflow）。")]),t._v(" "),a("p",[t._v("CSS 中一切皆盒子，而视觉格式化模型简单来理解就是规定这些盒子应该怎么样放置到页面中去，这个模型在计算的时候会依赖到很多的因素，比如：盒子尺寸、盒子类型、定位方案（是浮动还是定位）、兄弟元素或者子元素以及一些别的因素。")]),t._v(" "),a("p",[t._v("盒子的生成是 CSS 视觉格式化模型的一部分，用于从文档元素生成盒子。盒子有不同的类型，盒子的类型取决于 display 属性。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("块盒子：display: block | list-item | table | flex | grid | flow-root 等")]),t._v(" "),a("ul",[a("li",[t._v("一个块级元素会被格式化成一个块，默认按照垂直方向依次排列。")]),t._v(" "),a("li",[t._v("每个块级盒都会参与 BFC 的创建。")])])]),t._v(" "),a("li",[a("p",[t._v("行内盒子：display: inline | inline-block | inline-table 等")]),t._v(" "),a("ul",[a("li",[t._v("行内元素不会生成内容块，但是可以与其他行内级内容一起显示为多行。")]),t._v(" "),a("li",[t._v("行内级元素会生成行内级盒子，该盒子参与 IFC 的创建。")])])]),t._v(" "),a("li",[a("p",[t._v("匿名盒子：CSS 也会创建一些无法被 CSS 选择器选中的盒子，我们叫它匿名盒子。")]),t._v(" "),a("ul",[a("li",[t._v("匿名盒子会从父元素继承可继承属性，其他属性保持默认值 initial。")]),t._v(" "),a("li",[t._v("通常 CSS 引擎会自动为直接包含在块盒子中的文本创建一个匿名盒子。")])])])]),t._v(" "),a("h3",{attrs:{id:"block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block"}},[t._v("#")]),t._v(" block")]),t._v(" "),a("ul",[a("li",[t._v("占满一行，默认继承父元素的宽度，多个块元素将从上到下进行排列")]),t._v(" "),a("li",[t._v("设置 width/height 将会生效")]),t._v(" "),a("li",[t._v("设置 padding 和 margin 将会生效")])]),t._v(" "),a("h3",{attrs:{id:"inline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inline"}},[t._v("#")]),t._v(" inline")]),t._v(" "),a("ul",[a("li",[t._v("不会占满一行，宽度随着内容而变化，多个 inline 元素将按照从左到右的顺序在一行里排列显示，如果一行显示不下，则自动换行")]),t._v(" "),a("li",[t._v("设置 width/height 不会生效")]),t._v(" "),a("li",[t._v("设置竖直方向上的 padding 和 margin 不会生效；需注意的是，竖直方向的 padding 虽然有显示效果但是对其他元素没有影响，所以还是无效果。")])]),t._v(" "),a("h3",{attrs:{id:"inline-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inline-block"}},[t._v("#")]),t._v(" inline-block")]),t._v(" "),a("ul",[a("li",[t._v("是行内块元素，不单独占满一行，可以看成是能够在一行里进行左右排列的块元素")]),t._v(" "),a("li",[t._v("设置 width/height 会生效")]),t._v(" "),a("li",[t._v("设置 padding 和 margin 会生效")])]),t._v(" "),a("h2",{attrs:{id:"格式化上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式化上下文"}},[t._v("#")]),t._v(" 格式化上下文")]),t._v(" "),a("ul",[a("li",[t._v("BFC (Block Formatting Context) 块级格式化上下文")]),t._v(" "),a("li",[t._v("IFC (Inline Formatting Context) 行内格式化上下")]),t._v(" "),a("li",[t._v("FFC (Flex Formatting Context) 弹性格式化上下文")]),t._v(" "),a("li",[t._v("GFC (Grid Formatting Context) 格栅格式化上下文")])]),t._v(" "),a("p",[t._v("其中 BFC 和 IFC 在 CSS 中扮演着非常重要的角色，因为它们直接影响了网页布局，所以需要深入理解其原理。")])])}),[],!1,null,null,null);a.default=e.exports}}]);