import { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import React from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
    </Suspense>
  );
};

export default page;
