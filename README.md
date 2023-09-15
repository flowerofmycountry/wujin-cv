
# markdown 简历

通过编写 `markdown` 生成简历。

![效果](/doc/template.png)

## 需要知识

- [x] markdown
- [x] 可以启动项目

## 如何生成

1. 克隆项目

```bash
  git clone https://github.com/flowerofmycountry/jupiter.git
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