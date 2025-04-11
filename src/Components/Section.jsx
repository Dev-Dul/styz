import { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import styles from '../Styles/Section.module.css'
import { Images } from './Handlers';
import { useNavigate } from 'react-router-dom';

function Section({ sect, show, setShow }){

    if(sect === "first"){
        const text = ["Elegance", "Steeze", "Flair", "We own it!", "Styz"];
        const [index, setIndex] = useState(0);
        const [scroll, setScroll] = useState(false);
        useEffect(() => {
            if(index >= text.length - 1){
                setScroll(true);
                return;
            }

            const timeout = setTimeout(() => {
                setIndex((prev) => prev + 1);
            }, 800);

            return () => {
                clearTimeout(timeout);                
            }
        }, [index, scroll]);

        return(
            <div className={`${styles.section} ${styles.abs} ${scroll ? styles.scroll: ''}`} onAnimationEnd={() => setShow(true)}>
                <h1 key={index}>{text[index]}</h1>
            </div>
        )
    }

    const [img, setImg] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setImg((prev) => (prev + 1) % Images.length);
      }, 10000)

      return () => clearInterval(interval);
    }, [])

    const navigate = useNavigate();
    return (
      <div className={`${styles.section} ${styles.impress} ${show ? styles.show : ""}`}>
        <div className={styles.text}>
          <div>
            <h2>When You Shop At Styz,</h2>
            <h2>You Never Fail to Impress.</h2>
            <button className={styles.btn} onClick={() => navigate("shop")}>
              Shop Now <FaArrowRight size={20} />{" "}
            </button>
          </div>
        </div>
        <div className={`${styles.wrapper} ${show ? styles.show : ''}`}>
          {Images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt="model"
              className={`${styles.img} ${i === img ? styles.active : styles.hidden }`}
            />
          ))}
        </div>
      </div>
    );
}

export default Section;