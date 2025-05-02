"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./PreOrderPage.module.css";
import { useRouter } from "next/navigation";

export default function PreOrderPage() {
  const searchParams = useSearchParams();
  const design = searchParams.get("design") || "0";
  const size = searchParams.get("size") || "Small";

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
  });

  const [selectedDesign, setSelectedDesign] = useState(design);
  const [selectedSize, setSelectedSize] = useState(size);
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ Add loading state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; //

    setIsSubmitting(true); // 

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          design: Number(selectedDesign),
          size: selectedSize,
          ...formData,
        }),
      });

      if (res.ok) {
        router.push("/?thankyou=true");
      } else {
        console.log("Failed to submit order.");
        setIsSubmitting(false); // Allow retry
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      setIsSubmitting(false); // Allow retry
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>Complete Your Pre-Order</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>Selected Design:</label>
          <select
            className={styles.select}
            value={selectedDesign}
            onChange={(e) => setSelectedDesign(e.target.value)}
          >
            <option value="0">Kaiju VIII | Ghost Front</option>
            <option value="1">Kaiju VIII | Reign Back</option>
          </select>

          <label className={styles.label}>Selected Size:</label>
          <select
            className={styles.select}
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>XL</option>
            <option>XXL</option>
          </select>

          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            name="contact"
            placeholder="Contact Number (With country code)"
            value={formData.contact}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className={styles.textarea}
            rows={4}
          />
          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting} 
          >
            {isSubmitting ? "Submitting..." : "Submit Pre-Order"}
          </button>
        </form>
      </div>
    </div>
  );
}
