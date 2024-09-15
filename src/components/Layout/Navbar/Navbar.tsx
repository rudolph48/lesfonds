import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

export default function Navbar() {
  const router = useRouter();

  const isActive = (pathname: string) => {
    return router.pathname === pathname ? styles.active : '';
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src='/images/8.jpg' alt='Leaf' />
        <span className={styles.logoText}>LES FONDS</span>
      </div>
      <div className={styles.navWrapper}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${isActive('/')}`}>
            <Link href='/'>當季甜點</Link>
          </li>
          <li className={`${styles.navItem} ${isActive('/about')}`}>
            <Link href='/about'>關於土半夏</Link>
          </li>
          <li className={`${styles.navItem} ${isActive('/contact')}`}>
            <Link href='/contact'>聯絡我們</Link>
          </li>
          <li className={`${styles.navItem} ${isActive('/posts')}`}>
            <Link href='/posts'>文章分享</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
