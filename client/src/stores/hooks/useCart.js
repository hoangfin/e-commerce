import { create } from "zustand";

export const useCart = create(set => ({
	cart: JSON.parse(localStorage.getItem("cart")) || [],

	addProduct: product => {
		set(state => {
			const i = state.cart.findIndex(item => item.id === product.id);
			if (i === -1) {
				return { ...state, cart: [...state.cart, product]};
			}
			product.quantity += state.cart[i].quantity;
			state.cart[i] = product;
			return { ...state, cart: [...state.cart]};
		}, true);
	},

	removeProduct: productId => {
		set(state => {
			const i = state.cart.findIndex(item => item.id === productId);
			if (i === -1) {
				return state;
			}
			return { ...state, cart: state.cart.filter(item => item.id !== productId)};
		}, true);
	},

	setCart: newCart => set(state => ({ ...state, cart: newCart }))
}));
