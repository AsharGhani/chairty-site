import * as React from "react";
import styled from "@emotion/styled";
import { themeLight, dimensions } from "../styles/variables";

interface ProjectInfo {
  title: string;
  date: Date;
  id: string;
}

const colorTheme = themeLight;

const StyledProjectInfoListContainer = styled.div`
  padding: 16px;
  margin-top: 30px;
  margin-right: 20px;
  box-shadow: 0 0 30px 2px ${colorTheme.shadow};
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
`;
const StyledProjectLink = styled.div`
  display: inline;
  background: ${colorTheme.button};
  color: ${colorTheme.buttonText};
  font-size: ${dimensions.fontSize.xsmall}px;
  text-decoration: none;
  padding: 4px 8px;
  &:focus,
  &:hover {
    background: ${colorTheme.buttonHover};
    text-decoration: none;
  }
`;

const RecentProjects = (React.FC = () => {
  const [projects, setProjects] = React.useState<ProjectInfo[]>([]);

  setTimeout(() => {
    setProjects([
      {
        title: "The righteous truly dink of a coup tempered with camphor - a fountain from which the servants",
        date: new Date(),
        id: "1",
      },
      {
        title: 'In Nov of 2018, a request to help educate a studen was recieved. "M.S" was in grade 5',
        date: new Date(new Date().setFullYear(2019, 10, 22)),
        id: "2",
      },
      {
        title: "This groupd assisted individuals by procuring a new/used richshaw for them using the maximum",
        date: new Date(new Date().setFullYear(2019, 5, 23)),
        id: "3",
      },
    ]);
  }, 100);

  const renderedProjectInfos: React.ReactNode[] = [];
  for (const project of projects) {
    renderedProjectInfos.push(
      <StyleProjectInfo key={project.id}>
        <StyledProjectDate>{project.date.toDateString()}</StyledProjectDate>
        <StyledProjectTitle>{project.title}</StyledProjectTitle>
        <a href={"/project/" + project.id}>
          <StyledProjectLink>Read More</StyledProjectLink>
        </a>
      </StyleProjectInfo>,
    );
  }

  return (
    <StyledProjectInfoListContainer>
      <StyledHeader>Recent Projects</StyledHeader>
      {renderedProjectInfos}
    </StyledProjectInfoListContainer>
  );
});

export default RecentProjects;
