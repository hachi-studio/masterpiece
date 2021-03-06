import React, { useEffect, useState } from 'react';
import GalleryImage from '../GalleryImage';
import LightBox from '../LightBox';
import WelcomeMsg from '../WelcomeMsg';

const Gallery = () => {
  // Fade in effect for the gallery on init
  const [fadeIn, setFadeIn] = useState(false);
  // State holding the bool value of out loader
  const [loading, setLoading] = useState(false);

  // State holding the array of images
  const [unsplashImages, setUnsplashImages] = useState([]);

  // State holding the page number we want to fetch
  const [unsplashPage, setUpsplashPage] = useState(1);

  // Active photo index for lightbox, null will hide the box
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  // Function fetches images from unsplash API

  const fetchUnsplashImages = () => {
    // While fetching we set the loading state to true
    setLoading(true);

    // Send request to unsplash api with access token
    // We are also getting images from the next page using the page state
    fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&count=10&page=${unsplashPage}`)

      .then((response) => response.json())
      .then((data) => {
        // Add response to image array
        setUnsplashImages([...unsplashImages, ...data]);

        // Increase page number by one as that what we will search next time we fetch
        const newPage = unsplashPage + 1;
        setUpsplashPage(newPage);
      })
      .catch(() => {
        // console.log(err);
      })
      .finally(() => {
        // We have finished fetching images for now, lets set the loader to false
        setLoading(false);
      });
  };

  useEffect(() => {
    // Fetch first page of images on mount
    fetchUnsplashImages();
    // Delay fadein animation briefly
    setTimeout(() => { setFadeIn(true); }, 200);
  }, []);
  // Add class to body to stop scrolling when lighbox open
  useEffect(() => {
    if (activePhotoIndex === null) {
      document.body.classList.remove('mp-overflow-hidden');
    } else {
      document.body.classList.add('mp-overflow-hidden');
    }
  }, [activePhotoIndex]);

  // Function passed to the lightbox component to update the active
  // photo index which will be the active photo in the modal

  const updateActivePhotoIndex = (i) => {
    setActivePhotoIndex(i);
  };

  // Once we scroll to the bottom run the fetchUnsplashImages function
  window.onscroll = () => {
    if (window.innerHeight
      + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      fetchUnsplashImages();
    }
  };

  return (
    <>
      <div className={`mp-gallery w ${fadeIn ? 'mp-gallery-fadein' : ''}`}>
        <WelcomeMsg />
        {unsplashImages.map((image, i) => (
          <div key={image.id} role="button" aria-hidden="true" onClick={() => setActivePhotoIndex(i)}>
            <GalleryImage
              image={image}
            />
          </div>
        ))}
      </div>

      {activePhotoIndex !== null && (
        <LightBox
          isFirst={activePhotoIndex === 0}
          isLast={activePhotoIndex === unsplashImages.length - 1}
          index={activePhotoIndex}
          image={unsplashImages[activePhotoIndex]}
          updateActivePhotoIndex={updateActivePhotoIndex}
        />
      )}
      {loading ? <div key="1" className="mp-loader">Loading...</div> : null}
    </>
  );
};

export default Gallery;
