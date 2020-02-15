北京谋智火狐信息技术有限公司（北京市东城区建国门华润大厦 17 层）过去面试的时候感觉电梯好神奇啊！一边的电梯是直达 18 层以上的，我按了 18 层准备到了再往下走一层，一个老司机和我说要做另一边的 1-17 层的电梯，这个电梯到 18 层你走下去门也是锁定，我就又坐回 1 层绕过去走那边的电梯上去。

人事和面试官还是人很好的，不过自己能力不足浪费了这次机会也是挺遗憾的，面试官说现在公司没怎么主动招人（我是从官网找到投的），也暂时不准备招实习生，主要还是看实力（这时就感觉有点悬了，感觉我的水平只够实习生的）。面试过程还是很愉快的（虽然大部分问题都是一知半解）。

# 面试题

## 1. DOCTYPE 的作用，不加会怎样？

我的回答（一开始就涉及到我知识的盲区了）：
浏览器会不知道文档类型（然后又扯到 DTD 上），但现在浏览器会有容错机制会解析 HTML 页面。

正解：

> <https://www.cnblogs.com/alwaysblog/p/5822834.html>
>
> 声明文档的解析类型 (document.compatMode)，避免浏览器的怪异模式。
>
> document.compatMode：
>
> BackCompat：怪异模式，浏览器使用自己的怪异模式解析渲染页面。
>
> CSS1Compat：标准模式，浏览器使用 W3C 的标准解析渲染页面。
>
> 这个属性会被浏览器识别并使用，但是如果你的页面没有 DOCTYPE 的声明，那么 compatMode 默认就是 BackCompat，
>
> 浏览器按照自己的方式解析渲染页面，那么，在不同的浏览器就会显示不同的样式。
>
> 如果你的页面添加了<!DOCTYPE html>那么，那么就等同于开启了标准模式
>
> 那么浏览器就得老老实实的按照 W3C 的标准解析渲染页面，这样一来，你的页面在所有的浏览器里显示的就都是一个样子了。
>
> 这就是<!DOCTYPE html>的作用。

怪异模式（quirks mode）下浏览器会尝试模拟**非常旧**的浏览器的行为

## 2. 用过的编码，区别是什么，哪个占据的空间

我的回答：

GBK2312（这里可能已经听出来错了），和 UTF-8

区别是一个字符占的字节不同，好像 GBK2312 是 2 或 3 个字节，UTF-8 是全都 3 字节

这回答的应该是 UTF-8（因为在我印象里 UTF-8 所有的都一样长，GBK2312 有短的）

正解：

> <https://www.cnblogs.com/jffun-blog/p/9088966.html>
>
> （感谢 Molier 发现这里的错误，提醒了我）    

## 3. 如何进行移动端适配，移动端默认宽度是多少答对百位就行

我的回答：

使用媒体查询

meta 设置 width=device-width 后默认宽度就是屏幕宽度，默认宽度应该是 320

正解：

-   移动端适配：

> <https://www.cnblogs.com/MaggieGao/p/6994868.html>
> <https://segmentfault.com/a/1190000011586301>

-   移动端默认宽度是多少：

> <https://www.zhihu.com/question/22938382> 
> 应该想听到 640 这个答案（哎，高清屏啊，但用 F12 初始是 320\*480）

## 4. 移动端要做什么特殊处理

我的回答：

图片最好做两份，一份普通的，一份高清屏的（没表达很清楚，因为以前看过一些讲解 Retina 屏的就这么说了）

正解：

> <https://www.cnblogs.com/xsilence/p/5774737.html>

## 5. 常用标签，p 标签的应用场景，列表有哪些，哪个是有序哪个是无序，还有一个定义列表知道么

我的回答：

div 和 p（原本想了一下 HTML5 新出的想了一遍 header 到 footer，答之前问了一句答 HTML5 新出的么，面试官说就常用的然后就蒙了，该想一个界面从 html 顶答到 html 尾啊，估计分已经要掉没了）

段落，别的想不到了

有序和无序

ol 是有序，ul 是无序（ordered 和 unordered）

是自定义的能改变前面样式列表么？

正解：

-   常用标签：

> <https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element>

-   p 标签的应用场景：

> <https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p>

-   定义列表：

> <https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dl>

## 6. CSS 全名，层叠是什么意思，优先级是怎样的

我的回答：

层叠样式表，cross 什么 sheet 来着（犯二了）

层叠的意思扯到 CSS 按照树购建上去了

内联的最高，然后是 id，然后是 class，最后是元素，important 强制为最高

正解：  

-   全称：

> 层叠样式表 (英文全称：Cascading Style Sheets)

-   层叠指：

> <https://www.zhihu.com/question/20077745>

## 7. 画一个盒模型

我的回答：

直接给 padding 包住 border 了（让我检查检查我还没看出来，要是有打分估计到这就扣完了），然后想到 box-sizing 说了点

正解：

> <https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model>

## 8. 说说清除浮动的方法和他们分别设置在哪，说说 BFC 和 IFC

我的回答：

clear:both 和 overfull:hidden

clear:both 个 div 或设置在 after 伪元素上，overfull:hidden 设置在父元素上

BFC 是块级元素，IFC 是行内元素，行内元素不能设置宽度（又准备说英文全称又说一半忘了 =\_=，格式化上下文 "Formatting Context" 这个确实用了好一阵子学，但还是没理解透啊）

正解：

> <https://www.cnblogs.com/jffun-blog/p/9068619.html>

## 9. 伪元素是什么，伪元素有哪些

我的回答：

CSS 创建的元素，afer，before，选择第一个字母，选择第一行

正解：

> <https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements>
>
> 就像 pseudo classes (伪类) 一样， 伪元素添加到选择器，但不是描述特殊状态，它们允许您为元素的某些部分设置样式。 

## 10. 常用的长度单位，是不和 px 对应还有个 ex 来着

我的回答：

em，rem，px，em 是相对于父元素，rem 是相对于根元素

ex 没接触过

正解：

> <http://www.divcss5.com/css3-style/c33196.shtml>
> ex：取当前作用效果的字体的 x 的高度

## 11. Ajax，其中的异步指什么，Ajax 能同步么，参数是什么，Ajax 如何不刷新改变网址

我的回答：

异步的 JS 和 XML（这个英文全程倒是知道，都不敢说了 @\_@）

异步指当主线程走完在这行异步的函数，数据返回做回调处理

能配置个参数就行，参数忘记了（T_T）

用井号（hash）么

正解：

-   异步指什么：

> <https://blog.csdn.net/xiaotao_css/article/details/70761666>
> 同步是指：发送方发出数据后，等接收方发回响应以后才发下一个数据包的通讯方式。
>
> 用户填写所有信息后，提交给服务器，等待服务器的回应（检验数据），是一次性的。信息错误又要重新填写！
>
> 异步是指：发送方发出数据后，不等接收方发回响应，接着发送下个数据包的通讯方式。
>
> 当用户填写完一条信息后，该信息会自动向服务器提交，然后服务器响应客户端，在此过程中，用户依然在填写表格的信息，即向服务器请求多次，节省了用户的时间，提高了用户的体验。

-   Ajax 同步的参数：

> <https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest>
> xhr.open 的第三个参数

-   ==Ajax 如何不刷新改变网址 ==

> <https://developer.mozilla.org/en-US/docs/Web/API/History_API/Example>
>
> History_API
>
> history.pushState、history.popState、 history.replaceState 
>
> 注：hash 也算一种方法

## 12. 有 JS 获取不到的 Cookie 么

我的回答：

服务端返回的时候有设置好像可以不让 JS 获取，设置哪项忘了

正解：

> <https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie>
> HttpOnly 属性可以阻止通过 javascript 访问 Cookie

## 13. 有哪些数据存储的方法，localStorage 和 sessionStorage 的区别

我的回答：

好像是存储时间不同，sessionStorage 和 Session 有点像关闭浏览器就没了（然后提醒了一下我标签页），localStorage 是可以通用的，sessionStorage 不可以通用，是么？我也不敢瞎说（确实忘了真心在瞎说），session 属于服务端的就不算了

正解：

> <https://www.cnblogs.com/jffun-blog/p/9068735.html>
> 数据有效期
> Cookie：只在设置的 Cookie 过期时间之前一直有效，即使窗口或浏览器关闭。
> sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持。
> localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据。
> 作用域
> Cookie，localStorage：在所有同源窗口中都是共享的。
> sessionStorage：不在不同的浏览器窗口中共享，即使是同一个页面。

## 14. addEventListener 的第三个参数

我的回答：

是 this 么，我猜的。（然后又唠了点什么，最后说基本一直在用 jQuery，然后问下个问题了，彻底暴露了原生 JS 水平不够）

正解：

> <https://www.baidu.com/link?url=HawjzpN3JGRzl0XMopNVOIHDhPnJ-hfdbziIifo3mDk91c3snWwUuSDR2nO5CRpRZKqrWIncxUUHXu6gA16AiRoyDtYKyW9OhT8vO9ObBoJMQ6M1uAXz1HxDFd_gjePZ&wd=&eqid=c075a59800019971000000025b02a587>
>
> options 可选 
>
> 一个指定有关 listener   属性的可选参数对象。可用的选项如下：  
>
>   capture:  Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。  
>
>   once:  Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。  
>
>   passive: Boolean，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。  
>
>   mozSystemGroup: 只能在 XBL 或者是 Firefox' chrome 使用，这是个 Boolean，表示 listener 被添加到 system group。  

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
      <div href="#capture-t" id="capturet">
          <div href="#capture-m" id="capturem">
            <div href="#capture-b" id="captureb">
              capture(click me)
            </div>
          </div>
      </div>
      <button href="#once" id="once">once(click me)</button>
      <br>
      <a href="#passive" id="passive">passive(click me)</a>
      <script>
        /*    
        •true 的触发顺序总是在 false 之前；
        •如果多个均为 true，则外层的触发先于内层；
        •如果多个均为 false，则内层的触发先于外层。
        */
        document.querySelector("#capturet").addEventListener('click', function(){
          alert("capturet")//capture: true执行了
        }, {capture: false});
        document.querySelector("#capturem").addEventListener('click', function(){
          alert("capturem")
        }, {capture: true});
        document.querySelector("#captureb").addEventListener('click', function(){
          alert("captureb")
        }, {capture: true});

        document.querySelector("#once").addEventListener('click', function(){
          alert("once")
        }, {once: true});

        document.querySelector("#passive").addEventListener('click', function(e){
          e.preventDefault();//失效了
          alert("passive")
        }, {passive: true});
      </script>
    </body>
    </html>

## 15. 上传文件能获取到确定地址么，JS 怎么使用表单中准备上传的文件

我的回答：

获取不到，给的是临时文件夹的路径

真没这么用过

正解：  

-   能获取但得配置：

> <http://www.jb51.net/article/89653.htm>

-   == 使用表单中准备上传的文件 ==

> <https://developer.mozilla.org/zh-CN/docs/Web/API/File/Using_files_from_web_applications>

## 16. （未解决）activeX 如何在 FF，Chrome 上用

我的回答：
以前搜过确实找过没有解决，不然我也不会在 IE 上调试给我累完了。FF 上倒是有个网银助手好像能模拟 IE，activeX 是个什么插件来着用 VS 开发的，应该是能有办法让 FF，Chrome 用

正解：

> <https://blog.csdn.net/wlanye/article/details/51754091>
> <https://blog.csdn.net/wlanye/article/details/41342969>
> <http://mozilla.com.cn/thread-35931-1-1.html>
> （以前确实看了但看评论不确定能完美支持）

## 17. 你看过 WebSocket 的控制台的请求么？它的状态码是什么

我的回答：

看过就一个请求，状态码是 200？这个确实没注意了

正解：

> 请求只有一个 
>
> 状态码: 101 / Switching Protocols

## 18. 你知道的状态码，304 会去访问服务器么

我的回答：

404 找不到页面，500 服务器出错，200 成功，304 缓存

304 不会去访问服务器我试过服务端没有接收到请求（完全弄错了，该去看《图解 HTTP》了）

正解：

> <https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status>
> <https://www.zhihu.com/question/24880842>
> <https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/304>
>
> 如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码。304 响应禁止包含消息体，因此始终以消息头后的第一个空行结尾。

## 19. (附加题) 什么是墨卡托投影？

可能想创造个比较轻松愉快的结局吧，最后问了道我们专业相关的题。在前端面试中问到 GIS 的题也是挺欢乐的。

我的回答：

一种不是切就是割，不是圆柱就是圆锥投影的别名，跟高斯投影一样是个别名只能记住这些了。

正解：

> <https://baike.baidu.com/item/%E5%A2%A8%E5%8D%A1%E6%89%98%E6%8A%95%E5%BD%B1/5477927?fr=aladdin>
>
> 墨卡托投影，是正轴等角圆柱投影。由荷兰地图学家墨卡托 (G.Mercator) 于 1569 年创立。假想一个与地轴方向一致的圆柱切或割于地球，按等角条件，将经纬网投影到圆柱面上，将圆柱面展为平面后，即得本投影。墨卡托投影在切圆柱投影与割圆柱投影中，最早也是最常用的是切圆柱投影。

# 面试前的准备

虽然不知道方向找对没，等面试结束再发出来吧，别面试官真点开博客就尴尬了。

开始找工作的第一个面试谋智火狐的，虽然大学学了不少但感觉没参加过 ACM（算法方面薄弱）、没深入学习过底层框架和没系统研究过面试是硬伤，但后天面试现在也只能看些面试经常问的了。当初投北京谋智火狐信息技术有限公司是因为觉得 Firefox 和 MDN 非常帅气、很有意思，通过今天查资料才了解了 Mozilla=\_=!，和 Firefox 和 MDN 给人的感觉差不多是个很有意思的组织。写了这么多，那么这位会写代码的 friends 能否成为 Mozillians 呢？感觉有点悬啊！

## Mozilla 相关信息

<https://zh.wikipedia.org/wiki/Mozilla>

<https://zh.wikipedia.org/wiki/Mozilla%E5%85%AC%E5%8F%B8>

<https://zh.wikipedia.org/wiki/Firefox>

## 研发部：Front-end Engineer

### 岗位职责：

1.  根据公司产品发展方向，负责网站前端代码编写工作。
2.  根据产品需求，分析并给出合理的页面前端结构解决方案。
3.  根据产品设计，开发兼容多屏幕、多设备的响应式布局的网页。 

### 职位要求：

#### 1. 本科及以上学历（统招），计算机软件开发相关专业，3 年以上前端开发工作经验。

-   本科及以上学历（统招）：辽宁工程技术大学，本科统招没问题  
-   计算机软件开发相关专业：地理信息科学，也算是相关吧  
-   3 年以上前端开发工作经验：在学校连学习带开发也 3 年了，虽然接触的项目比不上工作

#### 2. 精通各类 Web 前端开发技术，包括 Javascript、Ajax、CSS 等 WEB 开发领域相关技术，有前端框架设计经验，熟悉并使用过 VUE 框架。

不能算是精通，都会把

#### 3. 熟练掌握 Javascript/HTML5/CSS3 相关技术，具有响应式布局网页开发经验。

基本 OK

#### 4. 熟悉手写或使用成熟框架渲染具有响应式布局的网页，可访问性等用户体验知识有相当的了解和实践经验。

响应式布局的网页：

-   媒体查询

可访问性：

-   百度百科：<https://baike.baidu.com/item/%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7/3184962?fr=aladdin>
-   MDN：<https://developer.mozilla.org/zh-CN/docs/learn/Accessibility>
-   Wiki：<https://en.wikipedia.org/wiki/Accessibility>

#### 5. 有很强的学习能力，清晰的思维，能独立分析和解决问题。

基本 OK

#### 6. 深刻理解 WEB 标准和兼容性，对表现与数据分离、WEB 语义化、提升用户体验有独特的见解和实践经验。

表现与数据分离：使用 MVC 和 MVVM 将数据操作和页面展示分开便于维护（页面改动时只需改动 V 层即可），D3.js，数据可视化插件感觉也有这个意思

P.S.  

-   MVC : V\\&lt;->C\\&lt;->M
-   MVVM: V\\&lt;->VM\\&lt;->M

#### 7. 严格遵守团队的代码格式、结构的规定，编写易读、易维护、高质量、高效率的代码。

写代码的基本素养

#### 8. 有后端技术（如 PHP）经验者、熟练使用 Smarty、Thinkphp 等模板技术者优先。

-   后端技术（如 PHP）经验：PHP 连学加用 3 年
-   熟练使用 Smarty、Thinkphp 等模板技术：学过 Smarty 和 Thinkphp（跟着视频大概过了一编），大学期间一直用的是 CodeIgniter 框架，Smarty 模板引擎据说用的不多了。（Thinkphp 是框架吧）

#### 9. 有 Photoshop 经验者优先；会 vue 框架者优先。

基本 OK

# 心得

写了好多都写成日记了，前面还是有点有用的。可能因为第一次面试吧，感觉从前期准备到后期凉凉确实都已经尽力了，虽然感觉面试过程失误蛮大的，但面试之前还是没来得及看完准备看的书也是准备的太不充分了。

原本感觉会卡在算法上，但只问了自己感觉还行的

精通各类 Web 前端开发技术，包括 Javascript、Ajax、CSS 等 WEB 开发领域相关技术，有前端框架设计经验，熟悉并使用过 VUE 框架。（不能算是精通，都会把）

熟练掌握 Javascript/HTML5/CSS3 相关技术，具有响应式布局网页开发经验。（基本 OK）

就发现自己根本不 OK 了。继续学习吧！

_这位经验值 + 1 的 friends 接下来的旅程又会怎样呢？_
