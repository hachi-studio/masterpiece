import React, { useState, useEffect } from 'react';

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    // we don't need to measure here height of the nav, because it's static (150)
    const isVisible = prevScrollpos > currentScrollPos || currentScrollPos < 150;
    setPrevScrollpos(currentScrollPos);
    setVisible(isVisible);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`mp-header a-c bg-c ${!visible && 'mp-header-scroll'}`}>
      <h1>
        Masterpiece
        <span>™</span>
      </h1>
    </nav>
  );
};

export default Header;
