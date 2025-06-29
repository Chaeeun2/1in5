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
    const monthStem = heavenlyStems[(year * 2 + month + 2) % 10];
    const monthBranch = earthlyBranches[month % 12];
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

// 부족한 오행에 따른 결과 데이터
export const elementResults = {
    '목': {
        title: '부족한 오행 - 목(木)',
        description: '목의 기운이 부족합니다. 성장과 발전의 에너지가 필요합니다.',
        recommendations: [
            '동쪽 방향에서 활동하세요',
            '초록색 계열의 옷을 입으세요',
            '나무나 식물과 가까이 하세요',
            '새벽 시간대가 좋습니다'
        ]
    },
    '화': {
        title: '부족한 오행 - 화(火)',
        description: '화의 기운이 부족합니다. 열정과 활동력이 필요합니다.',
        recommendations: [
            '남쪽 방향에서 활동하세요',
            '빨간색 계열의 옷을 입으세요',
            '햇볕을 많이 쬐세요',
            '오전 시간대가 좋습니다'
        ]
    },
    '토': {
        title: '부족한 오행 - 토(土)',
        description: '토의 기운이 부족합니다. 안정과 신뢰의 에너지가 필요합니다.',
        recommendations: [
            '중앙이나 서남쪽에서 활동하세요',
            '황색, 갈색 계열의 옷을 입으세요',
            '산이나 흙과 가까이 하세요',
            '오후 시간대가 좋습니다'
        ]
    },
    '금': {
        title: '부족한 오행 - 금(金)',
        description: '금의 기운이 부족합니다. 의지와 결단력이 필요합니다.',
        recommendations: [
            '서쪽 방향에서 활동하세요',
            '흰색, 회색 계열의 옷을 입으세요',
            '금속 악세서리를 착용하세요',
            '저녁 시간대가 좋습니다'
        ]
    },
    '수': {
        title: '부족한 오행 - 수(水)',
        description: '수의 기운이 부족합니다. 지혜와 유연성이 필요합니다.',
        recommendations: [
            '북쪽 방향에서 활동하세요',
            '검은색, 파란색 계열의 옷을 입으세요',
            '물가나 강 근처에서 활동하세요',
            '밤 시간대가 좋습니다'
        ]
    }
}; 