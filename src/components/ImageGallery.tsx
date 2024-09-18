import Image from 'next/image';
import Link from 'next/link';
import styles from './ImageGallery.module.css';

const ImageGallery = () => {
  return (
    <div className={styles.gallery}>
      <Link href='/products/product1' passHref>
        <Image
          src='/images/2.jpg'
          alt='Image 1'
          width={200}
          height={200}
          className={styles.image}
        />
      </Link>
      <Link href='/products/product2' passHref>
        <Image
          src='/images/3.jpg'
          alt='Image 2'
          width={200}
          height={200}
          className={styles.image}
        />
      </Link>
      <Link href='/products/product3' passHref>
        <Image
          src='/images/4.jpg'
          alt='Image 3'
          width={200}
          height={200}
          className={styles.image}
        />
      </Link>
    </div>
  );
};

export default ImageGallery;
