// components/TextWithLines.tsx
import styles from './TextWithLines.module.css';

const TextWithLines = () => {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.text}>當季甜點 / Featured Items</div>
      <div className={styles.line}></div>
    </div>
  );
};

export default TextWithLines;
