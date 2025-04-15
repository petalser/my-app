import { DailyData } from "@/lib/dataGenerator";
import { CrossIcon, Heart, LucideBriefcaseBusiness } from "lucide-react"
import styles from "./EpicIcon.module.css"

export const EpicIcon = ({ data }: { data: DailyData["value"] }) => {

    const todaysBest = Object.entries(data).reduce((a, b) => (a[1] > b[1] ? a : b))[0]

    let Icon
    switch (todaysBest) {
        case "love":
            Icon = Heart;
            break;
        case "career":
            Icon = LucideBriefcaseBusiness;
            break;
        case "health":
            Icon = CrossIcon;
            break;
        default:
            Icon = () => <p className={styles.noIcon}>no icon</p>
    }
    return (
        <div className={styles.container}>
            <p className={styles.text}>{todaysBest}</p>
            <Icon className={styles.icon} />
        </div>
    )
}