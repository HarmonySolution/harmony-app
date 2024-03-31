import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const sliceName = 'welcome';

const welcomeSlice = createSlice({
    name: sliceName,
    initialState: {
        isApplicationInitial: true,
    },
    reducers: {
        setApplicationInitial: (state, { payload }) => {
            return { ...state, isApplicationInitial: payload };
        },
    },
});

export const { setApplicationInitial } = welcomeSlice.actions;

export default welcomeSlice.reducer;

export const selectIsApplicationInitial = (state: RootState) =>
    state[sliceName].isApplicationInitial;
