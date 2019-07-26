import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import giveUrl from "../content/images/heart-in-hands.svg";
import { themeLight, heights } from "../styles/variables";

const colorTheme = themeLight;

const StyledHeaderImageContainer = styled.div`
  line-height: ${heights.header};
  box-shadow: 0 0 20px 5px ${colorTheme.background1};
  border-radius: 50px;
  width: ${heights.header + 20}px;
  height: ${heights.header + 20}px;
  background: ${colorTheme.background1};
  margin-right: 20px;
  transition: 0.3s;
  &:hover,
  &:focus {
    box-shadow: 0 0 20px 10px ${colorTheme.background2};
  }
`;

const StyledHeaderImageContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: 0.3s;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

const HeaderImage: React.FC = () => (
  <StyledHeaderImageContainer>
    <StyledHeaderImageContents>
      <img
        src={giveUrl}
        alt="header image"
        height={heights.header * 0.8}
        css={css`
          padding-left: 5px;
        `}
      />
      ;
    </StyledHeaderImageContents>
  </StyledHeaderImageContainer>
);

export default HeaderImage;
