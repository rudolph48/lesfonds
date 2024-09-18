import { GetStaticProps, GetStaticPaths } from 'next';
import { useState } from 'react';
import styles from '../../styles/Product.module.css';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  images: string[]; // 將單張圖片改為圖片數組
  description: string;
  flavor: string;
  package: string;
}

interface ProductPageProps {
  product: Product;
}

const ProductPage = ({ product }: ProductPageProps) => {
  const [isOpen, setIsOpen] = useState({
    order: false,
    flavor: false,
    package: false,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleSection = (section: 'order' | 'flavor' | 'package') => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.pageContainer}>
      <Link href='/' className={styles.backLink}>
        返回 / 當季甜點首頁
      </Link>

      <div className={styles.productContainer}>
        <div className={styles.imageSection}>
          {/* 顯示當前的圖片 */}
          <img
            src={product.images[currentImageIndex]} // 使用圖片數組
            alt={product.name}
            className={styles.productImage}
          />

          {/* 圖片下方的小圓點 */}
          <div className={styles.dotsContainer}>
            {product.images.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  currentImageIndex === index ? styles.activeDot : ''
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.productTitle}>{product.name}</h1>

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

          <hr className={styles.separator} />
          <div className={styles.section}>
            <button
              onClick={() => toggleSection('flavor')}
              className={styles.toggleButton}
            >
              風味 {isOpen.flavor ? '-' : '+'}
            </button>
            {isOpen.flavor && (
              <div className={styles.sectionContent}>
                <p>{product.flavor}</p>
              </div>
            )}
          </div>

          <hr className={styles.separator} />
          <div className={styles.section}>
            <button
              onClick={() => toggleSection('package')}
              className={styles.toggleButton}
            >
              套餐內商品 {isOpen.package ? '-' : '+'}
            </button>
            {isOpen.package && (
              <div className={styles.sectionContent}>
                <p>{product.package}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.productContainer}>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>
    </div>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const productIds = ['1', '2', '3'];

  const paths = productIds.map((id) => ({
    params: { id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const productData: { [key: string]: Product } = {
    '1': {
      id: '1',
      name: '夏之花 Fleur dété',
      images: ['/images/18.jpg', '/images/19.jpg'], // 這裡改成圖片數組
      description:
        '艷夏陽光，夏日白天，是夏天最鮮明的意象。<br />整體白黃的色調是夏日艷陽高照的炙熱，再以花朵外型傳遞夏天的知性與優雅，<br /><br />芒果、鳳梨和百香果交織成熱帶水果風味，迷迭香與蜜雪芒果熬製成餡，搭配上椰子的酥脆和奶香，整體傳遞炎炎夏日感。',
      flavor: '蜜雪芒果、熱帶水果、椰子',
      package: '迷迭香芒果醬、奶油乳酪香緹、熱帶水果慕斯',
    },
    '2': {
      id: '2',
      name: '其他甜點',
      images: ['/images/19.jpg'],
      description: '另一個美味的甜點。',
      flavor: '香草、巧克力、草莓',
      package: '香草醬、巧克力片、草莓醬',
    },
  };

  const product = productData[id];

  return {
    props: {
      product,
    },
  };
};
