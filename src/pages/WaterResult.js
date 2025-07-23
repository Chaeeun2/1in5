import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/container.css";
import "./result.css";
import arrowdown from "../assets/images/Vector 39.png";
import water_1 from "../assets/images/water_1.jpg";
import water_2 from "../assets/images/water_2.jpg";
import water_3 from "../assets/images/water_3.jpg";
import water_4 from "../assets/images/water_4.jpg";

const WaterResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const formData = location.state?.formData;
  const sajuResult = location.state?.sajuResult;
  const userName = formData?.name || "사용자";

  // 오행 데이터 (기본값 설정)
  const elements = sajuResult?.elements || {
    tree: 2,
    fire: 2,
    ground: 2,
    gold: 2,
    water: 0,
  };

  // 각 오행이 최솟값인지 확인하는 함수 (0개 또는 1개인 경우도 포함)
  const isMinElement = (value) => value <= 1;

  const handleRestart = () => {
    navigate("/");
  };

  const handleShare = async () => {
    const textToCopy = `🌳🔥🌍🔑💧

나는 어떤 기운이 부족할까?
나의 사주에서 부족한 오행을 찾아보아요.

https://issuegraphy.web.app/`;
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert('텍스트가 클립보드에 복사되었습니다.');
    } catch (error) {
      console.error('클립보드 복사 실패:', error);
      // 브라우저가 clipboard API를 지원하지 않는 경우 fallback
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        alert('텍스트가 클립보드에 복사되었습니다.');
      } catch (fallbackError) {
        alert('클립보드 복사에 실패했습니다.');
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="result-content">
          {/* 상단 영상 */}
          <div className="result-icon-container">
            <div className="result-video-area">
              <video
                className="loading-video"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                preload="auto"
              >
                <source src="https://pub-3b32aa9b7b494bbfb9f93e2d333a6b9a.r2.dev/water.mp4" type="video/mp4" />
                비디오를 지원하지 않는 브라우저입니다.
              </video>
            </div>
          </div>

          {/* 결과 헤더 */}
          <div className="result-header">
            <div>
              <h1 className="result-title">
                신중함 0%
                <br />
                매사에 덤벙대요 😵️
              </h1>
              <p className="result-description">
                {userName}님의 사주에는 물이 부족해요.
              </p>
            </div>

            <div>
              <ul className="characteristics-list">
                <li>
                  • 행동이 가볍고, <span className="bold">실수</span>를 자주 해요.
                </li>
                <li>
                  • <span className="bold">융통성이 부족</span>해서 적응을 어려워해요.
                </li>
                <li>
                  • <span className="bold">돈</span>이나 <span className="bold">권력</span>에 대한 욕심이 없어요.
                </li>
              </ul>
            </div>
          </div>

          <div className="des-wrap">
            {/* 오행 차트 섹션 */}
            <div className="elements-chart-section water-chart">
              <h3 className="section-title">{userName}님이 가진 오행</h3>
              <p className="section-subtitle">
                나의 기운을 알면, 부족한 부분을 채워
                <br />
                삶의 균형을 만들 수 있어요.
              </p>

              <div className="chart-container">
                <div className="elements-chart">
                  <div className="elements-counts">
                    <div className="element-count">
                      <span
                        className={`count ${
                          isMinElement(elements.tree) ? "" : "notminCount"
                        }`}
                      >
                        {elements.tree}개
                      </span>
                    </div>
                    <div className="element-count">
                      <span
                        className={`count ${
                          isMinElement(elements.fire) ? "" : "notminCount"
                        }`}
                      >
                        {elements.fire}개
                      </span>
                    </div>
                    <div className="element-count">
                      <span
                        className={`count ${
                          isMinElement(elements.ground) ? "" : "notminCount"
                        }`}
                      >
                        {elements.ground}개
                      </span>
                    </div>
                    <div className="element-count">
                      <span
                        className={`count ${
                          isMinElement(elements.gold) ? "" : "notminCount"
                        }`}
                      >
                        {elements.gold}개
                      </span>
                    </div>
                    <div className="element-count">
                      <span
                        className={`count ${
                          isMinElement(elements.water) ? "" : "notminCount"
                        }`}
                      >
                        {elements.water}개
                      </span>
                    </div>
                  </div>

                  <div className="chart-visual">
                    <div className="chart-bars">
                      <div
                        className={`chart-bar tree-bar ${
                          isMinElement(elements.tree) ? "" : "notminElement"
                        }`}
                        style={{
                          height: `${Math.max((elements.tree / 5) * 100, 10)}%`,
                        }}
                      ></div>
                      <div
                        className={`chart-bar fire-bar ${
                          isMinElement(elements.fire) ? "" : "notminElement"
                        }`}
                        style={{
                          height: `${Math.max((elements.fire / 5) * 100, 10)}%`,
                        }}
                      ></div>
                      <div
                        className={`chart-bar ground-bar ${
                          isMinElement(elements.ground) ? "" : "notminElement"
                        }`}
                        style={{
                          height: `${Math.max(
                            (elements.ground / 5) * 100,
                            10
                          )}%`,
                        }}
                      ></div>
                      <div
                        className={`chart-bar gold-bar ${
                          isMinElement(elements.gold) ? "" : "notminElement"
                        }`}
                        style={{
                          height: `${Math.max((elements.gold / 5) * 100, 10)}%`,
                        }}
                      ></div>
                      <div
                        className={`chart-bar water-bar ${
                          isMinElement(elements.water) ? "" : "notminElement"
                        }`}
                        style={{
                          height: `${Math.max(
                            (elements.water / 5) * 100,
                            10
                          )}%`,
                        }}
                      ></div>
                    </div>

                    <div className="chart-icons">
                      <span className="chart-icon">🌳</span>
                      <span className="chart-icon">🔥</span>
                      <span className="chart-icon">🌍</span>
                      <span className="chart-icon">🔑</span>
                      <span className="chart-icon">💧</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="chart-description">
                0~1개 부족 ㅣ 2~3개 적당 ㅣ 4개 이상 과다
              </p>
            </div>

            {/* 2025년 섹션 */}
            <div className="year-section">
              <h3 className="section-title">
                <span>📅</span>2025년, 어떠셨나요?
              </h3>
              <p className="year-description">
                2025년에는 물의 기운이 거의 들어오지 않았어요.
                <br />
                              물이 부족한 {userName}님은 더더욱 마음이 메말랐겠어요. 뭔가 하려 해도 이유 없이 지치지는 않았나요?
                              <br/><br/>
2026년에는 불의 기운이 더 강해져 부담이 커질 수 있어요.<br/>불이 강할 때는, 물을 보충해주어 열기를 식히고 균형을 찾을 수 있어요.
              </p>
            </div>

            {/* 물 관련 조언 섹션 */}
            <div className="advice-section">
              <h3 className="advice-title">
                <span>💧</span>물을 채우면 이런 게 좋아요.
              </h3>
              <ul className="advice-list">
                <li>• <span className="bold">지혜</span>가 생겨요 🎓</li>
                <li>• 다른 사람을 <span className="bold">편안하게</span> 해줘요 ️😌</li>
                <li>• <span className="bold">침착하게</span> 생각할 수 있어요 💭</li>
              </ul>
            </div>

            {/* 개운 아이템 섹션 */}
            <div className="items-section water-items-section">
              <h3 className="items-title">
                <span>🍀</span>행운 가득 채워줄 개운 아이템
              </h3>
              <div className="items-wrap water-items-wrap">
                <div className="items-grid">
                  <a
                    href="https://smartstore.naver.com/issuegraphy/products/12137224751"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="item-card">
                      <div className="item-image-placeholder">
                        <img src={water_1} alt="Keychain" />
                      </div>
                      <p className="item-name">Keychain</p>
                    </div>
                  </a>

                  <a
                    href="https://smartstore.naver.com/issuegraphy/products/12135728920"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="item-card">
                      <div className="item-image-placeholder">
                        <img src={water_2} alt="Sticker" />
                      </div>
                      <p className="item-name">Sticker</p>
                    </div>
                  </a>

                  <a
                    href="https://smartstore.naver.com/issuegraphy/products/12128620847"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="item-card">
                      <div className="item-image-placeholder">
                        <img src={water_3} alt="Landscape Poaster" />
                      </div>
                      <p className="item-name">Landscape Poaster</p>
                    </div>
                  </a>

                  <a
                    href="https://smartstore.naver.com/issuegraphy/products/12125065101"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="item-card">
                      <div className="item-image-placeholder">
                        <img src={water_4} alt="Material Poaster" />
                      </div>
                      <p className="item-name">Material Poaster</p>
                    </div>
                  </a>
                </div>
              </div>

              <p className="items-description">
                부족한 오행이 여러 개라면,
                <br />
                다른 기운들도 함께 채워주는 것이 좋아요
              </p>
            </div>
            
                         {/* 하단 버튼 */}
             <div className="result-actions">
              <button className="action-btn primary" onClick={handleShare}>공유하기</button>
              <a href="https://smartstore.naver.com/issuegraphy/category/ALL?cp=1"
                    target="_blank"
                    rel="noopener noreferrer">
                          <button className="action-btn secondary">
                부족한 기운 개운하러 가기
                </button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterResult; 