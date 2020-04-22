# feiyu

![](https://img.shields.io/npm/v/feiyu.svg?style=flat)
![](https://img.shields.io/badge/language-nodejs-orange.svg)
![](https://img.shields.io/badge/license-MIT-000000.svg)

`feiyu` 飞羽是一款使用NodeJS开发的命令行程序。作用：输出随机的英文词汇，分类有动物，植物，动漫。

## 安装

**从npm安装**

```bash
npm install -g feiyu
```

**从源码安装**

```bash
git clone https://github.com/wdpm/feiyu.git
cd feiyu
sudo npm install . -g
```

## 使用

```bash
feiyu --help

Usage: feiyu [options]

Options:
  -V, --version       output the version number
  -i, --index <n>     specify index, default is random (default: -1)
  -t, --type <value>  [animal|plant|anime] (default: "anime")
  -h, --help          output usage information
        https://github.com/wdpm/feiyu.git
```

## 参数

- `-i`: 指定索引，默认为随机，合法索引范围：[0, 某分类对应的数组长度-1]，其他不合法索引范围视为随机。
- `-t`: 分类类型，默认为动画，可选 **[animal|plant|anime]** ，分别为动物、植物、动画。

## 致谢
- [lowb](https://github.com/biezhi/lowb)