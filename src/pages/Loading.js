import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/container.css';
import './Loading.css';

const Loading = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state?.formData?.name || '사용자';

  useEffect(() => {
    // 4초 후 결과 페이지로 이동
    const timer = setTimeout(() => {
      const { lackingElement, formData, sajuResult } = location.state;
      
      // 오행을 영어 슬러그로 변환
      const elementSlugMap = {
        '목': 'tree',
        '화': 'fire',
        '수': 'water',
        '금': 'metal',
        '토': 'soil'
      };
      
      const slug = elementSlugMap[lackingElement] || lackingElement;
      navigate(`/result/${slug}`, {
        state: {
          formData,
          sajuResult
        }
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, [location.state, navigate]);

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="loading-content">
          {/* 동영상 배경 */}
          <div className="loading-video-area">
            <video 
              className="loading-video"
              autoPlay 
              loop 
              muted 
              playsInline
              disablePictureInPicture
              preload="auto"
            >
              <source src="/videos/Main.mp4" type="video/mp4" />
              비디오를 지원하지 않는 브라우저입니다.
            </video>
          </div>
          
          {/* 로딩 텍스트 */}
          <div className="loading-header">
            <h1>{userName}님의 사주를<br/>분석하고 있어요.</h1>
          </div>
          
          {/* 프로그래스 바 */}
          <div className="loading-progress-container">
            <div className="loading-progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading; 