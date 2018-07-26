# 一个React项目构建模板
## 使用

```
$ git clone https://github.com/shjhe/react-webpack-template.git react-app
$ cd react-app
$ yarn #or npm install
```

## 运行
```
$ npm start
```
浏览器访问 [http://localhost:3000](http://localhost:3000)
## 目录结构
```
# 以下用CRA代表create-react-app
├── react-app                               
│   ├── build
│   │   ├── jest
│   │   ├── cssTransform.js
│   │   └──fileTransform.js
│   ├── env.js
│   ├── paths.js                            # CRA路径配置
│   ├── polyfills.js
│   ├── utils.js # vue-cli的styleLoaders
│   ├── webpack.config.base.js              # webpack公共配置
│   ├── webpack.config.dev.js
│   ├── webpack.config.dll.js               # dll优化 暂时未处理
│   ├── webpacj.config.prod.js
│   └── webpackDevServer.config.js
├── config
│   ├── build.js
│   ├── index.js                            # vue-cli配置文件 代理、端口等...
│   ├── start.js
│   └── test.js
├── public
│   ├── lib
│   │   └── responsive.js                  # rem处理 如不需要可将index.html中的引用去掉
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── styles
│   |   ├── mixins.scss
│   |   └── var.scss
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── registerServiceWorker.js
├── .babelrc                                # babel配置
├── .gitignore                              # git忽略文件配置
├── .postcssrc.js                           # postcss配置
├── pacakge.json
├── README.md
└── yarn.lock
```
## 详细修改
此项目是由create-react-app生成的模板并`npm run eject`后改造而来，主要是仿照vue-cli的模式进行修改，包括
* 修改文件目录结构`npm run`脚本放在config中，webpack配置放在build中，打包文件改为放在dist中
* webpack公共部分统一出来，省去添加[scss/less...]-loader、添加alias路径别名等需要修改两个文件的麻烦
* 引入vue-cli中的styleLoaders，使其支持scss/less/stylus
* 引入vue-cli中的config/index，配置端口、代理等，暂时未全部使用其配置，后续会不断完善

## LICENSE
MIT