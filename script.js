function init(state)
{
  state.width = 50;
  state.height = 30;
  state.player = {};
  state.player.x = 20;
  state.player.y = 15;
  state.key = "";
  state.tiles = new Array(state.height);
  let gameWindow = document.getElementById('game');
  gameWindow.classList.add('active');
  for (let i=0; i < state.height; i++)
  {
    let row = document.createElement('div');
    state.tiles[i] = new Array(state.width);
    row.classList.add('row');
    for (let j=0; j < state.width; j++)
    {
      let square = document.createElement('div');
      state.tiles[i][j] = square;
      square.classList.add('square');
      row.appendChild(square);
    }
    gameWindow.appendChild(row);
  }
  state.map =
}

function gameUpdateAndRender(state)
{
  state.tiles[0][0].textContent = state.key;
  state.tiles[state.player.y][state.player.x].textContent = ' ';
  switch (state.key)
  {
    case 'w':
      state.player.y--;
      break;
    case 'a':
      state.player.x--;
      break;
    case 's':
      state.player.y++;
      break;
    case 'd':
      state.player.x++;
      break;
    default:
      break;
  }
  state.tiles[state.player.y][state.player.x].textContent = '@';


}

window.onload = function ()
{
  let state = {};
  gameUpdateAndRender(state);
  document.onkeydown = function(evt) {
    evt = evt || window.evt;
    console.log(evt);
    state.key = evt.key;
    gameUpdateAndRender(state);
  };
}
