"use client"
import { Toolbox } from "./components/toolbox/Toolbox";
import { useAppSelector } from "@/lib/hooks";
import { selectTheme } from "@/lib/features/theme/themeSlice";
import { CopyLink } from "./components/copyLink/CopyLink";
import { MainLogo } from "./components/mainLogo/MainLogo";
import { Calendar } from "./components/calendar/Calendar";
import { DetailedReport } from "./components/detailedReport/DetailedReport";
import styles from "./page.module.css"

export default function IndexPage() {
  const theme = useAppSelector(selectTheme)
  return (
    <body data-theme={theme} className={styles.body}>
      <main className={`${styles.main} volumetric`}>
        <CopyLink />
        <MainLogo />
        <Toolbox />
        <Calendar />
        <DetailedReport />
      </main>
    </body>
  );
}
