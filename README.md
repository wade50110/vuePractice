# leo-vue

1.前後端分離使用VUE

2.路由導向有用JWT使用權限控管(登入時後端使用SpringSecurity，登入成功後JWT存放於localStorage)

3.有使用前端套件-Element 輔助前端開發

4.呼叫後端使用proxy，繞過CSRF（跨站請求偽造）機制

5.修改 config/index.js 的 host 屬性為 '0.0.0.0'，接受nginx load balance呼叫vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
