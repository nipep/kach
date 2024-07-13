import styles from "./styles.module.scss";
import logo from "../../assets/img/logo.svg"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className={styles.nav}>
        <div>
          <Link to={"/"}>
            <img src={logo} />
          </Link>
        </div>
        <div className={styles.nav__list}>
          <Link to={"/training"}>
            <div className={styles.nav__item}>Тренировки</div>
          </Link>
          <div className={styles.nav__item}>Упражнения</div>
          <div className={styles.nav__item}>Статистика</div>
          <div className={styles.nav__item}>История</div>
          <div className={styles.nav__item}>Заметки</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
