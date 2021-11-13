import React, { useEffect } from "react";
import user from '../../assets/images/user.jpg';

const About = () => {

    return (
        <div className="about">
            <div className="about_wrapper">
                <div className="about_wrapper_info">  
                    <div className="about_wrapper_info_bottom">
                        <div className="about_wrapper_info_bottom_top">
                            <img src={user} alt="" />
                        </div>
                    </div>
                </div>
                <div className="about_wrapper_info-data">
                        <div class="typewriter">
                            <h1>Hi, I'm Sohel Chhipa.I'm a craft artist.</h1>
                        </div>
                        <p className="about_wrapper_info-data_desc">
                            I'm passionate about making sure that systems,
                            interfaces, language and graphics are human-friendly,
                            emotive, aesthetically pleasing, clear, on-brand
                            and usable—with a touch of mellow smoothness.
                        </p>
                    </div>
                    <div className="about_wrapper_heading">
                        My creation
                    </div>
                <div className="about_wrapper_creation">
                    <div className="about_wrapper_creation_box">
                        <div class="videoWrapper">
                            <iframe title="video" width="560" height="349" src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="about_wrapper_creation_box">
                        <div class="videoWrapper">
                            <iframe title="video" width="560" height="349" src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="about_wrapper_creation_box">
                        <div class="videoWrapper">
                            <iframe title="video" width="560" height="349" src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="about_wrapper_creation_box">
                        <div class="videoWrapper">
                            <iframe title="video" width="560" height="349" src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="about_wrapper_creation_box">
                        <div class="videoWrapper">
                            <iframe title="video" width="560" height="349" src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="insta-title">
                  <img src="/images/instagram.png" alt="" />  
                  <span>@crafterina</span>
                </div>
                <div className="insta-feed">
                    <div className="insta-feed_post">
                        <img src="/images/craft10.jpg" alt="" />
                    </div>
                    <div className="insta-feed_post">
                        <img src="/images/craft4.jpg" alt="" />
                    </div>
                    <div className="insta-feed_post">
                        <img src="/images/craft7.jpg" alt="" />
                    </div>
                    <div className="insta-feed_post">
                        <img src="/images/craft9.jpg" alt="" />
                    </div>
                    <div className="insta-feed_post">
                        <img src="/images/craft9.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default About