import { createStore } from "solid-js/store";
import { Company } from "./Company";

/*
- Logo
- Name
- Size in plots
- Shares remaining
- Cost per share
- Market Value
- Market Cap*/

type gameState = {
  companies: Company[];
};

const defaultState = {
  companies: [
    {
      tier: 0,
      logo: "logo",
      name: "coal",
      size: 0,
      maxShares: 25,
      sharesRemaining: 25,
    },
    {
      tier: 0,
      logo: "logo",
      name: "gas",
      size: 0,
      maxShares: 25,
      sharesRemaining: 25,
    },
    {
      tier: 1,
      logo: "logo",
      name: "hydro",
      size: 0,
      maxShares: 25,
      sharesRemaining: 25,
    },
    {
      tier: 1,
      logo: "logo",
      name: "solar",
      size: 0,
      maxShares: 25,
      sharesRemaining: 25,
    },
    {
      tier: 2,
      logo: "logo",
      name: "wind",
      size: 0,
      maxShares: 25,
      sharesRemaining: 25,
    },
    {
      tier: 2,
      logo: "logo",
      name: "nuclear",
      size: 0,
      maxShares: 25,
      sharesRemaining: 25,
    },
  ],
};
const [gameState, setGameState] = createStore(defaultState);

export { gameState, setGameState };
