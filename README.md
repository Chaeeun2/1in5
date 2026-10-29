# 사주 운세 웹사이트

React와 Firebase를 사용하여 만든 사주 운세 웹사이트입니다.

## 기능

- 사용자 정보 입력 (이름, 생년월일, 성별)
- Firebase Firestore에 데이터 저장
- 개인 맞춤 사주 해석 제공
- 반응형 웹 디자인
- 결과 출력 기능

## 기술 스택

- **Frontend**: React 18, React Router DOM
- **Backend**: Firebase (Firestore Database)
- **Styling**: CSS3
- **Language**: JavaScript (ES6+)

## 설치 및 실행

1. 의존성 설치

```bash
npm install
```

2. Firebase 설정

   - Firebase 콘솔에서 프로젝트 생성
   - `src/firebase/config.js` 파일의 firebaseConfig 객체를 실제 값으로 수정

3. 개발 서버 실행

```bash
npm start
```

4. 빌드

```bash
npm run build
```

## 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Navbar.js
│   └── Navbar.css
├── pages/              # 페이지 컴포넌트
│   ├── Home.js
│   ├── Home.css
│   ├── SajuResult.js
│   ├── SajuResult.css
│   ├── About.js
│   └── About.css
├── firebase/           # Firebase 설정 및 함수
│   ├── config.js
│   └── database.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## 사용법

1. 홈페이지에서 개인정보 입력
2. "사주 보기" 버튼 클릭
3. 결과 페이지에서 개인 맞춤 운세 확인
4. 필요시 결과 출력

## 주의사항

- Firebase 설정 정보를 반드시 실제 값으로 변경해야 합니다.
- 본 서비스는 재미와 참고용으로 제공됩니다.

## 라이선스

MIT License
