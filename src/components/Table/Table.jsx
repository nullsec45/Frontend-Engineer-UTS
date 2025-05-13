import React from 'react'
import styles from "./Table.module.css";


const Table = (props) => {
  const {data} = props;

  return (
    <>
      <div className={styles.container}>
        <table className={styles.container__table}>
          <thead>
            <tr className={styles.container__row}>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={styles.container__content}>
                <td>
                  {index + 1}
                </td>
                <td>{item.name}</td>
                <td>{item.positive}</td>
                <td>{item.recovered}</td>
                <td>{item.hospitalized}</td>
                <td>{item.death}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table