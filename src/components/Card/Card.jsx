import React from 'react'
import styles from "./Card.module.css";


const Card = (props) => {
  const { data, status } = props;
  const formattedData = data.toLocaleString();
  let color = "";
  
  if (status === "Confirmed") {
    color = "#06D6A0";
  } else if (status === "Recovered") {
    color = "#118AB2";
  } else if (status === "Deaths") {
    color = "#EF476F";
  }
  

  return (
    <>
      <div className={styles.column}>
        <div className={styles.card}>
          <h2 className={styles.card__title}>{status}</h2>
          <h1 className={styles.card__total} style={{ color: color }}>
            {formattedData}
          </h1>
        </div>
      </div> 
    </>
  )
}

export default Card