"use client";
import React, { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    category: "General",
    question: "What is a cenote?",
    answer: "A cenote is a sinkhole, or an area where the limestone bedrock has naturally collapsed to expose the groundwater below. The Yucatan Peninsula contains an estimated 10,000 cenotes, many of which are accessible for snorkelers and divers to enjoy!",
  },
  {
    category: "General",
    question: "What is the difference between a cavern and a cave?",
    answer: "A cavern is defined as being the entrance, or light zone, of a cave system. The cavern diving limit is a maximum of 60m/200ft from open water, and natural light must be visible from any point on a cavern line. A cave is any point beyond the cavern zone, out of view from natural light.",
  },
  {
    category: "Certification",
    question: "Do I need a scuba certification to cavern dive?",
    answer: "Yes! Even if you have tried diving before, cavern safety standards do not permit non-certified individuals to dive in an overhead environment. You must complete an Open Water course and get certified before doing a cavern tour.",
  },
  {
    category: "Certification",
    question: "Do I need any special certifications to cavern dive?",
    answer: "No! Open Water recreational divers can participate in Cavern Tours. Some cenotes are reserved for Advanced certified divers due to their depth and/or difficulty. Cavern tours do not count towards cavern certification, which requires additional formal training. Sidemount or backmount setup is also not required, single tank gear is perfectly acceptable. If you would like to dive your own sidemount or backmount equipment, please let me know in advance to ensure tank availability.",
  },
  {
    category: "Logistics",
    question: "How long will our tour last?",
    answer: "Cavern tours typically last 5-6 hours depending on cenote location and number of divers. Open Water and Advanced course training days may last up to 8 hours depending on speed of progress and group size. Discovery Dives usually last 4 hours.",
  },
  {
    category: "Logistics",
    question: "What's included in the pricing?",
    answer: "Tour and training prices include all rental equipment, tanks & weights, all cenote entrance and/or boat fees, transport to and from Tulum Centro, and food/water for the day. Tours lasting over 5 hours will have a full lunch provided, otherwise snacks will be provided. Additional cenote GoPro/camera fees are not included in pricing, and Nitrox may be requested for an additional $5 USD per tank. Restrictions may apply to Group Trips.",
  },
  {
    category: "Logistics",
    question: "How many divers will be joining?",
    answer: "The maximum group size for cavern tours is 4 divers. I maintain this limit for certification training and discovery dives as well, to ensure quality attention and personalized service.",
  },
  {
    category: "Experience",
    question: "What's the best cenote to visit?",
    answer: "All of them! It's difficult to choose a favorite cenote as they each offer their own special formations and features. Whether you're seeking amazing light displays, mystical hydrogen sulfide layers, fascinating aquatic life, or ancient Mayan artifacts, every site contains unique wonders. Let me know what you're most excited about experiencing and I can customize the perfect cavern combination.",
  },
  {
    category: "Experience",
    question: "Can I dive in both the ocean and the cenotes?",
    answer: "While it's always a possibility, I highly recommend that certified divers embrace the once-in-a-lifetime opportunity of Cavern Tours while in Tulum. The world has lots of ocean sites to offer, but very limited scuba-accessible caverns. Plus, gloomy weather will never affect our ability to cavern dive- no overpowering currents or canceled boats, and minimal impact on visibility. The Yucatan peninsula is unique in providing so many recreational cavern sites, you don't want to miss out!",
  },
  {
    category: "Advanced",
    question: "Can we go further into the cave?",
    answer: "Only if you're cave certified! The Yucatan peninsula is home to several of the world's longest flooded cave systems, meaning there's endless kilometers of underwater cave to explore. Cave training is an extensive process requiring proficiency on a dual-tank configuration, expertise with buoyancy, trim and positioning, and mastery of safety drills and navigation skills. For more information on guided cave dives or cave training, please Contact Kristin directly.",
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
            <span>{faq.question}</span>
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