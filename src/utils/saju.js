// 천간과 지지 배열
const heavenlyStems = ["갑","을", "병", "정", "무", "기", "경", "신", "임", "계"];
const earthlyBranches = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];

// 음력 월 데이터 테이블 (1900년부터 2040년까지)
const lunarMonthTable = [
[2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
[1, 2, 1, 1, 2, 1, 2, 5, 2, 2, 1, 2],
[1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1],   /* 1901 */
[2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2],
[1, 2, 1, 2, 3, 2, 1, 1, 2, 2, 1, 2],
[2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1],
[2, 2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2],
[1, 2, 2, 4, 1, 2, 1, 2, 1, 2, 1, 2],
[1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1],
[2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2],
[1, 5, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2],
[1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1],
[2, 1, 2, 1, 1, 5, 1, 2, 2, 1, 2, 2],   /* 1911 */
[2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2],
[2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2],
[2, 2, 1, 2, 5, 1, 2, 1, 2, 1, 1, 2],
[2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2],
[1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1],
[2, 3, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1],
[2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2],
[1, 2, 1, 1, 2, 1, 5, 2, 2, 1, 2, 2],
[1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2],
[2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2],   /* 1921 */
[2, 1, 2, 2, 3, 2, 1, 1, 2, 1, 2, 2],
[1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2],
[2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1],
[2, 1, 2, 5, 2, 1, 2, 2, 1, 2, 1, 2],
[1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1],
[2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2],
[1, 5, 1, 2, 1, 1, 2, 2, 1, 2, 2, 2],
[1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2],
[1, 2, 2, 1, 1, 5, 1, 2, 1, 2, 2, 1],
[2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1],   /* 1931 */
[2, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2],
[1, 2, 2, 1, 6, 1, 2, 1, 2, 1, 1, 2],
[1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2],
[1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1],
[2, 1, 4, 1, 2, 1, 2, 1, 2, 2, 2, 1],
[2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1],
[2, 2, 1, 1, 2, 1, 4, 1, 2, 2, 1, 2],
[2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2],
[2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1],
[2, 2, 1, 2, 2, 4, 1, 1, 2, 1, 2, 1],   /* 1941 */
[2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2],
[1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2],
[1, 1, 2, 4, 1, 2, 1, 2, 2, 1, 2, 2],
[1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2],
[2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2],
[2, 5, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2],
[2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
[2, 2, 1, 2, 1, 2, 3, 2, 1, 2, 1, 2],
[2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1],
[2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2],   /* 1951 */
[1, 2, 1, 2, 4, 2, 1, 2, 1, 2, 1, 2],
[1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 2],
[1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2],
[2, 1, 4, 1, 1, 2, 1, 2, 1, 2, 2, 2],
[1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2],
[2, 1, 2, 1, 2, 1, 1, 5, 2, 1, 2, 2],
[1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
[1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
[2, 1, 2, 1, 2, 5, 2, 1, 2, 1, 2, 1],
[2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],   /* 1961 */
[1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1],
[2, 1, 2, 3, 2, 1, 2, 1, 2, 2, 2, 1],
[2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2],
[1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2],
[1, 2, 5, 2, 1, 1, 2, 1, 1, 2, 2, 1],
[2, 2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2],
[1, 2, 2, 1, 2, 1, 5, 2, 1, 2, 1, 2],
[1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1],
[2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2],
[1, 2, 1, 1, 5, 2, 1, 2, 2, 2, 1, 2],   /* 1971 */
[1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1],
[2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2, 1],
[2, 2, 1, 5, 1, 2, 1, 1, 2, 2, 1, 2],
[2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2],
[2, 2, 1, 2, 1, 2, 1, 5, 2, 1, 1, 2],
[2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1],
[2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1],
[2, 1, 1, 2, 1, 6, 1, 2, 2, 1, 2, 1],
[2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2],
[1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2],   /* 1981 */
[2, 1, 2, 3, 2, 1, 1, 2, 2, 1, 2, 2],
[2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2],
[2, 1, 2, 2, 1, 1, 2, 1, 1, 5, 2, 2],
[1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2],
[1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1],
[2, 1, 2, 2, 1, 5, 2, 2, 1, 2, 1, 2],
[1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1],
[2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2],
[1, 2, 1, 1, 5, 1, 2, 1, 2, 2, 2, 2],
[1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2],   /* 1991 */
[1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2],
[1, 2, 5, 2, 1, 2, 1, 1, 2, 1, 2, 1],
[2, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2],
[1, 2, 2, 1, 2, 2, 1, 5, 2, 1, 1, 2],
[1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2],
[1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1],
[2, 1, 1, 2, 3, 2, 2, 1, 2, 2, 2, 1],
[2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1],
[2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1],
[2, 2, 2, 3, 2, 1, 1, 2, 1, 2, 1, 2],   /* 2001 */
[2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1],
[2, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2],
[1, 5, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2],
[1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1],
[2, 1, 2, 1, 2, 1, 5, 2, 2, 1, 2, 2],
[1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2],
[2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2],
[2, 2, 1, 1, 5, 1, 2, 1, 2, 1, 2, 2],
[2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
[2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1],   /* 2011 */
[2, 1, 6, 2, 1, 2, 1, 1, 2, 1, 2, 1],
[2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2],
[1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 1, 2],
[1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2, 1],
[2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2],
[2, 1, 1, 2, 3, 2, 1, 2, 1, 2, 2, 2],
[1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2],
[2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
[2, 1, 2, 5, 2, 1, 1, 2, 1, 2, 1, 2],
[1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],   /* 2021 */
[2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2],
[1, 5, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
[1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1],
[2, 1, 2, 1, 1, 5, 2, 1, 2, 2, 2, 1],
[2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2],
[1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2],
[1, 2, 2, 1, 5, 1, 2, 1, 1, 2, 2, 1],
[2, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2],
[1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1],
[2, 1, 5, 2, 1, 2, 2, 1, 2, 1, 2, 1],   /* 2031 */
[2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2],
[1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 5, 2],
[1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1],
[2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2],
[2, 2, 1, 2, 1, 4, 1, 1, 2, 2, 1, 2],
[2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2],
[2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1],
[2, 2, 1, 2, 5, 2, 1, 2, 1, 2, 1, 1],
[2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1],
[2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2],   /* 2041 */
[1, 5, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2],
[1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2]
];

// 오행 계산을 위한 변수들
let tree = 0, fire = 0, ground = 0, gold = 0, water = 0;

// 날짜 객체
function myDate(year, month, day, leapMonth) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.leapMonth = leapMonth;
}

// 음력 계산 함수
function lunarCalc(year, month, day) {
    let solYear, solMonth, solDay;
    let lunYear, lunMonth, lunDay;
    let lunLeapMonth, lunMonthDay;
    let i, lunIndex;

    const solMonthDay = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    /* range check */
    if (year < 1900 || year > 2040) {
        throw new Error('1900년부터 2040년까지만 지원합니다');
    }

    /* 속도 개선을 위해 기준 일자를 여러개로 한다 */
    if (year >= 2000) {
        /* 기준일자 양력 2000년 1월 1일 (음력 1999년 11월 25일) */
        solYear = 2000;
        solMonth = 1;
        solDay = 1;
        lunYear = 1999;
        lunMonth = 11;
        lunDay = 25;
        lunLeapMonth = 0;

        solMonthDay[1] = 29;    /* 2000 년 2월 29일 */
        lunMonthDay = 30;   /* 1999년 11월 */
    } else if (year >= 1970) {
        /* 기준일자 양력 1970년 1월 1일 (음력 1969년 11월 24일) */
        solYear = 1970;
        solMonth = 1;
        solDay = 1;
        lunYear = 1969;
        lunMonth = 11;
        lunDay = 24;
        lunLeapMonth = 0;

        solMonthDay[1] = 28;    /* 1970 년 2월 28일 */
        lunMonthDay = 30;   /* 1969년 11월 */
    } else if (year >= 1940) {
        /* 기준일자 양력 1940년 1월 1일 (음력 1939년 11월 22일) */
        solYear = 1940;
        solMonth = 1;
        solDay = 1;
        lunYear = 1939;
        lunMonth = 11;
        lunDay = 22;
        lunLeapMonth = 0;

        solMonthDay[1] = 29;    /* 1940 년 2월 29일 */
        lunMonthDay = 29;   /* 1939년 11월 */
    } else {
        /* 기준일자 양력 1900년 1월 1일 (음력 1899년 12월 1일) */
        solYear = 1900;
        solMonth = 1;
        solDay = 1;
        lunYear = 1899;
        lunMonth = 12;
        lunDay = 1;
        lunLeapMonth = 0;

        solMonthDay[1] = 28;    /* 1900 년 2월 28일 */
        lunMonthDay = 30;   /* 1899년 12월 */
    }

    lunIndex = lunYear - 1899;

    while (true) {

        if (year == solYear && month == solMonth && day == solDay) {
            return new myDate(lunYear, lunMonth, lunDay, lunLeapMonth);
        }

        /* add a day of solar calendar */
        if (solMonth == 2) {
            if (solYear % 400 == 0) {
                solMonthDay[1] = 29;
            } else if (solYear % 100 == 0) {
                solMonthDay[1] = 28;
            } else if (solYear % 4 == 0) {
                solMonthDay[1] = 29;
            } else {
                solMonthDay[1] = 28;
            }
        }

        solDay++;
        if (solDay > solMonthDay[solMonth - 1]) {
            solDay = 1;
            solMonth++;
            if (solMonth > 12) {
                solMonth = 1;
                solYear++;
            }
        }

        /* add a day of lunar calendar */
        lunDay++;
        if (lunDay > lunMonthDay) {
            lunDay = 1;
            if (lunLeapMonth == 1) { /* 윤달이 있는 해 */
                lunLeapMonth = 0;
            } else {
                lunMonth++;
                if (lunMonth > 12) {
                    lunMonth = 1;
                    lunYear++;
                    lunIndex = lunYear - 1899;
                }

                if (lunarMonthTable[lunIndex] && 
                    lunMonth < 13 && 
                    lunarMonthTable[lunIndex][lunMonth - 1] > 3) {
                    lunLeapMonth = 1;
                    lunMonthDay = lunarMonthTable[lunIndex][lunMonth - 1] - 2;
                } else {
                    if (lunarMonthTable[lunIndex] && lunMonth < 13) {
                        lunMonthDay = lunarMonthTable[lunIndex][lunMonth - 1];
                    }
                }
            }
        }
    }
}

// 절입 기준 월지 계산 함수
function getMonthBranchBySeolip(month, day) {
    // 간단한 날짜 비교를 위해 MMDD 형태로 변환
    const currentDate = month * 100 + day;
    
    // 각 절기 시작일과 해당 월지 (MMDD 형태)
    if (currentDate >= 204) { // 2/4 입춘 이후 -> 인월
        if (currentDate >= 306) { // 3/6 경칩 이후 -> 묘월
            if (currentDate >= 405) { // 4/5 청명 이후 -> 진월
                if (currentDate >= 506) { // 5/6 입하 이후 -> 사월
                    if (currentDate >= 606) { // 6/6 망종 이후 -> 오월
                        if (currentDate >= 707) { // 7/7 소서 이후 -> 미월
                            if (currentDate >= 808) { // 8/8 입추 이후 -> 신월
                                if (currentDate >= 908) { // 9/8 백로 이후 -> 유월
                                    if (currentDate >= 1008) { // 10/8 한로 이후 -> 술월
                                        if (currentDate >= 1107) { // 11/7 입동 이후 -> 해월
                                            if (currentDate >= 1207) { // 12/7 대설 이후 -> 자월
                                                return 0; // 자
                                            } else {
                                                return 11; // 해
                                            }
                                        } else {
                                            return 10; // 술
                                        }
                                    } else {
                                        return 9; // 유
                                    }
                                } else {
                                    return 8; // 신
                                }
                            } else {
                                return 7; // 미
                            }
                        } else {
                            return 6; // 오
                        }
                    } else {
                        return 5; // 사
                    }
                } else {
                    return 4; // 진
                }
            } else {
                return 3; // 묘
            }
        } else {
            return 2; // 인
        }
    } else {
        // 2/4 입춘 전
        if (currentDate >= 106) { // 1/6 소한 이후 -> 축월
            return 1; // 축
        } else {
            return 0; // 자 (1/6 소한 전은 전년 12월의 자월 연장)
        }
    }
}

// 년간과 월지 조합으로 월간 계산
function getMonthStem(yearStem, monthBranchIndex) {
    // 전통 월간표: 갑기년, 을경년, 병신년, 정임년, 무계년
    // 인월(정월)부터 시작하는 순서
    const monthStemTable = {
        '갑': ['병', '정', '무', '기', '경', '신', '임', '계', '갑', '을', '병', '정'], // 갑년
        '을': ['무', '기', '경', '신', '임', '계', '갑', '을', '병', '정', '무', '기'], // 을년  
        '병': ['경', '신', '임', '계', '갑', '을', '병', '정', '무', '기', '경', '신'], // 병년
        '정': ['임', '계', '갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'], // 정년
        '무': ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계', '갑', '을'], // 무년
        '기': ['병', '정', '무', '기', '경', '신', '임', '계', '갑', '을', '병', '정'], // 기년
        '경': ['무', '기', '경', '신', '임', '계', '갑', '을', '병', '정', '무', '기'], // 경년
        '신': ['경', '신','임', '계', '갑', '을', '병', '정', '무', '기', '경', '신'], // 신년
        '임': ['임', '계', '갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'], // 임년
        '계': ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계', '갑', '을']  // 계년
    };
    
    // 월지 인덱스를 월간표 인덱스로 변환
    // 인월(2)이 0번 인덱스, 묘월(3)이 1번 인덱스... 이런 식으로
    let stemIndex;
    if (monthBranchIndex >= 2) {
        stemIndex = monthBranchIndex - 2; // 인=0, 묘=1, 진=2, ..., 해=9
    } else {
        stemIndex = monthBranchIndex + 10; // 자=10, 축=11
    }
    
    return monthStemTable[yearStem][stemIndex];
}

// 사주팔자 계산 함수
export function calculateSaju(birthyear, birthmonth, birthday, birthTime) {
    tree = 0;
    fire = 0;
    ground = 0;
    gold = 0;
    water = 0;

    const year = birthyear;
    const month = birthmonth;
    const day = birthday;

    const lunar = lunarCalc(year, month, day);

    // 기준일
    const baseDate = new Date(1863, 11, 31);  
    // 목표 날짜
    const targetDate = new Date(year, month - 1, day); 
    // 두 날짜 사이의 시간 차이 (밀리초 단위)
    const timeDifference = targetDate - baseDate;
    // 밀리초를 일(day) 단위로 변환
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const totalDays = Math.floor(timeDifference / millisecondsPerDay);
    // 60간지 주기에서 몇 번째 날인지 계산 (총 일수를 60으로 나눈 나머지)
    const dayInCycle = (totalDays + 59) % 60; // 60간지는 0부터가 아닌 1부터 시작하므로 +59

    // 년주는 절입(입춘) 기준으로 계산 (2월 4일경)
    let yearForSaju = year;
    if (month === 1 || (month === 2 && day < 4)) {
        yearForSaju = year - 1;
    }
    
    const yearStem = heavenlyStems[(yearForSaju - 4) % 10];
    const yearBranch = earthlyBranches[(yearForSaju - 4) % 12];
    const monthBranchIndex = getMonthBranchBySeolip(month, day);
    const monthStem = getMonthStem(yearStem, monthBranchIndex);
    const monthBranch = earthlyBranches[monthBranchIndex];
    const dayStem = heavenlyStems[(dayInCycle + 2) % 10];
    const dayBranch = earthlyBranches[(dayInCycle + 2) % 12];
    let hourStem;
    let hourBranch;

    if (birthTime && birthTime !== '12:00') {
        // 시간:분 형태로 받음 (예: "09:10")
        const [hourStr, minuteStr] = birthTime.split(':');
        const hour = parseInt(hourStr);
        const minute = parseInt(minuteStr);
        
        // 정확한 시간대 계산 (분까지 고려)
        let idx;
        
        // 각 시간대는 30분부터 다음 시간대 29분까지
        if ((hour === 23 && minute >= 30) || hour === 0 || (hour === 1 && minute <= 29)) {
            idx = 0; // 자 (23:30-01:29)
        } else if ((hour === 1 && minute >= 30) || hour === 2 || (hour === 3 && minute <= 29)) {
            idx = 1; // 축 (01:30-03:29)
        } else if ((hour === 3 && minute >= 30) || hour === 4 || (hour === 5 && minute <= 29)) {
            idx = 2; // 인 (03:30-05:29)
        } else if ((hour === 5 && minute >= 30) || hour === 6 || (hour === 7 && minute <= 29)) {
            idx = 3; // 묘 (05:30-07:29)
        } else if ((hour === 7 && minute >= 30) || hour === 8 || (hour === 9 && minute <= 29)) {
            idx = 4; // 진 (07:30-09:29)
        } else if ((hour === 9 && minute >= 30) || hour === 10 || (hour === 11 && minute <= 29)) {
            idx = 5; // 사 (09:30-11:29)
        } else if ((hour === 11 && minute >= 30) || hour === 12 || (hour === 13 && minute <= 29)) {
            idx = 6; // 오 (11:30-13:29)
        } else if ((hour === 13 && minute >= 30) || hour === 14 || (hour === 15 && minute <= 29)) {
            idx = 7; // 미 (13:30-15:29)
        } else if ((hour === 15 && minute >= 30) || hour === 16 || (hour === 17 && minute <= 29)) {
            idx = 8; // 신 (15:30-17:29)
        } else if ((hour === 17 && minute >= 30) || hour === 18 || (hour === 19 && minute <= 29)) {
            idx = 9; // 유 (17:30-19:29)
        } else if ((hour === 19 && minute >= 30) || hour === 20 || (hour === 21 && minute <= 29)) {
            idx = 10; // 술 (19:30-21:29)
        } else if ((hour === 21 && minute >= 30) || hour === 22 || (hour === 23 && minute <= 29)) {
            idx = 11; // 해 (21:30-23:29)
        } else {
            idx = 6; // 기본값 오시
        }
        
        if (dayStem == "갑" || dayStem == "기") {
            const timeheavenlyStems = ["갑","을", "병", "정", "무", "기", "경", "신", "임", "계","갑","을"];
            hourStem = timeheavenlyStems[idx];
        } else if (dayStem == "을" || dayStem == "경") {
            const timeheavenlyStems = ["병", "정", "무", "기", "경", "신", "임", "계","갑","을", "병", "정"];
            hourStem = timeheavenlyStems[idx];
        } else if (dayStem == "병" || dayStem == "신") {
            const timeheavenlyStems = ["무", "기", "경", "신", "임", "계","갑","을", "병", "정", "무", "기"];
            hourStem = timeheavenlyStems[idx];
        } else if (dayStem == "정" || dayStem == "임") {
            const timeheavenlyStems = ["경", "신", "임", "계","갑","을", "병", "정", "무", "기", "경", "신"];
            hourStem = timeheavenlyStems[idx];
        } else if (dayStem == "무" || dayStem == "계") {
            const timeheavenlyStems = ["임", "계","갑","을", "병", "정", "무", "기", "경", "신","임", "계"];
            hourStem = timeheavenlyStems[idx];
        }

        hourBranch = earthlyBranches[idx];
    } else {
        // 기본값으로 정오(12시) 사용
        const idx = 6; // 오시(11-13시)
        
        if (dayStem == "갑" || dayStem == "기") {
            hourStem = "경";
        } else if (dayStem == "을" || dayStem == "경") {
            hourStem = "임";
        } else if (dayStem == "병" || dayStem == "신") {
            hourStem = "갑";
        } else if (dayStem == "정" || dayStem == "임") {
            hourStem = "병";
        } else if (dayStem == "무" || dayStem == "계") {
            hourStem = "무";
        }

        hourBranch = "오";
    }

    // 천간 오행 계산
    [yearStem, monthStem, dayStem, hourStem].forEach(stem => {
        if (stem == "갑" || stem == "을") {
            tree += 1;
        } else if (stem == "병" || stem == "정") {
            fire += 1;
        } else if (stem == "무" || stem == "기") {
            ground += 1;
        } else if (stem == "경" || stem == "신") {
            gold += 1;
        } else if (stem == "임" || stem == "계") {
            water += 1;
        }
    });

    // 지지 오행 계산
    [yearBranch, monthBranch, dayBranch, hourBranch].forEach(branch => {
        if (branch == "자" || branch == "해") {
            water += 1;
        } else if (branch == "축" || branch == "진" || branch == "미" || branch == "술") {
            ground += 1;
        } else if (branch == "인" || branch == "묘") {
            tree += 1;
        } else if (branch == "사" || branch == "오") {
            fire += 1;
        } else if (branch == "신" || branch == "유") {
            gold += 1;
        }
    });

    const elements = { tree, fire, ground, gold, water };
    const minValue = Math.min(...Object.values(elements));
    
    // 부족한 오행 결정 (여러개인 경우 랜덤 선택)
    const elementNames = {
        tree: '목',
        fire: '화', 
        ground: '토',
        gold: '금',
        water: '수'
    };
    
    // 최솟값을 가진 모든 오행 찾기
    const minElements = Object.keys(elements).filter(key => elements[key] === minValue);
    
    // 랜덤으로 하나 선택
    const randomIndex = Math.floor(Math.random() * minElements.length);
    const selectedElement = minElements[randomIndex];
    const lackingElement = elementNames[selectedElement];

    return {
        saju: {
            year: `${yearStem}${yearBranch}`,
            month: `${monthStem}${monthBranch}`,
            day: `${dayStem}${dayBranch}`,
            hour: `${hourStem}${hourBranch}`
        },
        elements,
        lackingElement
    };
}