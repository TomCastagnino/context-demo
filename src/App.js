import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import PageContent from './components/PageContent';
import { ThemeProvider } from './components/contexts/ThemeContext';
import { LanguageProvider } from './components/contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form  />
        </ PageContent>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;