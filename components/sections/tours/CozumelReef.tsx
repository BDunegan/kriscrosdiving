"use client";
import React from "react";
import Card from "../../ui/Card";

export default function CozumelReef() {
  return (
    <section id="cozumel-reef">
      <Card
        title="Cozumel Reef Tours"
        image="/reef.jpeg"
        description="This island off the coast of Quintana Roo is home to Cozumel Reefs National Park, a UNESCO protected area. Teeming with fish, sponge, crustaceans, and coral, the reef in Cozumel is worthy of any diver's bucket list. The strong Gulf Stream current will push you peacefully along the dive site, as you drift by with little fin work required."
        details={[
          "Price: $240 USD per diver", 
          "Group size: 2-4 divers", 
          "Difficulty: Intermediate to Advanced",
          "Duration: 8-10 hours (due to distance from Tulum)",
          "UNESCO World Heritage Site",
          "Includes: Full scuba rental equipment, tanks & weights, boat fees, transportation to and from Tulum Centro, and lunch/drinks for the day"
        ]}
        ctaLabel="Book Cozumel Reef Dive"
        ctaHref="/contact?type=cozumel-reef"
      />
    </section>
  );
}