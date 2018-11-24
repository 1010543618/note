# 准备工作
1. 安装Debugger for Chrome插件
1. 按F5（或选择菜单栏的Debug->Start Debuging），然后选择Chrome，就会自动创建默认的配置文件

# “启动”还是“附加”
- “启动”：配置将要调试的文件或url，按F5调试会开启一个新的Chrome进程并打开该文件或url进行调试
- “附加”：然后以允许远程调试模式打开Chrome，配置*Chrome打开的tab中的待调试url*为调试地址，按F5连接上进行调试

对比一下：

方式 | 优点 | 缺点
---|---|---
启动 | 配置简单 | 关闭调试后新开的Chrome进程会关闭，再次调试需重新打开
附加 | 关闭调试后Chrome进程不会关闭，再次调试无需重新打开页面 | 相对“启动”配置复杂（需要配置Chrome）

# “启动”示例

## 配置launch.json
“启动”方式使用只需配置launch.json即可。

使用指定url的配置要设置webRoot。

```
{
    "version": "0.1.0",
    "configurations": [
        {
            "name": "Launch localhost",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost/mypage.html",
            "webRoot": "${workspaceFolder}/wwwroot"
        },
        {
            "name": "Launch index.html",
            "type": "chrome",
            "request": "launch",
            "file": "${workspaceFolder}/index.html"
        },
    ]
}
```

# “附加”示例

## 一：配置Chrome
我用的是Windows配置方法如下：
1. 找到默认打开Chrome的快捷方式，一般是`C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Google Chrome`
2. 目标后面加上`--remote-debugging-port`配置，如：`"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222`

> Windows
> 
> - Right click the Chrome shortcut, and select properties
> - In the "target" field, append --remote-debugging-port=9222
> - Or in a command prompt, execute <path to chrome>/chrome.exe --remote-debugging-port=9222
> 
> macOS
> 
> - In a terminal, execute /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
> 
> Linux
> 
> - In a terminal, launch google-chrome --remote-debugging-port=9222
> 

## 二：打开将要调试的地址
将调试的tab必须保证是由配置了`--remote-debugging-port`的Chrome打开的！

下面是一套webpack的配置：

package.json
```

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --mode development"
},
"devDependencies": {
    "webpack": "^4.17.1",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.7"
}

```

webpack.config.js
```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    port: 3000
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

## 三：配置launch.json
注意：
1. 配置中的端口虽然默认就是9222，但我测试时配置中不指定端口会报`connect ECONNREFUSED 127.0.0.1:9229`这种连接不上其他的端口的错
2. 配置中的url一定是当前要调试的tab的url（例如：配置url为http://localhost:3000/，但浏览器打开http://localhost:3000/时自动跳转到http://localhost:3000/index.html，这时按F5调试就会报`无法连接到运行中的进程`的错误），这也是我把配置launch.json放到最后一步的原因。（PS：这种情况也可以通过配置`urlFilter`解决）

```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "attach",
      "name": "Attach to Chrome",
      "url": "http://localhost:3000/",
      "port": 9222,
      "sourceMaps": true,
      "webRoot": "${workspaceRoot}" 
    }
  ]
}

```

# 参考
[Debugger for Chrome - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

# 其他
> https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code

16年的时候说是打开谷歌自带的DevTools 这个插件的调试就会被断掉，等等测试一下看看能同时开不。（已经解决了\^_^，现在用这个插件就非常爽了）



