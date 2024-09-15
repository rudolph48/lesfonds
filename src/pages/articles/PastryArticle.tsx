import { FC } from 'react';
import styles from '../../styles/Article.module.css'; // 為文章專門定義的 CSS 模組
import Link from 'next/link';

const PastryArticle: FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Link href='/posts' className={styles.backLink}>
        返回 / 文章首頁
      </Link>
      <h1 className={styles.articleTitle}>巴黎甜點隨筆筆記 2</h1>
      <p className={styles.articleContent}>
        巴黎甜點隨筆筆記 2 繼續進行。
        <br />
        後來，又再次來到了巴黎品嚐更加多元、豐富的甜點。
      </p>
      <p className={styles.articleContent}>
        在巴黎，兩位最喜歡的女甜點師，她們的作品總是既細緻又優雅，能在風味中找到平衡。
      </p>
      <p className={styles.articleContent}>
        <span className={styles.highlightedText}>
          📍 Des gâteaux et du pain
        </span>
        <br />
        是我在法國足足拜訪三次的甜點店，每次令人驚心，每次前往總是有不一樣口味的蛋糕可以選擇，
        也是這樣的心情，讓我產生了自己也想製作多元風味的甜點。
      </p>
      <p className={styles.articleContent}>
        第二次購買的是覆盆子與起司的塔和杏桃的慕斯蛋糕。覆盆子起司塔除了能夠品嘗到覆盆子的酸
        感，同時也有起司的香味。杏桃則是我在法國才初次品嚐到的水果，有桃子和枇杷綜合感覺，杏桃
        慕斯蛋糕的香與底層杏仁蛋糕的搭配也是相當和諧，總體來說非常滿意。
      </p>
      <p className={styles.articleContent}>
        特別要說，這裡的巧克力塔每次都令人讚歎！
      </p>
      <div className={styles.imageGallery}>
        <img
          src='/images/14.jpg'
          alt='覆盆子與起司塔'
          className={styles.articleImage}
          style={{ width: '180px', height: 'auto' }}
        />
      </div>
      <p className={styles.articleContent}>
        第三次的購買則是玫瑰與開心果的組合，加上蜂蜜口味的塔，也是一個馬上就能完食的口味。
        我總覺得主廚厲害的地方，就在於能夠將當地食材搭配的和諧不膩口，每每都能充分傳達出這道甜點的主軸，非常厲害。
      </p>

      <div className={styles.imageGallery}>
        <img
          src='/images/15.jpg'
          alt='覆盆子與起司塔'
          className={styles.articleImage}
          style={{ width: '270px', height: 'auto' }}
        />
        <img
          src='/images/16.jpg'
          alt='杏桃磅蛋糕'
          className={styles.articleImage}
          style={{ width: '270px', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default PastryArticle;
