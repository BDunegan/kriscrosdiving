"use client";
import React from "react";
import Card from "../../ui/Card";

export default function Reef() {
  return (
    <section id="reef">
      <Card
        title="Reef Diving"
        image="/reef.jpeg"
        description="Discover Cozumel's vibrant coral reefs and abundant marine life. Perfect for all experience levels."
        details={["Price: $120 USD", "Duration: 2 dives, 1 day", "Difficulty: All levels"]}
        ctaLabel="Book Reef Dive"
        ctaHref="/contact?type=reef"
      />
    </section>
  );
} 