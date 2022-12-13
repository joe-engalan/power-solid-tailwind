import styles from "./App.module.css";
import {Component, For} from "solid-js";
import {CompanyComponent} from "./components/CompanyComponent";
import {gameState} from "./state/gamesState"

const App: Component = () => {
    return (
        <div class={styles.App}>
            <For each={gameState.companies}>{(company) =>
                (
                    <CompanyComponent company={company}/>
                )
            }
            </For>
        </div>
    );
};

export default App;
