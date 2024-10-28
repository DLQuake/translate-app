# Translation App

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)

## Description

The Translation App is a web application that allows users to translate text between different languages using the MyMemory API. The app supports automatic saving of translation history, providing easy access to previous results.

## Features

- **Text Translation**: Users can input text in one language and receive translations in another using the MyMemory API.
- **Translation History**: Translations are automatically saved, allowing easy browsing of previous translations.
- **Copy to Clipboard**: Users can copy translation results with a single click.
- **Theme Switching**: The app allows toggling between light and dark themes.

## Technologies

- **React**: Used for building the user interface.
- **Next.js**: A framework for building React applications.
- **Axios**: Used for communication with the MyMemory translation API.
- **MyMemory API**: The translation service utilized for obtaining language translations.
- **Bulma**: A CSS framework for styling the application.
- **TypeScript**: A programming language for better type verification.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DLQuake/translate-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd translate-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm run dev
   ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Usage

1. Select the language you want to translate from and the language you want to translate to.
2. Enter the text you want to translate.
3. Click the "Translate" button.
4. The translation will be displayed on the right side. You can copy it to your clipboard.
5. The translation history will be displayed below, with the ability to delete individual translations.