import styles from "./styles.module.scss";
interface Text {
  title: string;
}
// props: Text

const MainBtn = (props: any) => {
  return (
    <div className={styles.main__btn}>
      <div className={styles.main__btn_title}>{props.title}</div>
    </div>
  );
};
export default MainBtn;
