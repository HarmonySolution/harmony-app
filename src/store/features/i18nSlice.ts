import { createSlice } from '@reduxjs/toolkit';
import { getLocales } from 'expo-localization';
import { RootState } from '../store';

const locales = getLocales();

const locale = locales[0].languageCode;

const i18nName = 'i18n';

const i18nSlice = createSlice({
    name: i18nName,
    initialState: {
        locale,
    },
    reducers: {
        setLocale: (state, { payload }) => {
            return { ...state, locale: payload };
        },
    },
});

export const { setLocale } = i18nSlice.actions;

export default i18nSlice.reducer;

export const selectLocale = (state: RootState) => state[i18nName].locale;
