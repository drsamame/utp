/* eslint-disable no-unused-vars */

export interface Rating {
	rate: number;
	count: number;
}

export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: Rating;
	rate: {
		counter: number;
	}
}

export type ProductList = Product[];
