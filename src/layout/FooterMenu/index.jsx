import React from 'react';

const FooterMenu = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-menu">
                <div className="footer-menu_item-active">
                    <img src="/images/home.png" alt="" />
                    <span>Home</span>
                </div>
                <div className="footer-menu_item">
                    <img src="/images/info.png" alt="" />
                </div>
                <div className="footer-menu_item">
                    <img src="/images/origami-unfilled.png" alt="" />
                </div>
                <div className="footer-menu_item">
                    <img src="/images/question.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default FooterMenu;