import { createAppSlice } from "@/lib/createAppSlice";

export interface TimeRangeSliceState {
    value: "3" | "7";
}

const initialState: TimeRangeSliceState = { value: "3" }

export const timeRangeSlice = createAppSlice({
    name: "timeRange",
    initialState,
    reducers: (create) => ({
        toggleRange: create.reducer((state) => {
            state.value = state.value === "3" ? "7" : "3"
        })
    }),
    selectors: {
        selectTimeRange: (period) => period.value,
    },
});

export const { toggleRange } =
    timeRangeSlice.actions;

export const { selectTimeRange } = timeRangeSlice.selectors;
