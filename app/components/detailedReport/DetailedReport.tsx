import { BestFor } from "../bestFor/BestFor"
import { CatFact } from "../catFactButton/CatFact"
import { Details } from "../details/Details"
import styles from "./DetailedReport.module.css"

export const DetailedReport = () => {

    return (
        <div className={`${styles.container} glowing`}>
            <BestFor />
            <Details />
            <CatFact />
        </div>
    )
}

