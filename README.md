# A8 开发者文档

## 1. 项目介绍

基于 [Nextra](https://nextra.site/docs) 的文档网站

## 2. 安装部署

系统依赖

- Node 16+
- npm 8+
- pm2 (optional)

2.1 安装依赖

```sh
 npm i next react react-dom nextra nextra-theme-docs
```

2.2 部署

建议采用 `pm2` 进行部署，项目中的 `ecosystem.config.js` 是 `pm2` 运行默认配置文件，使用以下命令进行启动

```sh
pm2 start ecosystem.config.js
```

## 3. 项目结构


## 4. 项目配置

```text

```

## 5. 项目启动

在开发和测试环境中，通过以下方式启动项目

```sh
 npm run dev
```

生产环境部署参考 `2.2` 说明！