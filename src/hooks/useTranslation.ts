import { useState } from 'react';
import axios from 'axios';

const useTranslation = () => {
    const [translationOutput, setTranslationOutput] = useState('');

    const translate = async (text: string, langFrom: string, langTo: string): Promise<string> => {
        try {
            const response = await axios.get(`https://api.mymemory.translated.net/get?q=${text}&langpair=${langFrom}|${langTo}`);
            const translatedText = response.data.responseData.translatedText;
            setTranslationOutput(translatedText);
            return translatedText; // Zwróć przetłumaczony tekst
        } catch (err) {
            console.error("Error making an API call", err);
            return ''; // Zwróć pusty string w przypadku błędu
        }
    };

    return { translationOutput, translate };
};

export default useTranslation;
