import Main from "./components/Main";
import { GameContextProvider } from "./gameContext";
function App() {
  return (
    <GameContextProvider>
      <Main />;
    </GameContextProvider>
  );
}

export default App;
