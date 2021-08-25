import Account from "./components/Account";
import Count from "./components/Count";
import IncButton from "./components/IncButton";
import DecButton from "./components/DecButton";
import AddLiquidity from "./components/AddLiquidity";
import RemoveLiquidity from "./components/RemoveLiquidity";

function App() {
  return (
    <div className="App">
      <Account/>
      <Count/>
      <IncButton/>
      <DecButton/>
      <AddLiquidity/>
      <RemoveLiquidity/>
    </div>
  );
}

export default App;