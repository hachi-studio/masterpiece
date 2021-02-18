import React from 'react';
import PropTypes from 'prop-types';

const GalleryImage = ({ url, alt }) => (
  <div className="mp-gallery-image">
    <img src={url} alt={alt} />
  </div>
);

GalleryImage.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default GalleryImage;
