"use client";

import styles from "./ContactPage.module.css";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.subheading}>We are here to help and hear from you.</p>
        <p className={styles.paragraph}>
          Whether you have questions about our collections, your order, or future collaborations,
          our team at Luex is ready to assist you.
        </p>
        <p className={styles.emailLabel}>Email us at:</p>
        <Link href="mailto:luexclothings@gmail.com" className={styles.emailLink}>
          luexclothings@gmail.com
        </Link>
      </div>
    </section>
  );
}