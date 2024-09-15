import { FC } from 'react';
import styles from '../../styles/Article.module.css'; // 為文章專門定義的 CSS 模組
import Link from 'next/link';

const EntremetsArticle: FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Link href='/posts' className={styles.backLink}>
        返回 / 文章首頁
      </Link>
      <h1 className={styles.articleTitle}>Entremets法式蛋糕</h1>
      <p className={styles.articleContent}>
        小小科普，Entremets字面上來看是法文「在兩道菜之間」（entre les
        mets）的意思，過去在筵席
        間斷時間裡向地位高貴的賓客或是君主獻上的額外菜餚。到了現代Etremets則專指「一種以海綿蛋
        糕加上慕斯或奶醬所製成的甜點」。
      </p>
      <p className={styles.articleContent}>
        在Ferrandi的密集甜點課程裡，包含三次(三週)的Entremets課程。
      </p>
      <p className={styles.articleContent}>
        在來唸甜點學校前，自己對於這樣的大蛋糕幾乎可以說是完全沒有接觸過，也不理解學校課程安排
        的定義。但在實際上完全部的課程後，才發現原來三週的課程是循序漸進的呢~
      </p>
      <p className={styles.articleContent}>
        這次的Entremets法式蛋糕
        包含的法式甜點是夾層最簡單，也只需簡單裝飾即成的蛋糕，主要在
        練習Entremets裡的各種Biscuit(海綿蛋糕)質地與做法。
      </p>
      <p className={styles.articleContent}>
        這些Biscuit(海綿蛋糕)不像過去吃過的戚風蛋糕或是海綿蛋糕有蓬鬆柔軟的口感，相比之下藉由蛋
        白不同的打發方式來呈現不同質地，且多半都不會太厚，只是為了蛋糕的口感變化。
        在之後的Entremets課程裡，我們做了更多蛋糕內的元素，也運用了更多的裝飾技巧。將在之後的文章分享。
      </p>
      <p className={styles.subTitle}>本週的實作</p>
      <p className={styles.articleContent}>Entremets ganache 甘納許蛋糕</p>

      <div className={styles.imageGallery}>
        <img
          src='/images/12.jpg'
          alt='Entremets ganache 1'
          className={styles.articleImage}
        />
        <img
          src='/images/13.jpg'
          alt='Entremets ganache 2'
          className={styles.articleImage}
        />
      </div>
    </div>
  );
};

export default EntremetsArticle;
