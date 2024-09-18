import Image from 'next/image';
import Link from 'next/link';
import styles from './ImageGallery.module.css';

const products = [
  { id: '1', image: '/images/2.jpg', alt: 'Image 1' },
  { id: '2', image: '/images/3.jpg', alt: 'Image 2' },
  { id: '3', image: '/images/4.jpg', alt: 'Image 3' },
];

const ImageGallery = () => {
  return (
    <div className={styles.gallery}>
      {products.map((product) => (
        <Link href={`/products/${product.id}`} passHref key={product.id}>
          <Image
            src={product.image}
            alt={product.alt}
            width={200}
            height={200}
            className={styles.image}
          />
        </Link>
      ))}
    </div>
  );
};

export default ImageGallery;
