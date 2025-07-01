"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Container from "../../components/ui/Container";
import Reviews from "../../components/sections/about/Reviews";

const PageSurface = styled.div`
  background: ${({ theme }) => theme.colors.surface.bright};
  /* border-radius: 24px; */
  box-shadow: ${({ theme }) => theme.elevation.level1};
  padding: ${({ theme }) => theme.spacing(8)} 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  width: 100%;
`;

const HeadshotWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const Headshot = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

const StorySection = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const StoryText = styled.p`
  ${({ theme }) => theme.typography.bodyLarge};
  color: ${({ theme }) => theme.colors.neutral.main};
`;

export default function AboutPage() {
  return (
    <main>
      <Container>
        <PageSurface>
          <PageContainer>
            <Reviews />
            <HeadshotWrapper>
              <Headshot>
                <Image src="/kris.jpeg" alt="Kris headshot" width={96} height={96} style={{ objectFit: "cover", width: '100%', height: '100%' }} />
              </Headshot>
            </HeadshotWrapper>
            <StorySection>
              <h2>About Kris</h2>
              <StoryText>
                I'm a PADI instructor, cave diver, marine biologist, and local Tulum cavern guide. I'm originally from Boston, MA but have lived and dived many places. I've been fortunate to call Tulum home for the past three years.<br /><br />
                My diving journey first began in 2009, when I completed my Open Water course while studying Marine Biology in college. Since then, scuba diving has allowed me to work many exciting jobs across the globe, including being an aquarium diver in San Diego, a purser on a liveaboard boat in Australia, and a Divemaster in Koh Tao, Thailand.<br /><br />
                I became a PADI instructor in February 2020 and have been working full time as a dive professional ever since. Upon moving to Tulum, I instantly fell in love with cenotes and cave diving. Getting cave certified has been the most rewarding scuba experience thus far! This course also prepared me for cavern guiding confidently and safely.<br /><br />
                The cenotes of the Riviera Maya are such a unique environment, full of fascinating geological formations and breathtaking light displays. I would love to share the wonder of cenote diving with you. Reach out today to start planning your dream dive vacation!
              </StoryText>
            </StorySection>
          </PageContainer>
        </PageSurface>
      </Container>
    </main>
  );
} 