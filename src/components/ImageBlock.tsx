// components/ImageBlock.tsx
import styles from './ImageBlock.module.css';

const ImageBlock = () => {
  return (
    <div className={styles.imageBlock}>
      <div className={styles.textOverlay}>
        <h1>LES FONDS</h1>
        <h2>第二行文字</h2>
        <h2>土半夏甜點工作室</h2>
      </div>
    </div>
  );
};

export default ImageBlock;
