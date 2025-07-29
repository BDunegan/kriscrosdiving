"use client";
import React, { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    category: "Safety",
    question: "Is scuba diving safe?",
    answer: "Yes, scuba diving is very safe when proper procedures are followed. All our instructors are certified and prioritize your safety at all times.",
  },
  {
    category: "Equipment",
    question: "Do I need to bring my own equipment?",
    answer: "No, all necessary equipment is provided and included in your package. You are welcome to bring your own if you prefer.",
  },
  {
    category: "Booking",
    question: "How do I book a tour or course?",
    answer: "You can book directly on our website or contact us for custom packages.",
  },
  {
    category: "Certification",
    question: "What certifications do you offer?",
    answer: "We offer PADI certifications from beginner to advanced levels, including specialty courses.",
  },
];

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Accordion = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AccordionHeader = styled.button<{ open: boolean }>`
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  padding: ${({ theme }) => theme.spacing(3)};
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const AccordionBody = styled.div<{ open: boolean }>`
  max-height: ${({ open }) => (open ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ open, theme }) => (open ? `0 ${theme.spacing(3)} ${theme.spacing(3)}` : "0")};
  color: ${({ theme }) => theme.colors.neutral.main};
  line-height: 1.6;
`;

const IconWrapper = styled.div<{ open: boolean }>`
  color: ${({ theme }) => theme.colors.neutral.main};
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
`;

export default function FAQList() {
  const [search, setSearch] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase()) ||
      faq.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Section id="faq-list">
      <h2>Frequently Asked Questions</h2>
      {filteredFaqs.map((faq, idx) => (
        <Accordion key={idx}>
          <AccordionHeader
            open={openIdx === idx}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            aria-expanded={openIdx === idx}
            aria-controls={`faq-body-${idx}`}
          >
            <span>{faq.category}: {faq.question}</span>
            <IconWrapper open={openIdx === idx}>
              <ExpandMoreIcon />
            </IconWrapper>
          </AccordionHeader>
          <AccordionBody open={openIdx === idx} id={`faq-body-${idx}`}>
            {faq.answer}
          </AccordionBody>
        </Accordion>
      ))}
    </Section>
  );
} 