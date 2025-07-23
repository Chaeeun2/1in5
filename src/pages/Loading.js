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
      
      // console.log('🚀 ========== Loading.js 전달받은 데이터 ==========');
      // console.log('👤 이름:', formData?.name);
      // console.log('📅 생년월일:', `${formData?.birthYear}년 ${formData?.birthMonth}월 ${formData?.birthDay}일`);
      // console.log('🕐 시간:', formData?.unknownTime ? '모름' : `${formData?.birthHour}시`);
      // console.log('');
      if (sajuResult) {
        // console.log('🔮 사주 (연월일시):');
        // console.log(`   년주: ${sajuResult.saju.year}`);
        // console.log(`   월주: ${sajuResult.saju.month}`);
        // console.log(`   일주: ${sajuResult.saju.day}`);
        // console.log(`   시주: ${sajuResult.saju.hour}`);
        // console.log('');
        // console.log('🌟 오행 분석:');
        // console.log(`   목(木): ${sajuResult.elements.tree}`);
        // console.log(`   화(火): ${sajuResult.elements.fire}`);
        // console.log(`   토(土): ${sajuResult.elements.ground}`);
        // console.log(`   금(金): ${sajuResult.elements.gold}`);
        // console.log(`   수(水): ${sajuResult.elements.water}`);
        // console.log('');
      }
      // console.log('⚠️  부족한 오행:', lackingElement);
      // console.log('📊 부족한 오행 타입:', typeof lackingElement);
      
      // 오행을 영어 슬러그로 변환
      const elementSlugMap = {
        '목': 'tree',
        '화': 'fire',
        '수': 'water',
        '금': 'metal',
        '토': 'soil'
      };
      
      const slug = elementSlugMap[lackingElement] || lackingElement;
      // console.log('🎯 최종 슬러그:', slug);
      // console.log('🚀 이동할 경로:', `/result/${slug}`);
      // console.log('======================================');
      
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
              <source src="https://pub-3b32aa9b7b494bbfb9f93e2d333a6b9a.r2.dev/Main.mp4" type="video/mp4" />
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