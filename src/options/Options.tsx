import "./Options.css";
import {useState} from "react";
import {Short} from "./components/Short";
import {SearchBar} from "./components/SearchBar";

interface ShortDetails {
    title: string,
    creator: string,
    avatar: string,
    id: string,
    subscribed: boolean,
    date: Date
}

function Options() {
    const [shortsNumber, setShortsNumber] = useState(0)
    const [shorts, setShorts] = useState([] as ShortDetails[])

    chrome.storage.local.get(["savedShorts"]).then((result) => {

        const savedShorts = result.savedShorts || [];
        setShortsNumber(savedShorts.length);
        setShorts(savedShorts);
    })


    return <div className="App">
        <div className={"container"}>
            <nav>
                <SearchBar/>
            </nav>
            <p className={"saved-shorts-number"}>Number of shorts is: {shortsNumber}</p>
            <div className={"shorts"}>

                {shorts.map(short => {
                    return <Short id={short.id} creator={short.creator} avatar={short.avatar}
                                  title={short.title} date={short.date}/>
                })}

            </div>
        </div>
    </div>;
}

export default Options;
