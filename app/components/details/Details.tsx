import { Heart, LucideBriefcaseBusiness, Cross, Briefcase } from "lucide-react";
import { useAppSelector } from "@/lib/hooks";
import { selectActiveData } from "@/lib/features/data/dataSlice";
import { ReactNode } from "react";
import styles from "./Details.module.css"

type CellProps = {
    quantity: number;
    children: ReactNode;
}

export const Details = () => {
    const data = useAppSelector(selectActiveData)

    return (
        <div className={styles.container}>
            <Cell quantity={data.value.health} >
                <Cross />
            </Cell>
            <Cell quantity={data.value.career} >
                <LucideBriefcaseBusiness />
            </Cell>
            <Cell quantity={data.value.love} >
                <Heart />
            </Cell>
        </div>
    )
}

// for hoisting
function Cell({ quantity, children }: CellProps) {
    const blank = new Array(10).fill(0)

    return (
        <div className={styles.scale}>
            {children}
            {blank.map((_, i) => {
                return <div key={i} className={`${styles.cell} ${quantity + 1 > i && styles.active}`}></div>
            })}
        </div>

    )
}
