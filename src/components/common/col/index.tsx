import React from "react";
import { StyledDiv } from "./style";
import { GridColNumber } from "../../../utils/typings";

type Props = {
  col?: GridColNumber;
  offset?: GridColNumber;
} & React.HTMLAttributes<HTMLDivElement>;

function Col({ col = 1, offset, children, className }: Props): JSX.Element {
  return (
    <StyledDiv offset={offset} col={col} className={className}>
      {children}
    </StyledDiv>
  );
}

export default Col;
