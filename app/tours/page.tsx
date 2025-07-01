"use client";
import React from "react";
import styled from "styled-components";
import Container from "../../components/ui/Container";
import Cavern from "../../components/sections/tours/Cavern";
import Reef from "../../components/sections/tours/Reef";
import Group from "../../components/sections/tours/Group";

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

export default function ToursPage() {
  return (
    <main>
      <Container>
        <PageSurface>
          <PageContainer>
            <Cavern />
            <Reef />
            <Group />
          </PageContainer>
        </PageSurface>
      </Container>
    </main>
  );
} 