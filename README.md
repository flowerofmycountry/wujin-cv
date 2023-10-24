<div align="center">

English | [简体中文](./README.zh.md)

</div>

# Markdown Resume

Generate a resume by writing `markdown`.

![effect](/doc/template.png)

## Online

Go to [Markdown Resume](http://markdown-resume.top/) to generate it online!

Purely static pages do not collect any personal information from you.

## Customizable

Front-end developers may want to be highly customizable and can `clone` the project.

#### How to custom

1. Clone this project

```bash
  git clone https://github.com/flowerofmycountry/wujin-cv.git
```

2. Create a 'cv' folder that looks like this：

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

3. Replace the `src/cv` folder
4. Install dependencies' & 'to run the project

```bash
  pnpm i
  pnpm dev
```
