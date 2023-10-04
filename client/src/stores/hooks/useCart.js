import { create } from "zustand";

export const useCart = create((set, get) => ({
    cart: [],
    addProduct: (product, quantity) => {
        set(state => {
            const newCart = [...state.cart];
            const idx = newCart.findIndex(cartProduct => cartProduct.id === product.id);
            if (idx === -1) {
                newCart.push({ ...product, quantity });
            } else {
                newCart[idx] = { ...newCart[idx], quantity: newCart[idx].quantity + quantity };
            }
            return { cart: newCart };
        });
    },
    updateQuantity: (productId, quantity) => {
        set(
            state => {
                const index = state.cart.findIndex(product => product.id === productId);

                if (index === -1) {
                    return state;
                }

                const newCart = [...state.cart];
                newCart[index] = { ...newCart[index], quantity }

                return { ...state, cart: newCart };
            },
            true
        );
    },
    removeProduct: productId => {
        set(state => ({
            ...state,
            cart: state.cart.filter(cartProduct => cartProduct.id !== productId)
        }), true);
    }
}));