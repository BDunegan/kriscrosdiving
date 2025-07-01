"use client";
import React from "react";
import Card from "../../ui/Card";

export default function OpenWater() {
  return (
    <section id="open-water">
      <Card
        title="Open Water Certification"
        image="/openwater.jpeg"
        description="Get your PADI Open Water certification with our experienced instructors. Internationally recognized, small class sizes."
        details={["Price: $400 USD", "Duration: 3-4 days", "Includes: Equipment, certification fees"]}
        ctaLabel="Book Open Water"
        ctaHref="/contact?type=open-water"
      />
    </section>
  );
} 