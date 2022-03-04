import React from "react";
import pokeballLoader from "../../../assets/img/GenerousTimelyBrontosaurus-max-1mb.gif";
import { StyledSpan } from './style'

export type Props = {
  height?: number;
  width?: number;
};

function Loader({ height, width }: Props) {
  return (
    <StyledSpan height={height} width={width}>
      <img src={pokeballLoader} alt="Loading" />
    </StyledSpan>
  );
}

export default Loader;
