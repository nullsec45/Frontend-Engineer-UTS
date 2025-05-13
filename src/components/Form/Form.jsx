import React, {useEffect,useState} from 'react'
import styles from "./Form.module.css";
import Alert from "../Alert/Alert";
import image from  "/img/undraw_conceptual_idea_xw7k 1.png";


const Form = ({data,onSubmit}) => {
  const [provinces, setProvinces] = useState(data);
  const [provinceInput,setProvinceInput] = useState("");
  const [status, setStatus] = useState("");
  const [total, setTotal] = useState("");
  const [isProvinceError, setIsProvinceError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isTotalError, setIsTotalError] = useState(false);

  function handleProvince(event) {
    event.preventDefault();
    setProvinceInput(event.target.value);
  }

  function handleStatus(event) {
    event.preventDefault();
    setStatus(event.target.value);
  }

  function handleTotal(event) {
    event.preventDefault();
    setTotal(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if(!status) {
      setIsStatusError(true);
    }else{
      setIsStatusError(false);
    }

    if(!provinceInput) {    
      setIsProvinceError(true);
    }else{
      setIsProvinceError(false);
    }

    if(!total) {
      setIsTotalError(true);
    }else{
      setIsTotalError(false);
    }

    onSubmit({ status, total, provinceInput });
  }

  useEffect(() => {}, [provinces]);

  return (
    <>
       <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img
                        className={styles.form__image}
                        src={image}
                        alt={image}
                    />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Form Covid</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form__container}>
                          {/* Province Dropdown */}
                          <div className={styles.form__group}>
                              <label className={styles.form__label} htmlFor="Provinsi">Provinsi</label>
                              <select className={styles.form__select}
                                      onChange={handleProvince}
                                      value={provinceInput}>
                                      <option value="">Pilih Provinsi</option>
                                      {
                                        provinces.map((province, index) => (
                                          <option key={index} value={province.name}>{province.name}</option>
                                        ))
                                      }
                              </select>

                              {isProvinceError && (
                                <Alert color="red">
                                    <small>Data wajib diisi!</small>
                                </Alert>
                              )}
                          </div>

                          {/* Status Dropdown */}
                          <div className={styles.form__group}>
                              <label className={styles.form__label} htmlFor="Status">Status</label>
                              <select className={styles.form__select} onChange={handleStatus} value={status}>
                                <option value="">Pilih Status</option>
                                <option value="positive">Positif</option>
                                <option value="recovered">Sembuh</option>
                                <option value="hospitalized">Dirawat</option>
                                <option value="death">Meninggal</option>
                              </select>
                              {isStatusError && (
                              <Alert color="red">
                                  <small>Data wajib diisi!</small>
                              </Alert>
                              )}
                          </div>

                          {/* Total Input */}
                          <div className={styles.form__group}>
                              <label className={styles.form__label} htmlFor="total">
                              Jumlah
                              </label>
                              <input
                              className={styles.form__input}
                              type="number"
                              name="total"
                              id="total"
                              placeholder="Masukkan Jumlah"
                              value={total}
                              onChange={handleTotal}
                              />
                              {isTotalError && (
                              <Alert color="red">
                                  <small>Data wajib diisi!</small>
                              </Alert>
                              )}
                          </div>
                        </div>

                        {/* Submit Button */}
                        <button onClick={handleSubmit}
                               className={styles.form__button}
                               type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    </>
  )
}

export default Form