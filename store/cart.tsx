import { Product } from '@/types';
import { create } from 'zustand';

interface CounterState {
	count: number;
	title: string;
	addProduct: (product: Product) => void;
	products: Product[];
}

export const useCounterStore = create<CounterState>((set, get) => ({
	count: 0,
	title: 'Counter',
	products: [],
	addProduct: (product: Product) => {
		set((state) => {
			const existProduct = state.products.find((el) => el.id === product.id);
			if (!existProduct) {
				return {
					count: state.products.length + 1,
					products: [...state.products, product],
				};
			} else {
				return state;
			}
		});
	},
	removeProduct: (id: number) =>
		set((state) => ({
			// products: state.products.filter(product => product.id !== id),
		})),
}));
