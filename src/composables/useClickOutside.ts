import React, { useEffect, useRef } from "react";

function useClickOutside(targetElement: any,callback: Function) {

    const listener = (e: Event) => {
        // Clicked inside the modal/active region
        if (targetElement.current && (e.target === targetElement.current || e.composedPath().includes(targetElement.current))) {
            return;
        }

        // Clicked outside the modal
        if (typeof callback === "function") {
            callback();
        }
    };

    useEffect(() => {
        window.addEventListener("click", listener);

        return () => {
            window.removeEventListener("click", listener);
        };
    }, [listener]);

    return targetElement;
}

export default useClickOutside;