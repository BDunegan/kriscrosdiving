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

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.neutral.container};
  border-radius: 8px;
  font-size: 1rem;
`;

const Accordion = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.container};
`;

const AccordionHeader = styled.button<{ open: boolean }>`
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  padding: ${({ theme }) => theme.spacing(3)};
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const AccordionBody = styled.div<{ open: boolean }>`
  max-height: ${({ open }) => (open ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ open, theme }) => (open ? theme.spacing(3) : "0")};
  color: ${({ theme }) => theme.colors.neutral.main};
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
      <SearchInput
        type="text"
        placeholder="Search FAQs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search FAQs"
      />
      {filteredFaqs.map((faq, idx) => (
        <Accordion key={idx}>
          <AccordionHeader
            open={openIdx === idx}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            aria-expanded={openIdx === idx}
            aria-controls={`faq-body-${idx}`}
          >
            <span>{faq.category}: {faq.question}</span>
            <ExpandMoreIcon style={{ transform: openIdx === idx ? "rotate(180deg)" : undefined, transition: "transform 0.2s" }} />
          </AccordionHeader>
          <AccordionBody open={openIdx === idx} id={`faq-body-${idx}`}>
            {faq.answer}
          </AccordionBody>
        </Accordion>
      ))}
    </Section>
  );
} 