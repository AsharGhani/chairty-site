import * as React from "react";
import styled from "@emotion/styled";
import { themeLight, dimensions } from "../styles/variables";
import { Link, graphql, useStaticQuery } from "gatsby";

interface ProjectInfo {
  title: string;
  startDate: Date;
  slug: string;
}

const colorTheme = themeLight;

const StyledProjectInfoListContainer = styled.div`
  padding: 16px;
  margin-top: 30px;
  margin-right: 20px;
  box-shadow: 0 0 30px 2px ${colorTheme.shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.div`
  color: ${colorTheme.activeItem};
  font-size: ${dimensions.headingSizes.h4}rem;
  font-weight: 500;
`;

const StyleProjectInfo = styled.div`
  padding: 8px 0px;
`;

const StyledProjectTitle = styled.div`
  color: ${colorTheme.regularText};
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: ${dimensions.fontSize.small}px;
  font-weight: 500;
`;
const StyledProjectDate = styled.div`
  color: ${colorTheme.dates};
  font-size: ${dimensions.fontSize.xsmall}px;
  margin-top: 8px;
  text-align: center;
`;
const StyledProjectLink = styled.div`
  margin-top: 8px;
  display: inline-flex;
  justify-content: center;
  min-width: 10rem;
  background: ${colorTheme.button};
  color: ${colorTheme.buttonText};
  text-decoration: none;
  padding: 4px 8px;
  &:focus,
  &:hover {
    background: ${colorTheme.buttonHover};
    text-decoration: none;
  }
  font-size: ${dimensions.fontSize.large}px;
  font-weight: 500;
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

const ProjectLinks: React.FC = () => {
  const data: StaticQueryProps = useStaticQuery(
    graphql`
      query ProjectLinksQuery {
        allContentfulProjectType(limit: 1000) {
          edges {
            node {
              slug
              title
              parentProject {
                slug
              }
              startDate
              status
            }
          }
        }
      }
    `,
  );

  const projects: ProjectInfo[] = [];
  for (const { node } of data.allContentfulProjectType.edges) {
    if (/*node.status.toLowerCase() !== "active" || */ !node.parentProject) {
      continue;
    }

    projects.push({
      title: node.title,
      startDate: new Date(node.startDate),
      slug: node.slug,
    });
  }

  let sortedProjectsList = projects.sort((projectA, projectB) => (projectA.startDate < projectB.startDate ? 1 : -1));
  if (sortedProjectsList.length > 3) {
    sortedProjectsList = sortedProjectsList.slice(0, 3);
  }

  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  const renderedProjectInfos: React.ReactNode[] = [];
  for (const project of sortedProjectsList) {
    renderedProjectInfos.push(
      <StyleProjectInfo key={project.slug}>
        <Link to={"/projecttype/" + project.slug}>
          <StyledProjectLink>{project.title}</StyledProjectLink>
        </Link>
        <StyledProjectDate>{project.startDate.toLocaleDateString(undefined, dateOptions)}</StyledProjectDate>
      </StyleProjectInfo>,
    );
  }

  return (
    <StyledProjectInfoListContainer>
      <StyledHeader>Recent Projects</StyledHeader>
      {renderedProjectInfos}
    </StyledProjectInfoListContainer>
  );
};

export default ProjectLinks;
