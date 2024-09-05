import { Product } from '@/types';
import { create } from 'zustand';

interface CounterState {
	isOpenCart: boolean;
	count: number;
	addProduct: (product: Product) => void;
	removeProduct: (id: number) => void;
	setOpenCart: (value: boolean) => void;
	cleanAllCart: () => void;
	products: Product[];
}

export const useCounterStore = create<CounterState>((set, get) => ({
	count: 0,
	isOpenCart: false,
	products: [],
	cleanAllCart: () => {
		set(() => ({ products: [], count: 0 }));
	},
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
	removeProduct: (id: number) => {
		set((state) => {
			const productsFiltered = state.products.filter((a) => a.id !== id);
			return {
				count: state.products.length - 1,
				products: productsFiltered,
			};
		});
	},
	setOpenCart: (value: boolean) => {
		set(() => {
			return { isOpenCart: value };
		});
	},
}));
