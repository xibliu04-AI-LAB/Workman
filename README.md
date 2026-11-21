# Workman

超簡單的 Windows 待辦小程式。

## 特點
- 日期快速 key:打 `1112 吃早餐`,自動變 11/12 吃早餐
- 日期時間快速 key:打 `1112 0800 吃早餐`,自動辨識 11/12 08:00 吃早餐
- 可以貼圖:截圖後 Ctrl+V 直接貼進項目
- 多個分類群:idea、pend、token 想開幾個都行
- 資料只存在自己的電腦,免註冊、免安裝

## 直接下載使用
到右側 **Releases** 下載 zip,解壓縮後執行 exe。
第一次執行若出現 SmartScreen,點「其他資訊」→「仍要執行」。

## 從原始碼重現(需要先安裝 Node.js)
```
git clone https://github.com/你的帳號/Workman.git
cd Workman
npm install
npm start
```

## 自己打包成 exe
```
npm run package
```
完成後在 `dist\WorkItem-win32-x64\` 裡有 `WorkItem.exe`。
