var restart = document.querySelector('#b');
var squares = document.querySelectorAll('td');
function clearBoard() {
    for (var i = 0; i < squares.length; i++) 
    {
        squares[i].textContent = '';
        squares[i].classList.remove('strike');
    }
}
restart.addEventListener('click', clearBoard);
var currentPlayer = 'X'; // Tracks the current player
function handleCellClick() 
{
    // Check if the cell is already filled or the game is over (all cells filled)
    if (this.textContent !== '' || isGameOver()) 
    {
        return;  // Exit the function if cell is filled or game is over
    }
    // Set the cell content based on the current player
    this.textContent = currentPlayer;
    // Check for a win
    checkWin();
    // Switch player after each successful move
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
function isGameOver() 
{
  // Check if all cells are filled (game over)
  for (let i = 0; i < squares.length; i++) 
  {
    if (squares[i].textContent === '') 
    {
      return false; // Not game over if any empty cell found
    }
  }
  return true;
}
for (var i = 0; i < squares.length; i++) 
{
    squares[i].addEventListener('click', handleCellClick);
}
function checkWin() 
{
    const winPatterns = 
    [
        ['one', 'two', 'three'],
        ['four', 'five', 'six'],
        ['seven', 'eight', 'nine'],
        ['one', 'four', 'seven'],
        ['two', 'five', 'eight'],
        ['three', 'six', 'nine'],
        ['one', 'five', 'nine'],
        ['three', 'five', 'seven']
    ];
    for (let pattern of winPatterns) 
    {
        const [a, b, c] = pattern;
        const cellA = document.getElementById(a);
        const cellB = document.getElementById(b);
        const cellC = document.getElementById(c);
        if (cellA.textContent && cellA.textContent === cellB.textContent && cellA.textContent === cellC.textContent) 
        {
            cellA.classList.add('strike');
            cellB.classList.add('strike');
            cellC.classList.add('strike');
            break;
        }
    }
}
