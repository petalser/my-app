import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { TimeRangeSliceState, toggleRange } from "@/lib/features/timeRange/timeRangeSlice";
import { ThemeSliceState, toggleTheme } from "@/lib/features/theme/themeSlice";
import { ActionCreatorWithoutPayload, Selector } from "@reduxjs/toolkit";
import styles from "./Switch.module.css";

type SwitchProps = {
    name: "range" | "theme";
    children: ReactNode;
}

type SubSwitchProps = {
    children: ReactNode;
    name: "range" | "theme";
    selector: Selector;
    action: ActionCreatorWithoutPayload;
    value: Pick<TimeRangeSliceState, "value"> | Pick<ThemeSliceState, "value">;
}

export const Switch = ({ name, children }: SwitchProps) => {
    return <div className={`glowing ${styles.tool}`}>{children}</div>
}

Switch.Left = ({ children, name, value, selector, action }: SubSwitchProps) => {
    const dispatch = useAppDispatch();
    const state = useAppSelector(selector)
    const selected = value.value === state

    const id = `left-${name}`;

    const handleChange = () => {
        if (!selected) dispatch(action());
    };

    return (
        <label className={`${styles.toolLabel} hoverable`} htmlFor={id}>
            {children}
            <input
                className={styles.toolInput}
                type="radio"
                id={id}
                name={name}
                checked={selected}
                onChange={handleChange}
            />
        </label>
    );
};

//next components exist on purpose
//author knows that we could easily simplify
//logic with proper (yet simple) CSS
Switch.Right = ({ children, name, value, selector, action }: SubSwitchProps) => {
    const dispatch = useAppDispatch();
    const state = useAppSelector(selector)
    const selected = value.value === state

    const id = `right-${name}`;

    const handleChange = () => {
        if (!selected) dispatch(action());
    };

    return (
        <label className={styles.toolLabel} htmlFor={id}>
            <input
                className={styles.toolInput}
                type="radio"
                id={id}
                name={name}
                checked={selected}
                onChange={handleChange}
            />
            {children}
        </label>
    );
}

