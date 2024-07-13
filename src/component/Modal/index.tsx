import styles from "./styles.module.scss";
import closeIcon from "../../assets/img/closeIcon.svg";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__container}>
        <Link to={"/training"}>
          <div className={styles.modal__close}>
            <img src={closeIcon} alt="" />
          </div>
        </Link>
        <div className={styles.modal__form}>
          <label className={styles.modal__form_name}>
            Введите название тренировки
            <input className={styles.modal__form_input} type="text" name="name" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Modal;
