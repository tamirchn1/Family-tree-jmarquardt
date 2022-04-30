import Person from "./components/Person";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />

      <div id="cards">
        <Person />
        <Person />
      </div>
    </div>
  );
}

export default App;
