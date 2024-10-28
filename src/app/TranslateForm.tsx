// app/TranslateForm.tsx
"use client";
import React, { useState } from 'react';
import axios from 'axios';
import languages from '../data/languages.json';

const TranslateForm: React.FC = () => {
  const [translationInput, setTranslationInput] = useState('');
  const [languageFrom, setLanguageFrom] = useState('en');
  const [languageTo, setLanguageTo] = useState('es');
  const [translationOutput, setTranslationOutput] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.mymemory.translated.net/get?q=${translationInput}&langpair=${languageFrom}|${languageTo}`
      );
      if (response.status === 200) {
        setTranslationOutput(response.data?.responseData?.translatedText);
      }
    } catch (err) {
      console.error("Error making an API call", err);
    }
  };

  return (
    <div>
      <h1>Translator App</h1>
      <form onSubmit={onSubmit}>
        <textarea
          value={translationInput}
          onChange={(e) => setTranslationInput(e.target.value)}
          placeholder="Enter text to translate"
        />
        <select value={languageFrom} onChange={(e) => setLanguageFrom(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang.ISO} value={lang.ISO}>{lang.language}</option>
          ))}
        </select>
        <select value={languageTo} onChange={(e) => setLanguageTo(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang.ISO} value={lang.ISO}>{lang.language}</option>
          ))}
        </select>
        <button type="submit">Translate</button>
      </form>
      <div>
        <h2>Translation Output:</h2>
        <p>{translationOutput}</p>
      </div>
    </div>
  );
};

export default TranslateForm;
