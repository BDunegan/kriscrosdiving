import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const StoryText = styled.p`
  ${({ theme }) => theme.typography.bodyLarge};
  color: ${({ theme }) => theme.colors.neutral.main};
`;

export default function CompanyStory() {
  return (
    <Section>
      <h2>Our Story</h2>
      <StoryText>
        KrisCros Diving was founded by passionate divers with decades of experience in Cozumel's waters. Our mission is to provide safe, personalized, and unforgettable diving adventures for all skill levels. We believe in small groups, environmental stewardship, and the highest standards of training and safety.
      </StoryText>
    </Section>
  );
} 