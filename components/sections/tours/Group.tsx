"use client";
import React from "react";
import Card from "../../ui/Card";

export default function Group() {
  return (
    <section id="group">
      <Card
        title="Group Packages"
        image="/group.jpeg"
        description="Custom group diving experiences for families, friends, and corporate teams. Tailored schedules and pricing."
        details={["Price: Custom", "Duration: Flexible", "Difficulty: All levels"]}
        ctaLabel="Inquire Now"
        ctaHref="/contact?type=group"
      />
    </section>
  );
} 