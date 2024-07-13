import { Link } from "react-router-dom";
import SetItem from "../../component/SetItem";
import styles from "./styles.module.scss";

const SetTraining = () => {
  return (
    <div className={styles.trainingSet}>
      <div className={styles.trainingSet__header}>
        <Link to={"/training/add"}></Link>
      </div>
      <div className={styles.trainingSet__add}></div>
      <div className={styles.trainingSet__list}>
        <SetItem />
      </div>
    </div>
  );
};
export default SetTraining;
