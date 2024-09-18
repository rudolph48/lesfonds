// components/Footer.tsx
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <Link href='/' passHref>
            <p>首頁</p>
          </Link>
          <Link href='/about' passHref>
            <p>關於工作室</p>
          </Link>
          <p>當季甜點介紹</p>
        </div>
        <div className={styles.column}>
          <p>Line: @lesfonds</p>
          <p>信箱: lesfondsdepatisserie@gmail.com</p>
          <p>公司名稱:土半夏甜點工作室 94479357</p>
          <p>以上產品皆已投保產品責任保險</p>
          <p>食品業登錄字號：B-202269941-00000-3</p>
        </div>
        <div className={styles.column}>
          <p>訂購與配送服務</p>
          <p>追蹤貨品狀態</p>
          <p>條款與細則</p>
        </div>
      </div>
      <div className={styles.socialIcons}>{/* 這裡可以放置社交媒體圖標 */}</div>
    </footer>
  );
};

export default Footer;
