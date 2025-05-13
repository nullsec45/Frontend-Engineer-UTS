import React from 'react'
import styles from "./Province.module.css";

import Table from "../Table/Table";

const Province = (props) => {
  const {data} = props;

  return (
    <>
    <div className={styles.container}>
      <section className={styles.province}>
        <h1 className={styles.province__title}> Provinsi</h1>
        <h4 className={styles.province__subtitle}>Data Covid Berdasarkan Provinsi</h4>
        <Table data={data} />
      </section>
    </div>
    </>
  )
}

export default Province