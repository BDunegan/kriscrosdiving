"use client";
import React from "react";
import Card from "../../ui/Card";

export default function Cavern() {
  return (
    <section id="cavern">
      <Card
        title="Cavern Diving"
        image="/cavern.jpg"
        description="Experience the thrill of exploring Cozumel's famous cenotes and caverns with our certified guides. Suitable for advanced divers."
        details={["Price: $150 USD", "Duration: 2 dives, 1 day", "Difficulty: Advanced"]}
        ctaLabel="Book Cavern Dive"
        ctaHref="/contact?type=cavern"
      />
    </section>
  );
} 