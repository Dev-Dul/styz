import { useState, useEffect } from 'react';
import styles from '../Styles/Section.module.css'
function Section({ sect, handleHeader}){
    if(sect === "first"){
        const text = ["Elegance", "Steeze", "Flair", "We own it!", "Styz"];
        const [index, setIndex] = useState(0);
        const [scroll, setScroll] = useState(false);
        useEffect(() => {
            console.log("first index", index);
            if(index >= text.length - 1){
                setScroll(true);
                handleHeader();                    
                return;
            }

            const timeout = setTimeout(() => {
                console.log(index);
                setIndex((prev) => setIndex(prev + 1));
            }, 2000);

            return () => {
                console.log("last index", index);
                clearTimeout(timeout);                
            }
        }, [index]);

        return(
            <div className={`${styles.section} ${styles.abs} ${scroll ? styles.scroll: ''}`}>
                <h1 key={index}>{text[index]}</h1>
            </div>
        )
    }

    return (
      <div className={`${styles.section} ${styles.impress}`}>
        <div className={styles.text}>
          <h2>With Styz,</h2>
          <p>You'll Never Fail <br /> to Impress</p>
          <button>Shop Now</button>
        </div>
      </div>
    );
}

export default Section;