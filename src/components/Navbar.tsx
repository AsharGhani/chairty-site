import * as React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { themeLight, heights } from "../styles/variables";

const colorTheme = themeLight;

/*display: flex;
  flex: 1 0 50%;*/
const StyledNavbar = styled.nav`
  margin: 0px;
  padding: 0px;
  width: 100%;
`; // reset margins and paddings

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
`;

const MenuItem = styled.li`
  display: block;
  list-style-type: none;
  text-transform: none;
  flex: 1 0 auto;
`;

const SubMenu = styled.ul`
  z-index: 5;
  display: none;
  position: absolute;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  padding: 0px;
  background: ${colorTheme.background2};
  &:hover {
    display: flex;
  }

  nav ul li:hover > & {
    display: block;
  }
`;

const SubMenuItem = styled.li`
  list-style-type: none;
  color: ${colorTheme.navBarText};
  background: ${colorTheme.background2};
  &:hover {
    display: flex;
  }
`;

const MenuItemLink = styled(Link)`
  width: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  background: ${colorTheme.background1};
  color: ${colorTheme.navBarText};
  padding: 1rem;
  transition: background-color 0.3 ease;
  &:focus,
  &:hover {
    text-decoration: none;
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    transform: scaleX(0);
    height: 0.125rem;
    left: 0.0625rem;
    background-color: ${colorTheme.activeItem};
    transform-origin: 100% 50%;
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
  &:focus:after,
  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
  }
  & a {
    width: 100%;
  }
`;

const Navbar: React.FC = () => (
  <StyledNavbar>
    <Menu>
      <MenuItem>
        <MenuItemLink to="/about">About</MenuItemLink>
      </MenuItem>
      <MenuItem>
        <MenuItemLink to="/">All Projects</MenuItemLink>
        <SubMenu>
          <SubMenuItem>
            <MenuItemLink to="/Projects/healthcare">Health Care</MenuItemLink>
          </SubMenuItem>
          <SubMenuItem>
            <MenuItemLink to="/Projects/water">Access to Water</MenuItemLink>
          </SubMenuItem>
          <SubMenuItem>
            <MenuItemLink to="/Projects/povertyAlleviation">Poverty Alleviation</MenuItemLink>
          </SubMenuItem>
          <SubMenuItem>
            <MenuItemLink to="/Projects/marriage">Marriage</MenuItemLink>
          </SubMenuItem>
          <SubMenuItem>
            <MenuItemLink to="/Projects/education">Education</MenuItemLink>
          </SubMenuItem>
          <SubMenuItem>
            <MenuItemLink to="/Projects/mealISB">Meal ISB</MenuItemLink>
          </SubMenuItem>
        </SubMenu>
      </MenuItem>
      <MenuItem>
        <MenuItemLink to="/currentProjects">Current Projects</MenuItemLink>
      </MenuItem>
      <MenuItem>
        <MenuItemLink to="/highlights">Highlights</MenuItemLink>
      </MenuItem>
    </Menu>
  </StyledNavbar>
);

export default Navbar;
