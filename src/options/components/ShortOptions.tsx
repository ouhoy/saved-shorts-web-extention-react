import {useState} from "react";

interface ShortDetails {
    title: string,
    creator: string,
    avatar: string,
    id: string,
    subscribed: boolean,
    date: Date
}

export function ShortOptions({id}: { id: string }) {
    const [isVisible, setIsVisible] = useState(false)

    function handleMenuClick() {
        setIsVisible(!isVisible)
    }

    function handleDelete() {

        chrome.storage.local.get(["savedShorts"], function (result) {
            const savedShorts = result.savedShorts || [];

            // Find the index of the object with the specified ID
            const indexToDelete = savedShorts.findIndex((short: ShortDetails) => short.id === id);

            if (indexToDelete !== -1) {
                // If the object was found, remove it from the array
                savedShorts.splice(indexToDelete, 1);

                // Update the storage with the modified array
                chrome.storage.local.set({savedShorts: savedShorts}, function () {
                    console.log(`Short with ID ${id} has been deleted.`);
                });
            } else {
                console.log(`Short with ID ${id} not found.`);
            }
        });


    }

    return <div className={"short-links-container"}>
        <div className={"short-links"}>
            <img onClick={handleMenuClick} title="Options" id={id} className="options" src=""
                 alt="Link"/>
            {isVisible && <div className="options-menu">
                <p onClick={handleDelete}>Delete</p>
            </div>}
        </div>

    </div>

}