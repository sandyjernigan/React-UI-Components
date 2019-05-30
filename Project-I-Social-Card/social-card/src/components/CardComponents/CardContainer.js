// Create a <CardContainer/ > container component that will hold your card components.
    // The entire <CardContainer /> should take a user to https://www.reactjs.org when clicked.
import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
      <div onclick="location.href='https://www.reactjs.org';">
          <CardBanner />
          <CardContent />
      </div>
    );
}

export default CardContainer;