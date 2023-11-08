import { signal, computed } from "@preact/signals";

const cart = signal(JSON.parse(localStorage.getItem("cart")) || []);

export const quantity = computed(() => cart.value.reduce(
	(acc, item) => (acc + item.quantity), 0
));

export const addProduct = () => {

};

// export const addProduct = (product, quantity) => {
// 	const i = cart.value.findIndex(({ id }) => id === product.id);
// 	if (i === -1) {
// 		cart.value = [...cart.value, product];
// 	} else {
// 		cart.value[i] = { ...cart.value[i], quantity: cart.value[i].quantity + product.quantity }
// 	}
// };

export const updateQuantity = (productId, quantity) => {
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
};

export const removeProduct = productId => {
	set(state => ({
		...state,
		cart: state.cart.filter(cartProduct => cartProduct.id !== productId)
	}), true);
};