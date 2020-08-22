import React from 'react';
import PropTypes from 'prop-types';
import pinShape from '../../helpers/props/pinShape';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    deletePin: PropTypes.func.isRequired,
  }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { pin, deletePin } = this.props;
    deletePin(pin.id);
  }

  render() {
    const { pin } = this.props;

    return (
      <div className="card">
        <img className="card-img-top" src={pin.imgUrl} alt="Card cap"/>
         <div className="card-body">
         <button className="btn btn-danger" onClick={this.deletePinEvent}>delete pin</button>
         <h5 className="card-title">{pin.title}</h5>
      </div>
    </div>
    );
  }
}

export default Pin;
