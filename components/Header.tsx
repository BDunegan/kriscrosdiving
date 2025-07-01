"use client";
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", anchors: [] },
  {
    href: "/tours",
    label: "Tours",
    anchors: [
      { href: "/tours#cavern", label: "Cavern" },
      { href: "/tours#reef", label: "Reef" },
      { href: "/tours#group", label: "Group" },
    ],
  },
  {
    href: "/training",
    label: "Training",
    anchors: [
      { href: "/training#discovery", label: "Discovery" },
      { href: "/training#open-water", label: "Open Water" },
      { href: "/training#advanced", label: "Advanced" },
    ],
  },
  { href: "/faq", label: "FAQ", anchors: [] },
  { href: "/about", label: "About", anchors: [] },
];

const HeaderBar = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 40vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: none;
  color: #fff;
  box-shadow: ${({ theme }) => theme.elevation.level2};
  overflow: hidden;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/cros.jpg') center 40%/cover no-repeat;
    opacity: 1;
    z-index: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
  position: relative;
  z-index: 1;
`;

const Logo = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: 2px;
`;

const NavLinks = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  margin: 0;
  padding: 0;
  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70vw;
    background: ${({ theme }) => theme.colors.primary.container};
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ theme }) => theme.spacing(6)};
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease;
    box-shadow: ${({ theme }) => theme.elevation.level3};
    z-index: 2000;
  }
`;

const NavLink = styled.li<{ $active: boolean }>`
  position: relative;
  a {
    color: ${({ $active, theme }) => ($active ? theme.colors.primary.main : '#fff')};
    background: ${({ $active, theme }) => ($active ? theme.colors.primary.container : 'transparent')};
    border-radius: 24px;
    padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
    font-weight: 500;
    font-size: 1rem;
    transition: background 0.2s, color 0.2s;
    &:hover {
      background: ${({ theme }) => theme.colors.primary.container};
      color: ${({ theme }) => theme.colors.primary.main};
    }
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background: ${({ theme }) => theme.colors.surface.bright};
  box-shadow: ${({ theme }) => theme.elevation.level2};
  border-radius: 12px;
  padding: 8px 0;
  margin: 0;
  list-style: none;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const DropdownItem = styled.li`
  width: 100%;
  a {
    display: block;
    width: 100%;
    padding: 10px 24px;
    color: ${({ theme }) => theme.colors.primary.main};
    background: transparent;
    text-align: left;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
    &:hover {
      background: ${({ theme }) => theme.colors.primary.container};
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  @media (max-width: 900px) {
    display: block;
    font-size: 2rem;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  // Close dropdown on mouse leave
  const handleDropdownLeave = () => setDropdownOpen(null);

  return (
    <HeaderBar>
      <Nav>
        <Logo>
          <Link href="/">KrisCros Diving</Link>
        </Logo>
        <Hamburger
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </Hamburger>
        <NavLinks open={menuOpen}>
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            const hasDropdown = link.anchors && link.anchors.length > 0;
            return (
              <NavLink
                key={link.href}
                $active={isActive}
                onMouseEnter={() => hasDropdown && setDropdownOpen(link.href)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                  {hasDropdown && <ExpandMoreIcon style={{ fontSize: 18, marginLeft: 2 }} />}
                </Link>
                {hasDropdown && dropdownOpen === link.href && (
                  <Dropdown>
                    {link.anchors.map((anchor) => (
                      <DropdownItem key={anchor.href}>
                        <Link href={anchor.href} onClick={() => setMenuOpen(false)}>{anchor.label}</Link>
                      </DropdownItem>
                    ))}
                  </Dropdown>
                )}
              </NavLink>
            );
          })}
        </NavLinks>
      </Nav>
    </HeaderBar>
  );
} 