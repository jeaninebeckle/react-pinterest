import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

import './BoardForm.scss';

class BoardForm extends React.Component {
  static propTypes = {
    createBoard: PropTypes.func.isRequired,
    updateBoard: PropTypes.func.isRequired,
    editingBoard: PropTypes.object.isRequired,
  }

  state = {
    category: '',
    isEditing: false,
  }

  componentDidMount() {
    const { editingBoard } = this.props;
    if (editingBoard.category) {
      this.setState({
        category: editingBoard.category,
        isEditing: true,
      });
    }
  }

  changeCategoryEvent = (e) => {
    e.preventDefault();
    this.setState({ category: e.target.value });
  }

  saveBoardEvent = (e) => {
    e.preventDefault();
    const { category } = this.state;
    const { createBoard } = this.props;

    const newBoard = {
      category,
      uid: authData.getUid(),
    };

    createBoard(newBoard);
  }

  editBoardEvent = (e) => {
    e.preventDefault();
    const { category } = this.state;
    const { updateBoard, editingBoard } = this.props;

    const boardWithChanges = {
      category,
      uid: authData.getUid(),
    };

    updateBoard(editingBoard.id, boardWithChanges);
  }

  render() {
    const { category, isEditing } = this.state;
    return (
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="boardName">Board Category</label>
          <input type="text" className="form-control" id="boardCategory" placeholder="Enter Board Name" value={category} onChange={this.changeCategoryEvent}/>
        </div>
        {
          isEditing
            ? <button className="btn btn-outline-dark" onClick={this.editBoardEvent}>Edit Board</button>
            : <button className="btn btn-outline-dark" onClick={this.saveBoardEvent}>Save Board</button>
        }
      </form>
    );
  }
}

export default BoardForm;
