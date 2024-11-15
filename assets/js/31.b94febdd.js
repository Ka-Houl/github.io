(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{370:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dom-事件模型-事件流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-事件模型-事件流"}},[t._v("#")]),t._v(" DOM 事件模型(事件流)")]),t._v(" "),s("h2",{attrs:{id:"事件流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件流"}},[t._v("#")]),t._v(" 事件流")]),t._v(" "),s("p",[t._v("DOM 的结构是一个树形，每当 HTML 元素产生事件时，该事件就会在树的根节点和元素节点之间传播，所有经过的节点都会收到该事件，将这种事件传递的过程称为事件流。")]),t._v(" "),s("h2",{attrs:{id:"dom-事件模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-事件模型"}},[t._v("#")]),t._v(" DOM 事件模型")]),t._v(" "),s("p",[t._v("DOM 事件的模型（事件机制）就是事件捕获和事件冒泡。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/images/javascript/DOM%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9E%8B.png",alt:"DOM事件的模型"}})]),t._v(" "),s("h2",{attrs:{id:"事件流-3-阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件流-3-阶段"}},[t._v("#")]),t._v(" 事件流 3 阶段")]),t._v(" "),s("ul",[s("li",[t._v("捕获阶段")]),t._v(" "),s("li",[t._v("目标阶段")]),t._v(" "),s("li",[t._v("冒泡阶段")])]),t._v(" "),s("h2",{attrs:{id:"事件绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件绑定"}},[t._v("#")]),t._v(" 事件绑定")]),t._v(" "),s("p",[t._v("DOM 的事件模型（事件机制）主要反映在事件的注册和监听。注册事件回调的方式主要有以下 3 种：")]),t._v(" "),s("ul",[s("li",[t._v("DOM0 级(on+type)。通过 DOM 元素属性， 只支持事件冒泡，缺点是每个事件元素只能被设置一个事件回调。")]),t._v(" "),s("li",[t._v("DOM2 级(addEventListener)。通过 addEventListener 为元素绑定事件回调。IE6-8 不兼容这个方法，在低版本的 IE 中需要使用 attachEvent。")]),t._v(" "),s("li",[t._v("通过 HTML 属性。不推荐，这种方式不能将内容和行为很好地分开，使得 HTML 变大并减少了可读性。")])]),t._v(" "),s("h2",{attrs:{id:"addeventlistener-的第三个参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addeventlistener-的第三个参数"}},[t._v("#")]),t._v(" addEventListener 的第三个参数")]),t._v(" "),s("p",[t._v("element.addEventListener(type, listener, useCapture) addEventListener()的工作原理是将实现EventListener的函数或对象添加到调用它的EventTarget上的指定事件类型的事件侦听器列表中")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("必须。字符串，指定事件名。"),s("br"),t._v(' 注意: 不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。'),s("br"),t._v(" 提示： 所有 HTML DOM 事件，可以查看 "),s("a",{attrs:{href:"https://www.runoob.com/jsref/dom-obj-event.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML DOM Event 对象参考手册"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("listener")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("必须。指定要事件触发时执行的函数。"),s("br"),t._v('当事件对象会作为第一个参数传入函数。 事件对象的类型取决于特定的事件。例如， "click" 事件属于 MouseEvent(鼠标事件) 对象。')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("useCapture")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("true - 事件捕获 "),s("br"),t._v(" false - 事件冒泡 "),s("br"),t._v(" useCapture 默认为 false 事件冒泡")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("对于事件目标上的事件监听器来说，事件会处于“目标阶段”，而不是冒泡阶段或者捕获阶段。在目标阶段的事件会触发该元素（即事件目标）上的所有监听器，而不在乎这个监听器到底在注册时 useCapture 参数值是 true 还是 false。")])]),t._v(" "),s("h2",{attrs:{id:"阻止事件冒泡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阻止事件冒泡"}},[t._v("#")]),t._v(" 阻止事件冒泡")]),t._v(" "),s("ul",[s("li",[t._v("给子级加 "),s("code",[t._v("event.stopPropagation()")])]),t._v(" "),s("li",[t._v("在事件处理函数中返回 false")])]),t._v(" "),s("h2",{attrs:{id:"阻止默认事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阻止默认事件"}},[t._v("#")]),t._v(" 阻止默认事件")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("event.preventDefault()")])]),t._v(" "),s("li",[t._v("return false")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("补充")]),t._v(" "),s("p",[s("code",[t._v("stopPropagation()")]),t._v(" 方法既可以阻止事件冒泡，也可以阻止事件捕获，也可以阻止处于目标阶段。"),s("br"),t._v("\nDOM3 级新增事件 "),s("code",[t._v("stopImmediatePropagation()")]),t._v(" 方法来阻止事件捕获，另外此方法还可以阻止事件冒泡，阻止该元素的其他事件发生。"),s("br"),t._v("\n由于浏览器兼容性问题，事件捕获很少使用，经常使用事件冒泡。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("如何让事件先冒泡后捕获")]),t._v(" "),s("p",[t._v("在 DOM 标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获之间。")])]),t._v(" "),s("h2",{attrs:{id:"事件代理-事件委托"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件代理-事件委托"}},[t._v("#")]),t._v(" 事件代理(事件委托)")]),t._v(" "),s("p",[t._v("利用事件冒泡机制把本该在元素自身响应的事件交给任意一个上级元素去处理，这种行为称之为事件委托或者事件代理。事件委托，通俗的说就是将元素的事件委托给它的父级或者更外级的元素处理，它的实现机制就是事件冒泡。")]),t._v(" "),s("p",[t._v("不使用事件代理的问题")]),t._v(" "),s("ul",[s("li",[t._v("给每一个列表都绑定事件，消耗内存")]),t._v(" "),s("li",[t._v("当有动态添加的元素时，需要重新给元素绑定事件")])]),t._v(" "),s("p",[t._v("事件代理的优点")]),t._v(" "),s("ul",[s("li",[t._v("只需要将同类元素的事件委托给父级或者更外级的元素，不需要给所有的元素都绑定事件，节省内存，节约监听数量")]),t._v(" "),s("li",[t._v("可以监听动态元素，不论内部元素是增加还是减少")]),t._v(" "),s("li",[t._v("动态新增的元素无需重新绑定事件")]),t._v(" "),s("li",[s("code",[t._v("event.target == event.currentTarget")]),t._v("，让触发事件的元素等于绑定事件的元素")])]),t._v(" "),s("p",[t._v("事件代理是利用事件冒泡机制处理指定一个事件处理程序，来管理某一类型的所有事件。\n利用冒泡的原理，将事件加到父级身上，触发执行效果，这样只在内存中开辟一块空间，既节省内存资源又减少 DOM 操作，提高性能。\n此外还可以动态绑定事件，比如，列表新增元素或删除就不用进行重新绑定了。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("event.target 与 event.currentTarget 区别")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("event.target")]),t._v(" 返回触发事件的元素")]),t._v(" "),s("li",[s("code",[t._v("event.currentTarget")]),t._v(" 返回绑定事件的元素，只有被点击的那个目标元素的 "),s("code",[t._v("event.target")]),t._v("才会等于 "),s("code",[t._v("event.currentTarget")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("ul",[s("li",[t._v("事件委托的实现依靠的冒泡，因此不支持事件冒泡的事件就不适合使用事件委托。")]),t._v(" "),s("li",[t._v("不是所有的事件绑定都适合使用事件委托，不恰当使用反而可能导致不需要绑定事件的元素也被绑定上了事件。")])])]),t._v(" "),s("h2",{attrs:{id:"应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),s("ul",[s("li",[t._v("多个同级元素同一种事件绑定")]),t._v(" "),s("li",[t._v("监听不存在的元素")])]),t._v(" "),s("h2",{attrs:{id:"封装事件委托函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#封装事件委托函数"}},[t._v("#")]),t._v(" 封装事件委托函数")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先看看错误版的事件委托函数")]),t._v("\nul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"li"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行某个函数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误版事件委托的bug 在于，如果用户点击的是 li里面的 span，就没法触发 fn，这显然不对。正确的如下(封装后的)：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * (1)仅仅判断 target 是否匹配 selector是不够的，\n * 因为如果 selector内还有子元素的话，只进行一次判断是不够的。\n * 还需要向上递归判断target的上一个节点是否是 ()selector，直到找到或者匹配到代理节点后结束匹配；\n * (2)matches()函数参数接收的是CSS选择器，不要误传元素对象；\n * (3)e.target是在页面中被用户操作的元素，e.currentTarget是程序员监听的元素。\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("eventType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" elDelegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" selector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elDelegate "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Element")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" elDelegate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    elDelegate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elDelegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  elDelegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" el "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("matches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意：matches接收的是CSS选择器")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elDelegate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        el "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      el "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    el "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" elDelegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用方式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#btn1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br")])]),s("h2",{attrs:{id:"vue-事件修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-事件修饰符"}},[t._v("#")]),t._v(" Vue 事件修饰符")]),t._v(" "),s("ul",[s("li",[t._v(".stop 阻止单击事件继续传播")]),t._v(" "),s("li",[t._v(".prevent 提交事件不再重载页面")]),t._v(" "),s("li",[t._v(".capture 添加事件监听器时使用事件捕获模式，一种自上而下的处理方式")]),t._v(" "),s("li",[t._v(".self 事件只在本身处理\n"),s("blockquote",[s("p",[t._v("默认情况下，事件向上传播， 即事件冒泡")])])]),t._v(" "),s("li",[t._v(".once 点击事件将只会触发一次，可以用在自定义组件事件上")]),t._v(" "),s("li",[t._v(".passive 滚动事件的默认行为将会立即触发\n"),s("blockquote",[s("p",[s("code",[t._v('<div v-on:scroll.passive="onScroll" >...</div>')]),t._v("\n在默认情况下滚动的时候，浏览器会在整个事件处理完毕之后再触发滚动，因为浏览器并不知道这个事件是否在其处理函数中被调用了 event.preventDefault() （通知 Web 浏览器不要执行与事件关联的默认动作）。"),s("br"),t._v("\n.passive 修饰符用来进一步告诉浏览器这个事件的默认行为不会被取消。 这样可有效的提高浏览器的性能。")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("修饰符可以串联，并且在进行修饰符串联的时候，顺序很重要")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);