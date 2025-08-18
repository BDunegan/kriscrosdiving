"use client";
import React from "react";
import Card from "../../ui/Card";

export default function OpenWater() {
  return (
    <section id="open-water">
      <Card
        title="PADI Open Water Course"
        image="/openWater.jpeg"
        description="Learn how to scuba dive in just 3 days! To complete your PADI Open Water course, you'll spend a day learning and practicing basic skills in one of Tulum's clear, freshwater cenotes. Then you'll prove your mastery by completing 4 open water dives in either the cenotes, the ocean, or both!"
        details={[
          "Pricing: 1 student - $600 USD | 2 students - $550 USD | 3-4 students - $500 USD per diver",
          "Duration: 3 days",
          "Prerequisites: Mandatory online academics completed prior to course start purchased separately through the , ability to swim (200m swim test and 10 minute tread test), completed Diver Medical form",
          "Includes: Full scuba rental equipment, tanks & weights, cenote entrances and boat fees, transportation to and from Tulum Centro, and lunch/drinks each day",
          "Note: Pricing does not include required PADI academic materials"
        ]}
        ctaLabel="Book Open Water"
        ctaHref="https://www.google.com/url?q=https%3A%2F%2Fwa.link%2F4s58oz&sa=D&sntz=1&usg=AOvVaw12MK85PHQELT-M1RyaqNC_"
      />
    </section>
  );
}