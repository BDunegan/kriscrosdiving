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
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

const Logo = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: 2px;
  
  @media (max-width: 600px) {
    font-size: 1.75rem;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;

const NavLinks = styled.ul<{ $open: boolean }>`
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  margin: 0;
  padding: 0;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: ${({ theme }) => theme.spacing(2)};
    margin-top: ${({ theme }) => theme.spacing(1)};
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
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
  
  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    
    a {
      justify-content: center;
      width: 100%;
      padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(2)};
    }
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
  
  @media (max-width: 600px) {
    position: static;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    margin-top: ${({ theme }) => theme.spacing(1)};
    box-shadow: none;
  }
`;

const DropdownItem = styled.li`
  width: 100%;
  a {
    display: block;
    width: 100%;
    padding: 10px 24px;
    color: ${({ theme }) => theme.colors.neutral.main};
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
  
  @media (max-width: 600px) {
    a {
      color: #fff;
      text-align: center;
      padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
      
      &:hover {
        background: rgba(255, 255, 255, 0.2);
        color: #fff;
      }
    }
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 2rem;
  
  @media (max-width: 600px) {
    display: block;
  }
`;

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close dropdown on mouse leave (desktop only)
  const handleDropdownLeave = () => {
    if (!isMobile) {
      setDropdownOpen(null);
    }
  };

  // Handle mouse enter (desktop only)
  const handleDropdownEnter = (href: string) => {
    if (!isMobile) {
      setDropdownOpen(href);
    }
  };

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
        <NavLinks $open={menuOpen}>
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            const hasDropdown = link.anchors && link.anchors.length > 0;
            const shouldShowDropdown = hasDropdown && (
              isMobile || dropdownOpen === link.href
            );
            
            return (
              <NavLink
                key={link.href}
                $active={isActive}
                onMouseEnter={() => hasDropdown && handleDropdownEnter(link.href)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                  {hasDropdown && <ExpandMoreIcon style={{ fontSize: 18, marginLeft: 2 }} />}
                </Link>
                {shouldShowDropdown && (
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