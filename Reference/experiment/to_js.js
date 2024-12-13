setInterval(function updatePreview() {
    console.log('setinter')
  const bgColor = document.getElementById('background-color').value;
  const textColor = document.getElementById('text-color').value;
  const fontSize = document.getElementById('font-size').value;
  const marginSize=document.getElementById('margin-size').value;
  const paddingSize=document.getElementById('padding-size').value;
  const fontFamily=document.getElementById('fontslist').value;

  // PREVIEW
  const preview = document.getElementById('preview');
  preS=preview.style;
  preview.style.backgroundColor = bgColor;
  preview.style.color = textColor;
  preview.style.fontSize = fontSize + 'px';
  preview.style.margin = marginSize + 'px';
  preS.padding = paddingSize + 'px';
  preS.fontFamily=fontFamily;
  


  const cssOutput = `font-family : ${fontFamily};\npadding: ${paddingSize};\nmargin: ${marginSize};\nbackground-color: ${bgColor};\ncolor: ${textColor};\nfont-size: ${fontSize}px;`;
  document.getElementById('css-output').textContent = cssOutput;
}, 10);
function updatePreview() {
  const bgColor = document.getElementById('background-color').value;
  const textColor = document.getElementById('text-color').value;
  const fontSize = document.getElementById('font-size').value;

  const preview = document.getElementById('preview');
  preview.style.backgroundColor = bgColor;
  preview.style.color = textColor;
  preview.style.fontSize = fontSize + 'px';

  const cssOutput = `background-color: ${bgColor};\ncolor: ${textColor};\nfont-size: ${fontSize}px;`;
  document.getElementById('css-output').textContent = cssOutput;
}

function exportCSS() {
  const cssOutput = document.getElementById('css-output').textContent;
  const blob = new Blob([cssOutput], { type: 'text/css' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'styles.css';
  link.click();
}