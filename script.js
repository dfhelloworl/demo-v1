const screens = {
  market: {
    src: "./assets/screens/market-long.png",
    scrollHotspots: [],
    fixedHotspots: [
      { label: "报告", x: 53.5, y: 8, w: 10, h: 28, target: "report" },
      { label: "对话", x: 22, y: 37, w: 56, h: 38, target: "chat" }
    ],
    guide: { layer: "fixed", x: 53.5, y: 8, w: 10, h: 28 }
  },
  report: {
    src: "./assets/screens/morning-list.png",
    scrollHotspots: [],
    fixedHotspots: [
      { label: "大盘", x: 37, y: 8, w: 12, h: 28, target: "market" },
      { label: "对话", x: 22, y: 37, w: 56, h: 38, target: "chat" }
    ],
    guide: { layer: "fixed", x: 22, y: 37, w: 56, h: 38 }
  },
  chat: {
    src: "./assets/screens/chat-entry.png",
    scrollHotspots: [
      { label: "返回报告工作区", x: 3.5, y: 6.6, w: 9, h: 7, target: "report" },
      { label: "侧边栏", x: 12, y: 6.8, w: 7.5, h: 5.5, target: "sidebar" }
    ],
    fixedHotspots: [],
    guide: { layer: "scroll", x: 12, y: 6.8, w: 7.5, h: 5.5 }
  },
  sidebar: {
    src: "./assets/screens/sidebar-tasks.png",
    scrollHotspots: [],
    fixedHotspots: [],
    guide: null
  }
};

const image = document.querySelector("#screenImage");
const hotspotsLayer = document.querySelector("#hotspots");
const fixedHotspotsLayer = document.querySelector("#fixedHotspots");
const scrollArea = document.querySelector("#scrollArea");
const bottomBar = document.querySelector("#bottomBar");
const guideLayer = document.querySelector("#guideLayer");
let activeKey = "market";

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
    showScreen(event.currentTarget.dataset.target);
  });
  return node;
}

function renderHotspots(screen) {
  hotspotsLayer.innerHTML = "";
  fixedHotspotsLayer.innerHTML = "";

  screen.scrollHotspots.forEach((spot) => {
    hotspotsLayer.appendChild(makeHotspot(spot, "hotspot"));
  });

  screen.fixedHotspots.forEach((spot) => {
    fixedHotspotsLayer.appendChild(makeHotspot(spot, "fixed-hotspot"));
  });

  bottomBar.hidden = screen.fixedHotspots.length === 0;
}

function syncHotspotLayerHeight() {
  hotspotsLayer.style.height = `${image.offsetHeight}px`;
}

function setGuide(guide) {
  guideLayer.hidden = !guide;
  if (!guide) return;

  const screenRect = document.querySelector("#phoneScreen").getBoundingClientRect();
  const bottomRect = bottomBar.getBoundingClientRect();
  const imageRect = image.getBoundingClientRect();
  const basis = guide.layer === "fixed"
    ? { left: bottomRect.left - screenRect.left, top: bottomRect.top - screenRect.top, width: bottomRect.width, height: bottomRect.height }
    : { left: imageRect.left - screenRect.left, top: imageRect.top - screenRect.top, width: imageRect.width, height: imageRect.height };

  const x = basis.left + (guide.x / 100) * basis.width;
  const y = basis.top + (guide.y / 100) * basis.height;
  const w = (guide.w / 100) * basis.width;
  const h = (guide.h / 100) * basis.height;

  guideLayer.style.setProperty("--guide-x", `${x}px`);
  guideLayer.style.setProperty("--guide-y", `${y}px`);
  guideLayer.style.setProperty("--guide-w", `${w}px`);
  guideLayer.style.setProperty("--guide-h", `${h}px`);
  guideLayer.style.setProperty("--hand-x", `${x + w - 10}px`);
  guideLayer.style.setProperty("--hand-y", `${y + h - 6}px`);
}

function showScreen(key) {
  const screen = screens[key];
  activeKey = key;
  image.onload = () => {
    syncHotspotLayerHeight();
    scrollArea.scrollTo({ top: 0, behavior: "auto" });
    requestAnimationFrame(() => setGuide(screen.guide));
  };
  image.src = screen.src;
  renderHotspots(screen);
}

window.addEventListener("resize", () => {
  syncHotspotLayerHeight();
  setGuide(screens[activeKey].guide);
});
scrollArea.addEventListener("scroll", () => setGuide(screens[activeKey].guide), { passive: true });
showScreen("market");
