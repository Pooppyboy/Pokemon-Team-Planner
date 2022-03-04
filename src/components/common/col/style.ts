import React from "react";
import styled from "styled-components";
import { GridColNumber } from "../../../utils/typings";

type StyledProps = {
  col: GridColNumber;
  offset?: GridColNumber;
} & React.HTMLAttributes<HTMLDivElement>;

export const StyledDiv = styled.div<StyledProps>`
  position: relative;
  display: block;
  border: 1px solid;
  width: 100%;

  margin-left: ${({ offset }) => {
    if (offset) {
      return (offset - 1) * ((1 / 12) * 100) + "%";
    }
    return "";
  }};

  @media screen and (min-width: 769px) {
    width: ${({ col }) => {
      return (col / 12) * 100 + "%";
    }};
    flex: ${({ col }) => {
      if (col > 1) {
        return "none";
      }
      return "1 1 0";
    }};
  }
`;
