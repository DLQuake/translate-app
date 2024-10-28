'use client';
import React, { useState } from 'react';
import languages from '../data/languages.json';
import useTranslation from '../hooks/useTranslation';
import { FaRegCopy } from 'react-icons/fa';

const TranslateForm: React.FC = () => {
    const [translationInput, setTranslationInput] = useState('');
    const [languageFrom, setLanguageFrom] = useState('en');
    const [languageTo, setLanguageTo] = useState('es');
    const {translate} = useTranslation();
    const [translationsHistory, setTranslationsHistory] = useState<{ input: string; output: string; languageFrom: string; languageTo: string }[]>([]);
    const [currentOutput, setCurrentOutput] = useState('');

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const output = await translate(translationInput, languageFrom, languageTo);
        setCurrentOutput(output);

        setTranslationsHistory((prev) => [
            ...prev,
            { input: translationInput, output: output, languageFrom, languageTo }
        ]);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentOutput).then(() => {
            alert('Translation copied to clipboard!');
        });
    };

    // Funkcja usuwająca tłumaczenie z historii
    const removeTranslation = (index: number) => {
        setTranslationsHistory((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="mt-5">
            <form onSubmit={onSubmit} className="box">
                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <label className="label">Translate From:</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select value={languageFrom} onChange={(e) => setLanguageFrom(e.target.value)}>
                                        {languages.map((lang) => (
                                            <option key={lang.ISO} value={lang.ISO}>{lang.language}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Text to Translate:</label>
                            <div className="control">
                                <textarea
                                    className="textarea is-fullwidth"
                                    value={translationInput}
                                    onChange={(e) => setTranslationInput(e.target.value)}
                                    placeholder="Enter text to translate"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Translate To:</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select value={languageTo} onChange={(e) => setLanguageTo(e.target.value)}>
                                        {languages.map((lang) => (
                                            <option key={lang.ISO} value={lang.ISO}>{lang.language}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Translation Output:</label>
                            <div className="control">
                                <textarea
                                    className="textarea is-fullwidth"
                                    readOnly
                                    value={currentOutput}
                                    placeholder="Translation will appear here"
                                />
                            </div>
                            <div className="field mt-2">
                                <button className="button" type="button" onClick={copyToClipboard}>
                                    <FaRegCopy />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field has-text-centered">
                    <button className="button is-primary" type="submit">Translate</button>
                </div>
            </form>

            {translationsHistory.length > 0 && (
                <div className="mt-5">
                    <h3 className="title has-text-centered is-3">Translation History</h3>
                    <ul className='box'>
                        {translationsHistory.map((item, index) => (
                            <li className='notification' key={index}>
                                <strong>{item.input} ({item.languageFrom} → {item.languageTo}) Output: {item.output}</strong>
                                <button className="delete" onClick={() => removeTranslation(index)} aria-label="Delete translation"></button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TranslateForm;
