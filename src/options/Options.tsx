import "./Options.css";
import {useState} from "react";

interface ShortDetails {
    title: string,
    creator: string,
    avatar: string,
    id: string,
    subscribed: boolean,
    date: Date
}

function Options() {
    const [counter, setCounter] = useState(0)
    const [home, setHome] = useState("Home")
    const [shortsNumber, setShortsNumber] = useState(0)
    const [shorts, setShorts] = useState([] as ShortDetails[])
    chrome.storage.local.get(["savedShorts"]).then((result) => {
        const numberOfShorts = result.savedShorts.length;
        setShortsNumber(numberOfShorts)
        result.savedShorts.forEach((short: ShortDetails)=>{
            console.log(short)
        } )
    })


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
        <p>Number of shorts is: {shortsNumber}</p>
    </div>;
}

export default Options;
