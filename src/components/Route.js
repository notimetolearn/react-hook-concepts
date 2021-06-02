import { useEffect, useState } from "react";

const Route = ({route, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChanged = (event) => {
            setCurrentPath(window.location.pathname)    ;
        }
        window.addEventListener('navclick', onLocationChanged);
        return () => window.removeEventListener('navclick', onLocationChanged);
    }, []);

    return window.location.pathname === route ? children : null;
}

export default Route;