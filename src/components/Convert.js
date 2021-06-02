import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({text, language}) => {
    const [translated, setTranslated] = useState('');
    const [deBouceText, setDebounceText] = useState(text);
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {setDebounceText(text)}, 1000);
        return () => {
            clearTimeout(timeoutId);
        }
    },[text]);

    useEffect(() => {
        const translate = async () => {
          const {data} =  await axios.post('https://translation.googleapis.com/language/translate/v2', {},
            {
                params: {
                    q: text,
                    target: language,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });

            setTranslated(data.data.translations[0].translatedText);
        };
        translate();
    }, [deBouceText, language]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;