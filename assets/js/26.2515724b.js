(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{437:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"代码结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码结构"}},[t._v("#")]),t._v(" 代码结构")]),t._v(" "),a("p",[t._v("我们将要学习的第一个内容就是构建代码块。")]),t._v(" "),a("h2",{attrs:{id:"语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语句"}},[t._v("#")]),t._v(" 语句")]),t._v(" "),a("p",[t._v("语句是执行行为（action）的语法结构和命令。")]),t._v(" "),a("p",[t._v("我们已经见过了 "),a("code",[t._v("alert('Hello, world!')")]),t._v(" 这样可以用来显示消息的语句。")]),t._v(" "),a("p",[t._v("我们可以在代码中编写任意数量的语句。语句之间可以使用分号进行分割。")]),t._v(" "),a("p",[t._v('例如，我们将 "Hello World" 这条信息一分为二：')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'World'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("通常，每条语句独占一行，以提高代码的可读性：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'World'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"分号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分号"}},[t._v("#")]),t._v(" 分号")]),t._v(" "),a("p",[t._v("当存在分行符（line break）时，在大多数情况下可以省略分号。")]),t._v(" "),a("p",[t._v("下面的代码也是可以运行的：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'World'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("在这，JavaScript 将分行符理解成“隐式”的分号。这也被称为 "),a("a",{attrs:{href:"https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion",target:"_blank",rel:"noopener noreferrer"}},[t._v("自动分号插入"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("在大多数情况下，换行意味着一个分号。但是“大多数情况”并不意味着“总是”！")])]),t._v(" "),a("p",[t._v("有很多换行并不是分号的例子，例如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("代码输出 "),a("code",[t._v("6")]),t._v("，因为 JavaScript 并没有在这里插入分号。显而易见的是，如果一行以加号 "),a("code",[t._v('"+"')]),t._v(" 结尾，那么这是一个“不完整的表达式”，不需要分号。所以，这个例子得到了预期的结果。")]),t._v(" "),a("p",[a("strong",[t._v("但存在 JavaScript 无法确定是否真的需要自动插入分号的情况。")])]),t._v(" "),a("p",[t._v("这种情况下发生的错误是很难被找到和解决的。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("一个错误的例子")]),t._v(" "),a("p",[t._v("如果你好奇地想知道一个这种错误的具体例子，那你可以看看下面这段代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("你不需要考虑方括号 "),a("code",[t._v("[]")]),t._v(" 和 "),a("code",[t._v("forEach")]),t._v(" 的含义，现在它们并不重要，之后我们会学习它们。让我们先记住这段代码的运行结果：先显示 "),a("code",[t._v("1")]),t._v("，然后显示 "),a("code",[t._v("2")]),t._v("。")]),t._v(" "),a("p",[t._v("现在我们在代码前面插入一个 "),a("code",[t._v("alert")]),t._v(" 语句，并且不加分号：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"There will be an error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("现在，如果我们运行代码，只有第一个 "),a("code",[t._v("alert")]),t._v(" 语句的内容被显示了出来，随后我们收到了一个错误！")]),t._v(" "),a("p",[t._v("但是，如果我们在第一个 "),a("code",[t._v("alert")]),t._v(" 语句末尾加上一个分号，就工作正常了：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"All fine now"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v('现在，我们能得到 "All fine now"，然后是 '),a("code",[t._v("1")]),t._v(" 和 "),a("code",[t._v("2")]),t._v("。")]),t._v(" "),a("p",[t._v("无分号的变体（variant）会出现报错，是因为 JavaScript 并不会在方括号 "),a("code",[t._v("[...]")]),t._v(" 前添加一个隐式的分号。")]),t._v(" "),a("p",[t._v("所以，因为没有自动插入分号，第一个例子中的代码被视为了一条简单的语句，我们从引擎看到的是这样的：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"There will be an error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("但它应该是两条语句，而不是一条。这种情况下的合并是不对的，所以才会造成错误。诸如此类，还有很多。")])]),t._v(" "),a("p",[t._v("即使语句被换行符分隔了，我们依然建议在它们之间加分号。这个规则被社区广泛采用。我们再次强调一下 —— 大部分时候可以省略分号，但是最好不要省略分号，尤其对新手来说。")]),t._v(" "),a("h2",{attrs:{id:"注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),a("p",[t._v("随着时间推移，程序变得越来越复杂。为代码添加 "),a("strong",[t._v("注释")]),t._v(" 来描述它做了什么和为什么要这样做，变得非常有必要了。")]),t._v(" "),a("p",[t._v("你可以在脚本的任何地方添加注释，它们并不会影响代码的执行，因为引擎会直接忽略它们。")]),t._v(" "),a("p",[a("strong",[t._v("单行注释以两个正斜杠字符 "),a("code",[t._v("//")]),t._v(" 开始。")])]),t._v(" "),a("p",[t._v("这一行的剩余部分是注释。它可能独占一行或者跟随在一条语句的后面。")]),t._v(" "),a("p",[t._v("就像这样：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这行注释独占一行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'World'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这行注释跟随在语句后面")]),t._v("\n")])])]),a("p",[a("strong",[t._v("多行注释以一个正斜杠和星号开始 "),a("code",[t._v('"/*"')]),t._v(" 并以一个星号和正斜杆结束 "),a("code",[t._v('"*/"')]),t._v("。")])]),t._v(" "),a("p",[t._v("就像这样:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 两个消息的例子。\n这是一个多行注释。\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'World'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("注释的内容被忽略了，所以如果我们在 "),a("code",[t._v("/* ... */")]),t._v(" 中放入代码，并不会执行。")]),t._v(" "),a("p",[t._v("有时候，可以很方便地临时禁用代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 注释代码\nalert('Hello');\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'World'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("使用热键！")]),t._v(" "),a("p",[t._v("在大多数的编辑器中，一行代码可以使用 "),a("code",[t._v("key:Ctrl+/")]),t._v(" 热键进行单行注释，诸如 "),a("code",[t._v("key:Ctrl+Shift+/")]),t._v(" 的热键可以进行多行注释（选择代码，然后按下热键）。对于 Mac 电脑，应使用 "),a("code",[t._v("key:Cmd")]),t._v(" 而不是 "),a("code",[t._v("key:Ctrl")]),t._v("，使用 "),a("code",[t._v("key:Option")]),t._v(" 而不是 "),a("code",[t._v("key:Shift")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("不支持注释嵌套！")]),t._v(" "),a("p",[t._v("不要在 "),a("code",[t._v("/*...*/")]),t._v(" 内嵌套另一个 "),a("code",[t._v("/*...*/")]),t._v("。")]),t._v(" "),a("p",[t._v("下面这段代码报错而无法执行：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n  /* 嵌套注释 ?!? */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'World'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("对你的代码进行注释，这还有什么可犹豫的！")]),t._v(" "),a("p",[t._v("注释会增加代码总量，但这一点也不是什么问题。有很多工具可以帮你在把代码部署到服务器之前缩减代码。这些工具会移除注释，这样注释就不会出现在发布的脚本中。所以，注释对我们的生产没有任何负面影响。")]),t._v(" "),a("p",[t._v("在后面的教程中，会有一章 "),a("a",{attrs:{href:"/code-quality"}},[t._v("代码质量")]),t._v(" 的内容解释如何更好地写注释。")])])}),[],!1,null,null,null);s.default=e.exports}}]);