import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import {Calculator, CalculatorClass} from './components/Calculator'

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>--- Start of exercise 1 ---</h1>
      <Exercise1 name="Sebastian"/>
      <h1>--- End of exercise 1 ---</h1>
      <h1>--- Start of exercise 2 ---</h1>
      <Exercise2 name="Sebastian"/>
      <h1>--- End of exercise 2 ---</h1>
      <h1>--- Start of exercise 3 ---</h1>
      <Exercise3/>
      <h1>--- End of exercise 3 ---</h1>
      <h1>--- Start of exercise 4 ---</h1>
      <h1>Regular Calculator - Function Component</h1>
      <Calculator/>
      <h1>Regular Calculator - Class Component</h1>
      <CalculatorClass/>
      <h1>Scientific Calculator - Function Component</h1>
      <h3>Supports nesting brackets :)</h3>
      <Calculator scientific={true}/>
      <h1>Scientific Calculator - Class Component</h1>
      <h3>Supports nesting brackets :)</h3>
      <CalculatorClass scientific={true}/>
      <h1>--- End of exercise 4 ---</h1>
    </div>
  );
}

export default App;
