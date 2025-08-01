"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const reviews = [
  {
    name: "Chastity Manske",
    text: "If you're looking to explore the beautiful underwater caverns of Tulum, you must book with Kristin! Her expertise and passion for the cenotes are next level! She balances adventure and safety while making the diving experience unforgettable! I've been traveling to Tulum for 3 consecutive years and I've always booked with Kris Cros Diving because I know that I'm going to get quality dives with a trusted guide.",
    stars: "★★★★★",
    link: "https://maps.app.goo.gl/C2uUbiYUsm6apqSb6"
  },
  {
    name: "Shalisse Ewing",
    text: "Kristin is an absolutely incredible dive instructor. As a newer diver her continued reassurance, support and guidance was exactly what I needed. She made me feel so comfortable and truly helped me find my love for diving. She was also willing to go the extra mile in ensuring both my fiancé and I had everything we needed up front - transportation, snacks, gear, you name it!!",
    stars: "★★★★★",
    link: "https://maps.app.goo.gl/ZrjveszKecH3p6j78"
  },
  {
    name: "Sinead O'Byrne",
    text: "I was initially nervous about diving the cenotes in Tulum due to safety but when we met Kristin I instantly felt at ease. Kristin is so professional and knowledgeable about the cave systems and gave us a very thorough dive briefing to ensure we knew what to expect. Diving the cenotes was a magical experience and one of the best things we have ever done!!",
    stars: "★★★★★",
    link: "https://maps.app.goo.gl/czc11o5T3gbZf8BbA"
  },
  {
    name: "BringtheHorizon",
    text: "We were really lucky to have Kristin as our dive guide in Tulum. Over 2 days she took us to six cenotes, even helping us to come up with a tailored dive schedule that suited our group (a mix of levels from open water to divemaster). She is very experienced, so we felt safe diving in caverns with her. She's also a friendly, patient and helpful person.",
    stars: "★★★★★",
    link: "https://maps.app.goo.gl/FkDynv7efpgrzdC1A"
  },
];

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const ReviewCard = styled.a`
  background: ${({ theme }) => theme.colors.surface.bright};
  box-shadow: ${({ theme }) => theme.elevation.level1};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing(4)};
  margin: ${({ theme }) => theme.spacing(2)} 0;
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.elevation.level2};
  }
`;

const Stars = styled.div`
  color: #ffd700;
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const NavButton = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    background: ${({ theme }) => theme.colors.primary.container};
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const Dots = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  margin: 0 16px;
`;

const Dot = styled.span<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary.main : theme.colors.primary.container};
  border: 1.5px solid ${({ theme }) => theme.colors.primary.main};
  display: inline-block;
  transition: background 0.2s;
`;

export default function Reviews() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? reviews.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === reviews.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIdx((i) => (i === reviews.length - 1 ? 0 : i + 1));
    }, 12000);
    return () => clearTimeout(timer);
  }, [idx]);

  return (
    <Section id="reviews">
      <h2>Customer Reviews</h2>
      <ReviewCard href={reviews[idx].link} target="_blank" rel="noopener noreferrer">
        <Stars>{reviews[idx].stars}</Stars>
        <p>"{reviews[idx].text}"</p>
        <strong>- {reviews[idx].name}</strong>
      </ReviewCard>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <NavButton onClick={prev} aria-label="Previous Review">&#8592;</NavButton>
        <Dots>
          {reviews.map((_, i) => (
            <Dot key={i} $active={i === idx} />
          ))}
        </Dots>
        <NavButton onClick={next} aria-label="Next Review">&#8594;</NavButton>
      </div>
    </Section>
  );
}