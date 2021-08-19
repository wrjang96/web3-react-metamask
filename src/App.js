import Account from "./components/Account";
import Count from "./components/Count";
import IncButton from "./components/IncButton";
import DecButton from "./components/DecButton";

function App() {
  return (
    <div className="App">
      <Account/>
      <Count/>
      <IncButton/>
      <DecButton/>
    </div>
  );
}

export default App;