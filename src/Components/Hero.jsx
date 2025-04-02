import styles from '../Styles/Hero.module.css'
import Section from './Section';
import Header from './Header';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Hero(){
    const [header, setHeader] = useState(false);
    const handleHeader = () => setHeader((prev) => (!prev));
    return (
      <div className={styles.hero}>
        {header && <Header header={header} />}
        <Section sect="first" handleHeader={handleHeader} />
        <Section sect="second" handleHeader={handleHeader} />
      </div>
    );
}

export default Hero;