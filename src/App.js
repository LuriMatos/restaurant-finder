import React from 'react';
import { GlobalStyle } from './App.style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navigation/Navigation';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <NavigationBar />
          <Routes> 
            <Route path="/" exact element={<Homepage />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
