import { createAppSlice } from "@/lib/createAppSlice";

export enum HoroscopeSigns {
    Aquarius = "Aquarius",
    Cancer = "Cancer",
    Gemini = "Gemini",
    Libra = "Libra",
    Pisces = "Pisces",
    Scorpio = "Scorpio",
    Taurus = "Taurus",
    Aries = "Aries",
    Capricorn = "Capricorn",
    Leo = "Leo",
    Sagitarius = "Sagitarius",
    Virgo = "Virgo",
}

const initialState: HoroscopeSigns = HoroscopeSigns.Aquarius;

export const horoscopeSignsSlice = createAppSlice({
    name: "horoscopeSigns",
    initialState,
    reducers: (create) => ({
        setActive: create.reducer((state: HoroscopeSigns, action) => {
            return action.payload
        }),
    }),
    selectors: {
        selectSign: (sign) => sign
    }
});

export const { setActive } = horoscopeSignsSlice.actions;
export const { selectSign } = horoscopeSignsSlice.selectors;
