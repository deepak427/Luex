"use client";

import styles from "./HeroSection.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function HeroSection() {
  const searchParams = useSearchParams();
  const thankyou = searchParams.get("thankyou");

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {thankyou === "true" && (
          <div className={styles.thankYouMessage}>
            🎉 Thank you for your pre-order!
          </div>
        )}
        <h1 className={styles.title}>
          Elevate Your Style with <span className={styles.brand}>Luex</span>
        </h1>
        <p className={styles.subtitle}>
          Exclusive Pre-Orders Open Now. Limited Pieces. Unlimited Elegance.
        </p>
        <Link href="/shop" className={styles.cta}>
          Pre-Order Now
        </Link>
      </div>
    </section>
  );
}
