# Pokemon Team Planner
Link: https://pokemon-team-planner-battle.herokuapp.com/

### YOU DON'T GOTTA CATCH'EM ALL!
![screenshot](https://i.imgur.com/agmhmxS.png)

## Description

Ever spent your PokéAssets on countless pokéballs to catch all the Pokémon you've encountered, trained them until the 5th gym, then realised that they're **USELESS**?! Not anymore!

With **Pokemon Team Planner**, design your dream pokemon team before you even start the game! No more wasting time grinding when all the exp can go to the Pokémon that *DESERVES IT*! :+1:

### Technical Used

```
Built with:

- ReactJS
- Bootstrap with react
- Axios
```

### Wireframes

![pc](https://cdn2.bulbagarden.net/upload/5/5a/Bill_PC_FRLG.png)  
Pokemon Fire Red was the inspiration for the design used. A pokemon list component that displays all the Pokémon (limited to Generation II, for now).  

![summary](https://cdn2.bulbagarden.net/upload/e/e1/HG_summary_2.png)  
As for the party set up, Pokemon HGSS party summary provided the best layout to work with. 

### User Stories

As a user, I want to be able to:

```
- Select the Pokémon of my choice
- Select all possible moves for the individual Pokémon
- View the potential of each Pokémon
- Control the aspects (Level, Ability, etc.) that affect the stats
```

---

## Planning and Development Process

1) Structuring
- Each of the Pokémon's attributes were saved as individual states, with party state to reference the Pokémon within the party.
- Required APIs were called only when on the party page to minimise load.

2) Design
- Mainly Bootstrap to sculpt the layout of the pages.

3) Restructure :cry:
- Having all the attribute scattered in different states meant that any changes to the party had to reference all the existing state. As the number of features increased, it became difficult to keep trace of the state changes.
- Individual attribute states were abandoned for an overall party state object that contained all the attributes. This, however, meant that useEffect dependencies for each API call couldn't use the change in party state as a reference.


### Problem-Solving Strategy

###### Pseudocoding
Pseudocoding allowed for a base structure for the program to be built on.

###### Rubber Duck
All hail the enlightenment from the blessed Rubber Duck!

### Unsolved problems

###### No loader
Images may take awhile to load, and there are no preloaders in place.

## APIs Used

PokeAPI v2, because thats the only API you'll ever need.

---

## Acknowledgments

#### Pokémon. © 1995–2021 Nintendo/Creatures Inc./GAME FREAK inc.
For the wonderful childhood experience you've brought me, and the design inspirations on this project.

#### Bulbapedia
For the in-depth information & resources on Pokémon mechanics

---

 ## References
- Bulbapedia: https://bulbagarden.net/
- Pokemon Team Planner: https://richi3f.github.io/pokemon-team-planner/national_dex.html, Icons background & border colour scheme.
