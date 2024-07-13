import styles from "./styles.module.scss"
const idTest: string = "1"

const TrainingItem = () => {
    return (
        <div className={styles.trainingItem}>
            <div className={styles.trainingItem__title}>{`Тренировка ${idTest}`}</div>
            <div className={styles.trainingItem__title}>27.05.2024</div>
        </div>
    )
}

export default TrainingItem
