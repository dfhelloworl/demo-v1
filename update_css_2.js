const fs = require('fs');
let css = fs.readFileSync('./styles.css', 'utf8');

// The original gap was 38px, but the new images might be different size. 
// We will set height to something appropriate for image tabs.
css = css.replace('gap: 38px;', 'gap: 16px;'); 
css = css.replace('height: 32px;', 'height: 28px;');

fs.writeFileSync('./styles.css', css);
console.log('CSS updated again!');
