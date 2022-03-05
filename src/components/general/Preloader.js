import React from 'react';
import pokeballGIF from '../assets/img/GenerousTimelyBrontosaurus-max-1mb.gif';

function Preloader({ loading, children }) {
  //children is whats between the tags
  //it can also be more that one
  //<Preloader> <Children /> </Preloader>
  //<Preloader> <Children1 /> <Children2 /> </Preloader>
  return (
    <>
      {loading ? (
        <img
          src={pokeballGIF}
          alt="pokeball"
          className="mx-auto my-auto"
          style={{ width: '50%', height: '50%' }}
        />
      ) : (
        children
      )}
    </>
  );
}

export default Preloader;
