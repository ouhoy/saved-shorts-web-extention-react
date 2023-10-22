import {useState} from "react";

export function SearchBar(): JSX.Element {
    const [search, setSearch] = useState("")

    function handleSearch(event: Event) {
        setSearch((event.target as HTMLInputElement).value)
    }

    return (
        <div className="search-bar-container">
            <input className="search-bar" value={search} onChange={() => handleSearch} placeholder="Search"
                   type="text"/>
            <button className="search-button">
                <svg
                    enableBackground="new 0 0 24 24"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    focusable="false"
                    style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}
                >
                    <path
                        d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                </svg>
            </button>
        </div>
    );
}