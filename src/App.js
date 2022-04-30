import Person from "./components/Person";
import Header from "./components/Header";
import { Form, Input } from "./components/Form";
function App() {
  return (
    <div className="app">
      <Header />

      <div id="cards">
        <Person />
        <Person />
        <Form />
        <Input />
      </div>
    </div>
  );
}

export default App;
