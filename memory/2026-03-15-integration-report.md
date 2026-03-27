# 2026-03-15 系統整合報告

## 今日安裝功能總覽

### 1. agent-browser ✅
**位置：** 全域安裝
**功能：** AI 驅動的瀏覽器自動化工具
**特點：**
- Vercel Labs 官方開源專案（21K stars）
- 內建安全機制（Auth Vault, Domain Allowlist）
- 使用本地 Chromium（ARM64）

**使用方式：**
```bash
agent-browser --executable-path /usr/bin/chromium-browser open https://example.com
agent-browser snapshot -i
agent-browser screenshot
agent-browser close
```

---

### 2. P.A.L. (Proactive Agent Library) ✅
**位置：** `/root/.openclaw/workspace/skills/pal/`
**功能：** 主動式 AI Agent 工具包

**已配置：**
- API：百煉（Bailian）
- 模型：glm-5
- CPU 限制：2 核心

**自建插件：**
| 插件 | 功能 |
|------|------|
| CryptoPlugin | 追蹤多種加密貨幣 |
| BitcoinPlugin | 比特幣專用 |
| EthereumPlugin | 以太坊專用 |
| DTokenPlugin | D 幣（DAR）專用 |

**重要檔案：**
- `rene_invest_agent.py` - Rene 的投資監控代理
- `config.py` - 配置檔（CPU 核心限制）
- `prompts/default.yaml` - 守則設定

**執行方式：**
```bash
cd /root/.openclaw/workspace/skills/pal
python3 rene_invest_agent.py
```

---

### 3. OpenSky Flight Tracker ✅
**位置：** `/root/.openclaw/workspace/skills/opensky-flight/`
**功能：** 免費航班追蹤（無需 API Key）

**使用方式：**
```bash
python3 /root/.openclaw/workspace/skills/opensky-flight/scripts/track_flight.py <航班號>
python3 /root/.openclaw/workspace/skills/opensky-flight/scripts/track_flight.py --taiwan
```

**支援：**
- 查詢特定航班
- 查詢台灣附近航班
- 即時位置、高度、速度

---

### 4. ai-agent-helper-moss ✅
**位置：** `/root/.openclaw/workspace/skills/ai-agent-helper-moss/`
**功能：** AI Agent 設定優化助手（文檔型）

**內容：**
- Prompt Engineering 指南
- Task Decomposition 方法
- Agent Loop 設計（ReAct / Chain-of-Thought）
- Tool Selection 最佳化

---

### 5. ai-agent-opsec ✅
**位置：** `/root/.openclaw/workspace/skills/ai-agent-opsec/`
**功能：** 敏感詞替換、防止資料外洩

**配置檔案：**
- 敏感詞清單：`/root/.openclaw/workspace/classified/classified-terms.md`
- 審計日誌：`/root/.openclaw/workspace/memory/security/`

**使用方式：**
```javascript
const enforcer = require('/root/.openclaw/workspace/skills/ai-agent-opsec/src/ClassifiedAccessEnforcer');
const guard = new enforcer('/root/.openclaw/workspace');
const { safe, sanitized } = guard.sanitizeOutbound(text, 'web_search');
```

**CLI：**
```bash
cd /root/.openclaw/workspace/skills/ai-agent-opsec
node src/ClassifiedAccessEnforcer.js test
```

---

### 6. agent-security ✅
**位置：** `/root/.openclaw/workspace/skills/agent-security/`
**功能：** 日常安全掃描

**檢查項目：**
- Secret Scan：掃描洩漏憑證
- File Permission Audit：檔案權限檢查
- API Key Rotation Check：憑證年齡檢查
- Workspace Exposure：Git 暴露檢查
- Network Security：網路連線檢查

---

## Cron 任務更新

### 新增任務
| 任務 | 排程 | 功能 |
|------|------|------|
| 每日投資報告 | 08:00 | 加密貨幣 + 台股價格 |

### 現有任務（共 7 個）
1. 每日系統報告（08:00, 11:00, 14:00, 18:00, 21:00）
2. 每日投資報告（08:00）← 新增
3. ETF + 加密貨幣（週一三五 09:00）
4. DAR 追蹤（每 3 日）
5. ETH 追蹤（每 3 日）
6. APE 追蹤（每 3 日）
7. OpenRouter 提醒（4/08 一次性）

---

## Gmail 發送功能

**位置：** `/root/.openclaw/workspace/scripts/gmail_send.py`
**Token：** `/root/.gmail_token.json`

**使用方式：**
```bash
python3 /root/.openclaw/workspace/scripts/gmail_send.py "收件人" "主旨" "內容"
```

---

## 股票代碼對照表

**位置：** `/root/.openclaw/workspace/stock_codes.md`

| 代號 | 股票名稱 |
|------|----------|
| 2330 | 台積電 |
| 009816 | 凱基台灣TOP50 |
| 00993A | 安聯台灣主動式ETF |
| 1519 | 華城 |
| 4979 | 華星光 (OTC) |

---

## 模型配置

**Primary：** `bailian/glm-5`
**Fallbacks：**
1. `github/gpt-4o-mini`
2. `bailian/MiniMax-M2.5`
3. `ollama/llama3.2:3b`（本地）

---

## P.A.L. 守則

**位置：** `/root/.openclaw/workspace/skills/pal/prompts/default.yaml`

**核心規則：**
- 最多 5 次迭代
- 適時回報進度
- 資源安全優先

**主動關注：**
- 加密貨幣漲跌 > 3%
- NMN、益生菌、魚油研究
- 嘉義縣市活動
- API Key 請求次數、Token 用量

---

## 系統狀態

| 項目 | 數值 |
|------|------|
| OpenClaw | 2026.3.13 |
| 記憶體 | 3.1GB / 24GB |
| 磁碟 | 37GB / 96GB |
| CPU | 4 核心（限制 P.A.L. 2 核心）|
| Docker | n8n 運行中 |
| Ollama | llama3.2:3b |

---

## 檔案結構

```
/root/.openclaw/workspace/
├── skills/
│   ├── pal/                      # P.A.L. 主動式代理
│   │   ├── rene_invest_agent.py  # 投資監控代理
│   │   ├── config.py             # 配置
│   │   └── plugins/crypto/       # 加密貨幣插件
│   ├── opensky-flight/           # 航班追蹤
│   ├── ai-agent-helper-moss/     # Agent 設定助手
│   ├── ai-agent-opsec/           # 敏感詞保護
│   └── agent-security/           # 安全掃描
├── scripts/
│   └── gmail_send.py             # Gmail 發送
├── classified/
│   └── classified-terms.md       # 敏感詞清單
├── memory/
│   └── security/                 # 審計日誌
└── stock_codes.md                # 股票代碼對照
```

---

生成時間：2026-03-15 02:10