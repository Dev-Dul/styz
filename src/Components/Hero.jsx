import styles from '../Styles/Hero.module.css'
import Section from './Section';

function Hero(){
    return (
      <div className={styles.hero}>
        <Section sect="first" />
        <Section sect="second" />
      </div>
    );
}

export default Hero;