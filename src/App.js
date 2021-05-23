import "./App.css";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards"
import SwipeButton from "./Components/SwipeButton/SwipeButton"

function App() {
  return (
    <div className="App">
      <Header />
      <Cards/>
      <SwipeButton/>
    </div>
  );
}

export default App;
