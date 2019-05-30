// Create a <HeaderContainer /> container component that will hold your header components.
import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';

const Header = () => {
    return (
      <header>
          <ImageThumbnail />
          
      </header>
    );
}

export default Header;


// Create a <HeaderTitle /> component that displays the Lambda School header text, @LambdaSchool handle and timestamp.
// Create a <HeaderContent /> component that displays the copy provided in the headers content.

