(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{247:function(t,a,s){"use strict";s.r(a);var v=s(0),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"二维码图片生成和解码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二维码图片生成和解码"}},[t._v("#")]),t._v(" 二维码图片生成和解码")]),t._v(" "),s("blockquote",[s("p",[t._v("生成二维码图片，解码二维码图片")])]),t._v(" "),s("h2",{attrs:{id:"二维码生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二维码生成"}},[t._v("#")]),t._v(" 二维码生成")]),t._v(" "),s("h3",{attrs:{id:"接口参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口参数"}},[t._v("#")]),t._v(" 接口参数")]),t._v(" "),s("p",[t._v("请求地址："),s("code",[t._v("/api/qr")])]),t._v(" "),s("p",[t._v("请求方式："),s("code",[t._v("get")])]),t._v(" "),s("p",[t._v("请求参数：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名称")]),t._v(" "),s("th",[t._v("必选")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("content")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("要生成二维码的内容")])]),t._v(" "),s("tr",[s("td",[t._v("size")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("二维码的大小，默认 "),s("code",[t._v("150x150")])])]),t._v(" "),s("tr",[s("td",[t._v("errorCorrection")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("容错级别，可选："),s("code",[t._v("L")]),t._v(" "),s("code",[t._v("M")]),t._v(" "),s("code",[t._v("Q")]),t._v(" "),s("code",[t._v("H")]),t._v("，默认 "),s("code",[t._v("H")]),t._v("，一般不用设置")])])])]),t._v(" "),s("h3",{attrs:{id:"返回数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回数据"}},[t._v("#")]),t._v(" 返回数据")]),t._v(" "),s("p",[t._v("测试参数： "),s("code",[t._v("content=www.alapi.cn&size=150")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://file.alapi.cn/test//wLbjmvPDNAeOD2ooUMziywO1EUIPuNJUHvCiOatp.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"二维码解码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二维码解码"}},[t._v("#")]),t._v(" 二维码解码")]),t._v(" "),s("blockquote",[s("p",[t._v("根据 二维码图片，解码获取内容")])]),t._v(" "),s("h3",{attrs:{id:"接口参数-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口参数-2"}},[t._v("#")]),t._v(" 接口参数")]),t._v(" "),s("p",[t._v("请求地址："),s("code",[t._v("/api/qr/decode")])]),t._v(" "),s("p",[t._v("请求方式："),s("code",[t._v("get")]),t._v(" "),s("code",[t._v("post")])]),t._v(" "),s("p",[t._v("请求参数：")]),t._v(" "),s("p",[s("code",[t._v("url")]),t._v("  和"),s("code",[t._v("file")]),t._v(" 必选选择一个，"),s("code",[t._v("get")]),t._v(" 方式只能使用 "),s("code",[t._v("url")]),t._v(", "),s("code",[t._v("file")]),t._v(" 参数需要 "),s("code",[t._v("post")]),t._v(" 方式上传图片, 文件类型只支持图片。图片文件最大 2MB")]),t._v(" "),s("p",[s("strong",[t._v("推荐使用POST方式上传二维码图片解析")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名称")]),t._v(" "),s("th",[t._v("必选")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("url")])]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[s("code",[t._v("string")])]),t._v(" "),s("td",[t._v("二维码的 网络 地址")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("file")])]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[s("code",[t._v("file")])]),t._v(" "),s("td",[t._v("二维码图片, 使用 "),s("code",[t._v("post")]),t._v(" 方式上传文件")])])])]),t._v(" "),s("h3",{attrs:{id:"返回数据-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回数据-2"}},[t._v("#")]),t._v(" 返回数据")]),t._v(" "),s("p",[t._v("测试参数： "),s("code",[t._v("url=http://v1.alapi.cn/api/qr/decode?url=http://file.alapi.cn/test//wLbjmvPDNAeOD2ooUMziywO1EUIPuNJUHvCiOatp.png")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://v1.alapi.cn/api/qr?content=https://www.alpi.cn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.alpi.cn"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Alone88"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"desc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"由Alone88提供的免费API 服务，官方文档：www.alapi.cn"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);