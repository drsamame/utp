import type { ProductList, Product } from '@/types';
import { allProducts } from '@/lib/data/mockData';
const backendApi = process.env.NEXT_PUBLIC_BACKEND_API_URL;

//Se desplomó la API de FakeStore asi que lo estoy dejando con mock, aqui esta la implementación de la llamada

export const getProducts = async () => {
	try {
		// const apiUrl = `${backendApi}/product`;
		// const res = await fetch(apiUrl);
		// if (!res.ok) {
		// 	throw new Error('error 500');
		// }
		// const data: ProductList = await res.json();
		await new Promise((resolve) => setTimeout(resolve, 2000));
		const data = allProducts;
		return {
			success: true,
			data,
		};
	} catch (error: any) {
		return { success: false, error };
	}
};

export const getProductById = async (id: number) => {
	try {
		// const apiUrl = `${backendApi}/product/${id}`;
		// const res = await fetch(apiUrl);
		// if (!res.ok) {
		// 	throw new Error('error 500');
		// }
		// const data: Product = await res.json();
		await new Promise((resolve) => setTimeout(resolve, 500));
		const selecteProduct = allProducts.find((product) => product.id == id);
		return selecteProduct;
	} catch (error: any) {
		return { success: false, error };
	}
};
