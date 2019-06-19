import React from 'react';

function FooterIcons(props) {
    return (
        <div class="footericons">
            <i class={props.socialicon.iconsrc}></i>
            <span>{props.socialicon.numCalled}</span>
        </div>
    );
}
export default FooterIcons;