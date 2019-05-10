import CreateBoard from './CreateBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board:
      [[0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]],

      curPlayer: 1
    }
    this.updateBoard = this.updateBoard.bind(this);
  }

  //boradsize row: 6, column: 7
  
  updateBoard(e) {
    e.preventDefault();
    var r = e.target.dataset.r;
    var c = e.target.dataset.c;
    var copy = this.state.board.slice();
    copy[r][c] = this.state.curPlayer;
    var nextPlayer = this.state.curPlayer === 1 ? 2 : 1;

    copy = this.sortBoard(copy);

    this.setState({
      board: copy,
      curPlayer: nextPlayer
    })
  }

  sortBoard(copy) {
    //check each column
    for (var c = 0; c < copy[0].length; c++) {
      var curCol = [0,0,0,0,0,0];
      var count = 0;
      for (var r = copy.length - 1; r >= 0; r--) {
        if(copy[r][c] > 0) {
          curCol[count] = copy[r][c];
          count += 1;
        }
      }
      //put curCol to copy[i][c]
      for (var i = 0; i <  curCol.length ; i++) {
        var rev = curCol.length - i - 1;
        copy[i][c] = curCol[rev];
      }
    }

    return copy;
  }
  

  render() {
    return (
      <div>
        <CreateBoard board={this.state.board} updateBoard={this.updateBoard}/>
      </div>
    )
  }
}

export default App;