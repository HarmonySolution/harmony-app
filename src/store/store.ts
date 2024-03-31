import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import welcomeReducer from './features/welcomeSlice';
import i18nReducer from './features/i18nSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector as useSelectorBase,
} from 'react-redux';

const persistConfigWelcome = {
    key: 'welcome',
    storage: AsyncStorage,
};

const persistConfigI18N = {
    key: 'i18n',
    storage: AsyncStorage,
};

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        welcome: persistReducer(
            persistConfigWelcome,
            welcomeReducer
        ) as unknown as typeof welcomeReducer,
        i18n: persistReducer(
            persistConfigI18N,
            i18nReducer
        ) as unknown as typeof i18nReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorBase;
export const useAppDispatch = () => useDispatch<AppDispatch>();
