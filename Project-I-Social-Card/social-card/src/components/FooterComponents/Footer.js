// Create a <Footer/> component that pulls in the icons and displays them properly.
// Build out the functionality so that a user can click on the icons and have them react to events.
// Ensure that your product is as pixel perfect as possible using any tools that you were introduced to in previous weeks.
// Look up the moment.js library and figure out how to format your time-stamp in your header to be todays date.

import React from 'react';
import './Footer.css';

// const cardIcons = [
//     {
//         icon: iconname,
//         numCalled: 0
//     }, 
//     {
//         icon: iconname,
//         numCalled: 0
//     }, 
//     {
//         icon: iconname,
//         numCalled: 0
//     }, 
//     {
//         icon: iconname,
//         numCalled: 0
//     }
// ];

const Footer = () => {
    return (
      <footer>
          This is the footer.
          <img src="../../svgs/sync.svg" />
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