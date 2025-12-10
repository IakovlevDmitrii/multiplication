import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Game } from '../Game/Game';
import { GamePage, ResultsPage, StartPage } from '../pages';
import '../../styles/index.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Game />}>
            <Route index element={<StartPage />} />
            <Route path="game" element={<GamePage />} />
            <Route path="results" element={<ResultsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
};
