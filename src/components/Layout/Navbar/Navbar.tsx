// Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <img src='/images/8.jpg' alt='Leaf' />
          <span className={styles.logoText}>LES FONDS</span>
        </div>
      </Link>
      <div className={styles.navWrapper}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href='/'>當季甜點</Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/about'>關於土半夏</Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/services'>聯絡我們</Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/posts'>文章分享</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
