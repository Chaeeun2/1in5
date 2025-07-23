// 천간과 지지 배열
const heavenlyStems = ["갑","을", "병", "정", "무", "기", "경", "신", "임", "계"];
const earthlyBranches = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];

// 음력 월 데이터 테이블 (1900년부터 2040년까지)
var lunarMonthTable = [
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
[1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2]];

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
        if (year == solYear &&
            month == solMonth &&
            day == solDay) {
            return new myDate(lunYear, lunMonth, lunDay, lunLeapMonth);
        }

        /* add a day of solar calendar */
        if (solMonth == 12 && solDay == 31) {
            solYear++;
            solMonth = 1;
            solDay = 1;

            /* set monthDay of Feb */
            if (solYear % 400 == 0)
                solMonthDay[1] = 29;
            else if (solYear % 100 == 0)
                solMonthDay[1] = 28;
            else if (solYear % 4 == 0)
                solMonthDay[1] = 29;
            else
                solMonthDay[1] = 28;

        } else if (solMonthDay[solMonth - 1] == solDay) {
            solMonth++;
            solDay = 1;
        } else
            solDay++;

        /* add a day of lunar calendar */
        if (lunMonth == 12 &&
            ((lunarMonthTable[lunIndex][lunMonth - 1] == 1 && lunDay == 29) ||
            (lunarMonthTable[lunIndex][lunMonth - 1] == 2 && lunDay == 30))) {
            lunYear++;
            lunMonth = 1;
            lunDay = 1;

            if (lunYear > 2043) {
                throw new Error("입력하신 달은 없습니다.");
            }

            lunIndex = lunYear - 1899;

            if (lunarMonthTable[lunIndex][lunMonth - 1] == 1)
                lunMonthDay = 29;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 2)
                lunMonthDay = 30;
        } else if (lunDay == lunMonthDay) {
            if (lunarMonthTable[lunIndex][lunMonth - 1] >= 3
                && lunLeapMonth == 0) {
                lunDay = 1;
                lunLeapMonth = 1;
            } else {
                lunMonth++;
                lunDay = 1;
                lunLeapMonth = 0;
            }

            if (lunarMonthTable[lunIndex][lunMonth - 1] == 1)
                lunMonthDay = 29;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 2)
                lunMonthDay = 30;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 3)
                lunMonthDay = 29;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 4 &&
                    lunLeapMonth == 0)
                lunMonthDay = 29;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 4 &&
                    lunLeapMonth == 1)
                lunMonthDay = 30;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 5 &&
                    lunLeapMonth == 0)
                lunMonthDay = 30;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 5 &&
                    lunLeapMonth == 1)
                    lunMonthDay = 29;
            else if (lunarMonthTable[lunIndex][lunMonth - 1] == 6)
                lunMonthDay = 30;
        } else
            lunDay++;
    }
}

let tree;
    let fire;
    let ground;
    let gold;
    let water;

// 사주팔자 계산 함수
function calculateSaju(birthyear, birthmonth, birthday, birthTime) {
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

    const yearStem = heavenlyStems[(lunar.year - 4) % 10];
    const yearBranch = earthlyBranches[(lunar.year - 4) % 12];
    const monthStem = heavenlyStems[(year * 2 + month + 2) % 10];
    const monthBranch = earthlyBranches[month % 12];
    const dayStem = heavenlyStems[(dayInCycle + 2) % 10];
    const dayBranch = earthlyBranches[(dayInCycle + 2) % 12];
    let hourStem;
    let hourBranch;

    if (birthTime) {
        var x = document.getElementById("birthTime").selectedIndex;
        var y = document.getElementById("birthTime").options;
        var idx = y[x].index - 1;
        
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
        hourStem = '시간';
        hourBranch = '모름';
        // console.log(lunar.year, lunar.month, lunar.day);
    }

    if (yearStem == "갑") {
        tree += 1;
    } else if (yearStem == "을") {
        tree += 1;
    } else if (yearStem == "병") {
        fire += 1;
    } else if (yearStem == "정") {
        fire += 1;
    } else if (yearStem == "무") {
        ground += 1;
    } else if (yearStem == "기") {
        ground += 1;
    } else if (yearStem == "경") {
        gold += 1;
    } else if (yearStem == "신") {
        gold += 1;
    } else if (yearStem == "임") {
        water += 1;
    } else if (yearStem == "계") {
        water += 1;
    } 

    if (monthStem == "갑") {
        tree += 1;
    } else if (monthStem == "을") {
        tree += 1;
    } else if (monthStem == "병") {
        fire += 1;
    } else if (monthStem == "정") {
        fire += 1;
    } else if (monthStem == "무") {
        ground += 1;
    } else if (monthStem == "기") {
        ground += 1;
    } else if (monthStem == "경") {
        gold += 1;
    } else if (monthStem == "신") {
        gold += 1;
    } else if (monthStem == "임") {
        water += 1;
    } else if (monthStem == "계") {
        water += 1;
    } 

    if (dayStem == "갑") {
        tree += 1;
    } else if (dayStem == "을") {
        tree += 1;
    } else if (dayStem == "병") {
        fire += 1;
    } else if (dayStem == "정") {
        fire += 1;
    } else if (dayStem == "무") {
        ground += 1;
    } else if (dayStem == "기") {
        ground += 1;
    } else if (dayStem == "경") {
        gold += 1;
    } else if (dayStem == "신") {
        gold += 1;
    } else if (dayStem == "임") {
        water += 1;
    } else if (dayStem == "계") {
        water += 1;
    } 

        if (hourStem == "갑") {
        tree += 1;
    } else if (hourStem == "을") {
        tree += 1;
    } else if (hourStem == "병") {
        fire += 1;
    } else if (hourStem == "정") {
        fire += 1;
    } else if (hourStem == "무") {
        ground += 1;
    } else if (hourStem == "기") {
        ground += 1;
    } else if (hourStem == "경") {
        gold += 1;
    } else if (hourStem == "신") {
        gold += 1;
    } else if (hourStem == "임") {
        water += 1;
    } else if (hourStem == "계") {
        water += 1;
    } 

    if (yearBranch == "자") {
        water += 1;
    } else if (yearBranch == "축") {
        ground += 1;
    } else if (yearBranch == "인") {
        tree += 1;
    } else if (yearBranch == "묘") {
        tree += 1;
    } else if (yearBranch == "진") {
        ground += 1;
    } else if (yearBranch == "사") {
        fire += 1;
    } else if (yearBranch == "오") {
        fire += 1;
    } else if (yearBranch == "미") {
        ground += 1;
    } else if (yearBranch == "신") {
        gold += 1;
    } else if (yearBranch == "유") {
        gold += 1;
    } else if (yearBranch == "술") {
        ground += 1;
    } else if (yearBranch == "해") {
        water += 1;
    } 

    if (monthBranch == "자") {
        water += 1;
    } else if (monthBranch == "축") {
        ground += 1;
    } else if (monthBranch == "인") {
        tree += 1;
    } else if (monthBranch == "묘") {
        tree += 1;
    } else if (monthBranch == "진") {
        ground += 1;
    } else if (monthBranch == "사") {
        fire += 1;
    } else if (monthBranch == "오") {
        fire += 1;
    } else if (monthBranch == "미") {
        ground += 1;
    } else if (monthBranch == "신") {
        gold += 1;
    } else if (monthBranch == "유") {
        gold += 1;
    } else if (monthBranch == "술") {
        ground += 1;
    } else if (monthBranch == "해") {
        water += 1;
    } 

        if (dayBranch == "자") {
        water += 1;
    } else if (dayBranch == "축") {
        ground += 1;
    } else if (dayBranch == "인") {
        tree += 1;
    } else if (dayBranch == "묘") {
        tree += 1;
    } else if (dayBranch == "진") {
        ground += 1;
    } else if (dayBranch == "사") {
        fire += 1;
    } else if (dayBranch == "오") {
        fire += 1;
    } else if (dayBranch == "미") {
        ground += 1;
    } else if (dayBranch == "신") {
        gold += 1;
    } else if (dayBranch == "유") {
        gold += 1;
    } else if (dayBranch == "술") {
        ground += 1;
    } else if (dayBranch == "해") {
        water += 1;
    } 

           if (hourBranch == "자") {
        water += 1;
    } else if (hourBranch == "축") {
        ground += 1;
    } else if (hourBranch == "인") {
        tree += 1;
    } else if (hourBranch == "묘") {
        tree += 1;
    } else if (hourBranch == "진") {
        ground += 1;
    } else if (hourBranch == "사") {
        fire += 1;
    } else if (hourBranch == "오") {
        fire += 1;
    } else if (hourBranch == "미") {
        ground += 1;
    } else if (hourBranch == "신") {
        gold += 1;
    } else if (hourBranch == "유") {
        gold += 1;
    } else if (hourBranch == "술") {
        ground += 1;
    } else if (hourBranch == "해") {
        water += 1;
    } 

    return {
        year: `${yearStem}${yearBranch}`,
        month: `${monthStem}${monthBranch}`,
        day: `${dayStem}${dayBranch}`,
        hour: `${hourStem}${hourBranch}`
    };
}

// 사용 예시
function calculateAndDisplaySaju(birthyear, birthmonth, birthday, birthTime) {
    try {
        const saju = calculateSaju(birthyear, birthmonth, birthday, birthTime);

        let values = [tree, fire, ground, gold, water];
        let minValue = Math.min(...values);

        // console.log(minValue);

    } catch (error) {
        return `<p>오류: ${error.message}</p>`;
    }
}

// HTML 폼에서 사용할 수 있는 함수
function onSubmit(event) {
    event.preventDefault();
    const birthyear = Number(document.getElementById('birthyear').value);
    const birthmonth = Number(document.getElementById('birthmonth').value);
    const birthday = Number(document.getElementById('birthday').value);
    const birthTime = document.getElementById('birthTime').value;
    const resultHTML = calculateAndDisplaySaju(birthyear, birthmonth, birthday, birthTime);
    document.getElementById('result').innerHTML = resultHTML;
}

// HTML에 이벤트 리스너 추가
document.getElementById('birthForm').addEventListener('submit', onSubmit);