import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/container.css';
import './Cover.css';

const Cover = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/input');
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="cover-content">
          <div className="cover-header">
            <h1 className="cover-title">나는 어떤 기운이 부족할까?</h1>
            <p className="cover-subtitle">부족한 오행을 채우고 삶의 균형을 찾아보아요</p>
          </div>
          
            <div className="cover-image-area">
            <video 
              className="cover-video"
              autoPlay 
              loop 
              muted 
              playsInline
              disablePictureInPicture
              preload="auto"
            >
              <source src="https://pub-3b32aa9b7b494bbfb9f93e2d333a6b9a.r2.dev/Main.mp4" type="video/mp4" />
              비디오를 지원하지 않는 브라우저입니다.
            </video>
          </div>
          
          <div className="cover-footer">
            <button 
              onClick={handleStart}
              className="start-button"
            >
              나의 오행 균형 확인하기 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover; 