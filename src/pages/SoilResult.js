import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/container.css";
import "./result.css";
import arrowdown from "../assets/images/Vector 39.png";
import soil_1 from "../assets/images/soil_1.jpg";
import soil_2 from "../assets/images/soil_2.jpg";
import soil_3 from "../assets/images/soil_3.jpg";
import soil_4 from "../assets/images/soil_4.jpg";

const SoilResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const formData = location.state?.formData;
  const sajuResult = location.state?.sajuResult;
  const userName = formData?.name || "사용자";

  // 오행 데이터 (기본값 설정)
  const elements = sajuResult?.elements || {
    tree: 2,
    fire: 2,
    ground: 0,
    gold: 2,
    water: 2,
  };

  // 각 오행이 최솟값인지 확인하는 함수 (0개 또는 1개인 경우도 포함)
  const isMinElement = (value) => value <= 1;

  const handleRestart = () => {
    navigate("/");
  };

  // Google Analytics 이벤트 트래킹 함수
  const trackItemClick = (itemName, itemUrl) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'item_click', {
        event_category: 'ecommerce',
        event_label: `soil_result_${itemName}`,
        page_title: 'SoilResult',
        item_url: itemUrl
      });
    }
  };

  const trackShopAllClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'shop_all_click', {
        event_category: 'ecommerce',
        event_label: 'soil_result_shop_all',
        page_title: 'SoilResult'
      });
    }
  };

  const handleShare = async () => {
    // Google Analytics 이벤트 추적
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'share_click', {
        event_category: 'engagement',
        event_label: 'soil_result_share',
        page_title: 'SoilResult'
      });
    }

    const shareText = `🌳🔥🌍🔑💧

나는 어떤 기운이 부족할까?
나의 사주에서 부족한 오행을 찾아보아요.

https://issuegraphy.web.app/`;
    
    // Web Share API 지원 확인
    if (navigator.share) {
      const shareData = {
        title: '내 사주에는 어떤 것이 부족할까?',
        text: shareText,
        url: 'https://issuegraphy.web.app/'
      };
      
      // canShare 확인 (있는 경우에만)
      if (navigator.canShare) {
        const canShareResult = navigator.canShare(shareData);
        
        if (!canShareResult) {
          fallbackCopyToClipboard(shareText);
          return;
        }
      }
      
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error.name === 'AbortError') {
          return;
        }
        
        fallbackCopyToClipboard(shareText);
        return;
      }
    }
    
    // Web Share API를 지원하지 않는 경우
    fallbackCopyToClipboard(shareText);
  };

  const fallbackCopyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('복사된 텍스트를 친구에게 공유해보세요!');
    } catch (error) {
      console.error('클립보드 복사 실패:', error);
      // 브라우저가 clipboard API를 지원하지 않는 경우 fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        alert('복사된 텍스트를 친구에게 공유해보세요!');
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
                <source src="https://pub-3b32aa9b7b494bbfb9f93e2d333a6b9a.r2.dev/soil.mp4" type="video/mp4" />
                비디오를 지원하지 않는 브라우저입니다.
              </video>
            </div>
          </div>

          {/* 결과 헤더 */}
          <div className="result-header">
            <div>
              <h1 className="result-title">
                무게감 0%
                <br />
                깃털처럼 가볍네요 🕊
              </h1>
              <p className="result-description">
                {userName}님의 사주에는 토가 부족해요.
              </p>
            </div>

            <div>
              <ul className="characteristics-list">
                <li>
                  • 생각이 <span className="bold">표정</span>으로 다 드러나요.
                </li>
                <li>
                  • 한 가지 일에 꾸준하지 못하고, <span className="bold">많은 일</span>을 벌여요.
                </li>
                <li>
                  • <span className="bold">성격이 급하다</span>는 말을 종종 들어요.
                </li>
              </ul>
            </div>
          </div>

          <div className="des-wrap">
            {/* 오행 차트 섹션 */}
            <div className="elements-chart-section soil-chart">
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

            {/* 2026년 섹션 */}
            <div className="year-section">
              <h3 className="section-title">
                <span>📅</span>2026년, 어떠셨나요?
              </h3>
              <p className="year-description">
                2026년에는 불의 기운이 강하게 들어왔어요.
                <br />
                토가 부족한 {userName}님에게는 불이 흙을 만들어내듯, 새로운
                기반을 마련할 기회가 생겼을 수 있겠어요. 다만 넘치는 열정에
                비해 마음의 안정은 부족했을지도 몰라요.
              </p>
            </div>

            {/* 2027년 섹션 */}
            <div className="year-section">
              <h3 className="section-title">
                <span>☀️</span>2027년에는 이럴 것 같아요.
              </h3>
              <p className="year-description">
                2027년에는 흙의 기운이 본격적으로 들어와요.
                <br />
                토가 부족한 {userName}님에게는 흔들리던 마음을 다잡고, 삶의
                기반을 단단히 다질 수 있는 시기예요.
                <br />
                <br />
                흙의 기운을 잘 활용하면 그동안의 노력이 결실을 맺고 안정감을
                되찾을 수 있어요.
              </p>
            </div>

            {/* 토 관련 조언 섹션 */}
            <div className="advice-section">
              <h3 className="advice-title">
                <span>🌍</span>토를 채우면 이런 게 좋아요.
              </h3>
              <ul className="advice-list">
                <li>• <span className="bold">깊게</span>생각하고, <span className="bold">신중</span>하게 행동해요 💭</li>
                <li>• <span className="bold">무게감</span>과 <span className="bold">신뢰감</span> 있는 이미지가 생겨요 🤔</li>
                <li>• <span className="bold">이해심</span>이 많아져요 👌</li>
              </ul>
            </div>

            {/* 개운 아이템 섹션 */}
            <div className="items-section soil-items-section">
              <h3 className="items-title soil-items-wrap">
                <span>🍀</span>행운 가득 채워줄 개운 아이템
              </h3>
              <div className="items-wrap">
                <div className="items-grid">
                  <a
                    href="https://smartstore.naver.com/issuegraphy/products/12137246974"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackItemClick('keychain', 'https://smartstore.naver.com/issuegraphy/products/12137246974')}
                  >
                    <div className="item-card">
                      <div className="item-image-placeholder">
                        <img src={soil_1} alt="Keychain" />
                      </div>
                      <p className="item-name">Keychain</p>
                    </div>
                  </a>

                  <a
                    href="https://smartstore.naver.com/issuegraphy/products/12135736326"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackItemClick('sticker', 'https://smartstore.naver.com/issuegraphy/products/12135736326')}
                  >
                    <div className="item-card">
                      <div className="item-image-placeholder">
                        <img src={soil_2} alt="Sticker" />
                      </div>
                      <p className="item-name">Sticker</p>
                    </div>
                  </a>

                  <a
                    href="https://smartstore.naver.com/issuegraphy/products/12128777542"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackItemClick('landscape_poster', 'https://smartstore.naver.com/issuegraphy/products/12128777542')}
                  >
                    <div className="item-card">
                      <div className="item-image-placeholder">
                        <img src={soil_3} alt="Landscape Poaster" />
                      </div>
                      <p className="item-name">Landscape Poaster</p>
                    </div>
                  </a>

                  <a
                    href="https://smartstore.naver.com/issuegraphy/products/12125073125"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackItemClick('material_poster', 'https://smartstore.naver.com/issuegraphy/products/12125073125')}
                  >
                    <div className="item-card">
                      <div className="item-image-placeholder">
                        <img src={soil_4} alt="Material Poaster" />
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
                    rel="noopener noreferrer"
                    onClick={trackShopAllClick}>
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

export default SoilResult; 