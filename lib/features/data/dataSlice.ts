import { createAppSlice } from "@/lib/createAppSlice";
import { FullDataType, generateData } from "@/lib/dataGenerator";
import { PayloadAction } from "@reduxjs/toolkit";
import { HoroscopeSigns } from "../horoscopeSigns/horoscopeSignsSlice";

export interface HoroscopeData {
    data: FullDataType;
    active: number;
}

const initialState: HoroscopeData = {
    data: [{
        date: { month: 0, day: 0, },
        value: { health: 0, love: 0, career: 0 }
    }],
    active: 0
}

export const horoscopeDataSlice = createAppSlice({
    name: "horoscopeData",
    initialState,
    reducers: (create) => ({
        setActiveDay: create.reducer((state, action: PayloadAction<number>) => {
            return { data: state.data, active: action.payload }
        }),

        update: create.reducer((state, action: PayloadAction<HoroscopeSigns>) => {
            const chosenSign = action.payload

            const itemFromStorage = localStorage.getItem(chosenSign) || ""
            const item = itemFromStorage ? JSON.parse(itemFromStorage) : null
            const today = new Date()
            const miniDate = `${today.getMonth()} ${today.getDate()}` //"6 4" for july 4

            if (item?.hasOwnProperty("date") && (item.date === miniDate)) return { data: item.data, active: 0 }
            //clear, if outdated
            if (item?.hasOwnProperty("date") && (item.date !== miniDate)) localStorage.clear()

            const data = generateData(chosenSign)
            localStorage.setItem(chosenSign, JSON.stringify({ date: miniDate, data }))

            return { data, active: 0 }
        })
    }),
    selectors: {
        selectActiveDay: (state) => state.active,
        selectData: (state) => state.data,
        selectActiveData: (state) => state.data[state.active]
    }
});

export const { setActiveDay, update } = horoscopeDataSlice.actions;
export const { selectActiveDay, selectActiveData, selectData } = horoscopeDataSlice.selectors;
