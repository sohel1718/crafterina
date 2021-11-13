import React from "react";
import { motion } from "framer-motion";
import { auth } from '../../firebase';

const Header = () => {

  const logOut = () => {
    auth.signOut();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <div className='header-inner'>
        <div className='logo'>Crafterina</div>
        <nav className='nav'>
          <li>
            <a href='/design'>Home</a>
          </li>
          <li>
            <a href='/strategy'>About</a>
          </li>
          <li>
            <a href='/why'>Why to gift crafts?</a>
          </li>
        </nav>
        <div className='contact'>
          <a href='/contact'>Let's find crafts</a>
        </div>
        <div onClick={() => logOut()} className='hamburger-menu'>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
