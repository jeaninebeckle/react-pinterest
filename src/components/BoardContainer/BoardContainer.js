import React from 'react';
import PropTypes from 'prop-types';
import Board from '../Board/Board';
import BoardForm from '../BoardForm/BoardForm';
import authData from '../../helpers/data/authData';
import boardsData from '../../helpers/data/boardsData';
import smash from '../../helpers/data/smash';

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    boards: [],
    formOpen: false,
    editBoard: {},
  }

  getBoards = () => {
    boardsData.getBoardsByUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('get boards broke!!', err));
  }

  componentDidMount() {
    this.getBoards();
  }

  deleteBoard = (boardId) => {
    smash.totallyRemovePins(boardId)
      .then(() => {
        this.getBoards();
      })
      .catch((err) => console.error('delete board failed', err));
  }

  createBoard = (newBoard) => {
    boardsData.createBoard(newBoard)
      .then(() => {
        this.getBoards();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('create board broke', err));
  }

  editABoard = (boardToEdit) => {
    this.setState({ formOpen: true, editBoard: boardToEdit });
  }

  render() {
    const { boards, formOpen } = this.state;
    const { setSingleBoard } = this.props;
    const boardCard = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard} deleteBoard={this.deleteBoard} editABoard={this.editABoard}/>);
    return (
      <div>
      <button className="btn btn-outline-warning m-3" onClick = {() => { this.setState({ formOpen: !formOpen }); }}>Show Form</button>
        { formOpen ? <BoardForm createBoard={this.createBoard}/> : '' }
        <div className="card-columns">
          {boardCard}
        </div>
      </div>
    );
  }
}

export default BoardContainer;
