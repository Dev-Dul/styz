import styles from '../Styles/Hero.module.css'
import Section from './Section';
import { useState } from 'react';

function Hero(){
  const [show, setShow] = useState(false);

    return (
      <div className={styles.hero}>
        <Section sect="first" show={show} setShow={setShow} />
        <Section sect="second" show={show} setShow={setShow} />
      </div>
    );
}

export default Hero;