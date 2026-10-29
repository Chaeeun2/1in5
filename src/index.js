import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 성능 측정을 원한다면 결과를 기록하는 함수를 전달하세요
// 예: reportWebVitals(console.log)
// 또는 analytics endpoint로 보내세요. 더 알아보기: https://bit.ly/CRA-vitals
reportWebVitals(); 