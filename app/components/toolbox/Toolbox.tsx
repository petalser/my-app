import { selectTheme, ThemeSliceState, toggleTheme } from "@/lib/features/theme/themeSlice"
import { Dropdown } from "../dropdown/Dropdown"
import { Switch } from "../switch/Switch"
import styles from "./Toolbox.module.css"
import { TimeRangeSliceState } from "@/lib/features/timeRange/timeRangeSlice"
import { selectTimeRange } from "@/lib/features/timeRange/timeRangeSlice"
import { toggleRange } from "@/lib/features/timeRange/timeRangeSlice"
import { IconMoon } from "../icons/IconMoon"
import { IconSun } from "../icons/IconSun"

export const Toolbox = () => {
    return (
        <div className={styles.toolbox}>
            <Dropdown />

            <Switch name="range">
                <Switch.Left
                    name="range"
                    value={{ value: "3" } as TimeRangeSliceState}
                    selector={selectTimeRange}
                    action={toggleRange}
                >
                    <span>3 days</span>
                </Switch.Left>
                <Switch.Right
                    name="range"
                    value={{ value: "7" } as TimeRangeSliceState}
                    selector={selectTimeRange}
                    action={toggleRange}

                >
                    <span>7 days</span>
                </Switch.Right>
            </Switch>

            <Switch name="theme">
                <Switch.Left
                    name="theme"
                    value={{ value: "dark" } as ThemeSliceState}
                    selector={selectTheme}
                    action={toggleTheme}
                >
                    <IconMoon />
                </Switch.Left>
                <Switch.Right
                    name="theme"
                    value={{ value: "light" } as ThemeSliceState}
                    selector={selectTheme}
                    action={toggleTheme}
                >
                    <IconSun />
                </Switch.Right>
            </Switch>
        </div>
    )
}