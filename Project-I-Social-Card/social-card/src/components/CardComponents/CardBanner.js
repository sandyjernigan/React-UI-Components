// Create a <CardBanner /> component that will display this image as it's background: 
    // https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png
import React from 'react';
import './Card.css';

const CardBanner = () => {
    return (
        <div class="CardBanner">
            <img alt="Card Banner" 
                src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" 
            />
        </div>
    );
}

export default CardBanner;