# MFEE27 Team3 Project OhDogCat

## 目錄結構

```bash=
src/
|-- index.js -- 最上層導入主程式
|-- App.js -- 主程式
|-- images -- 圖檔
|-- components
|   |-- layout -- 元件分類
|       |-- Footer -- 元件
|       |   |-- Footer.js -- 元件主程式
|       |   |-- _Footer.scss -- 元件樣式
|       |   |-- index.js -- 用於導出元件主程式
|       |-- Header -- 元件
|           |-- Header.js -- 元件主程式
|           |-- _Header.scss -- 元件樣式
|           |-- index.js -- 用於導出元件主程式
|-- pages
|   |-- HomePage -- 頁面名稱
|       |-- Homepage.js -- 頁面主程式
|       |-- index.js -- 用於導出頁面主程式
|-- styles
    |-- style.scss -- 全域樣式檔案，包含客製 SCSS
```

## 第一步 npm install 把 node_modules 都載回來

```javascript=
- npm install
- npm i 都可以
```

---

```javascript=
已經把相關套件有載進去了
- 目前Google fonts 是用Roboto模組 未來可以更改在 (index.html那)
- prettier 排版
- eslint 選錯字
- icons 裡面icon 未來可以更改icon目前用React 提供的svg icon
- bootstrap 和之前使用的bootstrap略有不同，老師說最後會教學唷!我問過了~
- react-router-dom router部分是React 核心切換頁面功能 未來會教到
- RWD也切好了 有點醜就是了xD 請見諒~~
```

---

想要編寫自己的組件頁面可以在，📁Pages 檔案內 HomePage.js，更改自己的版面。  
在自己元件內引入 css 檔案

##### 方法如下 import "檔案路徑名稱"

```javascript=
import './styles/style.css'
```

#### 小提醒~React DOM 裡 class 屬性要寫成 className="<class 命名>"

---

#### 如果想引用圖片和以前導入方式不同，需要在組件最上層引入圖片， 前面是檔名 from 後面是路徑

```javascript=
import logobody from '../images/logo_dog_body1.svg'

下面是在img內引入方式 不能再div後面用src會失效!

<img  src={logobody} alt="dog" />
```

---

```jsx=
<Link> 是 React router 寫法 他意思也等同於是 <a> 連結

<Link to="/"></Link>
```
   i