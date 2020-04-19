import * as React from "react";
import { graphql } from "gatsby";

import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import styled from "@emotion/styled";
import ProjectTitleBreadCrump from "../components/ProjectTitleBreadCrumb";

interface PageTemplateProps {
  data: {
    contentfulProjectEntry: ProjectEntry;
  };
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  const projectEntry = data.contentfulProjectEntry;
  const description = projectEntry.description;
  const descriptionHtml = description && description.childMarkdownRemark.html;

  let journeyHtml: string | undefined;

  if (projectEntry.layout && projectEntry.layout.toLowerCase() === "journey") {
    journeyHtml = projectEntry.journey && projectEntry.journey.childMarkdownRemark.html;
  }

  return (
    <IndexLayout>
      <Page>
        <Container>
          <ProjectTitleBreadCrump title={projectEntry.title} parent={projectEntry.parentProject}></ProjectTitleBreadCrump>
          {/* eslint-disable-next-line react/no-danger */}
          {!journeyHtml && descriptionHtml && <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />}
          {journeyHtml && <div dangerouslySetInnerHTML={{ __html: journeyHtml }}></div>}
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default PageTemplate;

export const query = graphql`
  query projectEntryPageQuery($slug: String!) {
    contentfulProjectEntry(slug: { eq: $slug }) {
      slug
      title
      layout
      journey {
        childMarkdownRemark {
          html
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      parentProject {
        slug
        parentProject {
          slug
          parentProject {
            slug
            title
          }
          title
        }
        title
      }
    }
  }
`;
