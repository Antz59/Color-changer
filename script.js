
var addbtn = document.getElementById('add-btn');
var dropdown = document.getElementById('color-options')
var removeBtn = document.getElementById('remove-current-btn')

init();

function init(){
  for(var i = 0; i < color.length; i++)
  createColorOption(color[i]);
}

createColorButton('red');
createColorButton('yellow');
createColorButton('green');

function createColorOption(color) {}

function createColorButton(color) {}

function removeColorOption(color){
  document.querySelector(
    '#color-options > [value="'color +'"]'
    );
    Option.remove();
}

function removeColorBtn(color){
  var btn = document.getElementById(color + '-btn')
  btn.remove();
}

addBtn.addEventListener('click', function(){
  var currColor = dropdown.nodeValue;
  createColorButton(currColor);
  removeColorOption(currColor);
});

removeBtn.addEventListener('click', function(){
  var currColor = document.body.style.backgroundColor;
  removeColorBtn
})