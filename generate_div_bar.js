const fs = require('fs');
const svg = fs.readFileSync('./assets/bottom-bar/bottom-bar.svg', 'utf8');

const leftIconPath = svg.match(/<path d="(M34\.8667 74\.1615.*?)"/)[1];
const rightIconPath1 = svg.match(/<path d="(M347\.738 73\.7373.*?)"/)[1];
const rightIconPath2 = svg.match(/<path d="(M353\.751 76H355.*?)"/)[1];
const micIconPath1 = svg.match(/<path d="(M271\.095 70\.9688.*?)"/)[1];
const micIconPath2 = svg.match(/<path d="(M273\.152 77H276.*?)"/)[1];

const html = `
<div class="bottom-bar" id="bottomBar">
  <div class="bb-bg"></div>
  
  <div class="bb-floating-tabs">
    <button class="bb-tab active" data-target="market">大盘</button>
    <button class="bb-tab" data-target="report">报告</button>
  </div>

  <div class="bb-main">
    <button class="bb-side-btn">
      <svg viewBox="34 62 22 20" width="22" height="20">
        <path d="${leftIconPath}" fill="#1D2850" />
      </svg>
    </button>
    
    <button class="bb-chat-pill" data-target="chat">
      <span class="bb-chat-text">AI对话</span>
      <div class="bb-mic">
        <svg viewBox="270 67 14 11" width="14" height="11">
          <path d="${micIconPath1}" fill="#1D2850" />
          <path d="${micIconPath2}" stroke="#1D2850" stroke-width="1.8" stroke-linecap="round" />
        </svg>
      </div>
    </button>
    
    <button class="bb-side-btn">
      <svg viewBox="336 61 24 22" width="24" height="22">
        <path d="${rightIconPath1}" fill="#1D2850" />
        <path d="${rightIconPath2}" fill="#1D2850" />
      </svg>
    </button>
  </div>
  
  <div class="bb-home-indicator"></div>
</div>
`;

let indexHtml = fs.readFileSync('./index.html', 'utf8');
indexHtml = indexHtml.replace(/<div class="bottom-bar" id="bottomBar">[\s\S]*?<\/div>\s*<\/div>/, html.trim() + '\n            </div>');
fs.writeFileSync('./index.html', indexHtml);
console.log('HTML updated with divs!');
