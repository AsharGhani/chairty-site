import * as React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";
import { css } from "@emotion/core";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface childImageSharpNode {
  childImageSharp: {
    fluid: any;
  };
}
interface SlideShowComponentProps {
  nodes: childImageSharpNode[];
}

class SlideShowComponent extends React.Component<SlideShowComponentProps> {
  constructor(props: SlideShowComponentProps) {
    super(props);
  }

  render() {
    const images: any[] = [];
    for (const node of this.props.nodes) {
      images.push(
        <div>
          <Img fluid={node.childImageSharp.fluid} alt="Image"></Img>
        </div>,
      );
    }

    return (
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
        {images}
      </Carousel>
    );
  }
}

interface StaticQueryProps {
  allFile: {
    nodes: childImageSharpNode[];
  };
}

const SlideShow: React.FC = () => (
  <StaticQuery
    query={graphql`
      query slideshow {
        allFile(filter: { relativePath: { regex: "/slideshow/" } }) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => <SlideShowComponent nodes={data.allFile.nodes}></SlideShowComponent>}
  />
);

export default SlideShow;
