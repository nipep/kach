import styles from "./styles.module.scss";
import MainBtn from "../../component/MainBtn";
import TrainingItem from "../../component/TrainingItem";
import { Link } from "react-router-dom";

const TrainingList = () => {
  return (
    <div className={styles.trainingList}>
      <div className={styles.trainingList__header}>
        <h2 className={styles.trainingList__title}>Тренировки</h2>
        <Link to={"/training/add"}>
        <MainBtn title="Добавить тренировку" />
        </Link>
      </div>
      <div>
        <Link to={"/training/:id"}>
          <TrainingItem />
        </Link>
      </div>
    </div>
  );
};

export default TrainingList;
