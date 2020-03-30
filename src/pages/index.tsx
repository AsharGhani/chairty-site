import * as React from "react";
import { Link } from "gatsby";
import { getEmSize } from "../styles/mixins";

import Page from "../components/Page";
import IndexLayout from "../layouts";
import SlideShow from "../components/Slideshow";
import styled from "@emotion/styled";
import css from "@emotion/core";
import RecentProjects from "../components/RecentProjects";
import HadithQuote from "../components/HadithQuote";
import { breakpoints } from "../styles/variables";

const lg = `@media (min-width: ${getEmSize(breakpoints.lg)}em)`;

const StyledGrid = styled.div`
  width: 100%;
  height: 100%;

  ${lg} {
    display: grid;
    grid-template-columns: 300px 1fr;
  }
`;

const StyledMainPageSidePanel = styled.div`
  min-width: 200px;
  margin-bottom: 30px;
`;

const StyledSlideShowContainer = styled.div`
  min-width: 200px;
`;

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <StyledGrid>
        <StyledMainPageSidePanel>
          <HadithQuote></HadithQuote>
          <RecentProjects></RecentProjects>
        </StyledMainPageSidePanel>
        <StyledSlideShowContainer>
          <SlideShow nodeTexts={["Health Care", "Access To Water", "Poverty Alleviation", "Education"]}></SlideShow>
        </StyledSlideShowContainer>
      </StyledGrid>
      {/*<Link to="/page-2/">Go to page 2</Link>*/}
    </Page>
  </IndexLayout>
);

export default IndexPage;
