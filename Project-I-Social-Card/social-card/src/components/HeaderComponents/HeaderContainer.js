// Create a <HeaderContainer /> container component that will hold your header components.
import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const Header = () => {
    return (
      <header>
          <ImageThumbnail />
          <HeaderTitle />
          <HeaderContent />
      </header>
    );
}

export default Header;