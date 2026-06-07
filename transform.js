const fs = require('fs');

const svg = fs.readFileSync('./assets/bottom-bar/bottom-bar.svg', 'utf8');
let html = fs.readFileSync('./index.html', 'utf8');

let modifiedSvg = svg.replace('width="390" height="130"', 'width="100%" height="100%"');

// Remove original market background pill
modifiedSvg = modifiedSvg.replace(/<path d="M158 16\.25H178C183\.937 16\.25 188\.75 21\.0629 188\.75 27C188\.75 32\.9371 183\.937 37\.75 178 37\.75H158C152\.063 37\.75 147\.25 32\.9371 147\.25 27C147\.25 21\.0629 152\.063 16\.25 158 16\.25Z" fill="#799FFF" fill-opacity="0\.1"\/>\n<path d="M158 16\.25H178C183\.937 16\.25 188\.75 21\.0629 188\.75 27C188\.75 32\.9371 183\.937 37\.75 178 37\.75H158C152\.063 37\.75 147\.25 32\.9371 147\.25 27C147\.25 21\.0629 152\.063 16\.25 158 16\.25Z" stroke="#818AA9" stroke-width="0\.5"\/>\n/g, '');

// Group market text
modifiedSvg = modifiedSvg.replace('<path d="M155.741 24.59H160.668',
  `<g class="bb-tab active" data-target="market">
  <path class="tab-bg" d="M158 16.25H178C183.937 16.25 188.75 21.0629 188.75 27C188.75 32.9371 183.937 37.75 178 37.75H158C152.063 37.75 147.25 32.9371 147.25 27C147.25 21.0629 152.063 16.25 158 16.25Z" fill="#799FFF" fill-opacity="0.1" stroke="#818AA9" stroke-width="0.5"/>
  <path class="tab-fill" d="M155.741 24.59H160.668`);

// Group report text
modifiedSvg = modifiedSvg.replace('fill="#2D3A67"/>\n<path d="M218.135',
  `fill="currentColor"/>
  </g>
  <g class="bb-tab" data-target="report">
  <path class="tab-bg" d="M213 16.25H233C238.937 16.25 243.75 21.0629 243.75 27C243.75 32.9371 238.937 37.75 233 37.75H213C207.063 37.75 202.25 32.9371 202.25 27C202.25 21.0629 207.063 16.25 213 16.25Z" fill="#799FFF" fill-opacity="0.1" stroke="#818AA9" stroke-width="0.5"/>
  <path class="tab-stroke" d="M218.135`);

modifiedSvg = modifiedSvg.replace('fill="#8CA2CD"/>\n<defs>',
  `fill="currentColor"/>
  </g>
<defs>`);

// Make original report text currentColor (stroke and fill)
modifiedSvg = modifiedSvg.replace('stroke="#8CA2CD"', 'stroke="currentColor"');
// We need to change the fill of report text from #8CA2CD to currentColor. 
// The regex above will replace the closing tag. Wait, let's fix that.
// The report text path ends with fill="#8CA2CD"/>
// The replace above changes it to fill="currentColor"/>\n</g>\n<defs>

// Group chat pill
modifiedSvg = modifiedSvg.replace('<path d="M109 48.2998H281', '<g class="bb-chat" data-target="chat" style="cursor:pointer">\n<path d="M109 48.2998H281');
modifiedSvg = modifiedSvg.replace('stroke-linecap="round"/>\n<rect x="321.48"', 'stroke-linecap="round"/>\n</g>\n<rect x="321.48"');

const newBottomBar = `<div class="bottom-bar" id="bottomBar">\n${modifiedSvg}\n</div>`;
html = html.replace(/<div class="bottom-bar" id="bottomBar">[\s\S]*?<\/div>/, newBottomBar);

fs.writeFileSync('./index.html', html);
console.log('HTML updated!');
