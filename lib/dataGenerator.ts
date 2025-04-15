import { HoroscopeSigns } from "./features/horoscopeSigns/horoscopeSignsSlice";

export interface DailyData {
    date: {
        month: number;
        day: number;
    },
    value: {
        health: number;
        career: number;
        love: number;
    }
}

export type FullDataType = DailyData[]

//makes sum of all digits
//e.g. 3 from 444 (4+4+4=12, 1+2=3)
const numberToOneDigit = (n1: number) => {
    const n = Math.round(Math.abs(n1 * 100000))
    const result = n === 0 ? 0 : n % 9 === 0 ? 9 : n % 9;
    return result
}

const getUpcomingDatesArray = (): [number, number][] => {
    const result: [number, number][] = [];
    const date = new Date();

    for (let i = 0; i < 7; i++) {
        const temp = new Date(date);
        temp.setDate(date.getDate() + i);
        result.push([temp.getMonth() + 1, temp.getDate()]);
    }

    return result;
}

//takes 3 digits: day, month and number of horoscope sign
//returns 3 random-ish numbers, based on args
const helper = (month: number, date: number, signIndex: number) => {
    const saltyNumber = date * (signIndex + month)

    const health = numberToOneDigit(Math.sin(saltyNumber))
    const love = numberToOneDigit(Math.cos(saltyNumber))
    const career = numberToOneDigit(Math.tan(saltyNumber))

    return [health, love, career]
}

const upcomingDates = getUpcomingDatesArray()

export const generateData = (currentHoroscopeSign: HoroscopeSigns) => {
    let data: FullDataType = []
    const signIndex = Object.values(HoroscopeSigns).indexOf(currentHoroscopeSign)

    upcomingDates.map((item) => {
        const [health, love, career] = helper(item[0], item[1], signIndex,)

        const dataChunk: DailyData = {
            date: { month: item[0], day: item[1], },
            value: { health, love, career }
        }

        data.push(dataChunk)
    })

    return data
}
