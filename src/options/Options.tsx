import "./Options.css";
import {useState} from "react";

function Options() {
    const [counter, setCounter] = useState(0)
    const [home, setHome] = useState("Home")

    function handleClick() {
        setCounter(c => c + 1)
    }

    function handleHome() {
        setHome("House")
    }
    return <div className="App">
        <p>{counter}</p>
        <p onClick={handleHome}>{home}</p>
        <button onClick={handleClick}>Count++</button>

    </div>;
}

export default Options;
