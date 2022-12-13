import { Component, For } from "solid-js";

import styles from "./App.module.css";
import { CompanyComponent } from "./components/CompanyComponent";

import {gameState} from "./state/gamesState"

const App: Component = () => {
  return (
    <div class={styles.App}>
      <For each={gameState.companies}>{
      (c) => {
          return <CompanyComponent company={c}/>
        }
          
        }
      </For>
    </div>
  );
};

export default App;
