import * as React from "react";
import { Link } from "gatsby";

import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import SlideShow from "../components/Slideshow";

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <SlideShow></SlideShow>
        {/*<Link to="/page-2/">Go to page 2</Link>*/}
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
