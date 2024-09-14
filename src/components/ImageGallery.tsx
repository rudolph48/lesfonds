// components/ImageGallery.tsx
import Image from 'next/image';
import styles from './ImageGallery.module.css';

const ImageGallery = () => {
  return (
    <div className={styles.gallery}>
      <Image
        src='/images/2.jpg'
        alt='Image 1'
        width={200}
        height={200}
        className={styles.image}
      />
      <Image
        src='/images/3.jpg'
        alt='Image 2'
        width={200}
        height={200}
        className={styles.image}
      />
      <Image
        src='/images/4.jpg'
        alt='Image 3'
        width={200}
        height={200}
        className={styles.image}
      />
    </div>
  );
};

export default ImageGallery;
