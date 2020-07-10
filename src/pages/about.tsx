import IndexLayout from "../layouts";
import Page from "../components/Page";
import Container from "../components/Container";
import styled from "@emotion/styled";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { getEmSize } from "../styles/mixins";
import { breakpoints } from "../styles/variables";

const md = `@media (min-width: ${getEmSize(breakpoints.md)}em)`;
const lg = `@media (min-width: ${getEmSize(breakpoints.lg)}em)`;

const StyledDescription = styled.div``;
const StyledSubHeading = styled.h3``;
const StyledTable = styled.table`
  border: none;
  width: auto;
  margin-top: 1rem;
  margin-left: 3rem;
`;
const StyledTD = styled.td`
  max-width: 10rem;
  border: none;
`;

const ImageContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  ${md} {
    margin: 0;
    width: 100%;
  }
`;

const RightfloatedDiv = styled.div`
  width: 100%;
  margin: 24px 0;

  ${md} {
    width: 350px;
    float: right;
    margin: 24px 16px 0 16px;
  }

  ${lg} {
    width: 400px;
    margin: 24px 16px 24px 16px;
  }
`;

const StyledClearFloat = styled.div`
  clear: both;
`;

interface StaticQueryProps {
  allFile: {
    nodes: ChildImageSharpNode[];
  };
}

const AboutPage: React.FC = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Ibaad-ur-Rahman Foundation</h1>
        <StyledDescription>
          This is not the work of an individual, rather Allah gave us the <i>Tawfeeq</i> (Ability and Opportunity) and guided our hearts to
          serve the underprivileged. Our Aim is not only to help our brothers and siters in need but also to please our Allah Almighty.
        </StyledDescription>

        <h3>Who is Ibaad-ur-Rahman</h3>
        <StyledDescription>
          Ibaad ur Rahmaan means Servants of The Most Merciful (Allah) (In Urdu: لل‍َّٰه کے بندے). They are all those brothers and sisters
          who have come together and joined this group to help run this show. So when we put up a plaque on a handpump and put the writing
          Ibaad ur Rahmaan, it is in short every member's name that represents this group.
        </StyledDescription>
      </Container>
    </Page>
  </IndexLayout>
);

export default AboutPage;
