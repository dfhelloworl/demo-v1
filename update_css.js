const fs = require('fs');
let css = fs.readFileSync('./styles.css', 'utf8');

css = css.replace(/\/\* Bottom Bar SVG Styles \*\/[\s\S]*$/, '');
css = css.replace(/\.bottom-bar \{[\s\S]*?\}/, '');
css = css.replace(/\.bottom-bar img \{[\s\S]*?\}/, '');

const newCSS = `
.bottom-bar {
  position: absolute;
  z-index: 4;
  left: 0;
  right: 0;
  bottom: 0;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  pointer-events: none;
}
.bb-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(243,245,249,0), #F3F5F9 40%);
  pointer-events: none;
}
.bb-floating-tabs {
  position: absolute;
  top: 16px;
  display: flex;
  gap: 38px;
  z-index: 5;
  pointer-events: auto;
}
.bb-tab {
  background: transparent;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: #8CA2CD;
  cursor: pointer;
  padding: 4px 14px;
  border-radius: 12px;
  transition: all 0.2s ease;
  font-family: inherit;
}
.bb-tab.active {
  background: rgba(121, 159, 255, 0.1);
  color: #2D3A67;
  box-shadow: inset 0 0 0 0.5px #818AA9;
}
.bb-main {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 21px 34px;
  pointer-events: none;
}
.bb-side-btn {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: rgba(255,255,255,0.75);
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.1s ease;
}
.bb-side-btn:active {
  transform: scale(0.95);
}
.bb-chat-pill {
  width: 200px;
  height: 48px;
  border-radius: 24px;
  background: linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.9));
  border: 1px solid #CDDCF5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.1s ease;
  position: relative;
}
.bb-chat-pill:active {
  transform: scale(0.98);
}
.bb-chat-text {
  font-size: 15px;
  font-weight: 600;
  color: #1D2850;
  letter-spacing: 0.5px;
  margin-right: 32px;
}
.bb-mic {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 9px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.bb-home-indicator {
  position: absolute;
  bottom: 8px;
  width: 134px;
  height: 5px;
  border-radius: 2.5px;
  background: #030303;
  z-index: 5;
}
`;

fs.writeFileSync('./styles.css', css + newCSS);
console.log('CSS updated!');
