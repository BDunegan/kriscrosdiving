"use client";
import React from "react";
import Card from "../../ui/Card";

export default function Discovery() {
  return (
    <section id="discovery">
      <Card
        title="Discovery Diving"
        image="/discovery.jpg"
        description="Perfect for beginners! Try scuba diving in a safe, controlled environment with a certified instructor. No experience required."
        details={["Price: $90 USD", "Duration: Half day", "Includes: Equipment, instruction"]}
        ctaLabel="Book Discovery Dive"
        ctaHref="/contact?type=discovery"
      />
    </section>
  );
} 