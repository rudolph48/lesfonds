import { FC } from 'react';
import Link from 'next/link'; // 引入 Link 元件
import styles from '../styles/Posts.module.css';
import { posts, Post } from '../data/posts';

const PostsPage: FC = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>文章分享</h1>
      {posts.map((post: Post) => (
        <Link
          href={
            post.id === 'entremets' 
            ? '/articles/entremets'
            : post.id === 'PastryArticle'
            ? '/articles/PastryArticle'
            : post.id === 'FantasyCityArticle'
            ? '/articles/FantasyCityArticle'
            : `/posts/${post.id}` // 默認情況下連接到動態路由
          }
          key={post.id}
          passHref
        >
          <div className={styles.postContainer}>
            <div className={styles.imageContainer}>
              <img src={post.imageUrl} alt={post.title} className={styles.image} />
            </div>
            <div className={styles.contentContainer}>
              <h4 className={styles.postCategory}>{post.category}</h4>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postContent}>{post.content}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsPage;
