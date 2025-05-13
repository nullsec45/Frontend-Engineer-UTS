import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
     <div className={styles.container}>
     <footer className={styles.navbar}>
              <div className={styles.navbar__brand}>
                <h1>Covid ID</h1>
                <p>Developed By NUllsec45</p>
              </div>
      
              <ul className={`${styles.navbar__list}`}>
                <li className={styles.navbar__item}>
                  <a href="">Global</a>
                </li>
                <li className={styles.navbar__item}>
                  <a href="">Indonesia</a>
                </li>
                <li className={styles.navbar__item}>
                  <a href="">Provinsi</a>
                </li>
                <li className={styles.navbar__item}>
                  <a href="">About</a>
                </li>
              </ul>
        </footer>
     </div>
    </>
  );
};

export default Footer;
