"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const reviews = [
  {
    name: "John D.",
    text: "Absolutely the best dive experience in Cozumel! The team was professional, friendly, and safety-focused.",
  },
  {
    name: "Sarah K.",
    text: "Amazing reefs, small groups, and top-notch instruction. Highly recommend KrisCros Diving!",
  },
  {
    name: "Carlos M.",
    text: "The cavern dive was unforgettable. I felt safe and supported the whole time.",
  },
];

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const ReviewCard = styled.div`
  background: ${({ theme }) => theme.colors.surface.bright};
  box-shadow: ${({ theme }) => theme.elevation.level1};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing(4)};
  margin: ${({ theme }) => theme.spacing(2)} 0;
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
    }, 10000);
    return () => clearTimeout(timer);
  }, [idx]);

  return (
    <Section id="reviews">
      <h2>Customer Reviews</h2>
      <ReviewCard>
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