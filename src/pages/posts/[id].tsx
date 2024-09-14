import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/PostPage.module.css';
import { posts, Post } from '../../data/posts';

interface PostPageProps {
  post: Post;
}

const PostPage: FC<PostPageProps> = ({ post }) => {
  const router = useRouter();

  if (!post) {
    return <div>文章不存在</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <Link href="/posts" className={styles.backLink}>
        返回 / 文章首頁
      </Link>
      <h1 className={styles.pageTitle}>{post.title}</h1>
      <p className={styles.pageContent}>{post.content}</p>
      <div className={styles.imageContainer}>
        <img src={post.imageUrl} alt={post.title} className={styles.image} />
      </div>
    </div>
  );
};

// 生成動態路徑
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

// 頁面靜態生成
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posts.find((post) => post.id.toString() === params?.id);

  return {
    props: { post },
  };
};

export default PostPage;
