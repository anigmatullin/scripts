import './App.css';
import {Greet} from './Greet.js';
import {Salam} from './Salam';
import CityList from './CityList';
import InputBox from './InputBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Greet mode="cool!" name="Thor">Some text</Greet>
        <Salam name="Thor"/>
        <CityList/>
        <InputBox/>

      </header>
    </div>
  );
}

export default App;
