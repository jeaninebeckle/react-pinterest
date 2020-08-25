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

  render() {
    const { boards, formOpen } = this.state;
    const { setSingleBoard } = this.props;
    const boardCard = boards.map((board) => <Board key={board.id} board={board} setSingleBoard={setSingleBoard} deleteBoard={this.deleteBoard}/>);
    return (
      <div>
      <button className="btn btn-outline-warning" onClick = {() => { this.setState({ formOpen: !formOpen }); }}>Show Form</button>
        { formOpen ? <BoardForm /> : '' }
        <div className="card-columns">
          {boardCard}
        </div>
      </div>
    );
  }
}

export default BoardContainer;
