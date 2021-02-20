import React from 'react';
import PropTypes from 'prop-types';

const Caption = ({ image }) => (
  <figcaption className="mp-gallery-image-info">
    <img src={image.user.profile_image.medium} alt={image.user.name} />
    <p>{image.user.name}</p>
  </figcaption>
);

Caption.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Caption;
