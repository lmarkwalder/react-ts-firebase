import * as ReactDOM from 'react-dom';
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import App from './components/App';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translations from './translations';

// setup translations
i18n.use(initReactI18next)
    .init(translations);

const container = document.getElementById('root') ?? document.body;
const root = ReactDOM.createRoot(container);

if (process.env.NODE_ENV !== 'production') {
    console.log('NODE_ENV: ', process.env.NODE_ENV);
}

// Initial render: Render an element to the root.
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
        </Routes>
    </BrowserRouter>,
);
