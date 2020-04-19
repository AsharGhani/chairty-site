import * as React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
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

interface StaticQueryProps {
  allContentfulProjectType: {
    edges: [
      {
        node: ProjectType;
      },
    ];
  };
}

const Navbar: React.FC = () => (
  <StaticQuery
    query={graphql`
      query NavbarAllProjectTypesQuery {
        allContentfulProjectType(limit: 1000) {
          edges {
            node {
              slug
              title
              parentProject {
                slug
              }
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => {
      const projectsSubMenuLinks: React.ReactNode[] = [];
      for (const { node } of data.allContentfulProjectType.edges) {
        if (node.parentProject) {
          continue;
        }

        projectsSubMenuLinks.push(
          <SubMenuItem key={node.slug}>
            <MenuItemLink to={"/projecttype/" + node.slug} activeClassName="menu-link-active">
              {node.title}
            </MenuItemLink>
          </SubMenuItem>,
        );
      }

      /*
                <SubMenuItem>
                  <MenuItemLink to="/Projects/water" activeClassName="menu-link-active">
                    Access to Water
                  </MenuItemLink>
                </SubMenuItem>
                <SubMenuItem>
                  <MenuItemLink to="/Projects/povertyAlleviation" activeClassName="menu-link-active">
                    Poverty Alleviation
                  </MenuItemLink>
                </SubMenuItem>
                <SubMenuItem>
                  <MenuItemLink to="/Projects/marriage" activeClassName="menu-link-active">
                    Marriage
                  </MenuItemLink>
                </SubMenuItem>
                <SubMenuItem>
                  <MenuItemLink to="/Projects/education" activeClassName="menu-link-active">
                    Education
                  </MenuItemLink>
                </SubMenuItem>
                <SubMenuItem>
                  <MenuItemLink to="/Projects/mealISB" activeClassName="menu-link-active">
                    Meal ISB
                  </MenuItemLink>
                </SubMenuItem>*/

      return (
        <StyledNavbar id="nav-bar">
          <Menu>
            <MenuItem>
              <MenuItemLink to="/about" activeClassName="menu-link-active">
                About
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink to="">All Projects</MenuItemLink>
              <SubMenu>{projectsSubMenuLinks}</SubMenu>
            </MenuItem>
            <MenuItem>
              <MenuItemLink to="/currentProjects" activeClassName="menu-link-active">
                Current Projects
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink to="/highlights" activeClassName="menu-link-active">
                Highlights
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </StyledNavbar>
      );
    }}
  ></StaticQuery>
);

export default Navbar;
