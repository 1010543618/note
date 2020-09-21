-   伪类：`link` - `visited` - `focus` - `hover` - `active`

-   继承的声明没有特殊性（比 `0,0,0,0` 都小）

```html
<style>
        * {/*0,0,0,0*/
            color: violet;
        }

        .box {/*0,0,1,0*/
            color: aqua;
        }
    </style>
</head>

<div class="box">
    <span>
        test (color: violet)
    </span>
</div>
```

-   继承向下传播，有一个例外：body 背景会传递给 html

```html
<!DOCTYPE html>
<html lang="en">
  <!-- background: tomato -->

  <head>
    <style>
      body {
        height: 200px;
        margin: 50px;
        background: tomato;
      }
    </style>
  </head>

  <body></body>
</html>
```

-   用户代理（浏览器）样式声明、插件样式声明（）和网站作者样式声明的优先级：

1.  Declarations in user agent style sheets (e.g. the browser's default styles, used when no other styling is set).
2.  Normal declarations in user style sheets (custom styles set by a user).
3.  Normal declarations in author style sheets (these are the styles set by us, the web developers).
4.  Important declarations in author style sheets
5.  Important declarations in user style sheets

[css - What is "User stylesheet" in Google Chrome's developer tools? - Stack Overflow](https://stackoverflow.com/questions/24465939/what-is-user-stylesheet-in-google-chromes-developer-tools)

# 值和单位

-   Web 安全颜色：在 256 色计算机上总能避免抖动的颜色，包括：0、3、6、9、C、F 组成的三元组。
-   `ex` 小写 x 的高度。
-   `1in = 2.54cm = 96px = 72pt`，经测试不同 DPR（设备像素比）他们的展示都是一样的。

# 字体

-   CSS 通用字体：包括 serif, sans-serif 等，会由用户代理选择对应类型的字体。
-   `font-weight` 的 bolder, lighter 可以相对改变粗细。
-   `font-size` 的 larger, smaller 和百分比可以相对改变大小。
-   **通常** `font-style` 设置 `italic` 和 `oblique` 在 Web 浏览器看上去一样。
-   `font-variant` 设置 `small-caps` 可以实现小型大写字母（<span style="font-variant: small-caps">Font Variant</span> 这种效果）。
-   使用系统字体：将 `font` 设置为 `caption`、`icon` 和 `menu` 等。在创建和原生应用类似的 Web 应用时可以用到。

# 文本

-   `line-height` 定义文本基线间的最小距离，文本基线拉开的距离可能比 `line-height` 的值大。`line-height` 通常为 1.2。
-   `vertical-align` 只应用于行内元素和替换元素。替换元素的基线在其底端。使用`middle`会将行内元素框的中间点和父元素基线上方 `0.5ex` 处的一个点对其。
-   `white-space` 控制空白符和换行符的展示，其中 `nowrap` 和 `pre` 都会禁止自动换行。
-   `direction` 和 `unicode-bidi` 控制文本书写方向。

# 视觉格式化

-   CSS 假定每个元素都会生成一个或多个矩形框。这些矩形框相对于包含块（布局上下文）摆放。
-   根元素： `html` 元素。
-   元素的宽度和左右 margin 三个值都不为 auto 时（overconstraint），会将右 margin 设置为 auto（ltr 书写方向时）。元素的 7 个水平 / 垂直属性总和不能大于包含块。
-   margin 可以为负数。
-   border 不可以是百分数。
