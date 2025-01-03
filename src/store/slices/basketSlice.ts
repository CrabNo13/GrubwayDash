import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasketItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

interface BasketState {
    items: BasketItem[];
};

const initialState: BasketState = {
    items: [],
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<BasketItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload)
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearBasket: state => {
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;