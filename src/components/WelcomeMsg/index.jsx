import React, { useState } from 'react';

const WelcomeMsg = () => {
  const [visible, setVisible] = useState(true);
  if (visible) {
    return (
      <div className="mp-welcome-msg">
        <i onClick={() => setVisible(false)} className="mp-close" role="button" aria-hidden="true" />
        <p><strong>Welcome to the Masterpiece™ gallery</strong></p>
        <p>Features include:</p>
        <ul>
          <li>Images being pulled from Unsplash API</li>
          <li>Responsive layout</li>
          <li>Custom infinite scroll</li>
          <li>Custom lightbox popup</li>
          <li>Toggle lightbox images left and right</li>
          <li>Darkmode (based on system color scheme)</li>
          <li>No 3rd party librarys*</li>
        </ul>
        <p>
          Built by&nbsp;
          <a taget="_blank" href="https://hachi.studio/">Hachi</a>
        </p>
        <p>
          <small>
            *apart from my own&nbsp;
            <a taget="_blank" href="https://github.com/hachi-studio/grail-css">minimal CSS base library</a>
          </small>
        </p>
      </div>
    );
  }
  return null;
};

export default WelcomeMsg;
