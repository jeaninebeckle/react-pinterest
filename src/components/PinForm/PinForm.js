import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

class PinForm extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    createPin: PropTypes.func.isRequired,
  }

  state = {
    title: '',
    webUrl: '',
    imgUrl: '',
  }

  changeTitleEvent = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  changeWebUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ webUrl: e.target.value });
  }

  changeImgUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imgUrl: e.target.value });
  }

  savePinEvent = (e) => {
    e.preventDefault();
    const {
      title,
      imgUrl,
      webUrl,
    } = this.state;

    const { createPin, boardId } = this.props;

    const newPin = {
      boardId,
      title,
      webUrl,
      imgUrl,
      uid: authData.getUid(),
    };

    createPin(newPin);
  }

  render() {
    return (
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="pinTitle">Pin Title</label>
          <input type="text" className="form-control" id="pinTitle" placeholder="Enter Pin Title" onChange={this.changeTitleEvent}/>
        </div>
        <div className="form-group">
          <label htmlFor="webUrl">Web Url</label>
          <input type="text" className="form-control" id="webUrl" placeholder="Enter Web URL" onChange={this.changeWebUrlEvent}/>
        </div>
        <div className="form-group">
          <label htmlFor="imgUrl">Image Url</label>
          <input type="text" className="form-control" id="imgUrl" placeholder="Enter Image URL" onChange={this.changeImgUrlEvent}/>
        </div>
        <button className="btn btn-outline-dark" onClick={this.savePinEvent}>Save Pin</button>
      </form>
    );
  }
}

export default PinForm;
