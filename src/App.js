import { useEffect } from 'react';
import { useState } from 'react';
//useEffect는 두가지 인자를 갖는다. 첫번째는 실행시키고 싶은 코드,  두번째는 dependences?임! -> react.js가 지켜보아야 하는 것들?

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  
  useEffect(() => {
    console.log("i run only once.");
  }, []); //[] 배열이 비어있기 때문에 react.js가 지켜볼게 없기 때문에 한번만 실행

  useEffect(() => {
    // if(keyword !== "" && keyword.length > 6) {
      
    // }
    console.log("I run when 'keyword' changes.");
  }, [keyword]);//keyword가 변할때만 반응 (콘솔이 찍힘), keyword는 state에 있음

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);//counter가 변할때만 반응 (콘솔이 찍힘), counter는 state에 있음

  useEffect(() => {
    console.log("I run when keyword & counter changes.");
  }, [keyword, counter]); //베얄이기 때문에 여러개 넣을 수 있음. 둘 중 하나라도 변화하면 감지
  
  return (
    <div className="App">
      <input value={keyword} onChange={onChange} type="text" placeholder='Search' />
      <h1>{counter}!</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
