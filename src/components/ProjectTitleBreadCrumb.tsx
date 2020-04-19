import * as React from "react";
import styled from "@emotion/styled";
import { themeLight, dimensions, widths } from "../styles/variables";
import { Link } from "gatsby";
import { getEmSize } from "../styles/mixins";

const colorTheme = themeLight;

const StyledTitleContainerDiv = styled.div`
  width: ${getEmSize(widths.xl)}em;
  padding-bottom: 20px;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 0.125rem;
    background-color: ${colorTheme.activeItem};
  }
`;

const SytledTitle = styled.span`
  font-size: ${dimensions.headingSizes.h1}rem;
`;

const StyledBreadCrumbEntry = styled(Link)`
  font-size: ${dimensions.headingSizes.h4}rem;
  color: ${colorTheme.buttonSecondary};
`;

const StyledBreadCrumbSeparator = styled.span`
  font-size: ${dimensions.fontSize.large}px;
  color: ${colorTheme.dates};
  &:after {
    content: "\u232a";
  }
  padding: 0px 8px;
`;

interface ProjectTitleBreadCrumpProps {
  title: string;
  parent?: ProjectType;
}

function createBreadCrumbEntry(text: string, link: string) {
  return (
    <>
      <StyledBreadCrumbEntry to={link} key="link">
        {text}
      </StyledBreadCrumbEntry>{" "}
      <StyledBreadCrumbSeparator />
    </>
  );
}

const ProjectTitleBreadCrump: React.FC<ProjectTitleBreadCrumpProps> = function(props) {
  const breadCrumbEntries = [];
  breadCrumbEntries.push(createBreadCrumbEntry("Home", "/"));

  let parentProject = props.parent;
  while (parentProject) {
    const link = "/projecttype/" + parentProject.slug;
    breadCrumbEntries.push(createBreadCrumbEntry(parentProject.title, link));
    parentProject = parentProject.parentProject;
  }

  return (
    <StyledTitleContainerDiv>
      {breadCrumbEntries}
      <SytledTitle>{props.title}</SytledTitle>
    </StyledTitleContainerDiv>
  );
};

export default ProjectTitleBreadCrump;
