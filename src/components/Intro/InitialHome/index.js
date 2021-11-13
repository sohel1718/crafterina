import * as React from "react";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import ParticlesBg from 'particles-bg';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const InitialHome = ({ handleSwitch }) => (
    <>
        <ParticlesBg color="#fdfdfd" num={200} type="random" bg={true} />
        <main>
            <div className='container'>
                <div className='row center'>
                    <div className='image-container'>
                        <div
                            className='thumbnail'
                            style={{
                                width: 524,
                                height: 650,
                            }}>
                            <div className='frame'>
                                <div onClick={() => handleSwitch(1)}>
                                    <ProgressiveImage
                                        src={require("../../../assets/images/yasmeen.webp")}
                                        placeholder={require("../../../assets/images/compressed-image.jpg")}>
                                        {(src) => (
                                            <motion.img
                                                src={src}
                                                alt='Nikita Mundhra'
                                                whileHover={{ scale: 1.1 }}
                                                transition={transition}
                                            />
                                        )}
                                    </ProgressiveImage>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            exit={{ opacity: 0 }}
                            transition={transition}
                            className='information'>
                            <div className='title'>Nikita Mundhra</div>
                            <div className='location'>
                                <span>28.538336</span>
                                <span>-81.379234</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    </>
);

export default InitialHome;
