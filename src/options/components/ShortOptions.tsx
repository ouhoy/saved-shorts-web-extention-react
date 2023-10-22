import {useState} from "react";

export function ShortOptions({id}: { id: string }) {
    const [isVisible, setIsVisible] = useState(false)

    function handleMenuClick() {
        setIsVisible(!isVisible)
    }

    return <div className={"short-links-container"}>
        <div className={"short-links"}>
            <img onClick={handleMenuClick} title="Options" id={id} className="options" src="./More_Vertical.svg"
                 alt="Link"/>
            {isVisible && <div className="options-menu">
                <p>Delete</p>
            </div>}
        </div>

    </div>

}