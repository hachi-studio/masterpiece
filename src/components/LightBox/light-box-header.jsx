import React from 'react';
import PropTypes from 'prop-types';

const LightBoxHeader = ({ image }) => (
  <div className="mp-gallery-header">
    <a href={`https://unsplash.com/@${image.user.username}`}>
      <img src={image.user.profile_image.medium} alt={image.user.name} />
    </a>
    <a href={`https://unsplash.com/@${image.user.username}`}>
      <p>{image.user.name}</p>
      <p className="mp-username">
        @
        {image.user.username}
      </p>
    </a>
    <a className="mp-gallery-header-link" href={image.links.html} rel="noreferrer" target="_blank">
      <i className="mp-arrow-top-right" />
    </a>
  </div>
);

LightBoxHeader.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default LightBoxHeader;
