import styles from '../Styles/Header.module.css'
function Header( {header} ){
    console.log(header);
    return(
        <div className={`${styles.header} ${header ? styles.active : ''}`}>
            <h2>Styz</h2>
        </div>
    )
}

export default Header;