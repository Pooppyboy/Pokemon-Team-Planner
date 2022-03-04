import React, { useState } from "react";
import Loader from "../../../../../components/common/loader";
import { PokemonType } from "../../../../../utils/typings";
import { StyledWrapper } from "./style";

type Props = {
  pokemon: PokemonType;
};

function PokemonWrapper({ pokemon }: Props) {
  const { types, spriteUrl, name } = pokemon;
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <StyledWrapper className={`${types[0]}1 ${types[1] ? types[1] + "2" : ""}`}>
      {!isLoaded && <Loader />}
      <img
        src={spriteUrl}
        alt={name}
        onLoad={() => setIsLoaded(true)}
        style={{ display: isLoaded ? "inline" : "none" }}
      />
    </StyledWrapper>
  );
}

export default PokemonWrapper;
