import { Link } from "react-router-dom";
import MainBtn from "../../component/MainBtn";
import styles from "./styles.module.scss";
import ExerciseItem from "../../component/ExerciseItem";

const idTest: string = "1";

const AddTraining = () => {
  return (
    <div className={styles.trainingAdd}>
      <div className={styles.trainingAdd__header}>
        <h2 className={styles.trainingAdd__title}>{`Тренировка ${idTest}`}</h2>
        <Link to={"/training/add/set"}>
          <MainBtn title="Добавить упражнение" />
        </Link>
      </div>
      <div className={styles.trainingAdd__list}>
        <ExerciseItem />
      </div>
      <div className={styles.trainingAdd__finish}>
        <MainBtn title="Закончить тренировку" />
      </div>
    </div>
  );
};
export default AddTraining;
