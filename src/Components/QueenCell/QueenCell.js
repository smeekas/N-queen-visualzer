import queen from "../../assets/queen.png";
import styles from './QueenCell.module.css'
function QueenCell(props) {
  return (
    <div className={`${styles.cell} ${props.bool ?styles.black : styles.white}`}>
      <img className={styles.queen} alt="queen" src={queen} />
    </div>
  );
}
export default QueenCell;
