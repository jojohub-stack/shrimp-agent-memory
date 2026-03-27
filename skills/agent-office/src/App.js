// Agent Office - Star Wars Theme
// 星際大戰主題辦公室

const AGENTS = [
  { id: 1, name: '絕地武士', type: 'jedi', color: '#00CED1', x: 10, y: 20, vx: 0.075, vy: 0.05 },
  { id: 2, name: '西斯大帝', type: 'sith', color: '#DC143C', x: 20, y: 30, vx: -0.0625, vy: 0.075 },
  { id: 3, name: '風暴兵', type: 'stormtrooper', color: '#F5F5F5', x: 30, y: 25, vx: 0.0875, vy: -0.0625 },
  { id: 4, name: '尤達', type: 'yoda', color: '#90EE90', x: 40, y: 35, vx: -0.05, vy: 0.0875 },
  { id: 5, name: '達斯維達', type: 'vader', color: '#2F2F2F', x: 50, y: 40, vx: 0.0625, vy: -0.075 },
  { id: 6, name: 'R2-D2', type: 'r2d2', color: '#4169E1', x: 60, y: 30, vx: -0.075, vy: 0.0625 },
  { id: 7, name: 'C-3PO', type: 'c3po', color: '#FFD700', x: 70, y: 45, vx: 0.05, vy: -0.05 },
  { id: 8, name: '丘巴卡', type: 'chewie', color: '#8B4513', x: 80, y: 35, vx: -0.0875, vy: 0.075 },
  { id: 9, name: '莉亞公主', type: 'leia', color: '#FFB6C1', x: 15, y: 50, vx: 0.075, vy: -0.0625 },
  { id: 10, name: '韓索羅', type: 'han', color: '#696969', x: 85, y: 20, vx: -0.0625, vy: 0.05 },
  { id: 11, name: '歐比王', type: 'obiwan', color: '#8B4513', x: 50, y: 60, vx: 0.05, vy: -0.075 },
];

// 工作效率數據
const WORK_STATS = {
  tasksCompleted: 127,
  activeTasks: 8,
  efficiency: 94,
  uptime: '23h 45m'
};

// 日誌消息
let logMessages = [
  { time: '下午 07:30', agent: '絕地武士', project: 'Gateway 服務', message: '重啟 Gateway', type: 'info' },
  { time: '下午 07:31', agent: '西斯大帝', project: '安全防護', message: '掃描機密詞', type: 'warning' },
  { time: '下午 07:31', agent: 'R2-D2', project: '網格交易', message: '執行買入訂單', type: 'success' },
  { time: '下午 07:32', agent: '風暴兵', project: 'Cron 排程', message: '執行定時任務', type: 'info' },
  { time: '下午 07:32', agent: '尤達', project: 'GitHub 同步', message: '推送 commits', type: 'success' },
];

function createStarWarsCharacter(agent) {
  let svgContent = '';
  
  switch(agent.type) {
    case 'jedi':
      svgContent = `
        <rect x="11" y="6" width="10" height="8" fill="#F5DEB3" shape-rendering="crispEdges"/>
        <rect x="10" y="14" width="12" height="10" fill="${agent.color}" shape-rendering="crispEdges"/>
        <rect x="11" y="24" width="4" height="5" fill="#8B4513" shape-rendering="crispEdges"/>
        <rect x="17" y="24" width="4" height="5" fill="#8B4513" shape-rendering="crispEdges"/>
        <rect x="23" y="12" width="2" height="14" fill="#00FF00" shape-rendering="crispEdges"/>
        <rect x="13" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>
        <rect x="17" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>`;
      break;
    case 'sith':
      svgContent = `
        <rect x="11" y="6" width="10" height="8" fill="#F5DEB3" shape-rendering="crispEdges"/>
        <rect x="10" y="14" width="12" height="10" fill="#8B0000" shape-rendering="crispEdges"/>
        <rect x="11" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="17" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="23" y="12" width="2" height="14" fill="#FF0000" shape-rendering="crispEdges"/>
        <rect x="13" y="8" width="2" height="2" fill="#FFD700" shape-rendering="crispEdges"/>
        <rect x="17" y="8" width="2" height="2" fill="#FFD700" shape-rendering="crispEdges"/>`;
      break;
    case 'stormtrooper':
      svgContent = `
        <rect x="11" y="6" width="10" height="8" fill="#F5F5F5" shape-rendering="crispEdges"/>
        <rect x="12" y="7" width="3" height="2" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="17" y="7" width="3" height="2" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="10" y="14" width="12" height="10" fill="#F5F5F5" shape-rendering="crispEdges"/>
        <rect x="11" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="17" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="23" y="12" width="2" height="12" fill="#E0E0E0" shape-rendering="crispEdges"/>`;
      break;
    case 'yoda':
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
    case 'vader':
      svgContent = `
        <rect x="11" y="6" width="10" height="8" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="12" y="8" width="3" height="2" fill="#FF0000" shape-rendering="crispEdges"/>
        <rect x="17" y="8" width="3" height="2" fill="#FF0000" shape-rendering="crispEdges"/>
        <rect x="10" y="14" width="12" height="10" fill="#1F1F1F" shape-rendering="crispEdges"/>
        <rect x="11" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="17" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="23" y="12" width="2" height="14" fill="#FF0000" shape-rendering="crispEdges"/>`;
      break;
    case 'r2d2':
      svgContent = `
        <rect x="11" y="5" width="10" height="7" fill="#F5F5F5" shape-rendering="crispEdges"/>
        <rect x="13" y="6" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>
        <rect x="17" y="6" width="2" height="2" fill="#FF0000" shape-rendering="crispEdges"/>
        <rect x="12" y="12" width="8" height="10" fill="#4169E1" shape-rendering="crispEdges"/>
        <rect x="13" y="22" width="2" height="5" fill="#4169E1" shape-rendering="crispEdges"/>
        <rect x="17" y="22" width="2" height="5" fill="#4169E1" shape-rendering="crispEdges"/>`;
      break;
    case 'c3po':
      svgContent = `
        <rect x="11" y="5" width="10" height="8" fill="#FFD700" shape-rendering="crispEdges"/>
        <rect x="13" y="7" width="2" height="2" fill="#FFD700" shape-rendering="crispEdges"/>
        <rect x="17" y="7" width="2" height="2" fill="#FFD700" shape-rendering="crispEdges"/>
        <rect x="12" y="13" width="8" height="11" fill="#FFD700" shape-rendering="crispEdges"/>
        <rect x="13" y="24" width="3" height="5" fill="#FFD700" shape-rendering="crispEdges"/>
        <rect x="16" y="24" width="3" height="5" fill="#FFD700" shape-rendering="crispEdges"/>`;
      break;
    case 'chewie':
      svgContent = `
        <rect x="10" y="5" width="12" height="10" fill="#8B4513" shape-rendering="crispEdges"/>
        <rect x="12" y="7" width="3" height="2" fill="#654321" shape-rendering="crispEdges"/>
        <rect x="17" y="7" width="3" height="2" fill="#654321" shape-rendering="crispEdges"/>
        <rect x="10" y="15" width="12" height="9" fill="#8B4513" shape-rendering="crispEdges"/>
        <rect x="11" y="24" width="4" height="5" fill="#654321" shape-rendering="crispEdges"/>
        <rect x="17" y="24" width="4" height="5" fill="#654321" shape-rendering="crispEdges"/>
        <rect x="23" y="12" width="2" height="12" fill="#8B4513" shape-rendering="crispEdges"/>`;
      break;
    case 'leia':
      svgContent = `
        <rect x="9" y="6" width="4" height="4" fill="#F5DEB3" shape-rendering="crispEdges"/>
        <rect x="19" y="6" width="4" height="4" fill="#F5DEB3" shape-rendering="crispEdges"/>
        <rect x="11" y="6" width="10" height="8" fill="#F5DEB3" shape-rendering="crispEdges"/>
        <rect x="10" y="14" width="12" height="12" fill="#F5F5F5" shape-rendering="crispEdges"/>
        <rect x="13" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>
        <rect x="17" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>`;
      break;
    case 'han':
      svgContent = `
        <rect x="11" y="6" width="10" height="8" fill="#F5DEB3" shape-rendering="crispEdges"/>
        <rect x="10" y="14" width="12" height="10" fill="#696969" shape-rendering="crispEdges"/>
        <rect x="11" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="17" y="24" width="4" height="5" fill="#2F2F2F" shape-rendering="crispEdges"/>
        <rect x="23" y="12" width="2" height="12" fill="#A9A9A9" shape-rendering="crispEdges"/>
        <rect x="13" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>
        <rect x="17" y="8" width="2" height="2" fill="#4169E1" shape-rendering="crispEdges"/>`;
      break;
    case 'obiwan':
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
    <div id="agent-${agent.id}" class="pixel-character" style="left: ${agent.x}%; top: ${agent.y}%; color: ${agent.color};">
      <svg viewBox="0 0 32 32" style="width: 40px !important; height: 40px !important;" shape-rendering="crispEdges">
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

function updateAgentPositions() {
  AGENTS.forEach(agent => {
    agent.x += agent.vx;
    agent.y += agent.vy;
    
    // 邊界檢測
    if (agent.x <= 0 || agent.x >= 90) agent.vx *= -1;
    if (agent.y <= 0 || agent.y >= 85) agent.vy *= -1;
    
    const el = document.getElementById(`agent-${agent.id}`);
    if (el) {
      el.style.left = `${agent.x}%`;
      el.style.top = `${agent.y}%`;
    }
  });
  
  requestAnimationFrame(updateAgentPositions);
}

function addLogMessage(agent, project, message, type = 'info') {
  const now = new Date();
  const hours = now.getHours();
  const period = hours >= 12 ? '下午' : '上午';
  const displayHours = hours % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const time = `${period}${String(displayHours).padStart(2, '0')}:${minutes}`;
  
  logMessages.unshift({ time, agent, project, message, type });
  if (logMessages.length > 20) logMessages.pop();
  renderLogs();
}

function renderLogs() {
  const logContainer = document.getElementById('log-container');
  if (!logContainer) return;
  
  const projectColors = {
    'Gateway 服務': '#FF6B6B',
    'Cron 排程': '#4ECDC4',
    '瀏覽器自動化': '#45B7D1',
    '記憶系統': '#96CEB4',
    '技能管理': '#FFEAA7',
    'Notion 整合': '#DDA0DD',
    '網格交易': '#98D8C8',
    'GitHub 同步': '#F7DC6F',
    '系統監控': '#BB8FCE',
    '安全防護': '#FF7675'
  };
  
  logContainer.innerHTML = logMessages.map(log => {
    const colors = { info: '#4169E1', warning: '#FFA500', success: '#32CD32', error: '#FF4444' };
    const projectColor = projectColors[log.project] || '#9370DB';
    return `<div class="log-entry">
      <span class="log-time">${log.time}</span>
      <span class="log-agent">${log.agent}</span>
      <span class="log-project" style="color: ${projectColor}">${log.project}</span>
      <span class="log-message" style="color: ${colors[log.type] || '#fff'}">${log.message}</span>
    </div>`;
  }).join('');
}

function renderStats() {
  const statsEl = document.getElementById('work-stats');
  if (!statsEl) return;
  
  statsEl.innerHTML = `
    <h3>⚡ 工作效率</h3>
    <div class="stat-item">
      <span class="stat-label">完成任務</span>
      <span class="stat-value">${WORK_STATS.tasksCompleted}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">進行中</span>
      <span class="stat-value">${WORK_STATS.activeTasks}</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">效率</span>
      <span class="stat-value">${WORK_STATS.efficiency}%</span>
    </div>
    <div class="stat-item">
      <span class="stat-label">運行時間</span>
      <span class="stat-value">${WORK_STATS.uptime}</span>
    </div>
  `;
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
    <div class="celestial-body earth" title="地球"></div>
    
    <!-- 太空船 -->
    <div class="spaceship">🚀</div>
    <div class="ufo">🛸</div>
    
    <!-- 工作效率框 -->
    <div id="work-stats" class="work-stats"></div>
    
    <!-- 日誌窗 -->
    <div id="log-container" class="log-container"></div>
    
    <!-- 星際大戰角色 -->
    ${AGENTS.map(agent => createStarWarsCharacter(agent)).join('')}
  `;
  
  renderStats();
  renderLogs();
  
  // 啟動角色移動
  setTimeout(updateAgentPositions, 1000);
  
  // 模擬日誌更新
  setInterval(() => {
    const agents = ['絕地武士', '西斯大帝', '風暴兵', '尤達', '達斯維達', 'R2-D2', 'C-3PO'];
    const projects = [
      'Gateway 服務', 'Cron 排程', '瀏覽器自動化', '記憶系統', '技能管理',
      'Notion 整合', '網格交易', 'GitHub 同步', '系統監控', '安全防護'
    ];
    const actions = {
      'Gateway 服務': ['重啟 Gateway', '檢查 WebSocket 連線', '更新配置', '清理 session'],
      'Cron 排程': ['執行定時任務', '更新 cron job', '檢查排程狀態', '發送提醒通知'],
      '瀏覽器自動化': ['開啟網頁', '截取螢幕快照', '執行點擊操作', '填寫表單資料'],
      '記憶系統': ['寫入 MEMORY.md', '更新 ontology', '同步 Memoria', '清理舊記憶'],
      '技能管理': ['安裝新 skill', '更新 skill 版本', 'vetting 安全检查', '發布到 ClawHub'],
      'Notion 整合': ['同步資料庫', '建立新頁面', '更新內容', '匯出報表'],
      '網格交易': ['執行買入訂單', '執行賣出訂單', '調整網格區間', '計算未實現損益'],
      'GitHub 同步': ['推送 commits', '建立 PR', '合併分支', '同步 repositories'],
      '系統監控': ['檢查 CPU 使用率', '監控記憶體用量', '檢查磁碟空間', '監控服務狀態'],
      '安全防護': ['掃描機密詞', '檢查 API key', '驗證權限', '更新防火牆規則']
    };
    const types = ['info', 'warning', 'success'];
    const randomAgent = agents[Math.floor(Math.random() * agents.length)];
    const randomProject = projects[Math.floor(Math.random() * projects.length)];
    const randomAction = actions[randomProject][Math.floor(Math.random() * actions[randomProject].length)];
    const randomType = types[Math.floor(Math.random() * types.length)];
    addLogMessage(randomAgent, randomProject, randomAction, randomType);
  }, 5000);
  
  console.log('🚀 Agent Office - Star Wars Theme initialized');
}

// 初始化
init();
