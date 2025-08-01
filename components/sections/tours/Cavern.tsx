"use client";
import React from "react";
import Card from "../../ui/Card";

export default function Cavern() {
  return (
    <section id="cavern">
      <Card
        title="Cenote Cavern Tours"
        image="/cavern.jpg"
        description="Discover the mesmerizing cenotes and mysterious caverns of Tulum's underwater world. 
        Enjoy endless visibility and stunning light displays as you glide through ancient geological formations. Safety and thrills guaranteed! 
        All Cavern Tours include full scuba rental equipment, tanks & weights, cenote entrance fees, transportation to and from Tulum Centro, and lunch/drinks for the day."
        details={["Price: $200 USD per diver", "Group rates for 5+ divers available upon request", "Difficulty: Advanced", "Prerequisites: Open Water scuba certification (or higher), Confidence with buoyancy control, A sense of adventure" ]}
        ctaLabel="Book Cavern Dive"
        ctaHref="/about"
      />
    </section>
  );
} 