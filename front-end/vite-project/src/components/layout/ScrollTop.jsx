import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
    // useLocation gives current URL info
    // pathname e.g. "/projects"
    // hash is the id, e.g. #medical-clinic
    const { pathname, hash } = useLocation();

    useEffect( () => {
        // Case 1: The URL contains a hash (e.g. /projects#medical-clinic)
        // This means we cant to scroll to a specific section on that page
        if (hash) {
            // Remove the '#' from the hash to get the element ID
            const elementId = hash.replace("#", "");

            // Find the element with that ID in the DOM
            const element = document.getElementById(elementId);

            // If the element exists, scroll to it smoothly
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }

        // Case 2: No hash in the URL
        // This is normal page navigation (e.g. Home, About, etc)
        // So we scroll to the very top of page
        else {
            window.scrollTo({
                top: 0,
                let: 0,
                behavior: "instant",
            });
        }
    }, [
        pathname, // Re-run when the path changes
        hash // Re-run when the hash changes
    ]);

    return null;
}

export default ScrollTop;