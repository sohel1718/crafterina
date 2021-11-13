import React from 'react';
import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import Banner from "./component/Banner";
import Loader from "./component/Loader";
import CustomerCard from '../../components/CustomerCard';

const Home = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);
    return (
        <>
        <AnimateSharedLayout type='crossfade'>
            <AnimatePresence>
                {loading ? (
                <motion.div key='loader'>
                    <Loader setLoading={setLoading} />
                </motion.div>
                ) : (
                <>
                    <Banner />
                    {!loading && (
                    <div className='transition-image final'>
                        <motion.img
                        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                        src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                        layoutId='main-image-1'
                        />
                    </div>
                    )}
                </>
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
        {!loading && (
            <AwesomeSlider
                animation="foldOutAnimation"
                cssModule={[CoreStyles, AnimationStyles]}
                organicArrows={true}
                buttonArrows={true}
            >
               <div>
                <CustomerCard />
               </div>
               <div>
                <CustomerCard />
               </div>
               <div>
                <CustomerCard />
               </div>
          </AwesomeSlider>
        )}
        {!loading && (
            <div className="about-us">
            <h1>Let's gift someting unique to your loved ones.</h1>
            <p>
                Intricate designs and detailing you have never seen before. Because these are crafted with passion
            </p>
            <img src="/images/right-arrow.png" alt="" />
            <div className="image">
                <img src="/images/craft1.jpg" alt="" />
            </div>
        </div>
        )}
        {!loading && (
           <>
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
           </>
        )}
        </>
    )
}

export default Home