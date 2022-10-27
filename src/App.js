import { useState, useEffect } from 'react'; 

//useEffect는 두개의 argument를 가지는 function
//첫번째 argument는 우리가 딱 한번만 실행하고 싶은 코드, 두번째는 

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState();
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = () => {}

  console.log('i run all the time');


  useEffect(() => {
    console.log('Call the API . . .');
  }, []);
  return (
    <div>
      <input onChange={onChange} type="text" placeholder='Search here ...' />
      <h1>{counter}!</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
