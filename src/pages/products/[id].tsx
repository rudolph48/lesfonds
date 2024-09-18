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
                <div dangerouslySetInnerHTML={{ __html: product.package }} />
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
      package: '迷迭香芒果醬<br />奶油乳酪香緹<br />熱帶水果慕斯',
    },
    '2': {
      id: '2',
      name: '日暮玫瑰 La rose',
      images: ['/images/20.jpg', '/images/21.jpg'],
      description:
        '慵懶的夏日午後，天空的色調逐漸轉為帶粉調的暖黃，微風吹來都是隨興、清爽且愜意的。<br/><br/>玫瑰慕斯作為此款甜點的主體，每一口尾韻都是玫瑰獨特的香味。結合台灣水蜜桃的香甜與覆盆子果醬的微酸，將味覺提升到另一個層次，搭配綜合堅果醬的堅果香，整款甜點清新優雅。<br/><br/>日暮玫瑰也呼應我在Ferrandi的期末作品_Afterglow，同樣運用帶有粉紫調的食材傳遞出夕陽餘暉最美的顏色。當時運用黑醋栗作為甜點主要元素，這次我們則使用台灣種植的玫瑰，在花香的甜蜜中，體驗夏天的燦爛。',
      flavor: '玫瑰、水蜜桃、堅果',
      package:
        '玫瑰慕斯<br />覆盆子果醬<br />水蜜桃奶餡<br />綜合堅果醬<br />杏仁蛋糕<br />沙布蕾餅乾底',
    },
    '3': {
      id: '3',
      name: '仲夏時光 Le temps dun été',
      images: ['/images/22.jpg', '/images/23.jpg'],
      description:
        '以「時光」總結夏日一天的感受。<br/><br/>盛夏，夜晚暖風輕拂臉龐。空氣中是太陽照射過的暖和氣息，餘暉將天空渲染成藍紫色的，令人沉醉不已。<br/><br/>芝麻的清香與微苦和糖漬無花果醬的特殊香甜形成平衡，再與白乳酪慕斯柔滑不膩的風味互相襯托。整體視覺則是帶莓果紅與深黑的色調，希望呈現出夕陽到夜晚的過渡感。',
      flavor: '無花果、芝麻、白乳酪',
      package:
        '奶油乳酪香緹<br />白乳酪慕斯<br />糖漬無花果醬<br />芝麻奶餡<br />芝麻蛋糕底',
    },
  };

  const product = productData[id];

  return {
    props: {
      product,
    },
  };
};
