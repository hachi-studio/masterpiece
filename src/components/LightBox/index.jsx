import React from 'react';
import PropTypes from 'prop-types';
import LightBoxHeader from './light-box-header';

const lightbox = ({
  isLast,
  isFirst,
  index,
  updateActivePhotoIndex,
  image,
}) => (
  <div className="mp-gallery-lightbox">
    <div className="mp-gallery-lightbox-close-area" role="button" aria-hidden="true" onClick={() => updateActivePhotoIndex(null)} />
    {!isFirst ? (
      <i
        className="mp-chevron-left z-4"
        role="button"
        aria-hidden="true"
        onClick={() => updateActivePhotoIndex(index - 1)}
      />
    ) : (
      <i
        className="mp-chevron-left z-4 mp-chevron-disabled"
      />
    )}
    <div className="mp-gallery-lightbox-content z-4">
      <LightBoxHeader image={image} />
      <img className="mp-gallery-lightbox-image" src={image.urls.regular} alt={image.alt_description} />
    </div>
    {!isLast ? (
      <i
        className="mp-chevron-right z-4"
        role="button"
        aria-hidden="true"
        onClick={() => updateActivePhotoIndex(index + 1)}
      />
    ) : (
      <i
        className="mp-chevron-right z-4 mp-chevron-disabled"
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
