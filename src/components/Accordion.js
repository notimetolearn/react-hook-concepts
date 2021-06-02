import React, {useState} from 'react';



const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {

        const activeClassName = (index === activeIndex) ? 'active' : '';

        return (
            <React.Fragment key={index}>
                <div className={`title ${activeClassName}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${activeClassName}`}>
                    {item.content}
                </div>
            </React.Fragment>
        );
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
};

export default Accordion;