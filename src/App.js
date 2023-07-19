import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byFn;
  }

  useEffect(() => {
    console.log("hi :)");
    return () => console.log("byc :(");
  }, []);

  useEffect(function(){
    console.log("hi :)");
    return function(){
      console.log("bye :(");
    }
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const [showing, setShowing] = useState(false);
  const onShowClick = () => setShowing((prev) => !prev);

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  //console.log("i run all the time");
  useEffect(() => {
    console.log("I run only once.")
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5){
      //console.log("SEARCH FOR", keyword);
      console.log("I run when 'keyword' changes.")
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when both 'counter' and 'keyword' change.")
  }, [counter, keyword]);

  return (
    <div className="App">
      <input 
        value={keyword}
        onChange={onChange}
        type="text" 
        placeholder="Search here..." 
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button fn={onClick} text="click me"/>

      {showing ? <Hello /> : null}
      <button onClick={onShowClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
