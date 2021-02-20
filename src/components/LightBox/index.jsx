import React from 'react';
import PropTypes from 'prop-types';

const lightbox = ({
  isLast,
  isFirst,
  index,
  updateActivePhotoIndex,
  image,
}) => (
  <div className="mp-gallery-lightbox">
    {!isFirst && (
      <i
        className="mp-chevron-left"
        role="button"
        aria-hidden="true"
        onClick={() => updateActivePhotoIndex(index - 1)}
      />
    )}
    <div className="mp-gallery-lightbox-content">
      <div className="mp-gallery-header">
        <img src={image.user.profile_image.medium} alt={image.user.name} />
        <p>{image.user.name}</p>
      </div>
      <img className="mp-gallery-lightbox-image" src={image.urls.regular} alt={image.alt_description} />
    </div>
    {!isLast && (
    <i
      className="mp-chevron-right"
      role="button"
      aria-hidden="true"
      onClick={() => updateActivePhotoIndex(index + 1)}
    />
    )}
    <i
      className="mp-close"
      role="button"
      aria-hidden="true"
      onClick={() => updateActivePhotoIndex(null)}
    />
  </div>
);

lightbox.propTypes = {
  isLast: PropTypes.bool.isRequired,
  isFirst: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  image: PropTypes.objectOf(PropTypes.any).isRequired,
  updateActivePhotoIndex: PropTypes.func.isRequired,
};

export default lightbox;
