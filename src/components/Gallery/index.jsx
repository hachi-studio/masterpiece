import React, { useState, useEffect } from 'react';
import GalleryImage from '../GalleryImage';

const Gallery = () => {
  // set inital value of unsplashImages to empty array
  const [unsplashImages, setUnsplashImages] = useState([]);

  async function fetchUnsplashImages() {
    // Send request to unsplash api with access token
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`);
    // Set response as state
    setUnsplashImages(await response.json());
  }
  useEffect(() => {
    fetchUnsplashImages();
  }, []);

  return (
    <div className="mp-gallery w">
      <div className="r">
        <div className="c">
          {unsplashImages.length ? unsplashImages.map((image) => (
            <GalleryImage
              url={image.urls.regular}
              alt={image.alt_description}
            />
          )) : (
            <p>No Images</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
