import { Outlet } from "react-router";
import Header from "../../component/Header/index";
import styles from "./styles.module.scss"

const MainLayouts = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
