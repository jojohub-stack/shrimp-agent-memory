# 錯誤日誌 - 蝦蝦君

> 自動記錄失敗任務和教訓

---

## [2026-03-27 14:27] 瀏覽器啟動失敗 - DISPLAY 環境變數問題

**任務：** 使用 browser 工具開啟比價網頁
**錯誤類型：** 配置錯誤 / 資源限制
**嚴重程度：** 🟡 中

### 錯誤訊息
```
browser action=start failed
Browser is not running
```

### 根本原因
1. XRDP 會話使用 DISPLAY=:16
2. OpenClaw Gateway 在無頭模式運行，無 DISPLAY 環境變數
3. browser 工具嘗試啟動 Brave 時找不到 DISPLAY

### 解決方案
1. **短期：** 使用無頭模式啟動瀏覽器
   ```bash
   brave-browser --headless --no-sandbox --disable-gpu
   ```
2. **中期：** 配置 browser-config.json
   ```json
   {"browser": {"headless": true, "noSandbox": true}}
   ```
3. **長期：** 修改 systemd 服務，加入 DISPLAY 環境變數

### 預防措施
- [ ] 在 openclaw.json 中預設配置無頭模式
- [ ] 建立瀏覽器健康檢查機制
- [ ] 啟動失敗時自動切換到無頭模式

### 相關檔案
- `/root/.openclaw/workspace/browser-config.json`
- `~/.config/systemd/user/openclaw-gateway.service`

---

## [2026-03-27 13:25] Notion Token 配置遺失

**任務：** 查詢 Notion 帳號配置
**錯誤類型：** 配置錯誤
**嚴重程度：** 🟡 中

### 錯誤訊息
```
NOTION_TOKEN not found
Notion skill not configured
```

### 根本原因
1. Notion Token 加密存儲在 `.vault/secrets.enc`
2. Session 重置後未自動載入
3. 配置不透明，難以除錯

### 解決方案
- **決策：** 移除 Notion 技能，改用 Google Workspace
- Google Workspace 使用 keyring 存儲，更穩定

### 預防措施
- [x] 移除 Notion 技能
- [x] 更新 MEMORY.md 記錄決策
- [ ] 未來選擇配置透明的技能

### 相關檔案
- `/root/.openclaw/workspace/memory/2026-03-27.md`

---

_最後更新：2026-03-27 14:45_
