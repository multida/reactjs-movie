import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  
  useEffect(() => {
    console.log("i run only once.");
  }, []);

  useEffect(() => {
    // if(keyword !== "" && keyword.length > 6) {
      
    // }
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword & counter changes.");
  }, [keyword, counter]);
  
  return (
    <div className="App">
      <input value={keyword} onChange={onChange} type="text" placeholder='Search' />
      <h1>{counter}!</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
