// Create a <Footer/> component that pulls in the icons and displays them properly.
// Build out the functionality so that a user can click on the icons and have them react to events.
// Ensure that your product is as pixel perfect as possible using any tools that you were introduced to in previous weeks.
// Look up the moment.js library and figure out how to format your time-stamp in your header to be todays date.

import React from 'react';
import FooterIcons from './FooterIcons';
import './Footer.css';

const cardIcons = [
    {
        icon: 'comment',
        iconsrc: 'far fa-comment fa-flip-horizontal'
    },
    {
        icon: 'sync',
        iconsrc: 'fas fa-sync',
        numCalled: 6
    },
    {
        icon: 'heart',
        iconsrc: 'far fa-heart',
        numCalled: 4
    },
    {
        icon: 'envelope',
        iconsrc: 'far fa-envelope',
    }
];

const Footer = () => {
    return (
      <div class="footer">
          {cardIcons.map(icon => {
              return <FooterIcons socialicon={icon} />;
          })}
          
      </div>
    );
}
export default Footer;