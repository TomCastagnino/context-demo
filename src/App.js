import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import PageContent from './components/PageContent';
import { ThemeProvider, ThemeContext } from './components/contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <Navbar />
        <Form  />
      </ PageContent>
    </ThemeProvider>
  );
}

export default App;