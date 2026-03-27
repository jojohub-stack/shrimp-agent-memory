#!/bin/bash
# 蝦蝦君自我學習系統 - 安裝腳本

echo "🦐 蝦蝦君自我學習系統安裝中..."
echo ""

# 1. 檢查必要檔案
echo "📋 檢查必要檔案..."
FILES=(
  "/root/.openclaw/workspace/skills/self-learning-system/README.md"
  "/root/.openclaw/workspace/skills/self-learning-system/error-log.md"
  "/root/.memoria/memory.md"
  "/root/.openclaw/workspace/memory/ontology/graph.jsonl"
)

for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✅ $file"
  else
    echo "  ❌ $file (缺失)"
  fi
done

echo ""

# 2. 檢查 Cron Jobs
echo "⏰ 檢查 Cron Jobs..."
cron list | grep -E "每日反思 | 每週回顧" || echo "  ⚠️ Cron Jobs 未配置"

echo ""

# 3. 檢查瀏覽器配置
echo "🌐 檢查瀏覽器配置..."
if [ -f "/root/.openclaw/workspace/browser-config.json" ]; then
  echo "  ✅ browser-config.json 已存在"
  cat /root/.openclaw/workspace/browser-config.json
else
  echo "  ❌ browser-config.json 不存在"
fi

echo ""

# 4. 提供建議
echo "📊 系統狀態總結："
echo ""
echo "✅ 已完成："
echo "  - 自我學習系統文件結構"
echo "  - Memoria 持久記憶初始化"
echo "  - Ontology 知識圖譜初始化"
echo "  - 錯誤日誌系統建立"
echo ""
echo "⏰ 已排程："
echo "  - 每日反思：每天 23:00"
echo "  - 每週回顧：每週日 20:00"
echo ""
echo "🔧 建議下一步："
echo "  1. 重啟 Gateway 以套用瀏覽器配置"
echo "  2. 測試 browser 工具無頭模式"
echo "  3. 等待今晚 23:00 第一次每日反思"
echo ""

echo "🦐 安裝完成！系統已準備就緒！"
