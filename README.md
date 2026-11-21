# Workman

超簡單的 Windows 待辦小程式。

## 特點
- 日期快速 key:打 `1112 吃早餐`,自動變 11/12 吃早餐
- 日期時間快速 key:打 `1112 0800 吃早餐`,自動辨識 11/12 08:00 吃早餐
- 可以貼圖:截圖後 Ctrl+V 直接貼進項目
- 多個分類群:idea、pend、token 想開幾個都行
- 資料只存在自己的電腦,免註冊、免安裝

## 下載
到右側 **Releases** 下載 zip,解壓縮後執行 exe。
第一次執行若出現 SmartScreen,點「其他資訊」→「仍要執行」。

## 從原始碼執行
```
npm install electron --save-dev
npx electron .
```
