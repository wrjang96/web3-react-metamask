import Account from "./components/Account";
import Count from "./components/Count";
import IncButton from "./components/IncButton";
import DecButton from "./components/DecButton";
import AddLiquidityETH from "./components/AddLiquidityETH";
import AddLiquidity from "./components/AddLiquidity";
import RemoveLiquidity from "./components/RemoveLiquidity";
import RemoveLiquidityETH from "./components/RemoveLiquidityETH";

function App() {
  return (
    <div className="App">
      <Account/>
      <Count/>
      <IncButton/>
      <DecButton/>
      <AddLiquidity/>
      <RemoveLiquidity/>
      <AddLiquidityETH/>
      <RemoveLiquidityETH/>
    </div>
  );
}

export default App;