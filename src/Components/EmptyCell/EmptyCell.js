import styles from './EmptyCell.module.css'
function EmptyCell(props) {
  // let r = Math.random() * 255;
  // let g = Math.random() * 255;
  // let b = Math.random() * 255;
  // style={{ backgroundColor: `rgb(${r},${g},${b})` }}
  return (
    <div
      
      className={`${styles.cell} ${props.bool ?styles.black : styles.white}`}
    ></div>
  );
}
export default EmptyCell;
