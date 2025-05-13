import React from 'react';
import data from "../../utils/constants/indonesia";
import styles from "./Indonesia.module.css";
import Card from "../Card/Card";

const Indonesia = () => {
  return (
    <div className={styles.container}>
      <section className={styles.indonesia}>
        <h1 className={styles.indonesia__title}>Indonesia</h1>
        <h4 className={styles.indonesia__subtitle}>Data Covid Berdasarkan Indonesia</h4>
        <div className={`${styles.container} ${styles.indonesia__cards}`}>
          {data.indonesia.map((item, index) => (
            <Card key={index}
                  data={item.total}
                  status={item.status}
                 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Indonesia;
