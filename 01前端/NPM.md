# 基本使用

1.  安装
    较新版本 Node 自带，基本不用自己装
2.  初始化
    `npm init`之后一路 next
3.  安装依赖

-   `npm install --production`安装 package.json 里已经声明了依赖（只安装 dependencies）
-   `npm install`安装 package.json 里已经声明了依赖（包括：devDependencies 和 dependencies）

## nrm

国内 npm 官方源慢，用 nrm 可以切换成淘宝的 npm 镜像源\
nrm can help you easy and fast switch between different npm registries, now include: npm, cnpm, taobao, nj(nodejitsu), rednpm.

-   Install

`$ npm install -g nrm`

-   Example

```bash
$ nrm use cnpm  //switch registry to cnpm
 
    Registry has been set to: http://r.cnpmjs.org/
```

# 操作模块

1.  安装，卸载模块\
    `npm install 模块名`：安装模块（写入 package.json 中 dependencies 下的对应信息）\
    `npm uninstall 模块名`：删除模块（删除 package.json 中 dependencies 下的对应信息）\
    [--save-dev 写入，删除 package.json 中 devDependencies 下的对应信息]\
    （dependencies：一般是运行时用到的模块，devDependencies：一般是开发时用到的工具的模块）
2.  查找是否安装某模块\
    `npm 模块名 -v`
3.  查看安装的模块\
    `npm list [-g] [-depth n]`\
    -g：查看全局安装的模块\
    -depth n：展示 n 层模块的依赖

PS：升级 npm 到最新版本`npm install npm@latest -g`

# 发布到 npm 社区

## 基本步骤

1.  在 npm 社区注册
2.  `npm adduser`：输入用户名密码和邮箱登陆\
    `npm whoami`：查看登陆的用户
3.  配置`package.json`
4.  配置`.npmignore`（未配置则使用`.gitignore`）
5.  ！！！发布前确保您的包可以安装和使用（下面细说一下如何在本地测试待发布的 npm 包）
6.  `npm publish`：发布

## 测试待发布的 npm 包

其实 npm 包就是一个带有`package.json`的文件夹。。

-   全局安装测试

```bash
cd %my-package%
npm install . -g # 当前包安装到全局
```

或者

```bash
cd %my-package%
npm link # 当前包连接到全局（当前包状态改变，全局会跟着改变）
```

-   本地安装测试

```bash
cd %some-other-folder%
npm install %my-package%
```

## 修改版本

`npm version 版本号`：确定版本号（格式：主版本号. 次版本号. 修订号）（可以为 major | minor | patch 等）

参见：[docs.npmjs.com/misc/developers.html](https://docs.npmjs.com/misc/developers.html)

# 检查和解决隐患（vulnerabilities）

使用 npm 的安全检查。

```bash
# 检查
npm audit [--json|--parseable]
# 解决
npm audit fix [--force|--package-lock-only|--dry-run|--production|--only=dev]
```

详细用法：[docs.npmjs.com/cli/audit](https://docs.npmjs.com/cli/audit)
