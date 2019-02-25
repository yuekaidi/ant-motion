(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1129:function(t,n){t.exports={content:["section",["h2","怎么使用"],["h3","安装"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> rc-banner-anim --save'},["code","$ npm install rc-banner-anim --save"]],["h3","使用"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> BannerAnim<span class="token punctuation">,</span> <span class="token punctuation">{</span> Element <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'rc-banner-anim\'</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BannerAnim</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Element</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TweenOne</span> <span class="token attr-name">animation</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> x<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">30</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'from\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Ant Motion Demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TweenOne</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Element</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Element</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>demo2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TweenOne</span> <span class="token attr-name">animation</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> x<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">30</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'from\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Ant Motion Demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TweenOne</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Element</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BannerAnim</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import BannerAnim, { Element } from 'rc-banner-anim';\nReactDOM.render(<BannerAnim>\n  <Element key=\"demo1\">\n    <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion Demo</TweenOne>\n  </Element>\n  <Element key=\"demo2\">\n    <TweenOne animation={{ x: -30, type: 'from' }}>Ant Motion Demo</TweenOne>\n  </Element>\n</BannerAnim>, mountNode);"]]],meta:{order:5,vertical:!0,title:{"zh-CN":"Banner动画","en-US":"BannerAnim"},filename:"components/banner-anim/index.zh-CN.md"},description:["section",["p","通过简单的配置, 就能让你的 banner 动起来。 具体参数请参见 ",["a",{title:null,href:"/api/banner-anim"},"API"]],["h2","何时使用"],["ul",["li",["p","在首页里的首屏展示信息时，需要将 banner 里的元素做动效时。"]]],["blockquote",["p",["a",{title:null,href:"http://react-component.github.io/banner-anim/"},"查看更多 Demo"]]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#怎么使用",title:"怎么使用"},"怎么使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","BannerAnim"],["blockquote",["p","ref 来控制跳转: ",["code","<BannerAnim ref={(c) => { this.banner = c; }}/>"]],["p","上一个: this.banner.prev();"],["p","下一个: this.banner.next();"],["p","跳转:  this.banner.slickGoTo(number); number 从 0 开始;"]],["table",["thead",["tr",["th","参数"],["th","类型"],["th","默认"],["th","详细"]]],["tbody",["tr",["td","type"],["td","string / array"],["td","All animType"],["td","提供: ",["code","across"],", ",["code","vertical"],", ",["code","acrossOverlay"],", ",["code","verticalOverlay"],", ",["code","gridBar"],", ",["code","grid"],"; ",["br"],["code","grid"]," 和 ",["code","gridBar"]," 单个块状动画时间是 ",["code","duration"],"; ",["br"],"自定义动画效果，",["a",{title:null,href:"http://react-component.github.io/banner-anim/examples/customAnimType.html"},"详细参考"]]],["tr",["td","duration"],["td","number"],["td","450"],["td","动画过场时间"]],["tr",["td","delay"],["td","number"],["td","0"],["td","过场的延时"]],["tr",["td","ease"],["td","string"],["td",["code","easeInOutQuad"]],["td","缓动"]],["tr",["td","initShow"],["td","number"],["td","0"],["td","开始显示"]],["tr",["td","arrow"],["td","boolean"],["td",["code","true"]],["td","默认箭头，如果 ",["code","Arrow"]," 在 children 里，此项无效"]],["tr",["td","thumb"],["td","boolean"],["td",["code","true"]],["td","默认缩略图（点），如果 ",["code","Thumb"]," 在 children 里，此项无效"]],["tr",["td","autoPlay"],["td","boolean"],["td",["code","false"]],["td","自动播放"]],["tr",["td","autoPlaySpeed"],["td","number"],["td","5000"],["td","自动播放的时间"]],["tr",["td","onChange"],["td","func"],["td","-"],["td","幻灯片变换时调用，返回 onChange(",["code","before"]," 或 ",["code","after"],", 当前显示的位置)"]],["tr",["td","prefixCls"],["td","string"],["td","-"],["td","自定义样式"]],["tr",["td","children"],["td","react.component"],["td","-"],["td",["code","Element"],"(必须), ",["code","Arrow"],", ",["code","Thumb"]]],["tr",["td","sync"],["td","boolean"],["td","false"],["td","传递到 Element."]],["tr",["td","dragPlay"],["td","boolean"],["td","true"],["td","在 banner 上拖动播放下一个或上一个。默认开启"]],["tr",["td","component"],["td","string"],["td",["code","div"]],["td","组件标签"]]]],["h3","Element"],["blockquote",["p","子级元素为 ",["code","TweenOne"]," 时， animation 里的 type 设为 ",["code","from"],"，请用返向播放."]],["table",["thead",["tr",["th","参数"],["th","类型"],["th","默认"],["th","详细"]]],["tbody",["tr",["td","key"],["td","string"],["td","-"],["td","必须"]],["tr",["td","leaveChildHide"],["td","boolean"],["td","false"],["td","子级出场时是否需要切换的动画，替换原来的 ",["code","hideProps"],"。"]],["tr",["td","sync"],["td","boolean"],["td","false"],["td","子级动画进入与滑动动画是否同步。默认 false 为滑动完成后再做子级动画"]],["tr",["td","prefixCls"],["td","string"],["td","-"],["td","自定义样式"]],["tr",["td","followParallax"],["td","object"],["td","null"],["td","跟随鼠标上下或左右晃动效果"]],["tr",["td","component"],["td","string"],["td",["code","div"]],["td","组件标签"]],["tr",["td","componentProps"],["td","object"],["td","{}"],["td","组件的 props"]]]],["h4","followParallax is object"],["table",["thead",["tr",["th","参数"],["th","类型"],["th","默认"],["th","详细"]]],["tbody",["tr",["td","delay"],["td","number"],["td","null"],["td","必须，在单个区块进入后延迟开启鼠标效果，比如子级是 tween-one 时，需要等 tween-one 的动画结束后再执行鼠标效果，不然两者会冲突"]],["tr",["td","data"],["td","array"],["td","null"],["td","详细参数查看下面 ",["a",{title:null,href:"#followParallax-data"},"followParallax data"],", 详细 Demo 查看 ",["a",{title:null,href:"http://react-component.github.io/banner-anim/examples/followMouse.html"},"鼠标跟随例子"]]],["tr",["td","ease"],["td","string"],["td",["code","easeInOutQuad"]],["td","鼠标移动时, 元素缓动效果。",["a",{title:null,href:"http://easings.net/zh-cn"},"参数名称参考"]]],["tr",["td","minMove"],["td","number"],["td","0.08"],["td","区域为 0 - 0.1, ",["code","easeInOutQuad(startMousePosition, minMove, 1, currentMousePosition)"],"; 在有缓动时，鼠标移动时，最小移动的值，如果为 0，鼠标移动时不会移动，移动结束后触发动画。"]]]],["h4","followParallax data"],["blockquote",["p","data = ",["span","{ id, value, type, bgPosition }"]]],["table",["thead",["tr",["th","参数"],["th","类型"],["th","默认"],["th","详细"]]],["tbody",["tr",["td","id"],["td","string"],["td","-"],["td","子级 id."]],["tr",["td","value"],["td","number"],["td","-"],["td","晃动时的值，如果值为 20, 那左右晃动的值为：最左边 -20, 最右边 20。"]],["tr",["td","type"],["td","string"],["td","-"],["td","style 里的名称或 ",["code","x"]," ,",["code","y"],", ",["code","x"]," = ",["code","translateX"],", ",["code","y"]," = ",["code","translateY"],"."]],["tr",["td","bgPosition"],["td","string"],["td","-"],["td","初始背景图片的坐标，只在 type 为 backgroundPosition 时生效，默认为 50%."]]]],["h3","Element.BgElement"],["table",["thead",["tr",["th","参数"],["th","类型"],["th","默认"],["th","详细"]]],["tbody",["tr",["td","id"],["td","string"],["td","-"],["td","必须( 0.4.0 以后不再用 key, 直接用id，可控制子级 )"]],["tr",["td","className"],["td","string"],["td","-"],["td","样式"]],["tr",["td","scrollParallax"],["td","object"],["td","null"],["td","{ y: 100 }, 向下滚动时, 元素出顶部的到达值。"]],["tr",["td","videoResize"],["td","boolean"],["td",["code","true"]],["td","如果子级元素为 video 时，自动响应窗口大小。"]],["tr",["td","component"],["td","React.Element/string"],["td",["code","div"]],["td","组件标签"]],["tr",["td","componentProps"],["td","object"],["td","{}"],["td","组件的 props"]]]],["h3","Arrow or Thumb"],["table",["thead",["tr",["th","参数"],["th","类型"],["th","默认"],["th","详细"]]],["tbody",["tr",["td","key"],["td","string"],["td","-"],["td","必须"]],["tr",["td","prefixCls"],["td","string"],["td","-"],["td","自定义样式"]]]]]}}}]);