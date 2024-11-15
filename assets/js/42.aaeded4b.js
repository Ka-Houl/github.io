(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{381:function(t,v,_){"use strict";_.r(v);var s=_(8),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"浏览器安全机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器安全机制"}},[t._v("#")]),t._v(" 浏览器安全机制")]),t._v(" "),v("p",[t._v("浏览器安全可以分为三大块：")]),t._v(" "),v("ul",[v("li",[t._v("Web 页面安全")]),t._v(" "),v("li",[t._v("Web 网络安全")]),t._v(" "),v("li",[t._v("浏览器系统安全")])]),t._v(" "),v("p",[t._v("在web页面中的安全策略中最基础、最核心的安全策略：同源策略（Same-origin policy）。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/blog/images/javascript/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8.png",alt:"浏览器安全"}})]),t._v(" "),v("h2",{attrs:{id:"web-页面安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web-页面安全"}},[t._v("#")]),t._v(" Web 页面安全")]),t._v(" "),v("h3",{attrs:{id:"同源策略-same-origin-policy"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#同源策略-same-origin-policy"}},[t._v("#")]),t._v(" 同源策略（Same-origin policy）")]),t._v(" "),v("p",[t._v("如果两个 URL 的协议、域名和端口都相同，我们就称这两个 URL 同源。浏览器默认两个相同的源之间是可以相互访问资源和操作 DOM 的。两个不同的源之间若想要相互访问资源或者操作 DOM，那么会有一套基础的安全策略的制约，我们把这称为"),v("strong",[t._v("同源策略")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"主要表现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主要表现"}},[t._v("#")]),t._v(" 主要表现")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("DOM 层面")]),t._v(" "),v("p",[t._v("同源策略限制了来自不同源的 JavaScript 脚本对当前 DOM 对象读和写的操作。")])]),t._v(" "),v("li",[v("p",[t._v("数据层面")]),t._v(" "),v("p",[t._v("同源策略限制了不同源的站点读取当前站点的 Cookie、IndexDB、LocalStorage 等数据。")])]),t._v(" "),v("li",[v("p",[t._v("网络层面")]),t._v(" "),v("p",[t._v("同源策略限制了通过 XMLHttpRequest 等方式将站点的数据发送给不同源的站点")])])]),t._v(" "),v("p",[t._v("不过安全性和便利性是相互对立的，让不同的源之间绝对隔离，无疑是最安全的措施，但这也会使得 Web 项目难以开发和使用。因此我们就要在这之间做出权衡，出让一些安全性来满足灵活性：")]),t._v(" "),v("h3",{attrs:{id:"安全后门"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安全后门"}},[t._v("#")]),t._v(" 安全后门")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("页面中可以嵌入第三方资源")]),t._v(" "),v("p",[t._v("页面中可以引用第三方资源，不过这也暴露了很多诸如 XSS 的安全问题，因此又在这种开放的基础之上引入了 CSP （内容安全策略）来限制其自由程度。"),v("strong",[t._v("CSP 的核心思想")]),t._v("是让服务器决定浏览器能够加载哪些资源，让服务器决定浏览器是否能够执行内联 JavaScript 代码 。")])]),t._v(" "),v("li",[v("p",[t._v("跨文档消息机制")]),t._v(" "),v("p",[t._v("两个不同源的 DOM 是不能相互操纵的，浏览器中又引入了跨文档消息机制，可以通过 window.postMessage 的 JavaScript 接口来和不同源的 DOM 进行通信。")])]),t._v(" "),v("li",[v("p",[t._v("跨域资源共享")]),t._v(" "),v("p",[t._v("不同域之间使用 XMLHttpRequest 和 Fetch 都是无法直接进行跨域请求的，浏览器又在这种严格策略的基础之上引入了"),v("strong",[t._v("跨域资源共享策略（CORS）")]),t._v("，使用该机制可以进行跨域访问控制，从而使跨域数据传输得以安全进行。")])])]),t._v(" "),v("h3",{attrs:{id:"csp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#csp"}},[t._v("#")]),t._v(" CSP")]),t._v(" "),v("p",[t._v("内容安全策略（Content Security Policy，简称CSP）是一种额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本（XSS）和数据注入攻击等。CSP的核心思想是让开发者明确告诉客户端（浏览器），哪些外部资源是可以加载和执行的，即使攻击者发现漏洞，也没有办法注入脚本，除非攻击者控制了一台列入了白名单的可信主机。")]),t._v(" "),v("p",[t._v("CSP通过HTTP响应头中的"),v("code",[t._v("Content-Security-Policy")]),t._v("字段向浏览器发送一系列指令，这些指令定义了哪些资源是允许加载和执行的。浏览器在加载和执行资源时，会根据这些指令进行严格的验证，只有符合规则的资源才会被加载和执行。")]),t._v(" "),v("p",[t._v("CSP的配置方法主要有两种：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("通过HTTP响应头设置：在服务器端配置CSP是最常见的方法。服务器可以在发送HTTP响应时，通过添加"),v("code",[t._v("Content-Security-Policy")]),t._v("头部来定义CSP策略。例如，在PHP中，可以通过设置HTTP响应头来定义CSP策略：")]),t._v(" "),v("div",{staticClass:"language-js line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Content-Security-Policy: default-src 'self'; script-src 'self' https://apis.example.com;\"")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("这表示仅允许加载来自同源以及"),v("code",[t._v("https://apis.example.com")]),t._v("的脚本，其他来源的脚本将被浏览器阻止。")])]),t._v(" "),v("li",[v("p",[t._v("通过Meta标签设置：CSP也可以通过在HTML中使用"),v("code",[t._v("<meta>")]),t._v("标签来设置。例如：")]),t._v(" "),v("div",{staticClass:"language-html line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-html"}},[v("code",[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),v("span",{pre:!0,attrs:{class:"token attr-value"}},[v("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("content-security-policy"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),v("span",{pre:!0,attrs:{class:"token attr-value"}},[v("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("策略集"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("如果HTTP头与"),v("code",[t._v("meta")]),t._v("标签同时定义了CSP，则会优先采用HTTP头的CSP。")])])]),t._v(" "),v("p",[t._v("CSP的指令非常丰富，包括但不限于：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("script-src")]),t._v("：定义允许执行的脚本的来源。")]),t._v(" "),v("li",[v("code",[t._v("style-src")]),t._v("：定义允许加载的样式表的来源。")]),t._v(" "),v("li",[v("code",[t._v("img-src")]),t._v("：定义允许加载的图片的来源。")]),t._v(" "),v("li",[v("code",[t._v("font-src")]),t._v("：定义允许加载的字体的来源。")]),t._v(" "),v("li",[v("code",[t._v("connect-src")]),t._v("：定义允许进行Ajax、WebSocket等连接的来源。")]),t._v(" "),v("li",[v("code",[t._v("default-src")]),t._v("：为所有未明确指定类型的资源设置默认来源规则。")])]),t._v(" "),v("p",[t._v("此外，CSP还支持"),v("code",[t._v("report-uri")]),t._v("指令，用于定义接收违反CSP策略报告的URL，以便开发者及时了解和处理安全问题。")]),t._v(" "),v("h2",{attrs:{id:"web-网络安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web-网络安全"}},[t._v("#")]),t._v(" Web 网络安全")]),t._v(" "),v("p",[t._v("我们使用 HTTP 传输的内容很容易被中间人窃取、伪造和篡改，通常我们把这种攻击方式称为中间人攻击。具体来讲，在将 HTTP 数据提交给 TCP 层之后，数据会经过用户电脑、WiFi 路由器、运营商和目标服务器，在这中间的每个环节中，数据都有可能被窃取或篡改。比如用户电脑被黑客安装了恶意软件，那么恶意软件就能抓取和篡改所发出的 HTTP 请求的内容。或者用户一不小心连接上了 WiFi 钓鱼路由器，那么数据也都能被黑客抓取或篡改。")]),t._v(" "),v("h3",{attrs:{id:"http-协议栈引入安全层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-协议栈引入安全层"}},[t._v("#")]),t._v(" HTTP 协议栈引入安全层")]),t._v(" "),v("p",[t._v("鉴于 HTTP 的明文传输使得传输过程毫无安全性可言，且制约了网上购物、在线转账等一系列场景应用，于是倒逼着我们要引入加密方案。从 HTTP 协议栈层面来看，我们可以在 TCP 和 HTTP 之间插入一个安全层，所有经过安全层的数据都会被加密或者解密。安全层有两个主要的职责：对发起 HTTP 请求的数据进行加密操作和对接收到 HTTP 的内容进行解密操作。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/blog/images/javascript/http%E5%AE%89%E5%85%A8%E5%B1%82.png",alt:"http安全层"}})]),t._v(" "),v("h3",{attrs:{id:"https-通信与-tls-握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https-通信与-tls-握手"}},[t._v("#")]),t._v(" HTTPS 通信与 TLS 握手")]),t._v(" "),v("p",[v("strong",[t._v("对称加密")]),t._v("，顾名思义就是加密和解密都是使用同一个密钥，常见的对称加密算法有 DES、3DES 和 AES 等，其优缺点如下：")]),t._v(" "),v("ul",[v("li",[t._v("优点：算法公开、计算量小、加密速度快、加密效率高，适合加密比较大的数据。")]),t._v(" "),v("li",[t._v("缺点：\n"),v("ul",[v("li",[t._v("交易双方需要使用相同的密钥，也就无法避免密钥的传输，而密钥在传输过程中无法保证不被截获，因此对称加密的安全性得不到保证。")]),t._v(" "),v("li",[t._v("每对用户每次使用对称加密算法时，都需要使用其他人不知道的惟一密钥，这会使得发收信双方所拥有的钥匙数量急剧增长，密钥管理成为双方的负担。对称加密算法在分布式网络系统上使用较为困难，主要是因为密钥管理困难，使用成本较高。")])])])]),t._v(" "),v("p",[t._v("被加密的数据在传输过程中是无规则的乱码，即便被第三方截获，在没有密钥的情况下也无法解密数据，也就保证了数据的安全。但是有一个致命的问题，那就是既然双方要使用相同的密钥，那就必然要在传输数据之前先由一方把密钥传给另一方，那么在此过程中密钥就很有可能被截获，这样一来加密的数据也会被轻松解密。那如何确保密钥在传输过程中的安全呢？这就要用到非对称加密了。")]),t._v(" "),v("p",[t._v("非对称加密，顾名思义，就是加密和解密需要使用两个不同的密钥：公钥（public key）和私钥（private key）。公钥与私钥是一对，如果用公钥对数据进行加密，只有用对应的私钥才能解密；如果用私钥对数据进行加密，那么只有用对应的公钥才能解密。常用的非对称加密算法是 RSA 算法。")]),t._v(" "),v("ul",[v("li",[t._v("优点：算法公开，加密和解密使用不同的钥匙，私钥不需要通过网络进行传输，安全性很高。")]),t._v(" "),v("li",[t._v("缺点：计算量比较大，加密和解密速度相比对称加密慢很多。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/blog/images/javascript/https1.png",alt:"https1"}}),t._v(" "),v("img",{attrs:{src:"/blog/images/javascript/https2.png",alt:"https2"}})]),t._v(" "),v("p",[t._v("HTTPS 的整个通信过程可以分为两大阶段：证书验证和数据传输阶段，数据传输阶段又可以分为非对称加密和对称加密两个阶段。")]),t._v(" "),v("ol",[v("li",[v("p",[v("strong",[t._v("客户端问候（Client Hello）")]),t._v("：\n客户端向服务器发送一个“客户端问候”消息，该消息包含客户端支持的 TLS 版本、支持的密码套件列表以及一个随机数（客户端随机数）。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("服务器问候（Server Hello）")]),t._v("：\n服务器响应客户端，发送“服务器问候”消息，该消息包含服务器选择的 TLS 版本、密码套件、服务器的数字证书以及一个随机数（服务器随机数）。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("身份验证")]),t._v("：\n客户端使用证书颁发机构的公钥验证服务器的 SSL 证书，确保服务器的身份合法性。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("预主密钥（Premaster Secret）")]),t._v("：\n客户端生成一个随机的“预主密钥”，并使用服务器证书中的公钥加密这个密钥，然后发送给服务器。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("私钥解密")]),t._v("：\n服务器使用自己的私钥解密客户端发送的“预主密钥”。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("生成会话密钥")]),t._v("：\n客户端和服务器使用客户端随机数、服务器随机数和“预主密钥”共同生成一个会话密钥，用于后续通信的对称加密。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("客户端就绪")]),t._v("：\n客户端发送一个“已完成”消息，该消息用生成的会话密钥加密，表示客户端已经准备好开始加密通信。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("服务器就绪")]),t._v("：\n服务器同样发送一个“已完成”消息，用会话密钥加密，表示服务器也准备好开始加密通信。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("安全通信")]),t._v("：\n握手完成后，客户端和服务器使用会话密钥进行安全的对称加密通信。")])])]),t._v(" "),v("h4",{attrs:{id:"数字证书"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数字证书"}},[t._v("#")]),t._v(" 数字证书")]),t._v(" "),v("p",[v("strong",[t._v("数字证书（Digital Certificate)")]),t._v("：在非对称加密通信过程中，服务器需要将公钥发送给客户端，在这一过程中，公钥很可能会被第三方拦截并替换，然后这个第三方就可以冒充服务器与客户端进行通信，这就是传说中的"),v("strong",[t._v("中间人攻击")]),t._v("(man in the middle attack)。")]),t._v(" "),v("p",[t._v("解决此问题的方法是通过受信任的第三方交换公钥，具体做法就是服务器不直接向客户端发送公钥，而是要求受信任的第三方，也就是证书认证机构 (Certificate Authority, 简称 CA)将公钥合并到数字证书中，然后服务器会把公钥连同证书一起发送给客户端，私钥则由服务器自己保存以确保安全。")]),t._v(" "),v("p",[v("strong",[t._v("数字证书的目的是确保公钥的所有权和身份的真实性，防止中间人攻击")]),t._v("。数字证书有两个作用：")]),t._v(" "),v("ul",[v("li",[t._v("通过数字证书向浏览器证明服务器的身份")]),t._v(" "),v("li",[t._v("数字证书里面包含了服务器公钥。")])]),t._v(" "),v("p",[t._v("通过引入数字证书，我们就实现了服务器的身份认证功能，这样即便黑客伪造了服务器，但是由于证书是没有办法伪造的，所以依然无法欺骗用户。")]),t._v(" "),v("h4",{attrs:{id:"数字签名"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数字签名"}},[t._v("#")]),t._v(" 数字签名")]),t._v(" "),v("p",[v("strong",[t._v("数字签名")]),t._v("（Digital Signature）是一种用于验证数字文档完整性和来源的技术。它使用"),v("strong",[t._v("非对称加密")]),t._v("技术，通常包括以下步骤：")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("哈希处理")]),t._v("：首先，对原始数据进行哈希处理，生成一个固定长度的哈希值。")]),t._v(" "),v("li",[v("strong",[t._v("私钥加密")]),t._v("：然后，使用发送者的私钥对这个哈希值进行加密，生成数字签名。")]),t._v(" "),v("li",[v("strong",[t._v("发送")]),t._v("：发送者将原始数据和数字签名一起发送给接收者。")]),t._v(" "),v("li",[v("strong",[t._v("验证")]),t._v("：接收者使用发送者的公钥解密数字签名，得到原始哈希值，然后对接收的数据进行哈希处理，生成新的哈希值。")]),t._v(" "),v("li",[v("strong",[t._v("比较")]),t._v("：如果解密得到的哈希值与新生成的哈希值相同，那么数据未被篡改，且来源可信。")])]),t._v(" "),v("p",[v("strong",[t._v("数字签名确保了数据的完整性和不可否认性")]),t._v("。")]),t._v(" "),v("h4",{attrs:{id:"证书链"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#证书链"}},[t._v("#")]),t._v(" 证书链")]),t._v(" "),v("p",[v("strong",[t._v("证书链")]),t._v("（Certificate Chain）是一系列数字证书的集合，用于"),v("strong",[t._v("建立从一个证书到另一个证书的信任关系")]),t._v("。在 SSL/TLS 握手过程中，服务器会提供一个数字证书，如果客户端不信任该证书，服务器会提供一系列中间证书，直到达到一个客户端信任的根证书。这个过程形成了一个证书链：")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("服务器证书")]),t._v("：服务器的数字证书。")]),t._v(" "),v("li",[v("strong",[t._v("中间证书")]),t._v("：由其他CA颁发的证书，用于验证服务器证书的颁发机构。")]),t._v(" "),v("li",[v("strong",[t._v("根证书")]),t._v("：最高级别的CA颁发的证书，客户端内置或用户信任的证书。")])]),t._v(" "),v("p",[v("strong",[t._v("证书链确保了信任的传递，即使客户端不直接信任服务器证书的颁发机构，也可以通过中间证书追溯到一个信任的根证书，从而建立信任关系")]),t._v("。")]),t._v(" "),v("p",[t._v("要保护 HTTPS 握手过程中的数据不被中间人攻击，可以采取以下措施：")]),t._v(" "),v("ol",[v("li",[v("p",[v("strong",[t._v("数字证书验证")]),t._v("：\nHTTPS握手过程中，客户端会要求服务器提供数字证书。这个证书由第三方机构（证书颁发机构，CA）颁发，用于验证服务器的身份。客户端通过内置或用户信任的CA公钥来验证服务器证书的合法性。如果证书无效或不受信任，客户端将终止连接。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("非对称加密")]),t._v("：\n客户端使用服务器的公钥加密数据，只有服务器的私钥才能解密这些数据。这样即使中间人截获了加密数据，也无法解密，因为他们没有服务器的私钥。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("对称加密密钥的交换")]),t._v("：\n在TLS握手过程中，客户端和服务器会生成一个对称加密密钥（会话密钥），用于后续通信的加密。这个密钥是通过服务器的公钥加密后传输的，确保只有服务器能够解密并获取该密钥。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("完整性保护")]),t._v("：\nHTTPS使用消息认证码（MAC）或数字签名技术对数据进行完整性校验，确保数据在传输过程中未被篡改。任何对数据的篡改都会导致MAC校验失败，从而被通信双方检测到。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("防止重放攻击")]),t._v("：\nHTTPS在握手过程中生成随机数，确保每次通信都是唯一的，从而避免重放攻击。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("使用最新的TLS协议版本")]),t._v("：\n使用最新版本的TLS协议可以减少已知的安全漏洞风险，提高握手过程的安全性。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("浏览器和操作系统内置的证书")]),t._v("：\n用户的浏览器和操作系统通常会内置一系列受信任的CA证书，这减少了中间人攻击的可能性，因为攻击者很难将自己的CA证书植入用户设备。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("HTTPS双向认证")]),t._v("：\n在一些高安全需求的场景下，可以采用双向认证，即不仅客户端验证服务器的身份，服务器也验证客户端的身份。这样可以进一步防止中间人攻击。")])])]),t._v(" "),v("p",[t._v("通过上述措施，HTTPS握手过程中的数据可以得到有效保护，防止中间人攻击。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("小结")]),t._v(" "),v("p",[t._v("我们使用对称加密实现了安全层，但是由于对称加密的密钥需要明文传输，所以我们又将对称加密改造成了非对称加密。但是非对称加密效率低且不能加密服务器到浏览器端的数据，于是我们又继续改在安全层，采用对称加密的方式加密传输数据和非对称加密的方式来传输密钥，这样我们就解决传输效率和两端数据安全传输的问题。采用这种方式虽然能保证数据的安全传输，但是依然没办法证明服务器是可靠的，于是又引入了数字证书，数字证书是由 CA 签名过的，所以浏览器能够验证该证书的可靠性")])]),t._v(" "),v("h2",{attrs:{id:"浏览器系统安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器系统安全"}},[t._v("#")]),t._v(" 浏览器系统安全")]),t._v(" "),v("h3",{attrs:{id:"浏览器安全架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器安全架构"}},[t._v("#")]),t._v(" 浏览器安全架构")]),t._v(" "),v("p",[t._v("如果浏览器被曝出存在漏洞，那么在这些漏洞没有被及时修复的情况下，黑客就有可能通过恶意的页面向浏览器中注入恶意程序，其中最常见的攻击方式是利用"),v("strong",[t._v("缓冲区溢出")]),t._v("。和 XSS 攻击页面相比，这类攻击无疑是枚“核弹”，它会将整个操作系统的内容都暴露给黑客，这样我们操作系统上所有的资料都是不安全的了。为了提高安全性，浏览器的采用了如下的多进程架构。并且提供了 "),v("strong",[t._v("安全沙箱")]),t._v(" 和 "),v("strong",[t._v("站点隔离")]),t._v(" 来进一步加强安全")]),t._v(" "),v("p",[v("img",{attrs:{src:"/blog/images/javascript/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%89%E5%85%A8%E6%9E%B6%E6%9E%84.png",alt:"浏览器安全架构"}})]),t._v(" "),v("h3",{attrs:{id:"安全沙箱"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安全沙箱"}},[t._v("#")]),t._v(" 安全沙箱")]),t._v(" "),v("p",[t._v("由于渲染进程需要执行 DOM 解析、CSS 解析、网络图片解码等操作，如果"),v("strong",[t._v("渲染进程")]),t._v("中存在"),v("strong",[t._v("系统级别的漏洞")]),t._v("，那么以上操作就有可能让恶意的站点获取到渲染进程的控制权限，进而又获取操作系统的"),v("strong",[t._v("控制权限")]),t._v("，这对于用户来说是非常危险的。")]),t._v(" "),v("p",[t._v("基于以上原因，我们需要在渲染进程和操作系统之间建一道墙，即便渲染进程由于存在漏洞被黑客攻击，但由于这道墙，黑客就获取不到渲染进程之外的任何操作权限。将渲染进程和操作系统隔离的这道墙就是我们要聊的"),v("strong",[t._v("安全沙箱")]),t._v("。")]),t._v(" "),v("p",[v("strong",[t._v("浏览器中的安全沙箱")]),t._v(" 是利用操作系统提供的安全技术，让渲染进程在执行过程中无法访问或者修改操作系统中的数据，在渲染进程需要访问系统资源的时候，需要 "),v("strong",[t._v("通过浏览器内核来实现")]),t._v("，然后将访问的结果通过 "),v("strong",[t._v("IPC 转发")]),t._v(" 给渲染进程。")]),t._v(" "),v("p",[t._v("安全沙箱最小的保护单位是进程。因为单进程浏览器需要频繁访问或者修改操作系统的数据，所以单进程浏览器是无法被安全沙箱保护的，而现代浏览器采用的多进程架构使得安全沙箱可以发挥作用。")]),t._v(" "),v("h4",{attrs:{id:"安全沙箱影响的模块功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安全沙箱影响的模块功能"}},[t._v("#")]),t._v(" 安全沙箱影响的模块功能")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("持久存储")]),t._v(" "),v("p",[t._v("存储 Cookie 数据的读写。通常浏览器内核会维护一个存放所有 Cookie 的 Cookie 数据库，然后当渲染进程通过 JavaScript 来读取 Cookie 时，渲染进程会通过 IPC 将读取 Cookie 的信息发送给浏览器内核，浏览器内核读取 Cookie 之后再将内容返回给渲染进程。一些缓存文件的读写也是由浏览器内核实现的，比如网络文件缓存的读取。")])]),t._v(" "),v("li",[v("p",[t._v("网络访问")]),t._v(" "),v("p",[t._v("同样有了安全沙箱的保护，在渲染进程内部也是不能直接访问网络的，如果要访问网络，则需要通过浏览器内核。不过浏览器内核在处理 URL 请求之前，会检查渲染进程是否有权限请求该 URL，比如检查 XMLHttpRequest 或者 Fetch 是否是跨站点请求，或者检测 HTTPS 的站点中是否包含了 HTTP 的请求。")])]),t._v(" "),v("li",[v("p",[t._v("用户交互")]),t._v(" "),v("p",[t._v("为了限制渲染进程有监控到用户输入事件的能力，所以所有的键盘鼠标事件都是由浏览器内核来接收的，然后浏览器内核再通过 IPC 将这些事件发送给渲染进程。")]),t._v(" "),v("p",[t._v("渲染进程需要渲染出位图。为了向用户显示渲染进程渲染出来的位图，渲染进程需要将生成好的位图发送到浏览器内核，然后浏览器内核将位图复制到屏幕上。")]),t._v(" "),v("p",[t._v("操作系统没有将用户输入事件直接传递给渲染进程，而是将这些事件传递给浏览器内核。然后浏览器内核再根据当前浏览器界面的状态来判断如何调度这些事件，如果当前焦点位于浏览器地址栏中，则输入事件会在浏览器内核内部处理；如果当前焦点在页面的区域内，则浏览器内核会将输入事件转发给渲染进程。")])])]),t._v(" "),v("h3",{attrs:{id:"站点隔离"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#站点隔离"}},[t._v("#")]),t._v(" 站点隔离")]),t._v(" "),v("p",[t._v("所谓站点隔离是指 Chrome 将同一站点（包含了相同根域名和相同协议的地址）中相互关联的页面放到同一个渲染进程中执行。由于最初都是按照标签页来划分渲染进程的，所以如果一个标签页里面有多个不同源的 iframe，那么这些 iframe 也会被分配到同一个渲染进程中，这样就很容易让黑客通过 iframe 来攻击当前渲染进程。而站点隔离会将不同源的 iframe 分配到不同的渲染进程中，这样即使黑客攻击恶意 iframe 的渲染进程，也不会影响到其他渲染进程的。")])])}),[],!1,null,null,null);v.default=a.exports}}]);