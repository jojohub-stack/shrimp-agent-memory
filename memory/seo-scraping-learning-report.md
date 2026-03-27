# 📚 SEO 與網路爬蟲技能學習報告

## 學習時間：自動學習
## 報告日期：2026/03/15

---

# 第一部分：SEO（搜尋引擎優化）

---

## 一、SEO 核心概念

### 1.1 什麼是 SEO？

**SEO（Search Engine Optimization）** 是透過優化網站內容和技術，提高網站在搜尋引擎自然搜尋結果排名的技術。

**核心目標：**
- 提高網站可見度
- 增加自然流量
- 提升品牌曝光
- 改善用戶體驗

### 1.2 SEO 三大支柱

| 支柱 | 說明 | 重點 |
|------|------|------|
| **技術 SEO** | 網站技術基礎 | 速度、行動裝置、結構化資料 |
| **On-Page SEO** | 頁面優化 | 內容、關鍵字、HTML 標籤 |
| **Off-Page SEO** | 站外優化 | 反向連結、社交訊號、品牌提及 |

---

## 二、技術 SEO

### 2.1 網站速度

**重要性：** 頁面載入時間直接影響排名和用戶體驗

**優化方式：**

| 方法 | 說明 |
|------|------|
| 圖片壓縮 | WebP 格式、lazy loading |
| CDN | 內容傳遞網路 |
| 快取 | 瀏覽器快取、伺服器快取 |
| 程式碼壓縮 | CSS/JS minification |
| 伺服器回應時間 | < 200ms |

**工具：**
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

### 2.2 行動裝置優化

**Google Mobile-First Indexing：** Google 優先索引行動版內容

**檢查項目：**
- 響應式設計
- 觸控友善
- 字體大小（> 16px）
- 按鈕大小
- 無水平捲動

### 2.3 網站架構

**URL 結構：**
```
✅ https://example.com/category/product-name
❌ https://example.com/p?id=123&cat=5
```

**Sitemap：**
- XML Sitemap（給搜尋引擎）
- HTML Sitemap（給用戶）

**Robots.txt：**
```
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://example.com/sitemap.xml
```

### 2.4 結構化資料（Schema Markup）

**常見類型：**

| Schema 類型 | 用途 |
|-------------|------|
| Article | 文章 |
| Product | 產品 |
| LocalBusiness | 本地商家 |
| FAQ | 常見問題 |
| BreadcrumbList | 麵包屑導航 |

**格式：**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "文章標題",
  "author": {
    "@type": "Person",
    "name": "作者名稱"
  },
  "datePublished": "2026-03-15"
}
```

---

## 三、On-Page SEO

### 3.1 關鍵字研究

**關鍵字類型：**

| 類型 | 特點 | 範例 |
|------|------|------|
| **短尾關鍵字** | 搜尋量大、競爭高 | "SEO" |
| **長尾關鍵字** | 搜尋量小、轉換高 | "SEO 優化教學 2026" |
| **商業意圖** | 有購買意圖 | "SEO 工具推薦" |
| **資訊意圖** | 尋找資訊 | "什麼是 SEO" |

**關鍵字工具：**
- Google Keyword Planner
- Ahrefs Keywords Explorer
- SEMrush
- Ubersuggest
- Google Trends

### 3.2 內容優化

**標題標籤（Title Tag）：**
```html
<title>主要關鍵字 | 品牌名稱</title>
```
- 長度：50-60 字元
- 包含主要關鍵字
- 每頁唯一

**Meta Description：**
```html
<meta name="description" content="描述內容，包含關鍵字，吸引點擊">
```
- 長度：150-160 字元
- 包含關鍵字
- 吸引點擊

**標題結構（H1-H6）：**
```html
<h1>頁面主標題（唯一）</h1>
<h2>章節標題</h2>
<h3>子章節</h3>
```

**內容品質：**
- 原創性
- 深度與廣度
- 易讀性
- 多媒體（圖片、影片）
- 定期更新

### 3.3 內部連結

**目的：**
- 分配頁面權重
- 幫助搜尋引擎爬取
- 提升用戶體驗

**最佳實踐：**
- 使用描述性錨文字
- 連結相關內容
- 避免過度連結
- 建立內容集群（Content Hub）

### 3.4 圖片優化

**檔名：** `keyword-rich-filename.jpg`
**Alt 文字：** `alt="描述圖片的關鍵字"`
**檔案大小：** < 100KB
**格式：** WebP、AVIF

---

## 四、Off-Page SEO

### 4.1 反向連結（Backlinks）

**定義：** 其他網站連結到你的網站

**品質指標：**

| 指標 | 說明 |
|------|------|
| **Domain Authority** | 網域權重（0-100） |
| **Page Authority** | 頁面權重 |
| **連結相關性** | 來源網站主題相關 |
| **連結類型** | Dofollow vs Nofollow |
| **錨文字** | 連結文字 |

**獲取方式：**
- 內容行銷
- 客座文章
- 公關活動
- 資源頁面連結
- 品牌提及轉換

### 4.2 連結建立策略

**白帽策略：**

| 策略 | 說明 |
|------|------|
| 內容行銷 | 創造優質內容吸引連結 |
| 破損連結建立 | 找到失效連結並提供替代 |
| 客座文章 | 在相關網站發表文章 |
| 資源頁面 | 提交到資源清單 |
| 採訪/報導 | 成為新聞來源 |

**避免：**
- 購買連結
- 連結農場
- 過度優化錨文字
- Private Blog Networks (PBN)

### 4.3 社交訊號

**影響：** 間接影響排名
- 增加曝光
- 帶來流量
- 提高品牌認知

---

## 五、SEO 工具

### 5.1 分析工具

| 工具 | 用途 |
|------|------|
| **Google Search Console** | 搜尋效能、索引狀態 |
| **Google Analytics** | 流量分析 |
| **Ahrefs** | 連結分析、關鍵字研究 |
| **SEMrush** | 競爭分析 |
| **Screaming Frog** | 技術 SEO 稽核 |
| **Moz** | Domain Authority |

### 5.2 競爭分析

**分析項目：**
- 關鍵字排名
- 反向連結來源
- 內容策略
- 技術 SEO

---

## 六、本地 SEO

### 6.1 Google 商家檔案

**優化項目：**
- 商家名稱
- 地址
- 電話
- 營業時間
- 類別
- 照片
- 評論

### 6.2 本地關鍵字

```
"SEO 服務 台北"
"餐廳 台中 推薦"
```

### 6.3 NAP 一致性

- Name（商家名稱）
- Address（地址）
- Phone（電話）

保持所有平台一致！

---

## 七、SEO 檢查清單

### 技術 SEO
- [ ] 網站速度 < 3 秒
- [ ] HTTPS
- [ ] 行動裝置友善
- [ ] XML Sitemap
- [ ] Robots.txt
- [ ] 結構化資料
- [ ] 無 404 錯誤
- [ ] Canonical 標籤

### On-Page SEO
- [ ] 標題標籤（50-60字元）
- [ ] Meta Description（150-160字元）
- [ ] H1 標籤
- [ ] 關鍵字在首段
- [ ] 圖片 alt 文字
- [ ] 內部連結
- [ ] URL 結構

### Off-Page SEO
- [ ] 反向連結品質
- [ ] 社交媒體存在
- [ ] 品牌提及
- [ ] Google 商家檔案

---

# 第二部分：網路爬蟲（Web Scraping）

---

## 一、爬蟲基礎

### 1.1 什麼是網路爬蟲？

**網路爬蟲** 是自動化程式，用於從網站提取數據。

**應用場景：**
- 數據收集
- 價格監控
- 新聞聚合
- 競爭分析
- SEO 分析

### 1.2 法律與道德

**注意事項：**
- 遵守 robots.txt
- 尊重服務條款
- 控制請求頻率
- 不抓取個人資料
- 不用於商業用途（未經授權）

---

## 二、Python 爬蟲工具

### 2.1 Requests + BeautifulSoup

**適合：** 靜態網頁

```python
import requests
from bs4 import BeautifulSoup

# 發送請求
headers = {'User-Agent': 'Mozilla/5.0'}
response = requests.get(url, headers=headers)

# 解析 HTML
soup = BeautifulSoup(response.text, 'html.parser')

# 提取數據
titles = soup.find_all('h2', class_='title')
for title in titles:
    print(title.text)
```

### 2.2 Selenium

**適合：** 動態網頁、需要互動

```python
from selenium import webdriver
from selenium.webdriver.common.by import By

# 啟動瀏覽器
driver = webdriver.Chrome()
driver.get(url)

# 等待元素
driver.implicitly_wait(10)

# 提取數據
element = driver.find_element(By.CLASS_NAME, 'title')
print(element.text)

# 關閉
driver.quit()
```

### 2.3 Playwright

**適合：** 高效能、跨瀏覽器

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto(url)
    
    # 提取數據
    title = page.locator('h1').text_content()
    print(title)
    
    browser.close()
```

### 2.4 Scrapy

**適合：** 大規模爬蟲

```python
import scrapy

class MySpider(scrapy.Spider):
    name = 'myspider'
    start_urls = ['https://example.com']
    
    def parse(self, response):
        for title in response.css('h2.title'):
            yield {'title': title.css('::text').get()}
```

---

## 三、工具比較

| 工具 | 優點 | 缺點 | 適用場景 |
|------|------|------|----------|
| **Requests + BS4** | 快速、輕量 | 不支援 JS | 靜態網頁 |
| **Selenium** | 支援 JS、可互動 | 較慢 | 動態網頁 |
| **Playwright** | 快速、現代 | 需學習 | 複雜動態網頁 |
| **Scrapy** | 高效能、可擴展 | 較複雜 | 大規模爬蟲 |

---

## 四、反爬蟲對策

### 4.1 常見反爬蟲機制

| 機制 | 說明 |
|------|------|
| **User-Agent 檢測** | 識別非瀏覽器請求 |
| **IP 限制** | 封鎖頻繁請求 |
| **驗證碼** | 阻止自動化 |
| **JavaScript 渲染** | 隱藏數據 |
| **登入要求** | 需要認證 |

### 4.2 繞過方法

**設定 Headers：**
```python
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept': 'text/html,application/xhtml+xml',
    'Accept-Language': 'zh-TW,zh;q=0.9',
    'Referer': 'https://www.google.com/'
}
```

**使用代理：**
```python
proxies = {
    'http': 'http://proxy:port',
    'https': 'https://proxy:port'
}
response = requests.get(url, proxies=proxies)
```

**延遲請求：**
```python
import time
time.sleep(2)  # 每次請求間隔 2 秒
```

**Session 管理：**
```python
session = requests.Session()
session.headers.update(headers)
response = session.get(url)
```

---

## 五、實戰技巧

### 5.1 解析 JSON API

許多網站使用 API 加載數據：

```python
import requests

api_url = "https://example.com/api/data"
response = requests.get(api_url)
data = response.json()

for item in data['items']:
    print(item['name'], item['price'])
```

### 5.2 處理分頁

```python
import requests

base_url = "https://example.com/products?page={}"
for page in range(1, 11):
    url = base_url.format(page)
    response = requests.get(url)
    # 處理數據...
```

### 5.3 保存數據

**JSON：**
```python
import json
with open('data.json', 'w') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
```

**CSV：**
```python
import csv
with open('data.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['name', 'price'])
    for item in data:
        writer.writerow([item['name'], item['price']])
```

---

## 六、agent-browser 整合

**我們已有的工具：** agent-browser + Playwright

```bash
# 開啟網頁
agent-browser --executable-path /path/to/chrome open "https://example.com"

# 滾動載入
agent-browser scroll down 500

# 取得快照
agent-browser snapshot -i

# 關閉
agent-browser close
```

---

## 七、最佳實踐

### 7.1 禮貌爬蟲

| 原則 | 說明 |
|------|------|
| **遵守 robots.txt** | 檢查允許的頁面 |
| **控制頻率** | 避免造成負擔 |
| **識別身分** | 設定聯繫方式 |
| **離峰時段** | 夜間執行 |
| **增量更新** | 只抓取新增數據 |

### 7.2 數據處理

| 步驟 | 說明 |
|------|------|
| 清理 | 移除空白、特殊字元 |
| 驗證 | 檢查數據正確性 |
| 去重 | 避免重複數據 |
| 儲存 | 選擇合適格式 |

---

## 八、實用工具清單

### Python 套件

| 套件 | 用途 |
|------|------|
| `requests` | HTTP 請求 |
| `beautifulsoup4` | HTML 解析 |
| `lxml` | XML/HTML 解析 |
| `selenium` | 瀏覽器自動化 |
| `playwright` | 現代瀏覽器自動化 |
| `scrapy` | 爬蟲框架 |
| `pandas` | 數據處理 |
| `fake-useragent` | 隨機 User-Agent |

---

## 九、學習總結

### SEO 核心要點

1. **技術 SEO** 是基礎
2. **內容為王**，品質最重要
3. **連結** 是排名關鍵
4. **持續優化**，SEO 是長期工作

### 爬蟲核心要點

1. **遵守法律與道德**
2. **選擇合適工具**
3. **處理反爬蟲機制**
4. **禮貌爬取**

---

**免責聲明：** 本報告僅供學習參考，請合法使用相關技術。

---

**報告完成時間：** 2026/03/15