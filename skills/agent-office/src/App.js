// Agent Office - Star Wars Theme
// 星際大戰主題辦公室

const AGENTS = [
  { id: 1, name: '絕地武士', type: 'jedi', color: '#00CED1', x: 10, y: 20 },
  { id: 2, name: '西斯大帝', type: 'sith', color: '#DC143C', x: 20, y: 30 },
  { id: 3, name: '風暴兵', type: 'stormtrooper', color: '#F5F5F5', x: 30, y: 25 },
  { id: 4, name: '尤達', type: 'yoda', color: '#90EE90', x: 40, y: 35 },
  { id: 5, name: '達斯維達', type: 'vader', color: '#2F2F2F', x: 50, y: 40 },
  { id: 6, name: 'R2-D2', type: 'r2d2', color: '#4169E1', x: 60, y: 30 },
  { id: 7, name: 'C-3PO', type: 'c3po', color: '#FFD700', x: 70, y: 45 },
  { id: 8, name: '丘巴卡', type: 'chewie', color: '#8B4513', x: 80, y: 35 },
  { id: 9, name: '莉亞公主', type: 'leia', color: '#FFB6C1', x: 15, y: 50 },
  { id: 10, name: '韓索羅', type: 'han', color: '#696969', x: 85, y: 20 },
  { id: 11, name: '歐比王', type: 'obiwan', color: '#8B4513', x: 50, y: 60 },
];

function createStarWarsCharacter(agent) {
  const left = Math.random() * 80 + 10;
  const top = Math.random() * 60 + 20;
  let svgContent = '';
  
  switch(agent.type) {
    case 'jedi': // 絕地武士 - 綠色光劍
      svgContent = `
        <rect x="11" y="6" width="10" height="8" fill="#F5DEB3" shape-rendering="crispEdges"/>
        <rect x="10" y="14" width="12" height="10" fill="${agent.color}" shape-rendering="crispEdges"/>
        <rect x="11" y="24" width="4" height="5" fill="#8B4513" shape-rendering="crispEdges"/>
        <rect x="17" y="24" width="4" height="5" fill="#8B4513" shape-rendering="crispEdges"/>
        <rect x="23" y="12" width="2" height="14" fill="#00FF00" shape-rendering="crispEdges"/>
        <rect x="13" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>
        <rect x="17" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>`;
      break;
    
    case 'sith': // 西斯 - 紅色光劍
      svgContent = `
        <rect x="11" y="6" width="10" height="8" fill="#F5DEB3" shape-rendering="crispEdges"/>
        <rect x="10" y="14" width="12" height="10" fill="#8B0000" shape-rendering="crispEdges"/>
        <rect x="11" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="17" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="23" y="12" width="2" height="14" fill="#FF0000" shape-rendering="crispEdges"/>
        <rect x="13" y="8" width="2" height="2" fill="#FFD700" shape-rendering="crispEdges"/>
        <rect x="17" y="8" width="2" height="2" fill="#FFD700" shape-rendering="crispEdges"/>`;
      break;
    
    case 'stormtrooper': // 風暴兵 - 白色盔甲
      svgContent = `
        <rect x="11" y="6" width="10" height="8" fill="#F5F5F5" shape-rendering="crispEdges"/>
        <rect x="12" y="7" width="3" height="2" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="17" y="7" width="3" height="2" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="10" y="14" width="12" height="10" fill="#F5F5F5" shape-rendering="crispEdges"/>
        <rect x="11" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="17" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="23" y="12" width="2" height="12" fill="#E0E0E0" shape-rendering="crispEdges"/>`;
      break;
    
    case 'yoda': // 尤達 - 綠色皮膚 + 光劍
      svgContent = `
        <rect x="10" y="5" width="12" height="9" fill="#90EE90" shape-rendering="crispEdges"/>
        <rect x="8" y="7" width="3" height="4" fill="#90EE90" shape-rendering="crispEdges"/>
        <rect x="21" y="7" width="3" height="4" fill="#90EE90" shape-rendering="crispEdges"/>
        <rect x="12" y="14" width="8" height="8" fill="#8B4513" shape-rendering="crispEdges"/>
        <rect x="13" y="22" width="3" height="5" fill="#90EE90" shape-rendering="crispEdges"/>
        <rect x="16" y="22" width="3" height="5" fill="#90EE90" shape-rendering="crispEdges"/>
        <rect x="23" y="10" width="2" height="10" fill="#00FF00" shape-rendering="crispEdges"/>
        <rect x="13" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>
        <rect x="17" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>`;
      break;
    
    case 'vader': // 達斯維達 - 黑色盔甲 + 紅色光劍
      svgContent = `
        <rect x="11" y="6" width="10" height="8" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="12" y="8" width="3" height="2" fill="#FF0000" shape-rendering="crispEdges"/>
        <rect x="17" y="8" width="3" height="2" fill="#FF0000" shape-rendering="crispEdges"/>
        <rect x="10" y="14" width="12" height="10" fill="#1F1F1F" shape-rendering="crispEdges"/>
        <rect x="11" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="17" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="23" y="12" width="2" height="14" fill="#FF0000" shape-rendering="crispEdges"/>`;
      break;
    
    case 'r2d2': // R2-D2 機器人
      svgContent = `
        <rect x="11" y="5" width="10" height="7" fill="#F5F5F5" shape-rendering="crispEdges"/>
        <rect x="13" y="6" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>
        <rect x="17" y="6" width="2" height="2" fill="#FF0000" shape-rendering="crispEdges"/>
        <rect x="12" y="12" width="8" height="10" fill="#4169E1" shape-rendering="crispEdges"/>
        <rect x="13" y="22" width="2" height="5" fill="#4169E1" shape-rendering="crispEdges"/>
        <rect x="17" y="22" width="2" height="5" fill="#4169E1" shape-rendering="crispEdges"/>`;
      break;
    
    case 'c3po': // C-3PO 金色機器人
      svgContent = `
        <rect x="11" y="5" width="10" height="8" fill="#FFD700" shape-rendering="crispEdges"/>
        <rect x="13" y="7" width="2" height="2" fill="#FFD700" shape-rendering="crispEdges"/>
        <rect x="17" y="7" width="2" height="2" fill="#FFD700" shape-rendering="crispEdges"/>
        <rect x="12" y="13" width="8" height="11" fill="#FFD700" shape-rendering="crispEdges"/>
        <rect x="13" y="24" width="3" height="5" fill="#FFD700" shape-rendering="crispEdges"/>
        <rect x="16" y="24" width="3" height="5" fill="#FFD700" shape-rendering="crispEdges"/>`;
      break;
    
    case 'chewie': // 丘巴卡 - 棕色毛髮
      svgContent = `
        <rect x="10" y="5" width="12" height="10" fill="#8B4513" shape-rendering="crispEdges"/>
        <rect x="12" y="7" width="3" height="2" fill="#654321" shape-rendering="crispEdges"/>
        <rect x="17" y="7" width="3" height="2" fill="#654321" shape-rendering="crispEdges"/>
        <rect x="10" y="15" width="12" height="9" fill="#8B4513" shape-rendering="crispEdges"/>
        <rect x="11" y="24" width="4" height="5" fill="#654321" shape-rendering="crispEdges"/>
        <rect x="17" y="24" width="4" height="5" fill="#654321" shape-rendering="crispEdges"/>
        <rect x="23" y="12" width="2" height="12" fill="#8B4513" shape-rendering="crispEdges"/>`;
      break;
    
    case 'leia': // 莉亞公主 - 白色長袍 + 包子頭
      svgContent = `
        <rect x="9" y="6" width="4" height="4" fill="#F5DEB3" shape-rendering="crispEdges"/>
        <rect x="19" y="6" width="4" height="4" fill="#F5DEB3" shape-rendering="crispEdges"/>
        <rect x="11" y="6" width="10" height="8" fill="#F5DEB3" shape-rendering="crispEdges"/>
        <rect x="10" y="14" width="12" height="12" fill="#F5F5F5" shape-rendering="crispEdges"/>
        <rect x="13" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>
        <rect x="17" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>`;
      break;
    
    case 'han': // 韓索羅 - 灰色夾克
      svgContent = `
        <rect x="11" y="6" width="10" height="8" fill="#F5DEB3" shape-rendering="crispEdges"/>
        <rect x="10" y="14" width="12" height="10" fill="#696969" shape-rendering="crispEdges"/>
        <rect x="11" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="17" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="23" y="12" width="2" height="12" fill="#A9A9A9" shape-rendering="crispEdges"/>
        <rect x="13" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>
        <rect x="17" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>`;
      break;
    
    case 'obiwan': // 歐比王 - 棕色長袍
      svgContent = `
        <rect x="11" y="6" width="10" height="8" fill="#F5DEB3" shape-rendering="crispEdges"/>
        <rect x="10" y="14" width="12" height="12" fill="#8B4513" shape-rendering="crispEdges"/>
        <rect x="11" y="26" width="4" height="4" fill="#8B4513" shape-rendering="crispEdges"/>
        <rect x="17" y="26" width="4" height="4" fill="#8B4513" shape-rendering="crispEdges"/>
        <rect x="23" y="12" width="2" height="14" fill="#00CED1" shape-rendering="crispEdges"/>
        <rect x="13" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>
        <rect x="17" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>`;
      break;
  }
  
  return `
    <div class="pixel-character agent-fly" style="left: ${left}%; top: ${top}%;">
      <svg viewBox="0 0 32 32" style="width: 30px !important; height: 30px !important;" shape-rendering="crispEdges">
        ${svgContent}
      </svg>
      <div class="agent-label">${agent.name}</div>
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
    
    <!-- 星際大戰角色 -->
    ${AGENTS.map(agent => createStarWarsCharacter(agent)).join('')}
  `;
  
  console.log('🚀 Agent Office - Star Wars Theme initialized');
}

// 初始化
init();
