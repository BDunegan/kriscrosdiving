"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const FooterBar = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.surface.bright};
  color: #fff;
  box-shadow: ${({ theme }) => theme.elevation.level1};
  padding: ${({ theme }) => theme.spacing(8)} 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing(3)};
  
  @media (min-width: 600px) {
    gap: ${({ theme }) => theme.spacing(2)};
  }
  
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  
  a {
    color: ${({ theme }) => theme.colors.neutral.main};
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

const QuickLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-wrap: wrap;
  justify-content: center;
  
  @media (min-width: 600px) {
    justify-content: flex-start;
  }
  
  a {
    color: ${({ theme }) => theme.colors.neutral.main};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.neutral.main};
  
  @media (min-width: 600px) {
    justify-content: flex-start;
  }
`;

export default function Footer() {
  return (
    <FooterBar>
      <FooterContent>
        <Contact>
          <EmailIcon />
          <span>info@kriscrosdiving.com</span>
        </Contact>
        <SocialLinks>
          <a href="https://facebook.com/kriscrosdiving" target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon /></a>
          <a href="https://instagram.com/kriscrosdiving" target="_blank" rel="noopener" aria-label="Instagram"><InstagramIcon /></a>
        </SocialLinks>
        <QuickLinks>
          <Link href="/">Home</Link>
          <Link href="/tours">Tours</Link>
          <Link href="/training">Training</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/about">About</Link>
        </QuickLinks>
      </FooterContent>
    </FooterBar>
  );
}