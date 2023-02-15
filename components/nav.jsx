import Link from 'next/link';

const nav = () => (
    <>
    <nav className={nav}>
    <Link href="/">
      <a className={link}>Home</a>
    </Link>
    <Link href="/about">
      <a className={styles.link}>About</a>
    </Link>
    <Link href="/services">
      <a className={styles.link}>Services</a>
    </Link>
    <Link href="/products">
      <a className={styles.link}>Products</a>
    </Link>
    <Link href="/contact">
      <a className={styles.link}>Contact</a>
    </Link>
  </nav>
   
   <h1>jhdsafjkhdfjkdhjdk</h1>
   </>
);

export default nav;