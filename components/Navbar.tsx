'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Main Navigation">
        <div className={styles.logo}>
          <Link href="/">Luex</Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/shop">Collections</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <div className={styles.actions}>
          {/* <Link href="/orders" className={styles.cart}>Orders</Link> */}
        </div>
      </nav>
    </header>
  );
}
