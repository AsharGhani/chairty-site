import * as React from "react";
import styled from "@emotion/styled";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { themeLight, heights, dimensions, breakpoints } from "../styles/variables";
import { getEmSize } from "../styles/mixins";

const lg = `@media (min-width: ${getEmSize(breakpoints.lg)}em)`;

const colorTheme = themeLight;

interface StaticQueryProps {
  allFile: {
    nodes: {
      childImageSharp: {
        fluid: any;
      };
      name: string;
    }[];
  };
}

const StyledBannerImageContainer = styled.div`
  display: grid;
  grid-template-areas: "a";
  -ms-grid-template-areas: "a";
  height: 60px;
  width: 100vw;

  ${lg} {
    height: 120px;
  }
`;

const StyledBannerImage = styled(Img)`
  width: 100%;
  height: 100%;
  grid-area: a;
  -ms-grid-area: a;
  max-height: 60px;

  ${lg} {
    max-height: 120px;
  }
`;

const StyledBannerText = styled.div`
  width: 100%;
  height: 100%;
  grid-area: a;
  -ms-grid-area: a;
  text-align: center;
  z-index: 2;
  font-size: ${dimensions.headingSizes.h3}rem;
  letter-spacing: 5px;
  color: white;
  text-shadow: 2px 2px 10px black;
  display: flex;
  justify-content: center;
  align-items: center;

  ${lg} {
    font-size: ${dimensions.headingSizes.huge3}rem;
  }
`;

const StyledBannerTextInner = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 0 32px;
  border-radius: 4px;
  z-index: 3;
`;

const BannerWithImage: React.FC = () => (
  <StaticQuery
    query={graphql`
      query BannerImage {
        allFile(filter: { relativePath: { regex: "/images/banner/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => {
      let imageFluid: any | undefined;
      let bannerText: string | undefined;

      try {
        const url = window.location.href.toLowerCase();
        if (
          url.indexOf("ration-drive") > 1 ||
          url.indexOf("karachi-drive") > 1 ||
          url.indexOf("chitral-drive") > 1 ||
          url.indexOf("thar-drive") > 1 ||
          url.indexOf("badin-drive") > 1
        ) {
          for (const node of data.allFile.nodes) {
            if (node.name.toLowerCase() === "grains") {
              imageFluid = node.childImageSharp.fluid;
              bannerText = "RATION DRIVE";
            }
          }
        } else if (url.indexOf("access-to-water") > 1 || url.indexOf("water-pump") > 1) {
          for (const node of data.allFile.nodes) {
            if (node.name.toLowerCase() === "water") {
              imageFluid = node.childImageSharp.fluid;
              bannerText = "ACCESS TO WATER";
            }
          }
        }
      } catch (e) {
        console.log(e);
      }

      if (imageFluid && bannerText) {
        return (
          <StyledBannerImageContainer>
            <StyledBannerImage fluid={imageFluid} alt="header image" style={{ width: "100%" }} />
            <StyledBannerText>
              <StyledBannerTextInner>{bannerText}</StyledBannerTextInner>
            </StyledBannerText>
          </StyledBannerImageContainer>
        );
      }

      return undefined;
    }}
  />
);

export default BannerWithImage;
