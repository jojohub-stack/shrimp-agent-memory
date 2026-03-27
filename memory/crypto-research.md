# 加密貨幣分析研究方向

## 目前功能

| 項目 | 來源 | 狀態 |
|------|------|------|
| 價格 | CoinGecko API | ✅ |
| 24h 變化 | CoinGecko API | ✅ |
| Gas 追蹤 | ethers.js | ✅ |
| 鏈上數據 | web3.py / ethers.js | ✅ |
| 網格交易 | 自建 | ✅ |

---

## 可加入的功能

### 技術分析
| 指標 | 說明 | API |
|------|------|-----|
| MA/EMA | 移動平均線 | 計算 |
| RSI | 相對強弱指數 | 計算 |
| MACD | 趨勢指標 | 計算 |
| 布林通道 | 波動率 | 計算 |
| 成交量 | 交易量分析 | CoinGecko |

### 鏈上分析
| 數據 | 來源 |
|------|------|
| 活躍地址 | Etherscan API |
| 交易量 | Etherscan API |
| TVL | DefiLlama API |
| Gas 費用 | ethers.js |
| 持幣地址 | Etherscan API |

### 市場情緒
| 指標 | API |
|------|-----|
| 恐懼貪婪指數 | Alternative.me API |
| 社交媒體情緒 | Twitter API |
| 鯨魚動向 | Whale Alert API |

### 新聞來源
| 來源 | 類型 |
|------|------|
| CoinDesk | 新聞 |
| CoinTelegraph | 新聞 |
| Decrypt | 新聞 |
| The Block | 新聞 |
| Twitter | 社交 |
| Discord | 社群 |

---

## API 研究

### 免費 API
| API | 用途 | 限制 |
|-----|------|------|
| CoinGecko | 價格、數據 | 10-50 次/分鐘 |
| CoinCap | 價格 | 200 次/分鐘 |
| Alternative.me | 恐懼貪婪 | 無限制 |
| DefiLlama | TVL | 無限制 |
| Etherscan | 鏈上 | 5 次/秒 |

### 需註冊 API
| API | 用途 |
|-----|------|
| CoinMarketCap | 價格 |
| Glassnode | 鏈上分析 |
| Santiment | 社交+鏈上 |
| Dune Analytics | SQL 查詢 |
| Whale Alert | 鯨魚追蹤 |

---

## 實作優先順序

1. **恐懼貪婪指數** - 簡單免費 API
2. **DefiLlama TVL** - DeFi 數據
3. **技術指標計算** - 自己算
4. **Etherscan 鏈上數據** - 需要 API Key
5. **新聞整合** - RSS/API

---

## 研究中

- [ ] 確認 Alternative.me API
- [ ] 確認 DefiLlama API
- [ ] 研究 Etherscan API Key 申請
- [ ] 研究技術指標計算邏輯