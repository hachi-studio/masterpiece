import React from 'react';
import PropTypes from 'prop-types';
import GalleryImageCaption from './gallery-image-caption';

const GalleryImage = ({ image }) => (
  <figure className="mp-gallery-image">
    <img className="mp-gallery-image-img" src={image.urls.regular} alt={image.alt_description} />
    <GalleryImageCaption image={image} />
  </figure>
);

GalleryImage.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GalleryImage;
