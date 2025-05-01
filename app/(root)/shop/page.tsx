"use client";

import Image from "next/image";
import styles from "./TshirtPage.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ShopPage() {
  const [stockLeft, setStockLeft] = useState(0);
  const [totalStock, setTotalStock] = useState(0);
  const [design, setDesign] = useState(0);
  const [size, setSize] = useState("Small");

  const router = useRouter();

  const designImages = [
    [
      "/white_front_t-shirt_with_tag_mockup_close_up-no-bg.webp",
      "/white_front_t-shirt_with_tag_mockup-no-bg.webp",
      "/white_front_t-shirt_with_tag_mockup_no-bg.webp",
    ],
    [
      "/black_t-shirt_back_mock_up-no-bg.webp",
      "/black_t-shirt_mockup_front-no-bg.webp",
      "/black_t-shirt_mockup_front_with_logo-no-bg.webp",
      "/black_t-shirt_mockup_front_with_logo_close_up-no-bg.webp",
    ],
  ];

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const res = await fetch("/api/stock");
        const data = await res.json();
        setStockLeft(data.stockLeft);
        setTotalStock(data.totalStock);
      } catch (err) {
        console.error("Failed to fetch stock data", err);
      }
    };

    fetchStock();
  }, []);

  const stockPercentage = totalStock
    ? ((totalStock - stockLeft) / totalStock) * 100
    : 0;

  return (
    <main className={styles.container}>
      <section className={styles.imageSection}>
        {designImages[design].map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="T-Shirt"
            width={500}
            height={600}
            className={styles.image}
          />
        ))}
      </section>
      <section className={styles.detailsSection}>
        <h2 className={styles.title}>LUEX LIMITED EDITION LOOSE FIT PRINTED T-SHIRT</h2>
        <p>{!design ? "Kaiju VIII | Ghost Front" : "Kaiju VIII | Reign Back"}</p>
        <h2 className={styles.price}>RS. 799.00</h2>

        <label className={styles.label}>DESIGN: Ghost Front / Reign Back</label>
        <div className={styles.designOptions}>
          <Image
            src="/white_front_t-shirt_with_tag_mockup-no-bg.webp"
            alt="Design 1"
            width={65}
            height={80}
            className={`${styles.designImage} ${design === 0 ? styles.active : ""}`}
            onClick={() => setDesign(0)}
          />
          <Image
            src="/black_t-shirt_mockup_front-no-bg.webp"
            alt="Design 2"
            width={65}
            height={80}
            className={`${styles.designImage} ${design === 1 ? styles.active : ""}`}
            onClick={() => setDesign(1)}
          />
        </div>

        <div className={styles.stockInfo}>
          <div className={styles.progressBarOuter}>
            <div
              className={styles.progressBarInner}
              style={{ width: `${stockPercentage}%` }}
            />
          </div>
          <p className={styles.stockText}>
            {stockLeft > 0
              ? `${stockLeft} out of ${totalStock} left`
              : "Sold Out"}
          </p>
        </div>

        <label className={styles.label}>Select Size:</label>
        <select
          className={styles.select}
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>XL</option>
          <option>XXL</option>
        </select>
        {stockLeft > 0 ? (
          <button
            className={styles.button}
            onClick={() =>
              router.push(
                `/preorder?design=${design}&size=${encodeURIComponent(size)}`
              )
            }
          >
            Pre-Order Now
          </button>
        ) : (
          <button className={styles.soldOutButton} disabled>
            SOLD OUT
          </button>
        )}
      </section>
    </main>
  );
}
