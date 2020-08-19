import React from 'react';
// import PropTypes from 'prop-types';
import pinShape from '../../helpers/props/pinShape';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
  }

  render() {
    const { pin } = this.props;

    return (
      <div className="card">
        <img className="card-img-top" src={pin.imgUrl} alt="Card image cap" />
         <div class="card-body">
         <h5 class="card-title">{pin.title}</h5>
      </div>
    </div>
    );
  }
}

export default Pin;
