import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StoreState {
    selectedStore: {
        name: string;
        description: string;
        image: string;
        rating: number;
        distance: number;
        type: string[];
        tags: string[];
        sections: {
            name: string;
            items: number[];
        }[];
    } | null;
};

const initialState: StoreState = {
    selectedStore: null,
};

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setSelectedStore: (state, action: PayloadAction<StoreState['selectedStore']>) => {
            state.selectedStore = action.payload;
        },
        clearSelectedStore: (state) => {
            state.selectedStore = null;
        },
    },
});

export const { setSelectedStore, clearSelectedStore } = storeSlice.actions;
export default storeSlice.reducer;