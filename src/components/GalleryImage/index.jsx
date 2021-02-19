import React from 'react';
import PropTypes from 'prop-types';

const GalleryImage = ({ url, alt }) => (
  <figure className="mp-gallery-image">
    <img src={url} alt={alt} />
  </figure>
);

GalleryImage.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default GalleryImage;
