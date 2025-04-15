import { createAppSlice } from "@/lib/createAppSlice";

export interface ThemeSliceState {
    value: "dark" | "light"
}

const initialState: ThemeSliceState = {
    value: "dark"
};

export const themeSlice = createAppSlice({
    name: "theme",
    initialState,
    reducers: (create) => ({
        toggleTheme: create.reducer((state) => {
            state.value = state.value === "dark" ? "light" : "dark"
        }),
    }),
    selectors: {
        selectTheme: (theme) => theme.value,
    },
});

export const { toggleTheme } =
    themeSlice.actions;

export const { selectTheme } = themeSlice.selectors;
