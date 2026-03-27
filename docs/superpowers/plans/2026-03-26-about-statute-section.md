# About Statute Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在關於我們頁新增與網站配色一致的協會章程區塊，並讓章程連結可於 dev 預覽直接查看。

**Architecture:** 直接修改 about 頁既有 Astro 模板，在現有內容區塊之間插入一個敘事導向的文件卡片。樣式以 Tailwind utility 為主，避免新增不必要元件或全域 CSS。

**Tech Stack:** Astro 4、Tailwind CSS

---

### Task 1: 實作章程區塊

**Files:**
- Modify: `src/pages/about.astro`

- [ ] **Step 1: 確認插入位置與現有配色**

閱讀 `src/pages/about.astro` 與 `tailwind.config.mjs`，確認章程區塊插入在願景與理監事之間，並沿用既有 `brand` 色彩。

- [ ] **Step 2: 以最小變更加入區塊**

在 about 頁加入：

- 區塊標題與說明文字
- 敘事導向文件卡片
- 新分頁開啟的 Google Docs 連結按鈕

- [ ] **Step 3: 檢查響應式與可讀性**

確認手機版單欄、桌面版左右視覺平衡，並讓卡片與前後段落有足夠留白。

### Task 2: 驗證與預覽

**Files:**
- Verify: `src/pages/about.astro`

- [ ] **Step 1: 執行建置驗證**

Run: `npm run build`

Expected: Astro build 成功，沒有模板錯誤。

- [ ] **Step 2: 啟動 dev 預覽**

Run: `npm run dev -- --host 127.0.0.1 --port 4321`

Expected: 可以在本機開啟 `/about`，看到新增的章程區塊。
