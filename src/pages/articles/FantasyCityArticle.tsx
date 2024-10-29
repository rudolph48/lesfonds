import { FC } from 'react';
import styles from '../../styles/Article.module.css'; // 為文章專門定義的 CSS 模組

const FantasyCityArticle: FC = () => {
  return (
    <div className={styles.pageContainer}>
      <a href="/posts" className={styles.backLink}>返回 / 文章首頁</a>
      <h1 className={styles.articleTitle}>童話裡的夢幻都市 ─ 丹麥哈根</h1>
      <p className={styles.articleContent}>
        前往丹麥前，在社群媒體上看過了丹麥的著名景點，但在實際造訪後，丹麥的建築在我心中留下了深刻的印象。
        丹麥雖然不是我最喜愛的北歐城市，但它卻是充滿了童話般的夢想。經過小時的火車從哥本哈根前往童話般的哈根已是夜晚，走出車站映入眼簾的就如童話書中記述的一樣，數以千計的歐洲童話排的街區彷彿畫筆描繪出了神秘美景，隔天我也有幸拜訪這個城鎮。
      </p>
      <p className={styles.articleContent}>
        這趟旅程可以說最特別的就是遇到了丹麥王子的生日慶祝。過去對皇室成員了解不多的我，只因當天走在街上突然的升起了旗子，才發現是特別的日子。一問之下才知道原來王子正在成長，也像他即將成為王位的繼承人之一。
      </p>
      <p className={styles.articleContent}>
        當天現場滿滿的民眾回家了，隨著王室成員的揮手，大家都開始討論這特別的慶祝活動。
      </p>
      
      <div className={styles.imageGallery}>
      <img 
            src="/images/17.jpg" 
            className={styles.articleImage} 
            style={{ width: '640px', height: 'auto' }} 
        />
      </div>
      <p style={{ fontSize: '15px', textAlign: 'center' }}>
      女王一家人與中間慶祝成年的王子
      </p>
    </div>
  );
};

export default FantasyCityArticle;
