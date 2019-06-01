// Create a <CardBanner /> component that will display this image as it's background: 
    // https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png
import React from 'react';

const CardBanner = () => {
    return (
        <div class="CardBanner">
            <a href="https://reactjs.org/">
            <img alt="Card Banner" 
                src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" 
            /></a>
        </div>
    );
}

export default CardBanner;