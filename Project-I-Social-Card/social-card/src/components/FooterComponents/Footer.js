// Create a <Footer/> component that pulls in the icons and displays them properly.
// Build out the functionality so that a user can click on the icons and have them react to events.
// Ensure that your product is as pixel perfect as possible using any tools that you were introduced to in previous weeks.
// Look up the moment.js library and figure out how to format your time-stamp in your header to be todays date.

import React from 'react';
import './Footer.css';

const cardIcons = [
    {
        icon: 'comment',
        iconsrc: 'far fa-comment fa-flip-horizontal',
        numCalled: 0
    },
    {
        icon: 'sync',
        iconsrc: 'fas fa-sync',
        numCalled: 0
    },
    {
        icon: 'heart',
        iconsrc: 'far fa-heart',
        numCalled: 0
    },
    {
        icon: 'envelope',
        iconsrc: 'far fa-envelope',
        numCalled: 0
    }
];

const Footer = () => {
    return (
      <footer>
          <i class="far fa-comment"></i> <i class="far fa-envelope"></i>
      </footer>
    );
}
export default Footer;

// const FooterIcons = () => {
//     return (
//       <footer>
//       </footer>
//     );
// }
// export default FooterIcons;