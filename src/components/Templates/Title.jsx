import './Title.css';
import React from 'react';
function Title() {
    return (
        <div className="title">
            <div className="title-text">Green AI</div>
            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>

                <ul class="menu__box">
                    <li><a class="menu__item" href="/signin">Login</a></li>
                    <li><a class="menu__item" href="/raport">Raport</a></li>
                    <li><a class="menu__item" href="/users">Users</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Title;