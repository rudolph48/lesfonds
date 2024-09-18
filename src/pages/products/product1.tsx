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
      <Link href='/' className={styles.backLink}>
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
          <h1 className={styles.productTitle}>夏之花 Fleur dété</h1>

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
                <a
                  href='https://forms.gle/C25VC6xs2Dv7t3558'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://forms.gle/C25VC6xs2Dv7t3558
                </a>
              </div>
            )}
          </div>

          {/* 細橫線 */}
          <hr className={styles.separator} />

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
                <p>蜜雪芒果、熱帶水果、椰子</p>
              </div>
            )}
          </div>

          {/* 細橫線 */}
          <hr className={styles.separator} />

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
                <p>
                  迷迭香芒果醬
                  <br /> 奶油乳酪香緹 <br />
                  熱帶水果慕斯
                  <br /> 迷迭香芒果餡
                  <br /> 熱帶水果凍
                  <br />
                  椰子蛋糕
                  <br /> 椰子脆底
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 描述區域，與圖片左側對齊 */}
      <div className={styles.productContainer}>
        <div className={styles.description}>
          <p>
            艷夏陽光，夏日白天，是夏天最鮮明的意象。
            <br />
            整體白黃的色調是夏日艷陽高照的炙熱，再以花
            <br />
            朵外型傳遞夏天的知性與優雅，
          </p>
          <br />
          <p>
            芒果、鳳梨和百香果交織成熱帶水果風味，迷迭香與蜜雪
            <br />
            芒果熬製成餡，搭配上椰子的酥脆和奶香，整體傳遞炎炎
            <br />
            夏日感。
          </p>
        </div>
        <div className={styles.description}></div>
      </div>
    </div>
  );
};

export default Product1Page;
