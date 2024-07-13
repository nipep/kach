import styles from "./styles.module.scss";
const idSet: string = "3";
const weightSet: string = "130";
const amountSet: string = "3";

const SetItem = () => {
  return (
    <div className={styles.setItem}>
      <div className={styles.setItem__title}>{`Подход ${idSet}`}</div>
      <div className={styles.setItem__suptitle}>
        {`${weightSet} X ${amountSet}`}
        
      </div>
    </div>
  );
};

export default SetItem;
