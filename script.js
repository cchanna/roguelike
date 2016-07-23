function gameUpdateAndRender(state)
{
  for (let i=0; i < state.height; i++)
  {
    for (let j=0; j < state.width; j++)
    {
      let square = state.tiles[i][j];
      square.textContent = 'a';
    }
  }
}

window.onload = function ()
{
  let state = {};
  state.width = 50;
  state.height = 40;
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
  gameUpdateAndRender(state);
}
