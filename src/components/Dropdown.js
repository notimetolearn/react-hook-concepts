import React, {useEffect, useRef, useState} from 'react';

const Dropdown = ({options, selected, onSelectChanged, selectLabel}) => {
    const [active, setActive] = useState(false);
    const ref = useRef();
    const renderedItems = options.map(option => {
        if(option.value === selected.value)
        {
            return;
        }
        return (
            <div key={option.value} className="item" onClick={() => onSelectChanged(option)}>
                {option.label}
            </div>
        );
    });

    useEffect(() => {
        const bodyClick = (ev) => {
            if(ref.current.contains(ev.target)){
                return;
            }
            setActive(false);
        }
        document.body.addEventListener('click', bodyClick, {capture: true});
        return () => {
            document.body.removeEventListener('click',bodyClick, {capture: true});
        };
    }, []);

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{selectLabel}</label>
                <div className={`ui selection dropdown ${active ? 'visible active' : ''}`} onClick={() => setActive(!active)}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${active ? 'visible transition' : ''}`} >
                        {renderedItems}
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Dropdown;