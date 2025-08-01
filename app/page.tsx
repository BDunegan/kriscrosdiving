"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Container from "../components/ui/Container";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.surface.bright};
  padding: ${({ theme }) => theme.spacing(6)} 0 ${({ theme }) => theme.spacing(4)} 0;
  text-align: center;
  box-shadow: ${({ theme }) => theme.elevation.level1};
  width: 80vw;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16/7;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  box-shadow: ${({ theme }) => theme.elevation.level2};
`;

const HeroTitle = styled.h1`
  ${({ theme }) => theme.typography.displayLarge};
  color: ${({ theme }) => theme.colors.neutral.main};
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.bodyLarge}
  max-width: 50vw;
  ${({ theme }) => theme.typography.headlineMedium};
  color: ${({ theme }) => theme.colors.neutral.main};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const CTAButton = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(6)};
  margin: ${({ theme }) => theme.spacing(2)} 0;
  border-radius: 24px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.labelLarge};
  box-shadow: ${({ theme }) => theme.elevation.level2};
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.primary.container};
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const HelloPreview = styled.section`
  max-width: 50vw;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral.main};
  ${({ theme }) => theme.typography.headlineMedium};
  background: ${({ theme }) => theme.colors.surface.bright};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.elevation.level0};
  padding: ${({ theme }) => theme.spacing(5)};
`;

export default function Home() {
  return (
    <main>
      <Container>
        <HeroSection id="overview">
        <HeroTitle>Kris Cros Diving</HeroTitle>
          <HeroSubtitle>
            Tulum's Premier Scuba Diving Experience <br />
            Explore the world-famous reefs and caverns of Tulum with certified, safety-focused professionals. Small groups, personalized service, and unforgettable adventures await!
          </HeroSubtitle>
          <HeroImageWrapper>
            <Image
              src="/header.jpg"
              alt="KrisCros Diving Hero"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </HeroImageWrapper>
          <CTAButton href="/tours">View Tours</CTAButton>
          <CTAButton href="/training">View Training</CTAButton>
          <HelloPreview>
            Kris Cros Diving is a woman-owned dive operation based in Tulum, Mexico. 
            We offer personalized scuba excursions including cenote Cavern Tours, PADI Training courses, and guided Reef Dives. 
            Small group sizes and tailor-made tour packages will make your Mexican dive trip unforgettable. So what are you waiting for, let's dive in!
          </HelloPreview>
        </HeroSection>
      </Container>
    </main>
  );
}
