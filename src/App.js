import Person from "./components/Person";
import Header from "./components/Header";
import $ from "jquery";

$(".delete").on("click", function () {
  $(this).parent().hide();
});

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
