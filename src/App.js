import {React, useState} from 'react';
import Child from './Child.jsx'

const App = () =>{

  const [counter, setCounter] = useState(0);

  const handleClick = (num) => {
    console.log(num)
    setCounter(counter + num);
  }
  return (
    <div className='App'>
    <h2>Parent Component</h2>
      <h1>Hello React Count : {counter}</h1>
      
      <Child handleClick={handleClick}/>
    </div>
  );
}

export default App;