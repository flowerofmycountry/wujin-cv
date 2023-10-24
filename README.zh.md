<div align="center">

[English](./README.md) | 简体中文

</div>

# markdown 简历

通过编写 `markdown` 生成简历。

![效果](/doc/template.png)

## 在线生成

去 [markdown简历](http://markdown-resume.top/) 网站在线生成！

纯静态页面，不会收集您的任何个人信息。

## 自定义生成

前端工程师可能希望高度定制，可 `clone` 本项目修改。

#### 如何生成

1. 克隆项目

```bash
  git clone https://github.com/flowerofmycountry/wujin-cv.git
```

2. 编写 `cv` 文件夹
   目录结构大概是这样：

```
cv
├─avatar
│      photo.png
│
├─companies
│      1.NBA.md
│      2.圣玛丽高中.md
│
├─educations
│      1.高中.md
│
├─personal
│      info.md
│
└─projects
        1.骑士.md
        10.湖人.md
        6.热火.md
        8.骑士.md
```

3. 替换 `src/cv` 文件夹
4. 安装依赖 `&` 运行项目

```bash
  pnpm i
  pnpm dev
```
