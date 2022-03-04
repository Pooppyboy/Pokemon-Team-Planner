import { createSlice } from "@reduxjs/toolkit";
import { PokemonType } from "../utils/typings";
import { RootState } from "./store";

const initialState: PokemonType[] = [];

export const partySlice = createSlice({
  name: "party",
  initialState,
  reducers: {
    addToParty: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToParty } = partySlice.actions;

export const selectParty = (state: RootState) => state.party;

export default partySlice.reducer;
