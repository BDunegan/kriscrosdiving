"use client";
import React from "react";
import Card from "../../ui/Card";

export default function TulumReef() {
  return (
    <section id="tulum-reef">
      <Card
        title="Tulum Reef Tours"
        image="/cros.jpg"
        description="Tulum has several calm, shallow dive sites that are perfect for recreational training or a guided tour. Just a 10 min boat ride from the shore, this is the fastest way to explore the Mesoamerican Barrier reef! Student divers on both the Open Water and Advanced courses will enjoy gliding over soft corals and cruising around rock arches surrounded by thriving fish and invertebrate populations."
        details={[
          "Price: $200 USD per diver", 
          "Group size: 1-4 divers", 
          "Difficulty: All levels",
          "Includes: Full scuba rental equipment, tanks & weights, boat fees, transportation to and from Tulum Centro, and lunch/drinks for the day"
        ]}
        ctaLabel="Book Tulum Reef Dive"
        ctaHref="/about"
      />
    </section>
  );
}