import React from 'react';
import styles from './about.module.css';

const about = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.contentBlock}>
        <div className={styles.imageContainer}>
          <img src="/images/7.jpg" alt="土半夏" />
        </div>
        <div className={styles.textContainer}>
          <h2>關於土半夏甜點</h2>
          <h2>About Les Fonds de Patisserie</h2>
          <p>
            法文Les fonds指法式甜點的基礎、基底。
          </p>
          <br/>
          <p>
            舉凡蛋糕底或塔底甚至是甜點師奶醬和杏仁餡，包含非常多元。
          </p>
          <br/>
          <p>
            在多元的基礎上，創作主軸圍繞四季和土地。<br />
            因此品牌名也取自台灣多年生草本植物土半夏。
          </p>
          <br/>
          <p>          ​
            土半夏屬天南星科草本植物。台灣產的40種中，4種被記錄為小雜草。<br />
            小草的形象如初芽，象徵土半夏甜點的誕生。<br />
            期待慢慢成長茁壯，由小草長為大樹。
          </p>
        </div>
      </div>

      <div className={styles.contentBlock}>
        <div className={styles.textContainer}>
          <h2>關於主廚</h2>
          <h2>​About Molly</h2>
          <p>
            2023年<br />
            輔仁大學餐旅管理系畢業後前往法國就讀費杭迪高等廚藝學校，精進並學習法式甜點。<br />
            Intensive professional program in French Pastry<br />
          </p>
          <br />
          <p>
            2024年<br />
            創立 土半夏甜點工作室 Les Fonds de Pâtisserie，工作室地址位於台中市。<br />
            希望能夠將自身的回憶與故事融入各式的作品中，運用台灣在地食材創造出感動的味道。<br />
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/5.jpg" alt="主廚照片" />
        </div>
      </div>
      <div className={styles.contentBlock}>
        <div className={styles.imageContainer2}>
          <img src="/images/6.jpg" alt="土半夏" />
        </div>
        <div className={styles.textContainer}>
          <h2>我的夏季創作理念</h2>
          <h2>My Summer Collection</h2>
            <p>【Hello Summer】 我的夏日三原色</p>
            <br />
            <p>夏日是炙熱且深情的。</p>
            <br />
            <p>
                盛夏暖陽，刺眼的陽光與閃閃發亮的海洋。<br />
                從日出到夕陽的轉換，既燦爛又美好。
            </p>                      
            <br />
            <p> 
                2023年一趟波爾多與阿爾卡雄的旅途，遇見此生難以忘懷的日落美景。<br />
                阿爾卡雄的仲夏，如夢似幻的景色，日落斜陽照耀著海岸邊上的人們。<br />
                將這樣的景色與心情結合夏日食材呈現出來，希望大家與我們一起探索療癒的夏日美景!
            </p>          
            <br />
            <p>(Arcachon(阿爾卡雄)是距離波爾多65公里遠，位於法國西南部的市鎮)</p>         
        </div>
      </div>
    </div>

  );
}

export default about;
