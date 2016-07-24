function colorToRgbString(color, shade)
{
  if (color != null && color.r != null && color.g != null && color.b != null)
  {
    return 'rgb(' + Math.round((shade*color.r)) + ',' + Math.round((shade*color.g)) + ',' + Math.round((shade*color.b)) +')'
  }
  else
  {
    return 'red'
  }
}

function fov(map, mapx, mapy, mapz)
{
  return null; // TODO this thing
}

function init(state)
{
  function onClickSquare()
  {
    x = this.id.split('-')[2];
    y = this.id.split('-')[1];
    if (!state.map[y][x].class) {
      state.map[y][x].class = 'wall';
    }
    else {
      state.map[y][x].class = '';
    }
    state.key = "";
    gameUpdateAndRender(state);
  }

  state.width = 50;
  state.height = 30;
  state.player = {};
  state.player.x = 15;
  state.player.y = 15;
  state.key = "";
  state.player.light = 8;
  state.tiles = new Array(state.height);
  state.types = {};
  state.types['wall'] = {};
  state.types['wall'].color = {r: 0, g: 0, b: 0};
  state.types['wall'].background = {r: 255, g: 255, b: 255};

  state.types[''] = {};
  state.types[''].color = {r: 100, g: 100, b: 100};
  state.types[''].background = {r: 0, g: 0, b: 0};

  state.types['player'] = {};
  state.types['player'].color = {r: 255, g: 255, b: 255};
  state.types['player'].background = {r: 0, g: 0, b: 0};

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
      row.appendChild(square);
      square.id = 'square-' + i + '-' + j;
      square.onclick = onClickSquare;
    }
    gameWindow.appendChild(row);
  }
  state.map = new Array(state.height);
  for (let i=0; i < state.height; i++)
  {
    state.map[i] = new Array(state.width);
    for (let j=0; j < state.width; j++)
    {
      let tile = {};
      tile.class = '';
      state.map[i][j] = tile;
    }
  }
}

function gameUpdateAndRender(state)
{
  switch (state.key)
  {
    case 'w':
      if (state.player.y > 0)
      {
        state.player.y--;
      }
      break;
    case 'a':
      if (state.player.x > 0)
      {
        state.player.x--;
      }
      break;
    case 's':
      if (state.player.y < state.height - 1)
      {
        state.player.y++;
      }
      break;
    case 'd':
      if (state.player.x < state.width - 1)
      {
        state.player.x++;
      }
      break;
    default:
      break;
  }
  for (let r=0; r < state.height; r++)
  {
    for (let c=0; c < state.width; c++)
    {
      let object = state.map[r][c].class;
      if (state.player.x == c && state.player.y == r)
      {
        object = 'player';
      }
      let dx = state.player.x - c;
      let dy = state.player.y - r;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let shade = 1 - ((1 / state.player.light) * Math.min(state.player.light, distance));
      switch (object)
      {
          case 'wall':
            state.tiles[r][c].textContent = '#';
            break;
          case 'player':
            state.tiles[r][c].textContent = '@';
            break;
          default:
            state.tiles[r][c].innerHTML = '&bull;';
            break;
      }
      let color = state.types[object].color;
      state.tiles[r][c].style['color'] = colorToRgbString(color, shade);
      let background = state.types[object].background;
      state.tiles[r][c].style['background-color'] = colorToRgbString(background, shade);

    }
  }
}

window.onload = function ()
{
  let state = {};
  init(state);
  gameUpdateAndRender(state);
  document.onkeydown = function(evt) {
    evt = evt || window.evt;
    console.log(evt);
    state.key = evt.key;
    gameUpdateAndRender(state);
  };
}
