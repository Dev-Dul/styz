import styles from '../Styles/Error.module.css';


function ErrorPage( {error} ) {

  return(
    <div className={styles.error}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i> Error Message: { error ? error.message : "Unknown error"}</i>
        <br />
        <i>Tip: Check your internet connection.</i>
      </p>
    </div>
  );
}

export default ErrorPage;