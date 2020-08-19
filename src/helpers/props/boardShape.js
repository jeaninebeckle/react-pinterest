import PropTypes from 'prop-types';

const boardShape = PropTypes.shape({
  category: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { boardShape };
