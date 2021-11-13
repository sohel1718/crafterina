import React from 'react';

const CraftDetails = ({ closeModal }) => {
    return (
        <div className="details">
            <div className="details_wrapper">
                <div className="details_wrapper_info">   
                    <div className="details_wrapper_back">
                        <img onClick={() => closeModal()} src="/images/right-arrow.png" alt="" />
                    </div>
                    <div className="details_wrapper_info_logo">
                        <span>Crafterina</span>
                    </div>
                    
                    <div className="details_wrapper_info_title">
                        Regular box with kitkate choclate  
                    </div>
                    
                    <div className="details_wrapper_info_desc">
                    It shows you 5 tips tricks for working with the Page Inspector in the Firefox Developer Tools. 
                    </div>
                    
                    <div className="details_wrapper_info_btn">
                        whishlist
                    </div>
                </div>
                <div className="details_wrapper_middle">
                    <img src="/images/craft13.jpg" alt="" />
                </div>
                <div className="details_wrapper_top" >
                    <div class="lines">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CraftDetails;