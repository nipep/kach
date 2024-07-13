import styles from "./styles.module.scss";
import img from "../../assets/img/benchPress.png";
const ExerciseName: string = "Жим лежа";
const ExerciseSet: string = "4";

const ExerciseItem = () => {
  return (
    <div className={styles.exerciseItem}>
      <div className={styles.exerciseItem__left}>
        <img src={img} />
        <div className={styles.exerciseItem__title}>{ExerciseName}</div>
      </div>
      <div className={styles.exerciseItem__right}>
        <div className={styles.exerciseItem__suptitle}>{`${ExerciseSet} подхода`}</div>
      </div>
    </div>
  );
};

export default ExerciseItem;
