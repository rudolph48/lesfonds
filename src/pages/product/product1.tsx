import { useState } from 'react';
import styles from '../../styles/Product.module.css';
import Link from 'next/link';

const Product1Page = () => {
  const [isOpen, setIsOpen] = useState({
    order: false,
    flavor: false,
    package: false,
  });

  type Section = 'order' | 'flavor' | 'package';

  const toggleSection = (section: Section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className={styles.pageContainer}>
      <Link href='/posts' className={styles.backLink}>
        返回 / 當季甜點首頁
      </Link>
      <div className={styles.productContainer}>
        {/* 左側 - 圖片 */}
        <div className={styles.imageSection}>
          <img
            src='/images/18.jpg'
            alt="夏之花 Fleur d'été"
            className={styles.productImage}
          />
        </div>

        {/* 右側 - 商品資訊 */}
        <div className={styles.infoSection}>
          <h1 className={styles.productTitle}>夏之花 Fleur d'été</h1>

          {/* 訂購表單 */}
          <div className={styles.section}>
            <button
              onClick={() => toggleSection('order')}
              className={styles.toggleButton}
            >
              訂購表單 {isOpen.order ? '-' : '+'}
            </button>
            {isOpen.order && (
              <div className={styles.sectionContent}>
                <p>訂購細節...</p>
              </div>
            )}
          </div>

          {/* 風味 */}
          <div className={styles.section}>
            <button
              onClick={() => toggleSection('flavor')}
              className={styles.toggleButton}
            >
              風味 {isOpen.flavor ? '-' : '+'}
            </button>
            {isOpen.flavor && (
              <div className={styles.sectionContent}>
                <p>風味細節...</p>
              </div>
            )}
          </div>

          {/* 套餐內商品 */}
          <div className={styles.section}>
            <button
              onClick={() => toggleSection('package')}
              className={styles.toggleButton}
            >
              套餐內商品 {isOpen.package ? '-' : '+'}
            </button>
            {isOpen.package && (
              <div className={styles.sectionContent}>
                <p>套餐細節...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 底部 - 描述文字 */}
      <div className={styles.description}>
        <p>豔陽高照，夏日白天，是夏天最美好的季景。這款甜點...</p>
      </div>
    </div>
  );
};

export default Product1Page;
