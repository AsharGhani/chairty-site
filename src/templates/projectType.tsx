import * as React from "react";
import { graphql } from "gatsby";

import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import styled from "@emotion/styled";
import PictureCard from "../components/PictureCard";
import ProjectTitleBreadCrump from "../components/ProjectTitleBreadCrumb";

const StyledChildLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

interface PageTemplateProps {
  data: {
    contentfulProjectType: ProjectType;
  };
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  const projectType = data.contentfulProjectType;
  const childDescriptionNode = projectType.description;
  const descriptionHtml = childDescriptionNode && childDescriptionNode.childMarkdownRemark.html;

  const childProjectTypeCards: React.ReactNode[] = [];
  const childProjectEntryCards: React.ReactNode[] = [];

  if (projectType.childProjectTypes) {
    for (const childProjectType of projectType.childProjectTypes) {
      childProjectTypeCards.push(
        <PictureCard
          title={childProjectType.title}
          description={childProjectType.description && childProjectType.description.childMarkdownRemark.internal.content}
          imageSrc={childProjectType.featureImage && childProjectType.featureImage.fluid.src}
          imageTitle={childProjectType.featureImage && childProjectType.featureImage.title}
          link={"/projecttype/" + childProjectType.slug}
          key={childProjectType.slug}
        ></PictureCard>,
      );
    }
  }

  if (projectType.childProjectsList) {
    for (const childProjectEntry of projectType.childProjectsList) {
      let link: string | undefined;
      if (childProjectEntry.layout !== "NoPage") {
        link = "/projectentry/" + childProjectEntry.slug;
      }
      childProjectEntryCards.push(
        <PictureCard
          title={childProjectEntry.title}
          description={childProjectEntry.description && childProjectEntry.description.childMarkdownRemark.internal.content}
          imageSrc={childProjectEntry.featureImage && childProjectEntry.featureImage.fluid.src}
          imageTitle={childProjectEntry.featureImage && childProjectEntry.featureImage.title}
          link={link}
          key={childProjectEntry.slug}
        ></PictureCard>,
      );
    }
  }

  return (
    <IndexLayout>
      <Page>
        <Container>
          <ProjectTitleBreadCrump title={projectType.title} parent={projectType.parentProject}></ProjectTitleBreadCrump>
          {/* eslint-disable-next-line react/no-danger */}
          {descriptionHtml && <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />}
          <StyledChildLinksContainer>
            {childProjectTypeCards}
            {childProjectEntryCards}
          </StyledChildLinksContainer>
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default PageTemplate;

export const query = graphql`
  query projectTypePageQuery($slug: String!) {
    contentfulProjectType(slug: { eq: $slug }) {
      slug
      title
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
      childProjectsList {
        slug
        title
        layout
        featureImage {
          fluid {
            src
          }
          title
        }
        description {
          childMarkdownRemark {
            html
            internal {
              content
            }
          }
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      childProjectTypes {
        slug
        title
        description {
          childMarkdownRemark {
            html
            internal {
              content
            }
          }
        }
        featureImage {
          fluid {
            src
          }
          title
        }
      }
    }
  }
`;
