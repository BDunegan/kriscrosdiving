"use client";
import React from "react";
import Card from "../../ui/Card";

export default function PlayaDelCarmenReef() {
  return (
    <section id="playa-reef">
      <Card
        title="Playa del Carmen Reef Tours"
        image="/discovery.jpg"
        description="Centrally located between Tulum and Cancun, Playa del Carmen offers the thrill of drift diving while navigating reefs and wrecks. Dive sites often host large pelagic species (sharks, rays, and turtles) because of the strong current of the Gulf Stream. November-February there is also an opportunity to dive with bull sharks, as large numbers of pregnant female bull sharks occupy the warm coastal waters around the city!"
        details={[
          "Price: $200 USD per diver", 
          "Bull shark dive: +$25 USD (November-February)",
          "Group size: 2-4 divers", 
          "Difficulty: Intermediate to Advanced",
          "Includes: Full scuba rental equipment, tanks & weights, boat fees, transportation to and from Tulum Centro, and lunch/drinks for the day"
        ]}
        ctaLabel="Book Playa del Carmen Dive"
        ctaHref="/contact?type=playa-reef"
      />
    </section>
  );
}