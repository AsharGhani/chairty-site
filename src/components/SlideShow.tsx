import * as React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/SlideShow.scss";

import { Carousel } from "react-responsive-carousel";
import { themeLight, dimensions, breakpoints } from "../styles/variables";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { inherits } from "util";
import { getEmSize } from "../styles/mixins";

const colorTheme = themeLight;

const md = `@media (min-width: ${getEmSize(breakpoints.md)}em)`;

const StyledNodeButtonsContainer = styled.div`
  position: relative;
  top: -50px;
  display: none;
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: space-between;

  ${md} {
    display: flex;
  }
`;

const StyledNodeButton = styled.div`
  background: ${colorTheme.buttonSecondary};
  opacity: 0.8;
  color: ${colorTheme.buttonSecondaryText};
  font-size: ${dimensions.fontSize.regular}px;
  padding: 10px 10px;
  border: 1px;
  &.focus,
  &:hover {
    background: ${colorTheme.buttonSecondaryHover};
  }
`;

interface childImageSharpNode {
  name: string;
  childImageSharp: {
    fluid: any;
  };
}

interface SlideShowComponentProps {
  nodes: childImageSharpNode[];
  nodeTexts: string[];
}

interface SlideShowComponentState {
  selectedItem: number;
  autoPlay: boolean;
}

class SlideShowComponent extends React.Component<SlideShowComponentProps, SlideShowComponentState> {
  constructor(props: SlideShowComponentProps) {
    super(props);

    this.state = {
      selectedItem: 0,
      autoPlay: true,
    };
  }

  render() {
    const images: any[] = [];

    const sortedNodes = this.props.nodes.sort((node1: childImageSharpNode, node2: childImageSharpNode) =>
      node1.name.localeCompare(node2.name),
    );

    for (const node of sortedNodes) {
      images.push(
        <div>
          <Img fluid={node.childImageSharp.fluid} alt="Image"></Img>
        </div>,
      );
    }

    const nodeButtons: React.ReactNode[] = [];
    this.props.nodeTexts.forEach((nodeText, index) => {
      const selectedItem = this.state.selectedItem;
      nodeButtons.push(
        <StyledNodeButton
          key={index}
          onClick={() => this.setState({ selectedItem: index })}
          css={css`
            background: ${selectedItem === index ? colorTheme.button : colorTheme.buttonSecondary};
            color: ${selectedItem === index ? colorTheme.buttonText : colorTheme.buttonSecondaryText};
            &:focus,
            &:hover {
              background: ${selectedItem === index ? colorTheme.buttonHover : colorTheme.buttonSecondaryHover};
            }
          `}
        >
          {nodeText}
        </StyledNodeButton>,
      );
    });

    return (
      <div id="slide-show">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={this.state.autoPlay}
          selectedItem={this.state.selectedItem}
          onChange={itemIndex => this.setState({ selectedItem: itemIndex })}
        >
          {images}
        </Carousel>
        <StyledNodeButtonsContainer>{nodeButtons}</StyledNodeButtonsContainer>
      </div>
    );
  }
}

interface StaticQueryProps {
  allFile: {
    nodes: childImageSharpNode[];
  };
}

interface SlideShowProps {
  nodeTexts: string[];
}

const SlideShow: React.FC<SlideShowProps> = (props: SlideShowProps) => (
  <StaticQuery
    query={graphql`
      query slideshow {
        allFile(filter: { relativePath: { regex: "/slideshow/" } }) {
          nodes {
            name
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => <SlideShowComponent nodes={data.allFile.nodes} nodeTexts={props.nodeTexts}></SlideShowComponent>}
  />
);

export default SlideShow;