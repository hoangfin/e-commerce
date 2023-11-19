import { signal, computed } from "@preact/signals-react";

/** @type {import("@preact/signals-react").Signal<object[]>} */
const cart = signal(JSON.parse(localStorage.getItem("cart")) || []);

export const quantity = computed(() => cart.value.reduce(
	(acc, item) => (acc + item.quantity),
	0
));

export const addProduct = (product) => {
	const i = cart.value.findIndex(({ id }) => id === product.id);
	if (i === -1) {
		cart.value = [...cart.value, product];
	} else {
		cart.value[i] = { ...cart.value[i], quantity: cart.value[i].quantity + product.quantity };
		cart.value = [...cart.value];
	}
};

export const updateQuantity = (productId, quantity) => {
	
};

export const removeProduct = productId => {
	cart.value
};