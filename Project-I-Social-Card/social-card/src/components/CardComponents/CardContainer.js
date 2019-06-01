// Create a <CardContainer/ > container component that will hold your card components.
    // The entire <CardContainer /> should take a user to https://www.reactjs.org when clicked.
import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
      <div class="CardContainer" onclick="location.href='https://www.reactjs.org';">
          <CardBanner />
          <CardContent />
      </div>
    );
}

// class CardContainer extends React.Component {
//     constructor(props) {
//         super(props);
//     };
//     goToReact() {
//         window.location.href = 'https://www.reactjs.org'; 
//         return null;
//     }
//     render() {
//         return (
//             <div class="CardContainer" onclick={this.goToReact}>
//                 <CardBanner />
//                 <CardContent />
//             </div>
//         );
//     }
// }

export default CardContainer;