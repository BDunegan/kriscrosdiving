"use client";
import React from "react";
import Card from "../../ui/Card";

export default function Advanced() {
  return (
    <section id="advanced">
      <Card
        title="PADI Advanced Open Water Course"
        image="/advanced.jpeg"
        description="Improve your scuba skills and explore new depths by getting your PADI advanced certification! In this 2-day course, you will expand your diving knowledge and experience by completing 5 specialty dives, including a deep, a navigation, a peak performance buoyancy, and 2 unique specialty dives."
        details={[
          "Pricing: 1 student - $475 USD | 2 students - $450 USD | 3-4 students - $425 USD per diver",
          "Prerequisites: Open Water certification, minimum of 10 logged dives, online or book academics completed prior to course",
          "Course includes: 5 specialty dives (deep, navigation, peak performance buoyancy, plus 2 unique specialties)",
          "Includes: Full scuba rental equipment, tanks & weights, cenote entrances and boat fees, transportation to and from Tulum Centro, and lunch/drinks each day",
          "Note: Pricing does not include required PADI academic materials"
        ]}
        ctaLabel="Book Advanced Course"
        ctaHref="/about"
      />
    </section>
  );
}