"use client";
import React from "react";
import Card from "../../ui/Card";

export default function Advanced() {
  return (
    <section id="advanced">
      <Card
        title="Advanced & Specialty Courses"
        image="/advanced.jpeg"
        description="Expand your skills with advanced and specialty PADI courses: Deep, Nitrox, Rescue, and more."
        details={["Price: Varies", "Duration: 2-3 days", "Includes: Equipment, certification fees"]}
        ctaLabel="Inquire Now"
        ctaHref="/contact?type=advanced"
      />
    </section>
  );
} 