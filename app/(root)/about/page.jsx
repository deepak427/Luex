import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>About Luex</h1>
        <p className={styles.subheading}>
          Elegance Redefined. Heritage Continued.
        </p>
        <p className={styles.paragraph}>
          Luex is a French luxury clothing brand rooted in the timeless elegance
          and rich fashion heritage of France. Established in the heart of
          cities like Lyon and Marseille, Luex has long been a trusted name
          among celebrities, tastemakers, and connoisseurs of sophisticated
          style.
        </p>
        <p className={styles.paragraph}>
          For years, Luex remained a treasured gem in the offline world, known
          for its exclusivity, bespoke quality, and loyal clientele. From
          fashion runways to private wardrobes of the elite, our designs have
          made their mark through uncompromising craftsmanship and curated
          aesthetics.
        </p>
        <p className={styles.paragraph}>
          Now, we begin a new chapter. Our online presence starts with this
          exclusive launch — not just a product, but a statement of refined
          taste. Each piece is crafted to deliver not only comfort and quality
          but also the luxury that defines Luex.
        </p>
        <p className={styles.closing}>
          Welcome to Luex — where timeless French elegance meets the digital
          era.
        </p>
      </div>
    </section>
  );
}
