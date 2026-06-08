const screens = {
  watchlist: {
    src: "./assets/screens/watchlist.png",
    scrollHotspots: [
      { label: "查看我的账户", x: 50, y: 3.8, w: 45, h: 5.8, target: "account" }
    ],
    fixedHotspots: []
  },
  marketGenerated: {
    src: "./assets/screens/market-with-guide.png",
    confirm: true,
    scrollHotspots: [
      { label: "去定制", x: 68, y: 15.2, w: 23, h: 5.6, target: "customize" }
    ],
    fixedHotspots: [],
    guide: { id: "market-generated-customize", layer: "scroll", x: 68, y: 15.2, w: 23, h: 5.6 }
  },
  market: {
    src: "./assets/screens/market-long.png",
    scrollHotspots: [
      { label: "长按编辑大盘", x: 68, y: 10.2, w: 23, h: 3.6, target: "configPage", dismissGuide: "market-edit-entry" },
      { label: "查看我的账户", x: 50, y: 3.8, w: 45, h: 5.8, target: "account" }
    ],
    fixedHotspots: [],
    guide: {
      id: "market-edit-entry",
      layer: "scroll",
      x: 68,
      y: 10.2,
      w: 23,
      h: 3.6,
      copy: "长按进行编辑页面"
    },
    nextGuide: {
      id: "market-top-signal",
      layer: "scroll",
      x: 50,
      y: 3.8,
      w: 45,
      h: 5.8
    }
  },
  customize: {
    src: "./assets/screens/customize-cards.png",
    scrollHotspots: [
      { label: "保存", x: 5, y: 91, w: 90, h: 7, target: "market" }
    ],
    fixedHotspots: [],
    guide: { id: "customize-save", layer: "scroll", x: 5, y: 89.5, w: 90, h: 5 }
  },
  configPage: {
    src: "./assets/screens/config-page.png",
    scrollHotspots: [
      { label: "添加卡片", x: 3.5, y: 5.5, w: 23, h: 5, target: "customize" },
      { label: "关闭定制页面", x: 78, y: 5.5, w: 18, h: 5, target: "market", dismissGuide: "market-edit-entry" }
    ],
    fixedHotspots: [],
    guide: null
  },
  report: {
    src: "./assets/screens/morning-list.png",
    scrollHotspots: [
      { label: "查看我的账户", x: 81, y: 2.9, w: 13, h: 4.8, target: "account" },
      { label: "查看特别提醒", x: 6.8, y: 20.4, w: 86.4, h: 5.5, target: "specialNotice" },
      { label: "呼叫AI交易员制定计划", x: 48, y: 28, w: 40, h: 2.0, target: "aiTrader" },
      { label: "热点主题", x: 28, y: 34, w: 44, h: 2, target: "reportSubject" }
    ],
    fixedHotspots: [],
    guide: [
      { id: "report-multi-guide", layer: "scroll", x: 6.8, y: 20.4, w: 86.4, h: 5.5 },
      { id: "report-multi-guide", layer: "scroll", x: 48, y: 28, w: 40, h: 2.0 },
      { id: "report-multi-guide", layer: "scroll", x: 6, y: 34, w: 44, h: 2 }
    ]
  },
  reportSubject: {
    src: "./assets/screens/morning-list-subject.png",
    scrollHotspots: [
      { label: "查看我的账户", x: 81, y: 2.9, w: 13, h: 4.8, target: "account" },
      { label: "查看特别提醒", x: 6.8, y: 20.4, w: 86.4, h: 5.5, target: "specialNotice" },
      { label: "呼叫AI交易员制定计划", x: 48, y: 28, w: 40, h: 2.0, target: "aiTrader" },
      { label: "重磅事件", x: 6, y: 34, w: 44, h: 2, target: "report" }
    ],
    fixedHotspots: [],
    guide: null
  },
  account: {
    src: "./assets/screens/account.png",
    scrollHotspots: [
      { label: "关闭我的账户", x: 3, y: 4.6, w: 34, h: 12, target: "market" },
      { label: "查看账户管家分析", x: 4, y: 27.5, w: 31, h: 4, target: "accountMng" }
    ],
    fixedHotspots: [],
    guide: { id: "account-analysis-guide", layer: "scroll", x: 4, y: 27.5, w: 31, h: 4 }
  },
  accountMng: {
    src: "./assets/screens/account-mng.png",
    scrollHotspots: [
      { label: "点击上方关闭账户管家", x: 0, y: 0, w: 100, h: 12.5, target: "account" },
      { label: "关闭账户管家", x: 89, y: 12.5, w: 11, h: 10, target: "account" },
      { label: "帮我分析下当前实时持仓", x: 3, y: 90.5, w: 56, h: 4, target: "accountMng2" }
    ],
    fixedHotspots: [],
    guide: null
  },
  accountMng2: {
    src: "./assets/screens/account-mng-2.png",
    scrollHotspots: [
      { label: "关闭", x: 89, y: 0, w: 11, h: 6, target: "account" },
      { label: "深度复盘重仓股北方稀土", x: 3, y: 92.2, w: 56, h: 2, target: "accountMng3" }
    ],
    fixedHotspots: [],
    guide: null
  },
  accountMng3: {
    src: "./assets/screens/account-mng-3.png",
    scrollHotspots: [
      { label: "关闭", x: 89, y: 0, w: 11, h: 6, target: "account" }
    ],
    fixedHotspots: [],
    guide: null
  },
  specialNotice: {
    src: "./assets/screens/special-notice.png",
    scrollHotspots: [
      { label: "关闭特别提醒", x: 3.8, y: 6.4, w: 10, h: 6, target: "report" }
    ],
    fixedHotspots: [],
    guide: null
  },
  aiTrader: {
    src: "./assets/screens/ai-trader.jpg",
    scrollHotspots: [
      { label: "关闭AI交易员", x: 2.5, y: 5.2, w: 12, h: 7, target: "report" }
    ],
    fixedHotspots: [],
    guide: null
  },
  chat: {
    src: "./assets/screens/chat-entry-no-tabs.png",
    scrollHotspots: [
      { label: "返回报告工作区", x: 3.5, y: 6.6, w: 9, h: 7, target: "report" },
      { label: "侧边栏", x: 12, y: 6.8, w: 7.5, h: 3, target: "sidebar" }
    ],
    fixedHotspots: [],
    guide: null
  },
  chatTaskAssistant: {
    src: "./assets/screens/task-list-1.png",
    scrollHotspots: [
      { label: "返回对话", x: 2, y: 5.2, w: 8, h: 6, target: "chat" },
      { label: "定时任务", x: 27, y: 12, w: 18, h: 5, target: "chatTaskTimed" },
      { label: "复合任务", x: 47, y: 12, w: 18, h: 5, target: "chatTaskComposite" }
    ],
    fixedHotspots: [],
    guide: null
  },
  chatTaskTimed: {
    src: "./assets/screens/task-list-2.png",
    scrollHotspots: [
      { label: "返回对话", x: 2, y: 5.2, w: 8, h: 6, target: "chat" },
      { label: "盯盘任务", x: 6, y: 12, w: 18, h: 5, target: "chatTaskAssistant" },
      { label: "复合任务", x: 47, y: 12, w: 18, h: 5, target: "chatTaskComposite" }
    ],
    fixedHotspots: [],
    guide: null
  },
  chatTaskComposite: {
    src: "./assets/screens/task-list-3.png",
    scrollHotspots: [
      { label: "返回对话", x: 2, y: 5.2, w: 8, h: 6, target: "chat" },
      { label: "盯盘任务", x: 6, y: 12, w: 18, h: 5, target: "chatTaskAssistant" },
      { label: "定时任务", x: 27, y: 12, w: 18, h: 5, target: "chatTaskTimed" }
    ],
    fixedHotspots: [],
    guide: null
  },
  sidebar: {
    src: "./assets/screens/sidebar-tasks.png",
    scrollHotspots: [
      { label: "返回对话", x: 82, y: 0, w: 18, h: 100, target: "chat" },
      { label: "任务助手动态", x: 9, y: 9.6, w: 50, h: 5.2, target: "taskOverview" },
      { label: "查看任务助手动态", x: 68, y: 9.6, w: 7, h: 5.2, target: "taskOverview" },
      { label: "网格策略参数待确认", x: 10.6, y: 17.6, w: 62.2, h: 3.3, target: "gridParams" }
    ],
    fixedHotspots: [],
    guide: { id: "sidebar-return-chat", layer: "scroll", x: 82, y: 5, w: 18, h: 88 }
  },
  gridParams: {
    src: "./assets/screens/grid-params-chat-no-tabs.png",
    scrollHotspots: [
      { label: "返回侧边栏", x: 3.5, y: 6, w: 8, h: 6, target: "sidebar" },
      { label: "继续运行", x: 10.5, y: 70.5, w: 77, h: 4.2, target: "gridParamsRunning" }
    ],
    fixedHotspots: [],
    guide: null
  },
  gridParamsRunning: {
    src: "./assets/screens/grid-params-running.png",
    scrollHotspots: [
      { label: "返回侧边栏", x: 3.5, y: 6, w: 8, h: 6, target: "sidebar" }
    ],
    fixedHotspots: [],
    guide: null
  },
  taskOverview: {
    src: "./assets/screens/task-list-1.png",
    scrollHotspots: [
      { label: "返回侧边栏", x: 2, y: 5.2, w: 8, h: 6, target: "sidebar" },
      { label: "定时任务", x: 27, y: 12, w: 18, h: 5, target: "taskTimed" },
      { label: "复合任务", x: 47, y: 12, w: 18, h: 5, target: "taskComposite" }
    ],
    fixedHotspots: [],
    guide: null
  },
  taskTimed: {
    src: "./assets/screens/task-list-2.png",
    scrollHotspots: [
      { label: "返回侧边栏", x: 2, y: 5.2, w: 8, h: 6, target: "sidebar" },
      { label: "盯盘任务", x: 6, y: 12, w: 18, h: 5, target: "taskOverview" },
      { label: "复合任务", x: 47, y: 12, w: 18, h: 5, target: "taskComposite" }
    ],
    fixedHotspots: [],
    guide: null
  },
  taskComposite: {
    src: "./assets/screens/task-list-3.png",
    scrollHotspots: [
      { label: "返回侧边栏", x: 2, y: 5.2, w: 8, h: 6, target: "sidebar" },
      { label: "盯盘任务", x: 6, y: 12, w: 18, h: 5, target: "taskOverview" },
      { label: "定时任务", x: 27, y: 12, w: 18, h: 5, target: "taskTimed" }
    ],
    fixedHotspots: [],
    guide: null
  },
  trans: {
    src: "./assets/screens/trans.png",
    scrollHotspots: [
      { label: "打开AI交易员", x: 38, y: 4.5, w: 34, h: 16.5, target: "aiTrader2" }
    ],
    fixedHotspots: [],
    guide: { id: "trans-more-nav", layer: "fixed", x: 80, y: 0, w: 20, h: 100 }
  },
  aiTrader2: {
    src: "./assets/screens/ai-trader-2.png",
    scrollHotspots: [
      { label: "关闭", x: 0, y: 0, w: 100, h: 10, target: "trans" },
      { label: "黄金ETF网格计划", x: 3, y: 65, w: 94, h: 12, target: "aiTrader3" }
    ],
    fixedHotspots: [],
    guide: null
  },
  aiTrader3: {
    src: "./assets/screens/ai-trader-3.png",
    scrollHotspots: [
      { label: "关闭", x: 0, y: 0, w: 100, h: 10, target: "aiTrader2" }
    ],
    fixedHotspots: [],
    guide: null
  }
};

const navItems = {
  market: {
    target: "market",
    icons: {
      active: "./assets/nav-icons/stock_chosen.png",
      inactive: "./assets/nav-icons/stock_unchosen.png"
    }
  },
  watchlist: {
    target: "watchlist",
    icons: {
      active: "./assets/nav-icons/watchlist_chosen.png",
      inactive: "./assets/nav-icons/watchlist_unchosen.png"
    }
  },
  watch: {
    target: "report",
    icons: {
      active: "./assets/nav-icons/news_chosen.png",
      inactive: "./assets/nav-icons/news_unchosen.png"
    }
  },
  chat: {
    target: "chat",
    icons: {
      active: "./assets/nav-icons/talk_chosen.png",
      inactive: "./assets/nav-icons/talk_unchosen.png"
    }
  },
  trans: {
    target: "trans",
    icons: {
      active: "./assets/nav-icons/trans_chosen.png",
      inactive: "./assets/nav-icons/trans_unchosen.png"
    }
  },
  more: {
    target: "more",
    icons: {
      active: "./assets/nav-icons/more_chosen.png",
      inactive: "./assets/nav-icons/more_unchosen.png"
    }
  }
};

const demoVersion = "2.1";
const assetVersion = `v${demoVersion}`;
document.documentElement.dataset.demoVersion = demoVersion;
const phoneScreen = document.querySelector("#phoneScreen");
const image = document.querySelector("#screenImage");
const kycScreen = document.querySelector("#kycScreen");
const confirmCard = document.querySelector("#confirmCard");
const hotspotsLayer = document.querySelector("#hotspots");
const configModules = document.querySelector("#configModules");
const fixedHotspotsLayer = document.querySelector("#fixedHotspots");
const scrollArea = document.querySelector("#scrollArea");
const bottomBar = document.querySelector("#bottomBar");
const guideLayer = document.querySelector("#guideLayer");
const guideCopy = document.querySelector("#guideCopy");
const moreMenu = document.querySelector("#moreMenu");
const moreModal = document.querySelector("#moreModal");
const customizeOverlay = document.querySelector("#customizeOverlay");
const customizeSaveButton = document.querySelector("#customizeSaveButton");
const screenStage = document.querySelector("#screenStage");
const chatInteraction = document.querySelector("#chatInteraction");
const topModeTabs = document.querySelector("#topModeTabs");
const chatHome = document.querySelector("#chatHome");
const taskAssistantPanel = document.querySelector("#taskAssistantPanel");
const taskPanelBack = document.querySelector("#taskPanelBack");
const chatStream = document.querySelector("#chatStream");
const chatTabs = document.querySelector(".chat-tabs");
const chatCloseBtn = document.querySelector("#chatCloseBtn");
const chatMenuBtn = document.querySelector("#chatMenuBtn");
const chatInputBar = document.querySelector("#chatInputBar");
const chatInput = document.querySelector("#chatInput");
const chatInputWrap = document.querySelector("#chatInputWrap");
const keyboardToggle = document.querySelector("#keyboardToggle");
const plusEntryBtn = document.querySelector("#plusEntryBtn");
const plusPanel = document.querySelector("#plusPanel");
const recentGrid = document.querySelector("#recentGrid");
const addImagesBtn = document.querySelector("#addImagesBtn");
const inputAttachments = document.querySelector("#inputAttachments");
const promptSuggest = document.querySelector("#promptSuggest");
const scenarioSheet = document.querySelector("#scenarioSheet");
const scenarioTitle = document.querySelector("#scenarioTitle");
const scenarioDesc = document.querySelector("#scenarioDesc");
const scenarioList = document.querySelector("#scenarioList");
const scenarioClose = document.querySelector("#scenarioClose");
const taskEditSheet = document.querySelector("#taskEditSheet");
const taskEditClose = document.querySelector("#taskEditClose");
const editTaskContent = document.querySelector("#editTaskContent");
const editTaskTime = document.querySelector("#editTaskTime");
const editTaskFreq = document.querySelector("#editTaskFreq");
const editSubscribe = document.querySelector("#editSubscribe");
const editRun = document.querySelector("#editRun");
const fakeKeyboard = document.querySelector("#fakeKeyboard");
let activeKey = "kyc";
let activeNav = "market";
let accountReturnKey = "report";
let moreMenuActive = false;
let modalGuideActive = false;
let customizeOverlayActive = false;
let sidebarEnteredFromChat = false;
let followupGuideNav = null;
let followupGuideSelector = null;
let guideDismissed = false;
let activeGuideId = null;
const dismissedGuideIds = new Set();
let selectedImages = [];
let pendingImages = [];
let swipeStart = null;
let suppressSwipeClick = false;

const swipeNavOrder = ["market", "watch", "chat", "trans"];

const configModuleRects = [
  { label: "指数行情", x: 3.2, y: 9.7, w: 93.6, h: 32.8 },
  { label: "涨跌成交", x: 6.8, y: 42.7, w: 86.4, h: 8.0 },
  { label: "乐友风向", x: 6.8, y: 52.4, w: 86.4, h: 15.0 },
  { label: "资金迁移", x: 6.8, y: 68.3, w: 41.8, h: 18.4 },
  { label: "黄金收盘", x: 51.6, y: 68.3, w: 41.8, h: 18.4 },
  { label: "华泰观市", x: 6.8, y: 87.4, w: 86.4, h: 8.2 }
];

function makeHotspot(spot, className) {
  const node = document.createElement("button");
  node.type = "button";
  node.className = className;
  node.setAttribute("aria-label", spot.label);
  node.dataset.target = spot.target;
  node.style.left = `${spot.x}%`;
  node.style.top = `${spot.y}%`;
  node.style.width = `${spot.w}%`;
  node.style.height = `${spot.h}%`;
  node.addEventListener("click", (event) => {
    event.preventDefault();
    if (spot.dismissGuide) {
      dismissedGuideIds.add(spot.dismissGuide);
    }
    let target = event.currentTarget.dataset.target;
    if (target === "account") {
      accountReturnKey = activeKey;
    } else if (target === "accountReturn") {
      target = accountReturnKey;
    }
    const nextGuideSelector = activeKey === "sidebar" && target === "chat"
      ? '.chat-chip[data-tab="复杂任务"]'
      : null;
    showScreen(target, nextGuideSelector);
  });
  return node;
}

function renderHotspots(screen) {
  hotspotsLayer.innerHTML = "";
  fixedHotspotsLayer.innerHTML = "";
  renderConfigModules();

  screen.scrollHotspots.forEach((spot) => {
    hotspotsLayer.appendChild(makeHotspot(spot, "hotspot"));
  });

  screen.fixedHotspots.forEach((spot) => {
    fixedHotspotsLayer.appendChild(makeHotspot(spot, "fixed-hotspot"));
  });

  syncBottomBarVisibility();
}

function syncBottomBarVisibility() {
  bottomBar.hidden = ["kyc", "customize", "configPage", "sidebar", "chat", "account", "accountMng", "accountMng2", "accountMng3", "specialNotice", "aiTrader", "aiTrader2", "aiTrader3"].includes(activeKey)
    || activeKey.startsWith("chatTask");
}

function syncHotspotLayerHeight() {
  hotspotsLayer.style.height = `${image.offsetHeight}px`;
  syncConfigModuleBackgrounds();
}

function runScreenSlide(className) {
  return new Promise((resolve) => {
    screenStage.classList.remove("is-sliding-in-from-left", "is-sliding-out-to-left");
    screenStage.classList.add(className);

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      screenStage.removeEventListener("animationend", finish);
      clearTimeout(timer);
      screenStage.classList.remove(className);
      resolve();
    };

    const timer = setTimeout(finish, 380);
    screenStage.addEventListener("animationend", finish);
  });
}

function applyGuideBounds(x, y, w, h, handSide = "right") {
  const handOnLeft = handSide === "left";

  const node = document.createElement("div");
  node.className = `guide-item ${handOnLeft ? "hand-left" : ""}`;
  node.style.setProperty("--guide-x", `${x}px`);
  node.style.setProperty("--guide-y", `${y}px`);
  node.style.setProperty("--guide-w", `${w}px`);
  node.style.setProperty("--guide-h", `${h}px`);
  node.style.setProperty("--hand-x", `${handOnLeft ? x - 54 : x + w - 10}px`);
  node.style.setProperty("--hand-y", `${y + h - 6}px`);
  node.innerHTML = `
    <div class="guide-target"></div>
    <div class="guide-copy"></div>
    <div class="guide-hand">
      <span class="finger"></span>
      <span class="palm"></span>
    </div>
  `;
  guideLayer.appendChild(node);
  return node;
}

function prepareGuide(guideId) {
  activeGuideId = guideId || null;
  const hidden = !guideId || dismissedGuideIds.has(guideId);
  guideLayer.hidden = hidden;
  if (hidden) {
    guideLayer.innerHTML = "";
  }
  return !hidden;
}

function dismissActiveGuide() {
  if (!activeGuideId) return;
  dismissedGuideIds.add(activeGuideId);
  activeGuideId = null;
  guideDismissed = true;
  guideLayer.hidden = true;
  guideLayer.innerHTML = "";
}

function setGuide(guideInput, handSide = "right") {
  if (!guideInput || (Array.isArray(guideInput) && guideInput.length === 0)) {
    activeGuideId = null;
    guideLayer.hidden = true;
    guideLayer.innerHTML = "";
    return;
  }
  
  const guides = Array.isArray(guideInput) ? guideInput : [guideInput];
  const primaryGuideId = guides[0].id;
  if (!prepareGuide(primaryGuideId)) return;
  
  guideLayer.innerHTML = "";

  const screenRect = document.querySelector("#phoneScreen").getBoundingClientRect();
  const bottomRect = bottomBar.getBoundingClientRect();
  const imageRect = image.getBoundingClientRect();

  guides.forEach(guide => {
    const basis = guide.layer === "fixed"
      ? { left: bottomRect.left - screenRect.left, top: bottomRect.top - screenRect.top, width: bottomRect.width, height: bottomRect.height }
      : guide.layer === "scroll"
        ? { left: imageRect.left - screenRect.left, top: imageRect.top - screenRect.top, width: imageRect.width, height: imageRect.height }
        : { left: 0, top: 0, width: screenRect.width, height: screenRect.height };

    const x = basis.left + (guide.x / 100) * basis.width;
    const y = basis.top + (guide.y / 100) * basis.height;
    const w = (guide.w / 100) * basis.width;
    const h = (guide.h / 100) * basis.height;

    const node = applyGuideBounds(x, y, w, h, handSide);
    node.querySelector(".guide-copy").textContent = guide.copy || "";
  });
}

function setGuideToElement(element, guideId, offsetY = 0, handSide = "right") {
  if (!element) {
    activeGuideId = null;
    guideLayer.hidden = true;
    guideLayer.innerHTML = "";
    return;
  }
  if (!prepareGuide(guideId)) return;
  
  guideLayer.innerHTML = "";

  const screenRect = document.querySelector("#phoneScreen").getBoundingClientRect();
  const targetRect = element.getBoundingClientRect();
  const x = targetRect.left - screenRect.left;
  const y = targetRect.top - screenRect.top + offsetY;
  const w = targetRect.width;
  const h = targetRect.height;

  applyGuideBounds(x, y, w, h, handSide);
}

function renderConfigModules() {
  configModules.innerHTML = "";
  const editing = activeKey === "configPage";
  configModules.classList.toggle("is-active", editing);
  if (!editing) return;

  configModuleRects.forEach((rect, index) => {
    const node = document.createElement("div");
    node.className = "config-module";
    node.setAttribute("aria-label", rect.label);
    node.style.left = `${rect.x}%`;
    node.style.top = `${rect.y}%`;
    node.style.width = `${rect.w}%`;
    node.style.height = `${rect.h}%`;
    node.style.animationDelay = `${index * -0.13}s`;
    configModules.appendChild(node);
  });

  requestAnimationFrame(syncConfigModuleBackgrounds);
}

function syncConfigModuleBackgrounds() {
  if (activeKey !== "configPage" || !configModules.classList.contains("is-active")) return;
  const width = image.offsetWidth;
  const height = image.offsetHeight;
  configModules.querySelectorAll(".config-module").forEach((node, index) => {
    const rect = configModuleRects[index];
    node.style.backgroundImage = `url("${screens.configPage.src}?v=${assetVersion}")`;
    node.style.backgroundSize = `${width}px ${height}px`;
    node.style.backgroundPosition = `-${(rect.x / 100) * width}px -${(rect.y / 100) * height}px`;
  });
}

function setMoreModalGuide() {
  setGuideToElement(moreModal.querySelector(".more-close-right"), "more-close-right", 0, "left");
}

function openCustomizeOverlay() {
  customizeOverlayActive = true;
  moreMenuActive = false;
  modalGuideActive = false;
  followupGuideNav = null;
  followupGuideSelector = null;
  guideDismissed = false;
  moreMenu.hidden = true;
  moreModal.hidden = true;
  guideLayer.hidden = true;
  confirmCard.hidden = true;
  customizeOverlay.hidden = false;
  customizeOverlay.querySelector(".customize-long-scroll")?.scrollTo({ top: 0, behavior: "auto" });
}

function closeCustomizeOverlay() {
  customizeOverlayActive = false;
  customizeOverlay.hidden = true;
  showScreen("market");
}

function setKycGuide() {
  setGuideToElement(kycScreen.querySelector(".kyc-card.kyc-short"), "kyc-short");
}

function syncChatTabsScrollPosition() {
  const offset = activeKey === "chat" ? -scrollArea.scrollTop : 0;
  chatTabs.style.setProperty("--chat-tabs-scroll-y", `${offset}px`);
}

function setFollowupGuideToElement(selector) {
  const element = document.querySelector(selector);
  const scrollContainer = element?.closest(".chat-tabs");

  if (scrollContainer) {
    const containerRect = scrollContainer.getBoundingClientRect();
    const targetRect = element.getBoundingClientRect();
    const rightOverflow = targetRect.right - (containerRect.right - 6);
    const leftOverflow = (containerRect.left + 6) - targetRect.left;

    if (rightOverflow > 0) scrollContainer.scrollLeft += rightOverflow;
    else if (leftOverflow > 0) scrollContainer.scrollLeft -= leftOverflow;
  }

  requestAnimationFrame(() => {
    if (followupGuideSelector !== selector || guideDismissed) return;
    setGuideToElement(element, `followup:${selector}`);
  });
}

function setActiveScreenGuide(screen = screens[activeKey]) {
  if (guideDismissed) {
    guideLayer.hidden = true;
    return;
  }
  if (followupGuideSelector) {
    guideLayer.hidden = true;
    setFollowupGuideToElement(followupGuideSelector);
    return;
  }
  if (followupGuideNav) {
    setGuideToElement(
      document.querySelector(`.nav-item[data-nav="${followupGuideNav}"]`),
      `followup-nav:${followupGuideNav}`
    );
    return;
  }
  if (activeKey === "marketGenerated") {
    setGuideToElement(confirmCard.querySelector(".btn-customize"), "market-generated-customize");
    return;
  }
  if (activeKey === "market") {
    const guide = dismissedGuideIds.has("market-edit-entry")
      ? screen?.nextGuide
      : screen?.guide;
    setGuide(guide);
    return;
  }
  if (activeKey === "report") {
    setGuide(screen?.guide);
    return;
  }
  if (activeKey === "trans") {
    setGuideToElement(document.querySelector('.nav-item[data-nav="more"]'), "trans-more-nav");
    return;
  }
  if (activeKey === "sidebar") {
    setGuide(screen?.guide, "left");
    return;
  }
  setGuide(screen?.guide);
}

async function showScreen(key, nextGuideSelector = null) {
  if (key === "customize") {
    openCustomizeOverlay();
    return;
  }

  const previousKey = activeKey;
  if (key === "chat" && activeKey === "sidebar" && sidebarEnteredFromChat) {
    guideLayer.hidden = true;
    await runScreenSlide("is-sliding-out-to-left");
    sidebarEnteredFromChat = false;
    showScreen(key, nextGuideSelector);
    return;
  }

  const screen = screens[key];
  const slideInFromLeft = key === "sidebar" && activeKey === "chat";
  if (slideInFromLeft) {
    sidebarEnteredFromChat = true;
  } else if (key !== "sidebar") {
    sidebarEnteredFromChat = false;
  }

  activeKey = key;
  moreMenuActive = false;
  modalGuideActive = false;
  followupGuideNav = null;
  followupGuideSelector = nextGuideSelector;
  guideDismissed = false;
  const isChat = key === "chat";
  const isChatTask = key.startsWith("chatTask");
  const isChatHub = isChat || isChatTask;
  if (chatInteraction) {
    if (isChat && previousKey !== "chat" && previousKey !== "sidebar") {
      resetChatTabSelection();
    }
    chatInteraction.classList.toggle("show", isChatHub);
    chatInteraction.classList.toggle("task-assistant-mode", isChatTask);
    chatInteraction.setAttribute("aria-hidden", isChatHub ? "false" : "true");
    topModeTabs.querySelectorAll(".top-mode-tab").forEach((tab) => {
      tab.classList.toggle("selected", tab.dataset.mode === (isChatTask ? "task" : "chat"));
    });
    if (!isChatHub) closeChatOverlays();
  }
  kycScreen.hidden = true;
  moreMenu.hidden = true;
  moreModal.hidden = true;
  customizeOverlay.hidden = true;
  customizeOverlayActive = false;
  confirmCard.hidden = !screen.confirm;

  const revealScreen = () => {
    syncHotspotLayerHeight();
    scrollArea.scrollTo({ top: 0, behavior: "auto" });
    syncChatTabsScrollPosition();
    requestAnimationFrame(() => {
      if (modalGuideActive) {
        setMoreModalGuide();
        return;
      }
      setActiveScreenGuide(screen);
      requestAnimationFrame(() => {
        if (modalGuideActive) {
          setMoreModalGuide();
          return;
        }
        setActiveScreenGuide(screen);
      });
    });
  };

  const afterImageReady = async () => {
    if (slideInFromLeft) {
      guideLayer.hidden = true;
      await runScreenSlide("is-sliding-in-from-left");
    }
    revealScreen();
  };

  image.onload = afterImageReady;
  image.src = `${screen.src}?v=${assetVersion}`;
  renderHotspots(screen);
  updateNavState(key);
  if (image.complete) afterImageReady();
}

function updateNavState(screenKey = activeKey, forceMore = false) {
  const nextActive = forceMore
    ? "more"
    : screenKey === "trans" || screenKey === "aiTrader2" || screenKey === "aiTrader3"
      ? "trans"
      : screenKey === "watchlist"
        ? "watchlist"
      : screenKey === "report" || screenKey === "reportSubject" || screenKey === "account" || screenKey === "accountMng" || screenKey === "accountMng2" || screenKey === "accountMng3" || screenKey === "specialNotice" || screenKey === "aiTrader"
        ? "watch"
        : screenKey === "chat" || screenKey.startsWith("chatTask") || screenKey === "sidebar"
          ? "chat"
          : "market";

  activeNav = nextActive;
  document.querySelectorAll(".nav-item").forEach((item) => {
    const key = item.dataset.nav;
    const active = key === activeNav;
    item.classList.toggle("is-active", active);
    item.querySelector("img").src = navItems[key].icons[active ? "active" : "inactive"];
  });
}

function showKyc() {
  activeKey = "kyc";
  sidebarEnteredFromChat = false;
  screenStage.classList.remove("is-sliding-in-from-left", "is-sliding-out-to-left");
  kycScreen.hidden = false;
  syncBottomBarVisibility();
  confirmCard.hidden = true;
  hotspotsLayer.innerHTML = "";
  fixedHotspotsLayer.innerHTML = "";
  moreMenu.hidden = true;
  moreMenuActive = false;
  moreModal.hidden = true;
  customizeOverlay.hidden = true;
  customizeOverlayActive = false;
  requestAnimationFrame(setKycGuide);
}

kycScreen.querySelectorAll(".kyc-card").forEach((card) => {
  card.addEventListener("click", () => {
    kycScreen.querySelectorAll(".kyc-card").forEach((item) => {
      item.classList.toggle("is-selected", item === card);
      item.classList.toggle("is-muted", item !== card);
    });
    setTimeout(() => showScreen("marketGenerated"), 260);
  });
});

confirmCard.querySelector(".btn-customize").addEventListener("click", () => {
  showScreen("customize");
});

confirmCard.querySelector(".btn-recommend").addEventListener("click", () => {
  showScreen("market");
});

function openMoreMenu() {
  moreMenuActive = true;
  modalGuideActive = false;
  followupGuideNav = null;
  followupGuideSelector = null;
  guideDismissed = false;
  moreMenu.hidden = false;
  moreModal.hidden = true;
  guideLayer.hidden = true;
  updateNavState(activeKey, true);
}

function closeMoreMenu() {
  moreMenuActive = false;
  moreMenu.hidden = true;
  updateNavState(activeKey);
  setActiveScreenGuide();
}

function openMoreCustomizeModal() {
  moreMenuActive = false;
  moreMenu.hidden = true;
  modalGuideActive = true;
  followupGuideNav = null;
  followupGuideSelector = null;
  guideDismissed = false;
  moreModal.hidden = false;
  requestAnimationFrame(() => requestAnimationFrame(setMoreModalGuide));
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    const key = item.dataset.nav;
    if (key === "more") {
      if (!moreModal.hidden) {
        closeMoreModal();
        return;
      }
      if (moreMenuActive) {
        closeMoreMenu();
        return;
      }
      openMoreMenu();
      return;
    }
    closeMoreMenu();
    showScreen(navItems[key].target);
  });
});

function canSwipeBetweenBottomTabs() {
  return swipeNavOrder.includes(activeNav)
    && !customizeOverlayActive
    && moreMenu.hidden
    && moreModal.hidden
    && !modalGuideActive
    && activeKey !== "kyc";
}

function getSwipeNavIndex() {
  return swipeNavOrder.indexOf(activeNav);
}

function switchBottomTabBySwipe(deltaX) {
  const currentIndex = getSwipeNavIndex();
  if (currentIndex < 0) return;

  const direction = deltaX < 0 ? 1 : -1;
  const nextIndex = currentIndex + direction;
  if (nextIndex < 0 || nextIndex >= swipeNavOrder.length) return;

  const nextNav = swipeNavOrder[nextIndex];
  closeMoreMenu();
  showScreen(navItems[nextNav].target);
  animateBottomTabSwitch(direction);
}

function animateBottomTabSwitch(direction) {
  const className = direction > 0 ? "tab-swipe-left" : "tab-swipe-right";
  phoneScreen.classList.remove("tab-swipe-left", "tab-swipe-right");
  void phoneScreen.offsetWidth;
  phoneScreen.classList.add(className);
  window.setTimeout(() => {
    phoneScreen.classList.remove(className);
  }, 360);
}

function canStartSwipeFrom(target) {
  return !target.closest("textarea, input, .more-menu, .more-modal, .customize-overlay");
}

function startSwipeGesture(x, y, id = "touch") {
  if (!canSwipeBetweenBottomTabs()) return;

  swipeStart = {
    x,
    y,
    id,
    horizontal: false
  };
}

function triggerSwipeGesture(deltaX) {
  suppressSwipeClick = true;
  switchBottomTabBySwipe(deltaX);
  window.setTimeout(() => {
    suppressSwipeClick = false;
  }, 180);
}

function updateSwipeGesture(x, y, id = "touch", preventDefault = null) {
  if (!swipeStart || swipeStart.id !== id) return;
  const deltaX = x - swipeStart.x;
  const deltaY = y - swipeStart.y;

  if (!swipeStart.horizontal && Math.abs(deltaX) > 12 && Math.abs(deltaX) > Math.abs(deltaY) * 1.05) {
    swipeStart.horizontal = true;
  }

  if (swipeStart.horizontal && preventDefault) {
    preventDefault();
  }

  if (!canSwipeBetweenBottomTabs()) return;
  if (Math.abs(deltaX) < 34 || Math.abs(deltaX) < Math.abs(deltaY) * 1.05) return;

  swipeStart = null;
  triggerSwipeGesture(deltaX);
}

function finishSwipeGesture(x, y, id = "touch") {
  if (!swipeStart || swipeStart.id !== id) return;
  const deltaX = x - swipeStart.x;
  const deltaY = y - swipeStart.y;
  const horizontal = swipeStart.horizontal;
  swipeStart = null;

  if (!canSwipeBetweenBottomTabs()) return;
  if (!horizontal && (Math.abs(deltaX) < 34 || Math.abs(deltaX) < Math.abs(deltaY) * 1.05)) return;

  triggerSwipeGesture(deltaX);
}

phoneScreen.addEventListener("pointerdown", (event) => {
  if (!canStartSwipeFrom(event.target)) return;
  startSwipeGesture(event.clientX, event.clientY, event.pointerId);
});

phoneScreen.addEventListener("pointermove", (event) => {
  updateSwipeGesture(event.clientX, event.clientY, event.pointerId);
});

phoneScreen.addEventListener("pointerup", (event) => {
  finishSwipeGesture(event.clientX, event.clientY, event.pointerId);
});

phoneScreen.addEventListener("pointercancel", (event) => {
  if (swipeStart && event.pointerId === swipeStart.id) {
    swipeStart = null;
  }
});

phoneScreen.addEventListener("touchstart", (event) => {
  if (event.touches.length !== 1 || !canStartSwipeFrom(event.target)) return;
  const touch = event.touches[0];
  startSwipeGesture(touch.clientX, touch.clientY);
}, { passive: true });

phoneScreen.addEventListener("touchmove", (event) => {
  if (event.touches.length !== 1) return;
  const touch = event.touches[0];
  updateSwipeGesture(touch.clientX, touch.clientY, "touch", () => event.preventDefault());
}, { passive: false });

phoneScreen.addEventListener("touchend", (event) => {
  if (event.changedTouches.length < 1) return;
  const touch = event.changedTouches[0];
  finishSwipeGesture(touch.clientX, touch.clientY);
}, { passive: true });

phoneScreen.addEventListener("touchcancel", () => {
  swipeStart = null;
}, { passive: true });

phoneScreen.addEventListener("mousedown", (event) => {
  if (!canStartSwipeFrom(event.target)) return;
  startSwipeGesture(event.clientX, event.clientY, "mouse");
});

phoneScreen.addEventListener("mousemove", (event) => {
  updateSwipeGesture(event.clientX, event.clientY, "mouse");
});

phoneScreen.addEventListener("mouseup", (event) => {
  finishSwipeGesture(event.clientX, event.clientY, "mouse");
});

document.addEventListener("click", (event) => {
  if (!suppressSwipeClick) return;
  event.preventDefault();
  event.stopPropagation();
}, true);

function closeMoreModal(nextGuideNav = null) {
  modalGuideActive = false;
  moreMenuActive = false;
  moreMenu.hidden = true;
  followupGuideNav = nextGuideNav;
  followupGuideSelector = null;
  guideDismissed = false;
  moreModal.hidden = true;
  updateNavState(activeKey);
  setActiveScreenGuide();
}

moreMenu.querySelector(".more-menu-backdrop").addEventListener("click", () => closeMoreMenu());
moreMenu.querySelectorAll(".more-menu-close").forEach((button) => {
  button.addEventListener("click", () => closeMoreMenu());
});
moreMenu.querySelector(".more-menu-custom-nav").addEventListener("click", () => openMoreCustomizeModal());

moreModal.querySelector(".more-backdrop").addEventListener("click", () => closeMoreModal());
moreModal.querySelector(".more-close-left").addEventListener("click", () => closeMoreModal());
moreModal.querySelector(".more-close-right").addEventListener("click", () => closeMoreModal("chat"));
customizeSaveButton.addEventListener("click", () => closeCustomizeOverlay());

window.addEventListener("resize", () => {
  if (customizeOverlayActive) return;
  syncHotspotLayerHeight();
  if (modalGuideActive) {
    setMoreModalGuide();
    return;
  }
  if (activeKey === "kyc") {
    setKycGuide();
    return;
  }
  setActiveScreenGuide();
});
scrollArea.addEventListener("scroll", () => {
  if (customizeOverlayActive) return;
  syncChatTabsScrollPosition();
  if (modalGuideActive) {
    setMoreModalGuide();
    return;
  }
  setActiveScreenGuide();
}, { passive: true });
chatTabs.addEventListener("scroll", () => {
  if (!followupGuideSelector || guideDismissed) return;
  setGuideToElement(
    document.querySelector(followupGuideSelector),
    `followup:${followupGuideSelector}`
  );
}, { passive: true });

document.addEventListener("click", (event) => {
  if (guideLayer.hidden || !activeGuideId) return;
  const targets = Array.from(guideLayer.querySelectorAll(".guide-target"));
  const clickedGuide = targets.some(target => {
    const targetRect = target.getBoundingClientRect();
    return event.clientX >= targetRect.left
      && event.clientX <= targetRect.right
      && event.clientY >= targetRect.top
      && event.clientY <= targetRect.bottom;
  });
  if (clickedGuide) dismissActiveGuide();
}, true);

showKyc();

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function closeChatOverlays() {
  chatInteraction.classList.remove("keyboard-open", "keyboard-mode", "chat-active", "task-panel-open", "tab-ai-trader");
  keyboardToggle.classList.remove("active");
  plusPanel.classList.remove("show");
  plusPanel.setAttribute("aria-hidden", "true");
  scenarioSheet.classList.remove("show");
  scenarioSheet.setAttribute("aria-hidden", "true");
  taskEditSheet.classList.remove("show");
  taskEditSheet.setAttribute("aria-hidden", "true");
  fakeKeyboard.classList.remove("show");
  pendingImages = [];
  syncSelectedThumbs();
}

function enterChatMode() {
  chatStream.classList.add("show");
  chatInteraction.classList.add("chat-active");
}

function resetChatTabSelection() {
  document.querySelectorAll(".chat-chip").forEach((item) => item.classList.remove("selected"));
  chatInteraction.classList.remove("tab-ai-trader", "task-panel-open");
  chatInteraction.classList.remove("chat-active");
  chatStream.classList.remove("show");
  scenarioSheet.classList.remove("show");
  scenarioSheet.setAttribute("aria-hidden", "true");
}

function appendBubble(role, text) {
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${role}`;
  bubble.textContent = text;
  enterChatMode();
  chatStream.appendChild(bubble);
  chatStream.scrollTop = chatStream.scrollHeight;
  return bubble;
}

function streamReply(promptText) {
  const target = appendBubble("assistant", "");
  const skill = (promptText.match(/@([^\s]+)/) || [])[1] || "该问题";
  const fullText = `已收到，正在用「${skill}」处理。\n先给你一个快速结论：当前方向可行，建议先看量价与资金，再补充基本面验证。\n如需我继续，我可以下一步给出3个可执行动作。`;
  let index = 0;
  const timer = setInterval(() => {
    index += 2;
    target.textContent = fullText.slice(0, index);
    chatStream.scrollTop = chatStream.scrollHeight;
    if (index >= fullText.length) clearInterval(timer);
  }, 28);
}

function parseTaskMeta(text) {
  const timeMatch = text.match(/(\d{1,2}[:：]\d{2})/);
  const rangeMatch = text.match(/(\d{1,2}[:：]\d{2}\s*[-~到至]\s*\d{1,2}[:：]\d{2})/);
  const repeat = /每交易日/.test(text)
    ? "每交易日"
    : /每天/.test(text)
      ? "每天"
      : /每周/.test(text)
        ? "每周"
        : "每个交易日";
  const time = rangeMatch
    ? rangeMatch[1].replace(/：/g, ":").replace(/\s+/g, "")
    : timeMatch
      ? timeMatch[1].replace("：", ":")
      : "07:30";
  return { time, repeat };
}

function appendTaskConfirmCard(promptText) {
  const { time, repeat } = parseTaskMeta(promptText);
  const card = document.createElement("div");
  card.className = "task-confirm-card";
  card.innerHTML = `
    <div class="task-confirm-title">您有定时任务助手待执行，请确认相关信息。</div>
    <div class="task-confirm-main">${escapeHtml(promptText)}</div>
    <div class="task-grid">
      <div><div class="k">时间</div><div class="v">${time}</div></div>
      <div><div class="k">重复</div><div class="v">${repeat}</div></div>
    </div>
    <button class="task-subscribe-btn" type="button" data-action="subscribe-run">订阅并试运行</button>
    <div class="task-actions">
      <button class="task-action-btn" type="button" data-action="edit-task">编辑</button>
      <button class="task-action-btn" type="button" data-action="subscribe-only">订阅定时</button>
    </div>
  `;
  enterChatMode();
  chatStream.appendChild(card);
  chatStream.scrollTop = chatStream.scrollHeight;
}

function appendTraderCard() {
  enterChatMode();
  chatInteraction.classList.remove("task-panel-open");
  scenarioSheet.classList.remove("show");
  scenarioSheet.setAttribute("aria-hidden", "true");
  plusPanel.classList.remove("show");

  const existingCard = chatStream.querySelector(".trader-card");
  if (existingCard) {
    existingCard.scrollIntoView({ block: "nearest" });
    return;
  }

  const card = document.createElement("article");
  card.className = "trader-card";
  card.innerHTML = `
    <div class="trader-head">
      <div class="trader-avatar">AI</div>
      <div>
        <strong>AI交易员</strong>
        <span>已读取最新指令和执行记录</span>
      </div>
    </div>
    <div class="trader-mode"><b>深度思考</b><span>等待你确认交易计划</span></div>
    <div class="trader-copy">
      <p>我收到了账户管家的卖出派单。是否需要基于触发条件、仓位和风险，生成一份交易计划？</p>
    </div>
    <div class="trader-order">
      <label>来自管家的派单</label>
      <div class="trader-order-text">再跌就卖出复旦微电和中芯国际一定仓位</div>
      <div class="trader-tools"><button type="button">+ 选股结果</button><button type="button">+ 语音下达</button></div>
    </div>
    <div class="trader-actions">
      <button class="primary" type="button" data-trader-action="plan">帮我制定交易计划</button>
      <button type="button" data-trader-action="edit">调整派单要求</button>
    </div>
  `;
  chatStream.appendChild(card);
  chatStream.scrollTop = chatStream.scrollHeight;
}

function appendMockReport() {
  appendBubble("assistant", [
    "【交易日志】收盘报告（示例）",
    "1. 大盘走势：指数震荡收红，尾盘资金回流。",
    "2. 板块联动：AI算力与新能源午后联动走强。",
    "3. 资金动向：主力资金集中流向算力链核心标的。",
    "结论：明日优先关注放量延续方向。"
  ].join("\n"));
}

function setKeyboardMode(on) {
  chatInteraction.classList.toggle("keyboard-mode", on);
  chatInteraction.classList.toggle("keyboard-open", on);
  keyboardToggle.classList.toggle("active", on);
  fakeKeyboard.classList.toggle("show", on);
  if (on) {
    chatInput.focus();
  }
}

function syncSelectedThumbs() {
  recentGrid.querySelectorAll(".recent-thumb").forEach((thumb) => {
    const index = pendingImages.findIndex((imageItem) => imageItem.name === thumb.dataset.image);
    thumb.classList.toggle("selected", index >= 0);
    const tag = thumb.querySelector("span");
    if (tag) tag.textContent = index >= 0 ? index + 1 : "×";
  });
  addImagesBtn.disabled = pendingImages.length === 0;
  addImagesBtn.textContent = pendingImages.length ? `添加 ${pendingImages.length} 张图片` : "添加图片";
}

function renderInputAttachments() {
  inputAttachments.innerHTML = selectedImages.map((imageItem, index) => `
    <div class="input-attachment ${imageItem.type}">
      <button type="button" data-remove-index="${index}" aria-label="移除图片">×</button>
    </div>
  `).join("");
  promptSuggest.classList.toggle("show", selectedImages.length > 0);
}

function closePlusPanel() {
  plusPanel.classList.remove("show");
  plusPanel.setAttribute("aria-hidden", "true");
  pendingImages = [];
  syncSelectedThumbs();
}

const scenarioConfigs = {
  "技能": {
    desc: "精选一些更有产品特色、用户不一定会主动想到的分析能力。",
    items: [
      ["可比公司分析", "横向对比同类公司，快速看清估值、成长和竞争位置。", "帮我做[股票名称]的可比公司分析，对比估值、成长性和竞争优势"],
      ["市场主线识别", "识别近期市场真正的主线、扩散方向和核心标的。", "帮我识别当前市场主线，说明主线逻辑、强势板块和核心标的"],
      ["基金诊断分析", "诊断基金风格、持仓暴露、业绩来源和潜在风险。", "帮我诊断[基金名称/基金代码]，分析持仓风格、收益来源和主要风险"],
      ["事件催化日历", "整理未来可能影响行情的关键事件和观察窗口。", "帮我整理未来一段时间的事件催化日历，标出可能影响A股的关键节点"]
    ]
  },
  "AI交易员": {
    desc: "把分析结果进一步转成交易计划、风控动作和执行纪律。",
    items: [
      ["交易计划生成", "根据标的、仓位和风险偏好生成可执行交易计划。", "帮我为[股票名称]生成一份交易计划，包括买入区间、止损位、止盈位和仓位建议"],
      ["持仓调仓建议", "结合当前持仓和市场状态给出调仓动作。", "帮我检查当前持仓，给出需要减仓、加仓或继续观察的建议"],
      ["盘中执行提醒", "把交易计划拆成盘中可执行的提醒条件。", "帮我把[股票名称]的交易计划拆成盘中执行提醒"],
      ["风险纪律检查", "在交易前检查是否违反仓位、止损和追高纪律。", "帮我检查这笔交易是否违反我的风险纪律"]
    ]
  },
  "分析": {
    desc: "已有明确标的或持仓时，立即输出研究、诊断和判断，不进入任务卡片。",
    items: [
      ["综合诊股", "综合基本面、技术面、资金面和事件影响。", "帮我综合分析一下[股票名称]"],
      ["技术面分析", "判断走势、形态、支撑压力和短线节奏。", "帮我看看[股票名称]的技术面，现在走势怎么样"],
      ["基本面分析", "梳理业务、财务、估值和成长质量。", "帮我分析[股票名称]的基本面情况"],
      ["资金面分析", "观察主力资金、成交活跃度和筹码变化。", "[股票名称]最近资金流向怎么样，主力在进还是出"],
      ["持仓诊断", "检查账户结构、风险暴露和优化方向。", "帮我诊断一下我的账户，持仓结构有什么问题"],
      ["市场主线识别", "识别近期市场主线和强势板块。", "最近市场主线是什么，哪些板块最强"]
    ]
  },
  "选股": {
    desc: "当还没有明确标的时，用条件、主题或资金线索发现候选股票。",
    items: [
      ["主题选股", "围绕主题寻找相关股票和关注优先级。", "帮我找[主题名称]相关的股票，哪几只最值得关注"],
      ["热点板块选股", "从热门板块中筛选龙头和弹性标的。", "[板块名称]最近很热，帮我筛几只龙头股"],
      ["财务指标筛选", "按 PE、ROE 等财务条件筛选。", "帮我筛选PE低于20且ROE大于15%的股票"],
      ["技术形态筛选", "筛出出现特定技术信号的股票。", "找出最近出现MACD金叉的股票"],
      ["资金条件筛选", "按主力净流入等资金条件筛选。", "今天主力净流入超过1亿的股票有哪些"],
      ["组合条件筛选", "将估值、成长和资金条件组合筛选。", "筛选市盈率低于30、营收增速超20%、且有主力净流入的股票"]
    ]
  },
  "盯盘": {
    desc: "设置条件后由 AI 在后台持续监控，有变化时主动提醒，会进入任务卡片。",
    items: [
      ["价格条件", "涨跌幅、涨停、点位突破等价格提醒。", "[股票名称]涨到[价格]通知我 / 跌超5%提醒我"],
      ["技术条件", "突破均线、形态变化等技术提醒。", "[股票名称]突破20日均线时通知我"],
      ["资金异动", "监控大单、主力净流入等资金变化。", "[股票名称]有大单异动或主力大幅净流入时告诉我"],
      ["持仓盈亏阈值预警", "监控账户总盈亏变化。", "我的账户总盈亏超过±10%时提醒我"],
      ["财报发布提醒", "财报发布后主动提醒并可继续解读。", "[股票名称]发布财报时通知我"],
      ["公告 / 重大事项", "监控重大公告和关键事项。", "[股票名称]有重大公告时提醒我"]
    ]
  },
  "交易": {
    desc: "交易类持续策略和持仓处理任务，会进入任务卡片；普通买卖执行仍走即时流程。",
    items: [
      ["止盈止损策略", "为持仓设定持续管理的止盈止损方案。", "帮我给[股票名称]设一个止盈止损策略"],
      ["网格交易", "围绕价格区间建立网格交易策略。", "帮我对[股票名称]做网格交易"],
      ["T0 高抛低吸", "基于底仓制定日内 T0 策略。", "帮我对[股票名称]做T0，底仓[X]股"],
      ["国债逆回购预约", "收盘后处理闲置资金逆回购。", "今天收盘后把闲置资金做逆回购"],
      ["仓位分配优化", "评估当前仓位分布并给出优化建议。", "帮我看看现在的仓位分配是否合理，给个优化建议"],
      ["解套策略", "制定并持续跟踪解套方案。", "[股票名称]被套了，帮我制定解套方案并跟踪执行"]
    ]
  },
  "定时": {
    desc: "按固定时间或周期自动执行，结果主动推送，会进入任务卡片。",
    items: [
      ["每日早盘主线 / 策略", "每天盘前分析市场主线和机会。", "每天早上8:30帮我分析今日市场主线和机会"],
      ["今日催化事件预告", "盘前整理重要催化事件和关注点。", "每天盘前帮我整理今日重要催化事件和关注点"],
      ["每日持仓复盘", "收盘后复盘持仓表现和操作得失。", "每天收盘后帮我复盘今日持仓表现，哪里做对了哪里做错了"],
      ["每日个股 / 大盘复盘", "固定复盘指定股票或大盘走势。", "每天收盘后帮我复盘[股票名称]今日走势"],
      ["每周选股报告", "每周筛选值得关注的机会。", "每周一早上帮我筛选本周值得关注的机会"],
      ["每月账户诊断报告", "每月做一次账户全面诊断。", "每月最后一个交易日帮我做一次账户全面诊断"]
    ]
  },
  "复杂任务": {
    desc: "复杂目标、多步骤工作流或文件型结果，适合深度研究、跟踪、回测和报告生成。",
    items: [
      ["跟踪大V / 财经达人动态", "持续跟踪动态，发文后提醒并分析。", "帮我跟踪[大V名称]的公众号/动态，他发文了提醒我并帮我分析"],
      ["主题 / 事件持续追踪", "持续追踪主题进展并及时分析。", "帮我持续跟踪[主题名称]，有重要进展及时分析"],
      ["个股深度研究报告", "生成包含基本面、技术面和风险的 PDF 报告。", "帮我生成[股票名称]的完整研究报告，包括基本面、技术面和风险，输出PDF"],
      ["行业对比报告", "横向对比行业前 N 家公司并输出 PDF。", "帮我生成[行业名称]前[N]家公司的横向对比报告，输出PDF"],
      ["策略回测 + 报告生成", "回测策略并输出收益、回撤和结论。", "帮我回测这个策略：[策略描述]，测试区间[开始]-[结束]，输出年化收益和最大回撤"],
      ["持仓分析表", "生成 Excel 持仓分析表并排序。", "帮我生成持仓分析Excel表，包含成本价、现价、盈亏、PE/PB，按盈亏排序"]
    ]
  }
};

function openScenarioSheet(tabName) {
  const config = scenarioConfigs[tabName] || scenarioConfigs["技能"];
  chatInteraction.classList.add("chat-active");
  scenarioTitle.textContent = tabName;
  scenarioDesc.textContent = config.desc;
  scenarioList.innerHTML = config.items.map(([title, desc, prompt]) => `
    <article class="scenario-item">
      <h4>${escapeHtml(title)}</h4>
      <button type="button" data-title="${escapeHtml(title)}" data-prompt="${escapeHtml(prompt)}">使用</button>
      <p>${escapeHtml(desc)}</p>
    </article>
  `).join("");
  scenarioSheet.classList.add("show");
  scenarioSheet.setAttribute("aria-hidden", "false");
  plusPanel.classList.remove("show");
}

function hidePreviousTabModule() {
  chatInteraction.classList.remove("chat-active", "task-panel-open", "tab-ai-trader");
  chatStream.classList.remove("show");
  scenarioSheet.classList.remove("show");
  scenarioSheet.setAttribute("aria-hidden", "true");
  plusPanel.classList.remove("show");
  plusPanel.setAttribute("aria-hidden", "true");
}

function fillPromptToInput(prompt, { preserveTabModule = false } = {}) {
  setKeyboardMode(true);
  chatInput.value = prompt;
  if (preserveTabModule) return;
  enterChatMode();
  chatInteraction.classList.remove("task-panel-open");
  scenarioSheet.classList.remove("show");
  scenarioSheet.setAttribute("aria-hidden", "true");
}

chatCloseBtn.addEventListener("click", () => showScreen("report"));
chatMenuBtn.addEventListener("click", () => showScreen("sidebar"));

topModeTabs.addEventListener("click", (event) => {
  const tab = event.target.closest(".top-mode-tab");
  if (!tab) return;
  showScreen(tab.dataset.mode === "task" ? "chatTaskAssistant" : "chat");
});

keyboardToggle.addEventListener("click", () => {
  setKeyboardMode(!chatInteraction.classList.contains("keyboard-mode"));
});

plusEntryBtn.addEventListener("click", () => {
  setKeyboardMode(true);
  const open = !plusPanel.classList.contains("show");
  plusPanel.classList.toggle("show", open);
  plusPanel.setAttribute("aria-hidden", open ? "false" : "true");
  scenarioSheet.classList.remove("show");
});

recentGrid.addEventListener("click", (event) => {
  const thumb = event.target.closest(".recent-thumb");
  if (!thumb) return;
  const imageItem = { name: thumb.dataset.image, type: thumb.dataset.type || "kline" };
  const exists = pendingImages.some((item) => item.name === imageItem.name);
  pendingImages = exists
    ? pendingImages.filter((item) => item.name !== imageItem.name)
    : [...pendingImages, imageItem];
  syncSelectedThumbs();
});

addImagesBtn.addEventListener("click", () => {
  pendingImages.forEach((imageItem) => {
    if (!selectedImages.some((item) => item.name === imageItem.name)) selectedImages.push(imageItem);
  });
  pendingImages = [];
  renderInputAttachments();
  closePlusPanel();
  chatInput.focus();
});

inputAttachments.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-index]");
  if (!button) return;
  selectedImages.splice(Number(button.dataset.removeIndex), 1);
  renderInputAttachments();
});

promptSuggest.addEventListener("click", (event) => {
  const chip = event.target.closest(".prompt-chip");
  if (!chip) return;
  chatInput.value = chip.dataset.prompt || "";
  chatInput.focus();
});

chatHome.addEventListener("click", (event) => {
  const action = event.target.closest("[data-prompt]");
  if (!action) return;
  fillPromptToInput(action.dataset.prompt || "");
});

taskAssistantPanel.addEventListener("click", (event) => {
  const action = event.target.closest("[data-prompt]");
  if (!action) return;
  fillPromptToInput(action.dataset.prompt || "", { preserveTabModule: true });
});

chatInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.shiftKey) return;
  event.preventDefault();
  const text = chatInput.value.trim();
  if (!text && selectedImages.length === 0) return;
  const imageText = selectedImages.map((item, index) => `[图片${index + 1}:${item.name}]`).join(" ");
  const outgoingText = [imageText, text].filter(Boolean).join("\n");
  appendBubble("user", outgoingText);
  chatInput.value = "";
  selectedImages = [];
  renderInputAttachments();
  if (/(每(天|周|交易日)|\d{1,2}[:：]\d{2}|定时|盯盘|监控)/.test(text)) appendTaskConfirmCard(text);
  else streamReply(outgoingText);
});

chatInput.addEventListener("input", () => {
  if (chatInput.value.trim()) chatInteraction.classList.add("chat-active");
});

document.querySelectorAll(".chat-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    if (followupGuideSelector && chip.matches(followupGuideSelector)) {
      followupGuideSelector = null;
      guideDismissed = true;
      guideLayer.hidden = true;
    }
    setKeyboardMode(false);
    closePlusPanel();
    chatInput.blur();
    document.querySelectorAll(".chat-chip").forEach((item) => item.classList.remove("selected"));
    chip.classList.add("selected");
    hidePreviousTabModule();
    if (chip.dataset.tab === "任务助手") {
      chatInteraction.classList.add("task-panel-open");
      return;
    }
    if (chip.dataset.tab === "AI交易员") {
      chatInteraction.classList.add("tab-ai-trader");
      appendTraderCard();
      return;
    }
    chatInteraction.classList.remove("task-panel-open");
    openScenarioSheet(chip.dataset.tab || "技能");
  });
});

if (taskPanelBack) {
  taskPanelBack.addEventListener("click", () => {
    chatInteraction.classList.remove("task-panel-open");
    document.querySelectorAll(".chat-chip").forEach((item) => {
      item.classList.toggle("selected", item.dataset.tab === "技能");
    });
  });
}

if (scenarioClose) {
  scenarioClose.addEventListener("click", () => {
    scenarioSheet.classList.remove("show");
    scenarioSheet.setAttribute("aria-hidden", "true");
  });
}

scenarioList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-prompt]");
  if (!button) return;
  if (button.dataset.title === "个股深度研究报告") {
    scenarioSheet.classList.remove("show");
    scenarioSheet.setAttribute("aria-hidden", "true");
    startSuperBacktestCase();
    return;
  }
  fillPromptToInput(button.dataset.prompt || "");
});

chatStream.addEventListener("click", (event) => {
  const traderAction = event.target.closest("[data-trader-action]");
  if (traderAction) {
    const prompt = traderAction.dataset.traderAction === "plan"
      ? "帮我围绕“再跌就卖出复旦微电和中芯国际一定仓位”制定交易计划，包括触发条件、卖出比例、风险提示和执行步骤"
      : "调整派单要求：再跌就卖出复旦微电和中芯国际一定仓位";
    fillPromptToInput(prompt);
    return;
  }

  const runButton = event.target.closest('[data-action="subscribe-run"]');
  if (runButton) {
    runButton.classList.add("done");
    runButton.textContent = "已订阅，任务运行中";
    runButton.disabled = true;
    appendBubble("assistant", "温馨提示：试运行结果稍后通知。你也可以稍后前往侧边栏或首页任务卡查看执行结果。");
    appendBubble("assistant", "任务已开始执行，我会在有结果后自动同步到对话。");
    setTimeout(appendMockReport, 900);
    return;
  }

  const subscribeButton = event.target.closest('[data-action="subscribe-only"]');
  if (subscribeButton) {
    subscribeButton.textContent = "已订阅";
    subscribeButton.disabled = true;
    appendBubble("assistant", "已订阅定时任务，执行结果将自动推送到对话以及任务卡上。");
    return;
  }

  const editButton = event.target.closest('[data-action="edit-task"]');
  if (editButton) {
    const card = editButton.closest(".task-confirm-card");
    editTaskContent.value = card.querySelector(".task-confirm-main")?.textContent?.trim() || "";
    const values = card.querySelectorAll(".task-grid .v");
    editTaskTime.value = values[0]?.textContent?.trim() || "17:30";
    editTaskFreq.value = values[1]?.textContent?.trim() || "每个交易日";
    taskEditSheet.classList.add("show");
    taskEditSheet.setAttribute("aria-hidden", "false");
  }
});

taskEditClose.addEventListener("click", () => {
  taskEditSheet.classList.remove("show");
  taskEditSheet.setAttribute("aria-hidden", "true");
});

function applyEdit(runNow) {
  const cards = chatStream.querySelectorAll(".task-confirm-card");
  if (!cards.length) return;
  const card = cards[cards.length - 1];
  card.querySelector(".task-confirm-main").textContent = editTaskContent.value.trim();
  const values = card.querySelectorAll(".task-grid .v");
  if (values[0]) values[0].textContent = editTaskTime.value.trim() || "17:30";
  if (values[1]) values[1].textContent = editTaskFreq.value.trim() || "每个交易日";
  taskEditSheet.classList.remove("show");
  taskEditSheet.setAttribute("aria-hidden", "true");
  if (runNow) {
    const runButton = card.querySelector('[data-action="subscribe-run"]');
    if (runButton) {
      runButton.classList.add("done");
      runButton.textContent = "已订阅，任务运行中";
      runButton.disabled = true;
    }
    appendBubble("assistant", "已按最新设置订阅并试运行，稍后将返回结果。");
    setTimeout(appendMockReport, 900);
  } else {
    appendBubble("assistant", "已更新并订阅定时任务。");
  }
}

editSubscribe.addEventListener("click", () => applyEdit(false));
editRun.addEventListener("click", () => applyEdit(true));

function dismissKeyboardFromOutside(event) {
  if (!chatInteraction.classList.contains("keyboard-mode")) return;
  const targetElement = event.target instanceof Element
    ? event.target
    : event.target?.parentElement;
  const interactiveTarget = targetElement?.closest(
    "textarea, input, .chat-input-bar, .chat-tabs, .plus-panel, .scenario-sheet, .task-edit-sheet, .super-run-card, .super-confirm-card"
  );
  if (interactiveTarget) return;
  setKeyboardMode(false);
  closePlusPanel();
  chatInput.blur();
}

document.addEventListener("pointerdown", dismissKeyboardFromOutside, true);
document.addEventListener("mousedown", dismissKeyboardFromOutside, true);
document.addEventListener("click", dismissKeyboardFromOutside, true);
scrollArea.addEventListener("pointerdown", dismissKeyboardFromOutside, true);
scrollArea.addEventListener("click", dismissKeyboardFromOutside, true);
chatHome.addEventListener("pointerdown", dismissKeyboardFromOutside, true);
chatHome.addEventListener("click", dismissKeyboardFromOutside, true);
chatStream.addEventListener("pointerdown", dismissKeyboardFromOutside, true);
chatStream.addEventListener("click", dismissKeyboardFromOutside, true);

function startSuperBacktestCase() {
  const promptText = "帮我回测我自选股里 15 只消费股近 3 年的净值曲线，对比沪深 300 的超额收益，生成可视化对比图和 PDF 分析报告";
  setKeyboardMode(false);
  enterChatMode();
  appendBubble("user", promptText);
  appendSuperBacktestRun(promptText);
}

function appendSuperBacktestRun(promptText) {
  const runSteps = [
    {
      name: "理解任务",
      desc: "把原始请求拆成股票池读取、历史行情获取、基准对齐、收益计算、图表生成和PDF报告六段链路。",
      outputs: [
        "识别任务类型：长程研究 / 回测 / 文件交付。",
        "股票池：从自选股中筛出 15 只消费股，剔除停牌与近三年数据不完整标的。",
        "交付口径：组合净值、沪深300净值、超额收益、阶段归因、PDF报告。"
      ]
    },
    {
      name: "获取实时数据",
      desc: "拉取自选股、行业标签、复权行情和沪深300基准行情，并检查交易日、缺失值和异常价格。",
      outputs: [
        "命中消费股：贵州茅台、五粮液、伊利股份、海天味业、美的集团等 15 只。",
        "行情区间：2023-05-29 至 2026-05-29，按前复权日线对齐。",
        "发现 2 只股票存在短期停牌缺口，等待确认处理口径。"
      ]
    },
    {
      name: "补充公开资料",
      desc: "检索消费板块在关键回撤与修复阶段的公开事件，给报告补充解释材料。",
      outputs: [
        "2024Q1：白酒估值修复贡献主要超额收益。",
        "2025Q3：消费复苏预期反复，组合相对基准回撤扩大。",
        "2026年以来：家电与食品饮料龙头现金流稳定，防守属性增强。"
      ]
    },
    {
      name: "计算与生成",
      desc: "计算等权组合净值、基准净值、累计超额收益、最大回撤和滚动胜率，并生成可视化图表。",
      outputs: [
        "组合三年累计收益：+42.8%，沪深300：+18.6%，超额收益：+24.2%。",
        "组合最大回撤：-18.9%，沪深300最大回撤：-22.7%。",
        "已生成净值对比图，并同步整理日频回测数据。"
      ]
    },
    {
      name: "整理交付",
      desc: "把数据表、图表、阶段归因、风险提示和结论排版成最终报告，并整理附件。",
      outputs: [
        "PDF报告：backtest_report.pdf。",
        "图表文件：nav_comparison.png。",
        "数据文件：net_value_data.csv，包含日频净值、回撤和超额收益。"
      ]
    }
  ];

  appendBubble("assistant", "这个任务涉及多只股票、历史行情、基准对比、计算和文件生成，我会交给超级助手执行。");

  const card = document.createElement("div");
  card.className = "super-run-card";
  card.innerHTML = `
    <div class="super-run-head">
      <div>
        <div class="super-run-kicker">超级助手 · 长程任务运行中</div>
        <h3 class="super-run-title">消费股组合回测与沪深300对比</h3>
      </div>
      <div class="super-run-tools">
        <button class="super-stop-btn" type="button" data-super-stop>停止</button>
        <div class="super-run-time">00:00</div>
      </div>
    </div>
    <div class="super-step-grid" aria-label="超级助手执行步骤">
      ${runSteps.map((step, index) => `
        <section class="super-step ${index === 0 ? "running" : ""}" data-step="${index}">
          <div class="super-step-index">${index + 1}</div>
          <div>
            <div class="super-step-state">${index === 0 ? "运行中" : "等待中"}</div>
            <div class="super-step-name">${escapeHtml(step.name)}</div>
          </div>
          <button class="super-step-more" type="button" aria-label="展开步骤详情">...</button>
          <div class="super-step-desc">${escapeHtml(step.desc)}</div>
          <div class="super-step-output">
            ${step.outputs.map((line) => `<div>${escapeHtml(line)}</div>`).join("")}
          </div>
        </section>
      `).join("")}
    </div>
    <div class="super-run-actions">
      <button class="super-run-btn" type="button" data-expand-process>查看过程</button>
      <button class="super-run-btn primary" type="button">打开报告</button>
    </div>
  `;
  chatStream.appendChild(card);
  chatStream.scrollTop = chatStream.scrollHeight;

  const steps = Array.from(card.querySelectorAll(".super-step"));
  const time = card.querySelector(".super-run-time");
  let elapsed = 0;
  const timers = [];
  const addTimer = (id) => timers.push(id);
  const clearTimers = () => timers.forEach((id) => clearTimeout(id));

  const markStep = (activeIndex) => {
    steps.forEach((step, index) => {
      const state = step.querySelector(".super-step-state");
      step.classList.remove("running");
      if (index < activeIndex) {
        step.classList.add("done");
        state.textContent = "已完成";
      } else if (index === activeIndex) {
        step.classList.add("running");
        state.textContent = "运行中";
      } else {
        state.textContent = "等待中";
      }
    });
  };

  const tick = setInterval(() => {
    elapsed += 1;
    time.textContent = `00:${String(Math.min(elapsed, 30)).padStart(2, "0")}`;
    if (elapsed >= 30) clearInterval(tick);
  }, 1000);

  addTimer(setTimeout(() => markStep(1), 1800));
  addTimer(setTimeout(() => showSuperConfirm(card, markStep, tick, timers), 4200));

  card.addEventListener("click", (event) => {
    if (event.target.closest("[data-super-stop]")) {
      clearTimers();
      clearInterval(tick);
      card.classList.add("stopped");
      card.querySelector(".super-run-kicker").textContent = "超级助手 · 已停止";
      card.querySelector(".super-run-time").textContent = "已停止";
      card.querySelectorAll(".super-step").forEach((step) => {
        step.classList.remove("running");
        if (!step.classList.contains("done")) step.querySelector(".super-step-state").textContent = "已停止";
      });
      return;
    }
    if (event.target.closest("[data-expand-process]")) {
      steps.forEach((step) => step.classList.toggle("expanded"));
      event.target.textContent = steps[0].classList.contains("expanded") ? "收起过程" : "查看过程";
      return;
    }
    const step = event.target.closest(".super-step");
    if (!step) return;
    step.classList.toggle("expanded");
  });
}

function showSuperConfirm(card, markStep, tick, timers) {
  clearInterval(tick);
  markStep(2);
  const confirmCard = document.createElement("div");
  confirmCard.className = "super-confirm-card";
  confirmCard.innerHTML = `
    <div class="super-confirm-kicker">超级助手 · 待确认</div>
    <h3 class="super-confirm-title">部分股票有停牌缺口，按哪种口径继续？</h3>
    <div class="super-confirm-options">
      <button class="super-confirm-option primary" type="button" data-confirm-label="前复权 + 等权">前复权 + 等权</button>
      <button class="super-confirm-option" type="button" data-confirm-label="不复权 + 原权重">不复权 + 原权重</button>
      <button class="super-confirm-custom-btn" type="button" data-confirm-custom-open>自定义口径</button>
      <div class="super-confirm-custom">
        <input class="super-confirm-input" placeholder="输入你的处理方式" />
        <button class="super-confirm-submit" type="button" data-confirm-label="自定义口径">确认</button>
      </div>
    </div>
  `;
  chatStream.appendChild(confirmCard);
  chatStream.scrollTop = chatStream.scrollHeight;

  confirmCard.addEventListener("click", (event) => {
    if (event.target.closest("[data-confirm-custom-open]")) {
      confirmCard.classList.add("custom-open");
      confirmCard.querySelector(".super-confirm-input")?.focus();
      return;
    }
    const button = event.target.closest("[data-confirm-label]");
    if (!button) return;
    const custom = confirmCard.querySelector(".super-confirm-input")?.value.trim();
    const selected = custom || button.dataset.confirmLabel;
    confirmCard.classList.add("confirmed");
    confirmCard.querySelector(".super-confirm-kicker").textContent = "超级助手 · 已确认";
    confirmCard.querySelector(".super-confirm-title").textContent = `已选择：${selected}`;
    continueSuperBacktest(card, markStep, timers);
  }, { once: false });
}

function continueSuperBacktest(card, markStep, timers) {
  markStep(3);
  timers.push(setTimeout(() => markStep(4), 1800));
  timers.push(setTimeout(() => finishSuperBacktest(card), 3900));
}

function finishSuperBacktest(card) {
  card.querySelector(".super-run-kicker").textContent = "超级助手 · 任务已完成";
  card.querySelector(".super-run-time").textContent = "00:30";
  card.querySelectorAll(".super-step").forEach((step) => {
    step.classList.remove("running");
    step.classList.add("done");
    step.querySelector(".super-step-state").textContent = "已完成";
  });
  appendBubble("assistant", [
    "## 回测结果已完成",
    "",
    "- 消费股组合近 3 年累计收益约 +42.8%，沪深300约 +18.6%，超额收益约 +24.2%。",
    "- 最大回撤约 -18.9%，低于沪深300的 -22.7%。",
    "- 超额收益主要来自 2024Q1 白酒估值修复，以及 2026 年以来家电与食品饮料龙头的防守反弹。"
  ].join("\n"));
  const deliveryCard = document.createElement("div");
  deliveryCard.className = "super-run-card";
  deliveryCard.innerHTML = `
    <div class="super-run-head">
      <div>
        <div class="super-run-kicker">超级助手 · 交付物</div>
        <h3 class="super-run-title">回测结果文件</h3>
      </div>
    </div>
    <div class="super-files">
      <div class="super-file-row"><b>backtest_report.pdf</b><span>PDF分析报告</span></div>
      <div class="super-file-row"><b>nav_comparison.png</b><span>净值对比图</span></div>
      <div class="super-file-row"><b>net_value_data.csv</b><span>回测数据</span></div>
    </div>
    <div class="super-run-actions">
      <button class="super-run-btn" type="button">查看过程</button>
      <button class="super-run-btn primary" type="button">打开报告</button>
    </div>
  `;
  chatStream.appendChild(deliveryCard);
  chatStream.scrollTop = chatStream.scrollHeight;
}
