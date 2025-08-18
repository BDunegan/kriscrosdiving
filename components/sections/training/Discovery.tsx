"use client";
import React from "react";
import Card from "../../ui/Card";

export default function Discovery() {
  return (
    <section id="discovery">
      <Card
        title="PADI Discovery Dive"
        image="/DSD.jpg"
        description="Find out what it feels like to have gills! On a Discovery Dive, you'll learn the basic skills of scuba diving and go for a shallow dive in the open water of Casa Cenote. This is a great way to experience scuba diving without the financial and time commitment of a full certification course. To learn more about getting scuba certified, check out the Open Water Course."
        details={[
          "Price: $160 USD per diver",
          "Group rates available upon request", 
          "Duration: Half day experience",
          "Location: Casa Cenote",
          "Includes: Full scuba rental equipment, tanks & weights, cenote entrance fees, transportation to and from Tulum Centro, and snacks/drinks for the day"
        ]}
        ctaLabel="Book Discovery Dive"
        ctaHref="https://www.google.com/url?q=https%3A%2F%2Fwa.link%2F4s58oz&sa=D&sntz=1&usg=AOvVaw12MK85PHQELT-M1RyaqNC_"
      />
    </section>
  );
}