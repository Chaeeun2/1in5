import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveSajuData, getSajuByBirthInfo } from '../firebase/database';
import { calculateSaju } from '../utils/saju';
import '../styles/container.css';
import './SajuInput.css';

const SajuInput = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    unknownTime: false
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked,
        // 체크박스가 선택되면 시간 필드 초기화
        ...(name === 'unknownTime' && checked ? { birthTime: '' } : {})
      }));
      return;
    }
    
    // 숫자만 입력 가능하도록 처리
    if (name === 'birthDate') {
      const numericValue = value.replace(/[^0-9]/g, '');
      // 생년월일은 8자리까지만
      if (numericValue.length <= 8) {
        setFormData(prev => ({
          ...prev,
          [name]: numericValue
        }));
      }
      return;
    }
    
    if (name === 'birthTime') {
      const numericValue = value.replace(/[^0-9]/g, '');
      
      // 시간은 4자리까지만 (HHMM 형태)
      if (numericValue.length <= 4) {
        let formattedValue = numericValue;
        
        // 4자리가 입력되면 HH:MM 형태로 포맷팅
        if (numericValue.length === 4) {
          const hours = numericValue.slice(0, 2);
          const minutes = numericValue.slice(2, 4);
          formattedValue = `${hours}:${minutes}`;
        }
        
        setFormData(prev => ({
          ...prev,
          [name]: formattedValue
        }));
      }
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 입력값 유효성 검사
      if (formData.birthDate.length !== 8) {
        alert('생년월일을 8자리로 입력해주세요. (예: 19950505)');
        setLoading(false);
        return;
      }

      if (!formData.unknownTime && formData.birthTime.replace(/[^0-9]/g, '').length !== 4) {
        alert('태어난 시간을 4자리로 입력해주세요. (예: 0910)');
        setLoading(false);
        return;
      }

      // 생년월일 파싱 (YYYYMMDD 형태)
      const birthYear = formData.birthDate.slice(0, 4);
      const birthMonth = formData.birthDate.slice(4, 6);
      const birthDay = formData.birthDate.slice(6, 8);
      
      // 날짜 유효성 검사
      const date = new Date(parseInt(birthYear), parseInt(birthMonth) - 1, parseInt(birthDay));
      if (date.getFullYear() != birthYear || 
          date.getMonth() + 1 != birthMonth || 
          date.getDate() != birthDay ||
          parseInt(birthYear) < 1900 ||
          parseInt(birthYear) > new Date().getFullYear()) {
        alert('올바른 생년월일을 입력해주세요.');
        setLoading(false);
        return;
      }
      
      // 시간 파싱 (HHMM 형태 또는 모름)
      let birthHour = '';
      if (!formData.unknownTime) {
        // 콜론 제거 후 숫자만 추출
        const timeNumeric = formData.birthTime.replace(/[^0-9]/g, '');
        const hour = Math.floor(parseInt(timeNumeric) / 100);
        const minute = parseInt(timeNumeric) % 100;
        
        if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
          alert('올바른 시간을 입력해주세요. (00:00~23:59)');
          setLoading(false);
          return;
        }
        
        birthHour = hour.toString();
      }

      // 1. 동일한 생년월일, 시간이 DB에 있는지 확인
      const existingData = await getSajuByBirthInfo(
        birthYear,
        birthMonth,
        birthDay,
        birthHour.toString()
      );

      let lackingElement;
      let sajuResult = null;

      if (existingData) {
        // 2. DB에 있다면 기존 부족한 오행 사용
        lackingElement = existingData.lackingElement;
      } else {
        // 3. DB에 없다면 사주 계산 후 저장
        // 시간과 분을 모두 전달
        let birthTimeForCalculation = '';
        if (!formData.unknownTime) {
          const timeNumeric = formData.birthTime.replace(/[^0-9]/g, '');
          const hour = Math.floor(parseInt(timeNumeric) / 100);
          const minute = parseInt(timeNumeric) % 100;
          birthTimeForCalculation = `${hour}:${minute.toString().padStart(2, '0')}`;
        }
        
        sajuResult = calculateSaju(
          parseInt(birthYear),
          parseInt(birthMonth),
          parseInt(birthDay),
          birthTimeForCalculation || '12:00'
        );
        
        // 계산된 사주 결과를 콘솔에 출력
        console.log('========== 사주 계산 결과 ==========');
        console.log('👤 이름:', formData.name);
        console.log('📅 생년월일:', `${birthYear}년 ${birthMonth}월 ${birthDay}일`);
        console.log('🕐 태어난 시간:', formData.unknownTime ? '모름' : `${birthHour}시`);
        console.log('');
        console.log('🔮 사주 (연월일시):');
        console.log(`   년주: ${sajuResult.saju.year}`);
        console.log(`   월주: ${sajuResult.saju.month}`);
        console.log(`   일주: ${sajuResult.saju.day}`);
        console.log(`   시주: ${sajuResult.saju.hour}`);
        console.log('');
        console.log('🌟 오행 분석:');
        console.log(`   목(木): ${sajuResult.elements.tree}`);
        console.log(`   화(火): ${sajuResult.elements.fire}`);
        console.log(`   토(土): ${sajuResult.elements.ground}`);
        console.log(`   금(金): ${sajuResult.elements.gold}`);
        console.log(`   수(水): ${sajuResult.elements.water}`);
        console.log('');
        console.log('⚠️  부족한 오행:', sajuResult.lackingElement);
        console.log('=====================================');
        
        lackingElement = sajuResult.lackingElement;
        
        // Firebase에 저장
        await saveSajuData({
          name: formData.name,
          birthYear: birthYear,
          birthMonth: birthMonth,
          birthDay: birthDay,
          birthHour: birthHour.toString(),
          birthDate: formData.birthDate,
          birthTime: formData.birthTime,
          unknownTime: formData.unknownTime,
          lackingElement: lackingElement,
          createdAt: new Date()
        });
      }

      let sajuResultForNav = null;
      if (!existingData) {
        // 새로 계산한 경우 결과 저장
        sajuResultForNav = sajuResult;
      } else {
        // 기존 데이터가 있는 경우 다시 계산
        let birthTimeForCalculation = '';
        if (!formData.unknownTime) {
          const timeNumeric = formData.birthTime.replace(/[^0-9]/g, '');
          const hour = Math.floor(parseInt(timeNumeric) / 100);
          const minute = parseInt(timeNumeric) % 100;
          birthTimeForCalculation = `${hour}:${minute.toString().padStart(2, '0')}`;
        }
        
        const recalcResult = calculateSaju(
          parseInt(birthYear),
          parseInt(birthMonth),
          parseInt(birthDay),
          birthTimeForCalculation || '12:00'
        );
        
        sajuResultForNav = recalcResult;
      }

      // 로딩 페이지로 이동
      navigate('/loading', { 
        state: { 
          formData: {
            ...formData,
            birthYear,
            birthMonth,
            birthDay,
            birthHour: birthHour.toString()
          }, 
          lackingElement,
          sajuResult: sajuResultForNav
        } 
      });
    } catch (error) {
      console.error('사주 계산 실패:', error);
      alert('사주 계산에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="header">
          <button className="back-button" onClick={handleBack}>
            ←
          </button>
          <h1>나의 부족한 오행을 알기 위해<br />정보가 필요해요.</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="saju-form">
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="홍길동"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="birthDate">양력 생년월일</label>
            <input
              type="text"
              id="birthDate"
              name="birthDate"
              placeholder="19950505"
              value={formData.birthDate}
              onChange={handleInputChange}
              maxLength="8"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="birthTime">태어난 시간</label>
            <div className="input-with-checkbox">
              <input
                type="text"
                id="birthTime"
                name="birthTime"
                placeholder={formData.unknownTime ? "모름" : "09:10"}
                value={formData.birthTime}
                onChange={handleInputChange}
                maxLength="4"
                disabled={formData.unknownTime}
              />
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="unknownTime"
                  checked={formData.unknownTime}
                  onChange={handleInputChange}
                />
                <span className="checkmark">✓</span>
                잘 모르겠어요
              </label>
            </div>
          </div>

          <div className="form-footer">
            <p className="privacy-note">* 개인정보는 다른 용도로 사용되지 않아요</p>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? '계산 중...' : '결과 보기 →'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SajuInput; 