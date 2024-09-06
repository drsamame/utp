import { useCounterStore } from '@/store/cart';
import React from 'react';
import type { Product } from '@/types';
import { Button } from '@/components/ui/button';

function AddToCartBtn({ item }: { item: Product }) {
	const { products } = useCounterStore((state) => ({
		products: state.products,
	}));
	const { addProduct, removeProduct } = useCounterStore();
	const handleClickAdd = () => {
		addProduct(item);
	};

	const handleClickRemove = () => {
		removeProduct(item.id);
	};

	return (
		<div>
			{products.some((p) => p.id === item?.id) ? (
				<Button
					variant="outline"
					className="border-red-400 "
					onClick={handleClickRemove}
				>
					<span className="text-12-regular text-red-400">Eliminar</span>
				</Button>
			) : (
				<Button variant="outline" onClick={handleClickAdd}>
					<span className="text-12-regular">Agregar</span>
				</Button>
			)}
		</div>
	);
}

export default AddToCartBtn;
