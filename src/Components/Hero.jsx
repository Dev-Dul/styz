import styles from '../Styles/Hero.module.css'
import Section from './Section';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Hero( {handleHeader} ){
    return (
      <div className={styles.hero}>
        <Section sect="first" handleHeader={handleHeader} />
        <Section sect="second" handleHeader={handleHeader} />
      </div>
    );
}

export default Hero;