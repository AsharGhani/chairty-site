import * as React from "react";
import styled, { StyledComponent } from "@emotion/styled";
import { transparentize } from "polished";
import { Link } from "gatsby";

import { heights, dimensions, colors, themeLight } from "../styles/variables";
import Container from "./Container";
import HeaderImage from "./HeaderImage";
import Navbar from "./Navbar";

const colorTheme = themeLight;

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-image: linear-gradient(45deg, ${colorTheme.headerBackground1} 0%, ${colorTheme.headerBackground2} 100%);
  color: ${transparentize(0.5, colors.white)};
`;

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const HomepageLink = styled(Link)`
  color: ${colorTheme.headerText};
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const NavBarContainer = styled(Container)`
  padding: 0 ${dimensions.containerPadding}rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SecondaryTitleContainer = styled.div`
  font-style: italic;
  font-size: ${dimensions.headingSizes.h3};
  padding-left: 1rem;
`;

interface HeaderProps {
  title: string;
  secondaryTitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, secondaryTitle }) => (
  <>
    <StyledHeader>
      <HeaderInner>
        <HomepageLink to="/">
          <HeaderImage />
          {title}
        </HomepageLink>
        <SecondaryTitleContainer>{secondaryTitle}</SecondaryTitleContainer>
      </HeaderInner>
    </StyledHeader>

    <NavBarContainer>
      <Navbar></Navbar>
    </NavBarContainer>
  </>
);

export default Header;
