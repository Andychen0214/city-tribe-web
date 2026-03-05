# 城市部落（高雄左營店）官方網站重構專案

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAndychen0214%2Fcity-tribe-web)

## 專案簡介
本專案是為「城市部落」高雄左營店進行的官方網站現代化重構。旨在提升原住民文化的沉浸感，優化合菜與家庭客群的瀏覽體驗。

### 核心特色
- **沉浸式設計**：採用 Organic Biophilic + Warm Indigenous 風格。
- **藝術字體**：引入 Google Fonts `Zhi Mang Xing` (草寫行書) 展現奔放力。
- **動態效果**：包含滾動淡入動畫與底部 QQ 原住民跑動小動畫。
- **UX 優化**：
  - 響應式佈局 (RWD) 完美適配手機與桌機。
  - 常駐撥號按鈕，大幅提升訂位轉換率。
  - 精確的 Google Maps 導航整合。

## 部署與發佈流程 (Vercel)

本專案採純靜態網頁架構 (Static Website)，最推薦使用 **Vercel** 進行一鍵部署。

### 步驟說明：
1. **GitHub 同步**：確保專案程式碼已推送到這個 GitHub 倉庫。
2. **登入 Vercel**：前往 [vercel.com](https://vercel.com/)，使用您的 GitHub 帳號登入。
3. **匯入專案**：
   - 點擊 **Add New** -> **Project**。
   - 選取 `city-tribe-web` 倉庫。
4. **環境設定**：
   - 專案無須特定 Build Command，保持預設即可。
   - 下載後的 Assets (圖片) 路徑為 `assets/images/`，請勿任意更動。
5. **部署成功**：
   - Vercel 將自動產生一個 `.vercel.app` 的預覽網址。
   - 後續只需在這個倉庫修改程式碼並 Push，Vercel 就會自動更新正式環境。

## 免責聲明與安全
- **無 API 洩漏**：本專案已完成全面掃描，不含任何 API Key、Token 或機密資訊。
- **靜態架構**：所有邏輯均在前端執行，不涉及後端資料庫。
