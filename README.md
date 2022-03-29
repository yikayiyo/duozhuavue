## 简介

仿写多抓鱼，因为项目是用 `Vue` 写的，就取了个谐音梗名字 `duozhuavue`。

## 技术栈

- [Vite](https://vitejs.cn/)
- [Vue](https://v3.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vue Apollo](https://v4.apollo.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 相关项目及工具

- 后端项目 [duozhuavue-server](https://github.com/yikayiyo/duozhuavue-server)
- 图床 [duozhuavue-imgs](https://github.com/yikayiyo/duozhuavue-imgs)
- 数据库 [MongoDB Altas](https://cloud.mongodb.com/)
- 响应式图片 [Transform images](https://docs.netlify.com/large-media/transform-images/)

## 相关博客

- [当flex-1没有按预期工作](https://yikayiyo.github.io/2021/09/29/%E5%BD%93flex-1%E6%B2%A1%E6%9C%89%E6%8C%89%E9%A2%84%E6%9C%9F%E5%B7%A5%E4%BD%9C/)
- [解决粘性定位的一些问题](https://yikayiyo.github.io/2021/11/27/%E8%A7%A3%E5%86%B3%E7%B2%98%E6%80%A7%E5%AE%9A%E4%BD%8D%E7%9A%84%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98/)
- [粘性定位生效时添加样式](https://yikayiyo.github.io/2021/11/28/%E7%B2%98%E6%80%A7%E5%AE%9A%E4%BD%8D%E7%94%9F%E6%95%88%E6%97%B6%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F/)
- [分页](https://yikayiyo.github.io/2021/12/09/%E5%88%86%E9%A1%B5/)
- [文本溢出处理](https://yikayiyo.github.io/2022/01/09/%E6%96%87%E6%9C%AC%E6%BA%A2%E5%87%BA%E6%94%BB%E5%87%BB/)
- [缓存处理小结](https://yikayiyo.github.io/2022/03/14/Apollo%20Client%20%E7%BC%93%E5%AD%98%E5%A4%84%E7%90%86%E5%B0%8F%E7%BB%93/)
- [响应式图片]()
- [重写个人书架功能](https://yikayiyo.github.io/2022/03/26/%E9%87%8D%E5%86%99duozhuavue%E4%B9%A6%E6%9E%B6/)

## 功能
- [x] 主页信息流分页展示、动态加载
- [x] 书单详情页
- [x] 书籍详情页
- [x] 书籍评论管理
- [x] 个人主页
- [x] 个人书架
- [] 重构主页信息流，从分类下加载更多书籍时显示加载状态
- [] 图片懒加载
- [] 服饰页
- [] 书单列表页
- [] 个人动态

## 项目运行

添加文件`.env.local`，其中配置 API 链接
```
VITE_API_URI=http://localhost:5000/graphql
```

安装依赖，运行项目
```bash
  npm install && npm run dev
```