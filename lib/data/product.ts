import type { ProductList } from '@/types';

const backendApi = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const getProducts = async () => {
	try {
		const apiUrl = `${backendApi}/products`;
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

export const getProductById = async (id: string) => {
	try {
		const apiUrl = `${backendApi}/products/${id}`;
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
