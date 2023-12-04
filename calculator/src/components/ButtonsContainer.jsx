import styles from './ButtonsContainer.module.css'

const ButtonsContainer = () => {
    const buttonNames = [
      "C",
      "1",
      "2",
      "+",
      "3",
      "4",
      "-",
      "5",
      "6",
      "*",
      "7",
      "8",
      "/",
      "=",
      "9",
      "0",
      ".",
    ];
  return (
    <div>
         <div className={styles.buttonsContainer}>
         {buttonNames.map((buttonName)=>(
           <button className={styles.button}>{buttonName}</button>
         ))}

          <button className={styles.button}>C</button>
          <button className={styles.button}>1</button>
          <button className={styles.button}>2</button>
          <button className={styles.button}>3</button>
          <button className={styles.button}>4</button>
      </div>
    </div>
  )
}

export default ButtonsContainer