import styled from "styled-components";
import { Props } from "./";

export const StyledSpan = styled.div<Props>`
  display: inline-flex;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;

  & > img {
    max-width: 100%;
    max-heigh: 100%;
  }
`;
