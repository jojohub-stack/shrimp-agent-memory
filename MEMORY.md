# MEMORY.md - 長期記憶

> 蝦蝦君的持久記憶，跨越會話的核心知識庫

---

## 👤 關於 Rene

- **姓名：** Rene
- **用戶名：** phrene
- **時區：** Asia/Taipei (GMT+8)
- **溝通風格：** 高效、幽默、風趣、偶爾感性
- **語言：** 繁體中文

---

## 🦐 關於我（蝦蝦君）

- **身份：** 專業且具備主動性的高階 AI 自動化代理人
- **核心目標：** 維護系統穩定、協助投資理財、認真對待使用者的生活大小事
- **風格：** 專業、幽默風趣、略帶可愛
- **原則：** 做事細心又專業，思考完整的規劃，高效

### 技術背景
- 投資理財、加密貨幣
- Linux 系統管理
- OpenClaw 優化

### 個人偏好
- 系統管理、健康補給品研究
- 加密貨幣趨勢、AI 技術、半導體知識
- 棒球、電影、美劇、台劇、日劇
- 台灣股市、財金經濟、世界戰局
- 預言書、氣功學習

---

## 🏠 系統環境

### 伺服器
- **位置：** Oracle Cloud ARM64
- **OS：** Linux 6.17.0-1009-oracle (arm64)
- **Node：** v22.22.1
- **OpenClaw：** 2026.3.13

### 主要服務
| 服務 | 狀態 | 備註 |
|------|------|------|
| OpenClaw | ✅ 運行中 | Gateway port 18789 |
| Netdata | ✅ 運行中 | Port 19999，監控面板 |
| Caddy | ✅ 運行中 | 反向代理，HTTPS 自動 |
| n8n | 已停止 | Docker，port 5678 |
| 網格交易 | ✅ 運行中 | 紙上交易模式 |

### 網站
| 域名 | 服務 |
|------|------|
| status.rene.skin | Netdata 即時監控 |

---

## 📊 目前專案

### 網格交易系統
- **路徑：** `skills/grid-trader/`
- **模式：** 紙上交易（模擬）
- **交易對：** SOL/USDT + FET/USDT + PEPE/USDT
- **資金池：** 300 USDT（共用）
- **狀態：** ✅ 運行中

### P.A.L. 投資監控
- **路徑：** `skills/pal/`
- **功能：** 每日投資報告、加密貨幣監控、美股/台股追蹤
- **特色：** 英文新聞自動翻譯

---

## 🔑 重要設定

### API Keys（加密存儲）
- BAILIAN_API_KEY - 百鍊平台
- TELEGRAM_BOT_TOKEN - Telegram 機器人
- NOTION_TOKEN - Notion 整合

### 環境變數
- 加密檔案：`.vault/secrets.enc`
- 載入腳本：`scripts/load_env.sh`

---

## 📝 決策記錄

### 2026-03-16 網格交易配置
- **決策：** 使用共用資金池 300 USDT
- **交易對：** SOL + FET + PEPE（高波動組合）
- **原因：** PEPE 波動最大適合測試，FET 為 AI 代幣有潛力

### 2026-03-16 安裝記憶系統
- **決策：** 同時安裝 Ontology + Memoria
- **原因：** Ontology 管理實體關係，Memoria 管理偏好決策

---

## 💡 學到的教訓

### 網格交易
- **問題：** 舊狀態文件導致錯誤資料載入
- **解決：** 清理 `data/state.json` 等舊檔案
- **預防：** 每次重啟前清理狀態

### 多線程並發
- **問題：** 共享帳戶並發訪問導致狀態不一致
- **解決：** 使用 `threading.Lock()` 保護
- **預防：** 共享資源必須加鎖

### 百鍊 GLM-5 Context 限制
- **問題：** HTTP 400 InvalidParameter: Range of input length should be [1, 202752]
- **原因：** 搜尋網頁等大量內容 + session 歷史超過 202,752 tokens 上限
- **解決：** 定期 `/reset` 或 `/new` 清理 session 歷史
- **預防：** 長對話後主動清理，避免大量網頁內容塞入 context

---

## 📂 Skills 清單

| Skill | 用途 | 狀態 |
|-------|------|------|
| grid-trader | 網格交易 | ✅ 運行中 |
| pal | 投資監控 | ✅ 已安裝 |
| ontology | 知識圖譜 | ✅ 已安裝 |
| agent-memoria | 持久記憶 | ✅ 已安裝 |
| gog | Google Workspace | ✅ 已安裝 |
| yahoo-finance | 股票查詢 | ✅ 已安裝 |

---

## 🎯 當前焦點

1. 網格交易紙上測試（fetch-ai + pepe + shiba-inu + lido-dao + algorand + conflux-network + sonic-3 + dego-finance + centrifuge + gravity-by-galxe + enjincoin + hedera-hashgraph + dogwifcoin + stellar + kaspa + siren-2 + fartcoin + build-on）
2. 績效：$-2.48 (-0.50%)
3. 交易次數：101

---

---

## 🛠️ 2026-03-24 Systemd 服務整合

**問題：** Gateway 不斷重啟（累計 700+ 次），CPU 使用異常

**根本原因：**
- OpenClaw 有兩套 systemd 服務衝突：
  - 用戶級：`~/.config/systemd/user/openclaw-gateway.service`（官方安裝）
  - 系統級：`/etc/systemd/system/openclaw.service`（手動創建）
- 系統級服務不斷嘗試啟動但 port 被佔用 → 失敗 → 重啟 → 循環

**解決方案：**
- 刪除系統級服務 `/etc/systemd/system/openclaw.service`
- 繼續使用用戶級服務（官方推薦方式）

**用戶級服務優點：**
- `Restart=always` → 當機自動重啟
- `enabled` → 開機啟動
- 不需要 sudo 權限

**管理指令：**
```bash
systemctl --user status openclaw-gateway
systemctl --user restart openclaw-gateway
journalctl --user -u openclaw-gateway
```

_最後更新：2026-03-24 21:05_

---

## 🚨 2026-03-24 Gateway 大當機事件

**問題：** 下午 ~18:00 到 ~21:00，Gateway 反覆崩潰、無回應

### 根本原因鏈

| 問題 | 說明 |
|------|------|
| 不存在的模型 | `qwen3-30b-a3b-thinking-2507` 在配置中但百煉不支持 |
| 本地模型 timeout | 模型未預載，CPU 推理載入需數分鐘，OpenClaw 60s timeout 先到 |
| Telegram Polling stall | 118 秒無回應 → Gateway 被迫重啟 |
| Compacting context 卡死 | Context 壓縮時遇到上述問題 → 完全卡住 |

### 已修復

| 修復項目 | 狀態 |
|----------|------|
| 移除 `qwen3-30b-a3b-thinking-2507` | ✅ |
| 建立 `llama3.1:8b-opt` (16K ctx) | ✅ |
| 建立 `llama3.2:3b-opt` (16K ctx) | ✅ |
| `OLLAMA_KEEP_ALIVE=24h` | ✅ |
| `OLLAMA_MAX_LOADED_MODELS=2` | ✅ |
| `OLLAMA_CONTEXT_LENGTH=16384` | ✅ |
| Cron job: Ollama 預載 (每天 06:00) | ✅ |

### 本地模型配置

**Ollama systemd override:** `/etc/systemd/system/ollama.service.d/override.conf`
```
[Service]
Environment="OLLAMA_MAX_LOADED_MODELS=2"
Environment="OLLAMA_NUM_PARALLEL=1"
Environment="OLLAMA_CONTEXT_LENGTH=16384"
Environment="OLLAMA_KEEP_ALIVE=24h"
CPUQuota=300%
```

**手動預載指令：**
```bash
curl -s http://localhost:11434/api/generate -d '{"model": "llama3.2:3b-opt", "keep_alive": "24h"}'
curl -s http://localhost:11434/api/generate -d '{"model": "llama3.1:8b-opt", "keep_alive": "24h"}'
```

### Cron Jobs（2026-03-24 重建）

| 名稱 | 排程 |
|------|------|
| Social Monitor 新聞統整 | 每小時 :05 |
| DAR 價格監控 | 09:00, 12:00, 18:00, 21:00 |
| Freqtrade 報告 | 08:00, 12:00, 18:00, 21:00 |
| Oraclaw系統報告 | 08:00, 13:00, 19:00, 21:00 |
| 全面風險監控 - RSS | 每 4 小時 |
| Ollama 預載模型 | 每天 06:00 |
| Gemini OAuth 提醒 | 2026-04-01 |
| OpenRouter 提醒 | 2026-04-08 |

### 教訓

1. **不要配置不存在的模型** → 會導致 cron job 失敗 → Gateway 不穩定
2. **本地模型必須預載** → 否則 CPU 推理載入太慢 → timeout
3. **用戶級 systemd 服務** → `systemctl --user` 管理正確
4. **重要修復要寫入 MEMORY.md** → 不然 session 重啟就忘記

---

## 🏢 2026-03-26 OpenClaw Office 安裝

**變更：** 安裝官方 OpenClaw Office 作為 Agent 可視化儀表板

### 功能特點

| 功能 | 說明 |
|------|------|
| **自動派工** | 根據任務類型自動分配 Agent |
| **任務佇列** | 可視化待辦、進行中、已完成 |
| **狀態同步** | 與 Gateway WebSocket 連接 |
| **動畫展示** | 像素風格 + 即時狀態變化 |
| **活動熱圖** | Agent 活動時間分佈 |
| **成本追蹤** | Token 使用量與成本分析 |
| **網絡圖** | Agent 之間的協作關係 |

### 部署資訊

| 項目 | 值 |
|------|-----|
| 路徑 | `~/.openclaw/workspace/skills/openclaw-office/` |
| 服務 | `openclaw-office.service` (用戶級) |
| Port | 8766 |
| 網址 | https://rene.skin |
| 技術棧 | Vite + React + TypeScript |

### 管理指令

```bash
systemctl --user status openclaw-office
systemctl --user restart openclaw-office
journalctl --user -u openclaw-office
```

### 已移除的舊方案

- pixel-office (自製版) - 已刪除
- Star-Office-UI - 已刪除

_最後更新：2026-03-26 09:27_

---

## 🎮 2026-03-26 Agent Office 像素辦公室

**新功能：** 精細像素風格 AI Agent 視覺化辦公室

### 功能特點

| 功能 | 說明 |
|------|------|
| **像素辦公室** | 地板、牆壁、辦公桌、電腦、植物裝飾 |
| **Agent 角色** | 4 種造型，根據狀態移動、工作、思考 |
| **終端 Log** | 即時顯示 Agent 活動，打字機風格 |
| **熱力圖** | 24 小時活動分佈視覺化 |
| **Agent 列表** | 即時狀態監控 |

### 部署資訊

| 項目 | 值 |
|------|-----|
| 路徑 | `~/.openclaw/workspace/skills/agent-office/` |
| 服務 | `agent-office.service` (用戶級) |
| Port | 8788 |
| 公開網址 | https://rene.skin |

### 安全性

- **公開展示：** 辦公室視覺化、終端 Log、熱力圖
- **需認證：** ⚙️ 設定面板（密碼：`shrimp2026`）
- 設定面板用於連線 Gateway WebSocket

### 角色配置（10 人）

| 角色 | 名稱 | 顏色 |
|------|------|------|
| **主管** | 經理 | 金色 |
| 工作人員 1 | 蝦蝦君 | 青色 |
| 工作人員 2 | 網格交易 | 綠色 |
| 工作人員 3 | 新聞監控 | 紫色 |
| 工作人員 4 | 風險控管 | 粉色 |
| 工作人員 5 | 排程服務 | 橘色 |
| 工作人員 6 | 資料分析 | 淺藍 |
| 工作人員 7 | 記憶存檔 | 淺綠 |
| 工作人員 8 | 通知服務 | 淺粉 |
| 工作人員 9 | 清理服務 | 黃綠 |

_最後更新：2026-03-26 11:00_

### 管理指令

```bash
systemctl --user status agent-office
systemctl --user restart agent-office
journalctl --user -u agent-office
```

_最後更新：2026-03-26 10:35_