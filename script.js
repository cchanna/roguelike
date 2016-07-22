function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

window.onload = function ()
{
  let width = 50;
  let height = 20;
  let gameWindow = document.getElementById('game');
  addClass(gameWindow, 'active');
  for (let i=0; i < height; i++)
  {
    let row = document.createElement('div');
    addClass(row, 'row');
    for (let j=0; j < width; j++)
    {
      let square = document.createElement('div');
      square.textContent = 'a';
      addClass(square, 'square');
      row.appendChild(square);
    }
    gameWindow.appendChild(row);
  }
}
