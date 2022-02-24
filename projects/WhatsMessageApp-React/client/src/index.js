/** CSS **/
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

/** REACT **/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

/** COMPONENTS **/
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
