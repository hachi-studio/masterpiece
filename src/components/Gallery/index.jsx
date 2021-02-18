import React from 'react';
import PropTypes from 'prop-types';
import GalleryImage from '../GalleryImage';

const Gallery = () => (
  <div className="mp-gallery w">
    <div className="r">
      <div className="c">
        <GalleryImage
          url="https://images.unsplash.com/photo-1612298423159-dccda132f28d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
          alt="Alt text"
        />
      </div>
      <div className="c">
        <GalleryImage
          url="https://images.unsplash.com/photo-1612298423159-dccda132f28d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
          alt="Alt text"
        />
      </div>
      <div className="c">
        <GalleryImage
          url="https://images.unsplash.com/photo-1612298423159-dccda132f28d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
          alt="Alt text"
        />
      </div>
    </div>
  </div>
);

GalleryImage.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Gallery;
