import React from 'react';

function FooterIcons(props) {
    return (
        <div class="footericons">
            <i class={props.socialicon.iconsrc}></i>
        </div>
    );
}
export default FooterIcons;