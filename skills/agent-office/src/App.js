// Agent Office - Space Theme
// 天體主題辦公室

const AGENTS = [
  { id: 1, name: '蝦蝦君', color: '#00CED1', x: 10, y: 20 },
  { id: 2, name: '網格交易', color: '#32CD32', x: 20, y: 30 },
  { id: 3, name: '新聞監控', color: '#9370DB', x: 30, y: 25 },
  { id: 4, name: '風險控管', color: '#FF69B4', x: 40, y: 35 },
  { id: 5, name: '排程服務', color: '#FFA500', x: 50, y: 40 },
  { id: 6, name: '資料分析', color: '#87CEEB', x: 60, y: 30 },
  { id: 7, name: '記憶存檔', color: '#90EE90', x: 70, y: 45 },
  { id: 8, name: '通知服務', color: '#FFB6C1', x: 80, y: 35 },
  { id: 9, name: '清理服務', color: '#9ACD32', x: 15, y: 50 },
  { id: 10, name: '經理', color: '#FFD700', x: 85, y: 20 },
  { id: 11, name: '助手', color: '#DDA0DD', x: 50, y: 60 },
];

function createPixelCharacter(color, name) {
  const left = Math.random() * 80 + 10;
  const top = Math.random() * 60 + 20;
  
  return `
    <div class="pixel-character agent-fly" style="left: ${left}%; top: ${top}%;">
      <svg viewBox="0 0 32 32" style="width: 30px !important; height: 30px !important;" shape-rendering="crispEdges">
        <!-- 身體 -->
        <rect x="10" y="10" width="12" height="14" fill="${color}" shape-rendering="crispEdges"/>
        <!-- 頭部 -->
        <rect x="11" y="6" width="10" height="8" fill="${color}" shape-rendering="crispEdges"/>
        <!-- 左腿 -->
        <rect x="11" y="24" width="4" height="5" fill="${color}" shape-rendering="crispEdges"/>
        <!-- 右腿 -->
        <rect x="17" y="24" width="4" height="5" fill="${color}" shape-rendering="crispEdges"/>
        <!-- 左眼白 -->
        <rect x="13" y="8" width="2" height="2" fill="white" shape-rendering="crispEdges"/>
        <!-- 右眼白 -->
        <rect x="17" y="8" width="2" height="2" fill="white" shape-rendering="crispEdges"/>
        <!-- 左瞳孔 -->
        <rect x="14" y="9" width="1" height="1" fill="black" shape-rendering="crispEdges"/>
        <!-- 右瞳孔 -->
        <rect x="18" y="9" width="1" height="1" fill="black" shape-rendering="crispEdges"/>
        <!-- 嘴巴 -->
        <rect x="14" y="12" width="4" height="1" fill="#FFB6C1" shape-rendering="crispEdges"/>
      </svg>
      <div class="agent-label">${name}</div>
    </div>
  `;
}

function createStars() {
  let stars = '';
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 2 + 1;
    const delay = Math.random() * 2;
    stars += `<div class="star" style="left: ${x}%; top: ${y}%; width: ${size}px; height: ${size}px; animation-delay: ${delay}s;"></div>`;
  }
  return stars;
}

function init() {
  const app = document.getElementById('app');
  if (!app) return;
  
  app.innerHTML = `
    <!-- 星星背景 -->
    <div class="stars">${createStars()}</div>
    
    <!-- 天體 -->
    <div class="celestial-body neptune" title="海王星"></div>
    <div class="celestial-body jupiter" title="木星"></div>
    <div class="celestial-body callisto" title="木衛四"></div>
    <div class="celestial-body saturn">
      <div class="saturn-ring"></div>
    </div>
    
    <!-- 太空船 -->
    <div class="spaceship">🚀</div>
    <div class="ufo">🛸</div>
    
    <!-- Agent 角色 -->
    ${AGENTS.map(agent => createPixelCharacter(agent.color, agent.name)).join('')}
  `;
  
  console.log('🚀 Agent Office initialized');
}

// 初始化
init();
