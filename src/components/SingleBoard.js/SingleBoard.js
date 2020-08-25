import React from 'react';
import PropTypes from 'prop-types';
import boardsData from '../../helpers/data/boardsData';
import pinData from '../../helpers/data/pinData';
import Pin from '../Pin/Pin';
import PinForm from '../PinForm/PinForm';

class SingleBoard extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    setSingleBoard: PropTypes.func.isRequired,
  }

  state= {
    board: {},
    pins: [],
    pinFormOpen: false,
  }

  getPins = () => {
    const { boardId } = this.props;
    pinData.getPinsByBoardId(boardId)
      .then((pins) => this.setState({ pins }))
      .catch((err) => console.error('get pins failed', err));
  }

  componentDidMount() {
    const { boardId } = this.props;
    boardsData.getSingleBoard(boardId)
      .then((response) => this.setState({ board: response.data }))
      .catch((err) => console.error('get single board failed', err));

    this.getPins();
  }

  deletePin = (pinId) => {
    pinData.deletePin(pinId)
      .then(() => {
        this.getPins();
      })
      .catch((err) => console.error('delete pin failed', err));
  }

  createPin = (newPin) => {
    pinData.addPin(newPin)
      .then(() => {
        this.getPins();
        this.setState({ pinFormOpen: false });
      })
      .catch((err) => console.error('create pin broke', err));
  }

  render() {
    const { board, pins, pinFormOpen } = this.state;
    const { setSingleBoard, boardId } = this.props;

    const pinCards = pins.map((pin) => <Pin key={pin.id} pin={pin} deletePin={this.deletePin}/>);

    return (
      <div>
        <h4>{board.category}</h4>
          <button className="btn btn-danger m-3" onClick={() => { setSingleBoard(''); }}>X</button>
          <button className="btn btn-outline-warning m-3" onClick={() => { this.setState({ pinFormOpen: !pinFormOpen }); }}>Add Pin</button>
            { pinFormOpen ? <PinForm boardId={boardId} createPin={this.createPin}/> : '' }
          <div className="card-columns">
          {pinCards}
        </div>
      </div>
    );
  }
}

export default SingleBoard;
