"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
  description: string;
  details?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.surface.bright};
  box-shadow: ${({ theme }) => theme.elevation.level2};
  border-radius: 16px;
  overflow: hidden;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const CardImage = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const CardTitle = styled.h2`
  ${({ theme }) => theme.typography.headlineLarge};
  color: ${({ theme }) => theme.colors.primary.main};
  margin: 0;
`;

const CardDescription = styled.p`
  ${({ theme }) => theme.typography.bodyLarge};
  color: ${({ theme }) => theme.colors.neutral.main};
  margin: 0;
`;

const CardDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing(2)} 0;
  color: ${({ theme }) => theme.colors.secondary.main};
  ${({ theme }) => theme.typography.bodyMedium};
`;

const CardDetail = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const CardCTA = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  border-radius: 24px;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.elevation.level1};
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.primary.container};
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const Card: React.FC<CardProps> = ({ title, image, description, details, ctaLabel, ctaHref }) => (
  <CardContainer>
    <CardImage>
      <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
    </CardImage>
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      {details && (
        <CardDetails>
          {details.map((d, i) => (
            <CardDetail key={i}>{d}</CardDetail>
          ))}
        </CardDetails>
      )}
      {ctaLabel && ctaHref && <CardCTA href={ctaHref}>{ctaLabel}</CardCTA>}
    </CardContent>
  </CardContainer>
);

export default Card; 