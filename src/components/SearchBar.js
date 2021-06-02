import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchBar = () => {

    const [term, setTerm] = useState('programming');
    const [debounceTerm, setDebounceTerm] = useState(term);
    const [results, setResults] = useState([]);

    const renderedResults = results.map(item => {
        return (
            <div key={item.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                        href={`https://en.wikipedia.org?curid=${item.pageid}`}>
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {item.title}
                    </div>
                    <div className="description">
                        <span dangerouslySetInnerHTML={{__html: item.snippet}}></span>
                    </div>
                </div>
            </div>
        );
    });

    useEffect(() => {
        const timeoutId = setTimeout(() => setDebounceTerm(term), 1000);

        // function will execute the next time when term state is changed before calling actual useEffect
        return () => {
            clearTimeout(timeoutId);
        }
    },[term]);

    useEffect(() => {
        const searchApi = async () => {
            const {data} = await axios.get('http://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    format: 'json',
                    list: 'search',
                    origin: '*',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        };
        if(debounceTerm)
            searchApi();

    }, [debounceTerm]);

    return (
        <div>
            <div className="ui segment">
                <div className="field">
                    <label>Enter to search Wikipedia </label>
                    <div className="ui input">
                        <input type="text" value={term} onChange={e => setTerm(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default SearchBar;