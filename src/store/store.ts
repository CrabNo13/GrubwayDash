import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './slices/basketSlice';
import storeReducer from './slices/storeSlice';

const store = configureStore({
    reducer: {
        basket: basketReducer,
        store: storeReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;