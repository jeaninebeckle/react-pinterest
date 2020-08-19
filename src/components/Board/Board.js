import React from 'react';
import boardShape from '../../helpers/props/boardShape';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
  }

  render() {
    const { board } = this.props;

    return (
      <div className="card text-center">
      <div className="card-header"><h5>{board.category}</h5></div>
      <div className="card-body">
        <button className="btn btn-secondary">View Board Details</button>
      </div>
      <div className="card-footer text-muted"></div>
    </div>
    );
  }
}

export default Board;
