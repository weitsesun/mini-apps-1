class CreateBoard extends React.Component {
  constructor(props) {
    super(props);
  }


  generateBoard() {
    var curBoard = this.props.board;
    var final = [];

    var bg = {backgroundColor: "red"};
    //generate new board
    for(var r = 0; r < curBoard.length; r++) {
      var col = [];
      for (var c = 0; c < curBoard[r].length; c++) {
        switch(curBoard[r][c]) {
          case 1:
            col.push(<button class="row" data-r={r} data-c={c} style={{backgroundColor: "red"}} onClick={this.props.updateBoard}></button>)
            break;
          case 2:
            col.push(<button class="row" data-r={r} data-c={c} style={{backgroundColor: "yellow"}} onClick={this.props.updateBoard}></button>)
            break;
          default:
            col.push(<button class="row" data-r={r} data-c={c} style={{backgroundColor: "white"}} onClick={this.props.updateBoard}></button>)
        }
      }
      col.push(<br/>);
      final.push(col);
    }

    return final;
  }


  render() {
    return (
      <div className="board">
        {this.generateBoard().map((elem) => (elem))}
      </div>
    )
  }
}

export default CreateBoard;