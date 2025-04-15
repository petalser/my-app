import { Cross, Heart, LucideBriefcaseBusiness } from "lucide-react"
import styles from "./Calendar.module.css"
import { DailyData, generateData } from "@/lib/dataGenerator"
import { selectSign } from "@/lib/features/horoscopeSigns/horoscopeSignsSlice"
import { selectActiveDay } from "@/lib/features/data/dataSlice"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { selectTimeRange } from "@/lib/features/timeRange/timeRangeSlice"
import { selectData, update } from "@/lib/features/data/dataSlice"
import { setActiveDay } from "@/lib/features/data/dataSlice"
import { useEffect } from "react"

export const Calendar = () => {
    const sign = useAppSelector(selectSign)
    const timeRange = useAppSelector(selectTimeRange)
    const dataState = useAppSelector(selectData)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(update(sign))
    }, [sign])

    const data = dataState.slice(0, parseInt(timeRange))

    return (
        <div className={styles.container}>
            <ul className={`${styles.calendar} glowing`}>
                {data.map((item, index) => {
                    return (
                        <CalendarItem key={index} data={item} index={index} />
                    )
                })}
            </ul>
        </div>
    )
}

// "function" to keep it "hoistable"
//this component could be simplified,
//but at the expence of readability
function CalendarItem({ data, index }: { data: DailyData, index: number }) {
    const activeIndex = useAppSelector(selectActiveDay)

    const dispatch = useAppDispatch()

    const { date, value } = data
    const { health, career, love } = value
    const { day, month } = date

    const active = activeIndex === index

    const handleClick = () => {
        dispatch(setActiveDay(index))
    }

    return (
        <li role="button" className={`${styles.li} hoverable`} onClick={handleClick} >
            <p className={styles.date}>{month}/{day}</p>

            <div className={styles.param} >
                <Cross />
                {health + 1}
            </div>

            <div className={styles.param} >
                <LucideBriefcaseBusiness />
                {career + 1}
            </div>

            <div className={styles.param} >
                <Heart />
                {love + 1}
            </div>

            <div className={active ? styles.enabled : styles.disabled}></div>
        </li>
    )
}