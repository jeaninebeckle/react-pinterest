import React from 'react';
import PropTypes from 'prop-types';
import boardShape from '../../helpers/props/boardShape';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    setSingleBoard: PropTypes.func.isRequired,
    deleteBoard: PropTypes.func.isRequired,
  }

  singleBoardEvent = (e) => {
    e.preventDefault();
    const { board, setSingleBoard } = this.props;
    setSingleBoard(board.id);
  }

  deleteBoardEvent = (e) => {
    e.preventDefault();
    const { board, deleteBoard } = this.props;
    deleteBoard(board.id);
  }

  render() {
    const { board } = this.props;

    return (
      <div className="card text-center">
      <div className="card-header"><h5>{board.category}</h5></div>
      <div className="card-body">
        <button className="btn btn-secondary" onClick={this.singleBoardEvent}>View Board Details</button>
      </div>
      <div className="card-footer text-muted"><button className="btn btn-outline-danger" onClick={this.deleteBoardEvent}>X</button></div>
    </div>
    );
  }
}

export default Board;
