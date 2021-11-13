import React, {useEffect, useRef, useState} from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

//Components
import ScrollForMore from "../../ScrollForMore";
//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
};

const lastName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
        },
    },
};

const letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition },
    },
};

const Model = ({ imageDetails }) => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const [canScroll, setCanScroll] = useState(false);

    useEffect(() => {
        if (canScroll === false) {
            document.querySelector("body").classList.add("no-scroll");
        } else {
            document.querySelector("body").classList.remove("no-scroll");
        }
    }, [canScroll]);

    return (
        <motion.div
            onAnimationComplete={() => setCanScroll(true)}
            className='single'
            initial='initial'
            animate='animate'
            exit='exit'>
            <div className='container fluid'>
                <div className='row center top-row'>
                    <div className='top'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 1.2, ...transition },
                            }}
                            className='details'>
                            <div className='location'>
                                <span>28.538336</span>
                                <span>-81.379234</span>
                            </div>
                            <div className='mua'>insta: @crafterina</div>
                        </motion.div>
                        <motion.div className='model'>
                            <motion.span className='first' variants={firstName}>
                                <motion.span variants={letter}>N</motion.span>
                                <motion.span variants={letter}>i</motion.span>
                                <motion.span variants={letter}>k</motion.span>
                                <motion.span variants={letter}>i</motion.span>
                                <motion.span variants={letter}>t</motion.span>
                                <motion.span variants={letter}>a</motion.span>
                            </motion.span>
                            <motion.span className='last' variants={lastName}>
                                <motion.span variants={letter}>M</motion.span>
                                <motion.span variants={letter}>u</motion.span>
                                <motion.span variants={letter}>n</motion.span>
                                <motion.span variants={letter}>d</motion.span>
                                <motion.span variants={letter}>h</motion.span>
                                <motion.span variants={letter}>r</motion.span>
                                <motion.span variants={letter}>a    </motion.span>
                            </motion.span>
                        </motion.div>
                    </div>
                </div>
                <div className='row bottom-row'>
                    <div className='bottom'>
                        <motion.div className='image-container-single'>
                            <motion.div
                                initial={{
                                    y: "-50%",
                                    width: 524,
                                    height: 650,
                                }}
                                animate={{
                                    y: 0,
                                    width: "100%",
                                    height: window.innerWidth > 1440 ? 800 : 400,
                                    transition: { delay: 0.2, ...transition },
                                }}
                                className='thumbnail-single'>
                                <motion.div
                                    className='frame-single'
                                    whileHover='hover'
                                    transition={transition}>
                                    <motion.img
                                        src={require("../../../assets/images/yasmeen.webp")}
                                        alt='an image'
                                        style={{ scale: scale }}
                                        initial={{ scale: 1.0 }}
                                        animate={{
                                            transition: { delay: 0.2, ...transition },
                                            y: window.innerWidth > 1440 ? -1200 : -600,
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                    <ScrollForMore />
                </div>
            </div>
            <div className='detailed-information'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='title'>
                            The insiration behind the artwork & <br /> what it means.
                        </h2>
                        <p>
                            The term "craft" denotes a skill, usually employed in branches
                            of the decorative arts (eg. ... Metal work, wood turning, glass
                            blowing, and glass art are examples of "studio crafts", as is
                            pottery - notably the studio pottery movement exemplified by
                            Bernard Leach in Britain.
                            A craftwork is an applied form of art, a social and cultural
                            product reflecting the inclusive nature of folk imagination.
                            Craftwork may refer to: Handicraft, work where useful and decorative
                            objects are made completely by hand or by using only simple tools.
                            Kraftwerk, a highly influential German band.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Model;
