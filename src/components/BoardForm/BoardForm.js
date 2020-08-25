import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

import './BoardForm.scss';

class BoardForm extends React.Component {
  static propTypes = {
    createBoard: PropTypes.func.isRequired,
  }

  state = {
    category: '',
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

  render() {
    return (
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="boardName">Board Category</label>
          <input type="text" className="form-control" id="boardCategory" placeholder="Enter Board Name" onChange={this.changeCategoryEvent}/>
        </div>
        <button className="btn btn-outline-dark" onClick={this.saveBoardEvent}>Save Board</button>
      </form>
    );
  }
}

export default BoardForm;
