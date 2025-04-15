import { useAppSelector } from "@/lib/hooks"
import { selectActiveData } from "@/lib/features/data/dataSlice"
import { EpicIcon } from "../epicIcon/EpicIcon"
import styles from "./BestFor.module.css"

export const BestFor = () => {
    const data = useAppSelector(selectActiveData)
    const { day, month } = data.date

    const today = new Date().getDate()
    const tomorrow = new Date(Date.now() + 86400000).getDate()

    let partOfSentence

    switch (data.date.day) {
        case today:
            partOfSentence = "today";
            break;
        case tomorrow:
            partOfSentence = "tomorrow";
            break;
        default:
            partOfSentence = `${month}/${day}`
    }

    return (
        <div className={styles.bestFor}>
            <p className={styles.text}>best for {partOfSentence}:</p>
            <EpicIcon data={data.value} />
        </div>
    )
}