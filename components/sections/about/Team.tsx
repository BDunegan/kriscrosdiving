import React from "react";
import styled from "styled-components";
import Image from "next/image";

const team = [
  {
    name: "Kris",
    role: "Owner & Lead Instructor",
    bio: "PADI Master Scuba Diver Trainer with 20+ years of experience in Cozumel.",
    image: "/kris.jpeg",
  },
  {
    name: "Cros",
    role: "Co-Owner & Dive Guide",
    bio: "Expert in local reefs and cenotes, passionate about marine conservation.",
    image: "/cros.jpg",
  },
];

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const TeamGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const MemberCard = styled.div`
  background: ${({ theme }) => theme.colors.surface.bright};
  box-shadow: ${({ theme }) => theme.elevation.level1};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing(4)};
  flex: 1;
  text-align: center;
`;

const MemberImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto ${({ theme }) => theme.spacing(2)} auto;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

export default function Team() {
  return (
    <Section>
      <h2>Meet the Team</h2>
      <TeamGrid>
        {team.map((member) => (
          <MemberCard key={member.name}>
            <MemberImageWrapper>
              <Image src={member.image} alt={member.name} fill style={{ objectFit: "cover" }} />
            </MemberImageWrapper>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.bio}</p>
          </MemberCard>
        ))}
      </TeamGrid>
    </Section>
  );
} 