'use server';

import type { ProductList } from '@/types';

export const getProducts = async () => {
	try {
		const apiUrl = `https://fakestoreapi.com/products`;
		const res = await fetch(apiUrl);
		if (!res.ok) {
			throw new Error('error 500');
		}
		const data: ProductList = await res.json();
		return {
			success: true,
			data,
		};
	} catch (error: any) {
		return { success: false, error };
	}
};
