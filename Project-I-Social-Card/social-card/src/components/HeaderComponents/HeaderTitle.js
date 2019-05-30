// Create a <HeaderTitle /> component that displays the Lambda School header text, @LambdaSchool handle and timestamp.
import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div class="HeaderTitle">
            <div class="title">Lambda School</div>
            <div class="author">@LambdaSchool</div>
            <div  class="date">
                <ul>
                    <li>26 jan</li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderTitle;