function updatePreview() {
  null
}

var copyText = document.getElementById("css-output");
let cssOutPutInline

setInterval(function updatePreview() {
  //
  const bgColor = document.getElementById("background-color").value;
  const textColor = document.getElementById("text-color").value;
  const fontSize = document.getElementById("font-size").value;
  const marginSize = document.getElementById("margin-size").value;
  const paddingSize = document.getElementById("padding-size").value;
  const borderColor = document.getElementById("border-color").value;
  const borderWidth = document.getElementById("border-width").value;
  const borderStyle = document.getElementById("border-style").value;
  const borderRadius= document.getElementById("borderRadius").value
  const fontFamily = document.getElementById("fontslist").value;
  const heightSize = document.getElementById('height-size').value;
  const widthSize = document.getElementById('width-size').value;
  const textValue= document.getElementById
  //oppitional

  // PREVIEW CSS
  // propertySize,propertyName
  
  const preview = document.getElementById("preview");
  preS = preview.style;
  preview.style.backgroundColor = bgColor;
  preview.style.color = textColor;
  preS.fontFamily = fontFamily;
  preview.style.fontSize = fontSize + "px";
  preview.style.margin = marginSize + "px";
  preS.height=heightSize+'px';
  preS.width=widthSize+"px";
  preS.padding = paddingSize + "px";

  //border
  preS.borderColor = borderColor;
  preS.borderWidth = borderWidth + "px";
  preS.borderStyle = borderStyle;
  preS.borderRadius = borderRadius + "px";
  //flex
  preS.display = "flex";
  preS.justifyContent = "center";
  preS.alignItems = "center";



  //
  // sliderToNum('padding-size');

  //plane CSS
  let cssOutput = 
  `
  font-family : ${fontFamily};
  font-size: ${fontSize}px;

  background-color: ${bgColor};
 color: ${textColor};

  text-align: center;
  vertical-align: middle;
 
  padding: ${paddingSize}px;
  margin: ${marginSize}px;


  height: ${heightSize}px;
  width: ${widthSize}px;
  
 border-style:${borderStyle } ;
  border-width:${borderWidth}px;
  border-radius: ${borderRadius}%;
  
  
 
  `;


  document.getElementById("css-output").textContent = cssOutput;

//calling function
// bgColor = addcollen(document.getElementById("background-color").value);
// textColor = addcollen(document.getElementById("text-color").value);
// fontSize = addcollen(document.getElementById("font-size").value);
// marginSize = addcollen(document.getElementById("margin-size").value);
// paddingSize = addcollen(document.getElementById("padding-size").value);
// borderRadius = addcollen(document.getElementById("borderRadius").value);
// fontFamily = addcollen(document.getElementById("fontslist").value);
// heightSize = addcollen(document.getElementById("height-size").value);
// widthSize = addcollen(document.getElementById("width-size").value);



  let inlineCSS
  cssOutput = cssOutput.replace("\n", "");
  // cssOutput = cssOutput.replace(/(\b\d+\b)/g, '"$1"');
  cssOutput = cssOutput
  cssOutPutInline=`<button style='${cssOutput}'>text</button>`;
  console.log(bgColor)
  
}, 10);


function exportCSS() {
  const cssOutput = document.getElementById("css-output").textContent;
  const blob = new Blob([cssOutput], { type: "text/css" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "styles.css";

  link.click();
}

// function copyToClipBoard() {
//   var copyText = document.getElementById("css-output");
//   navigator.clipboard.writeText(copyText.innerHTML);
// }

//MAKE BUTTON
function copyToClipBoard() {
  var copyText = document.getElementById("css-output");
  navigator.clipboard.writeText(cssOutPutInline);
}

function addcollen(value){
  value = '"'+value+'"';
  return value;

}

