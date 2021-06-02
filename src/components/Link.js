import React from 'react';



const Link = ({className, path, children}) => {

    const onNavigationClick = (e) => {
        e.preventDefault();
        window.history.pushState({},'',path);
        const navEvent = new PopStateEvent('navclick');
        window.dispatchEvent(navEvent);
    }

    return(
        <a className={className} href={path} onClick={e => onNavigationClick(e)}>
            {children}
        </a>
    );
}

export default Link;