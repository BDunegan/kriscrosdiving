"use client";
import React from "react";
import styled from "styled-components";
import Container from "../../components/ui/Container";
import FAQList from "../../components/sections/FAQList";

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

export default function FAQPage() {
  return (
    <main>
      <Container>
        <PageSurface>
          <PageContainer>
            <FAQList />
          </PageContainer>
        </PageSurface>
      </Container>
    </main>
  );
} 