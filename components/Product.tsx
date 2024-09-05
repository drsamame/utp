'use client';
import React from 'react';
import type { Product } from '@/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { DetailProductBtn } from '@/components/modals/DetailProduct';
import { useCounterStore } from '@/store/cart';

interface Props {
	product: Product;
	onClickDetail: () => void;
}
function Product({ product, onClickDetail }: Props) {
	const { products } = useCounterStore((state) => ({
		products: state.products,
	}));
	const { addProduct } = useCounterStore();
	const handleClickAdd = () => {
		addProduct(product);
	};
	return (
		<article className="bg-blue-600">
			<div className="w-full h-30 flex-center bg-white overflow-hidden p-2">
				<Image
					width={400}
					height={400}
					alt="product imagen"
					src={product.image}
				/>
			</div>
			<div className="body px-4 py-6">
				<h2 className="text-16-semibold line-clamp-1 ">{product.title}</h2>
				<p className="line-clamp-4 my-2 text-12-regular min-h-16">
					{product.description}
				</p>
				<span className="text-16-semibold mt-5 relative text-right block">
					S/{product.price}
				</span>
				<div className="flex justify-between mt-7 gap-3">
					<DetailProductBtn onClickDetail={onClickDetail} />

					{products.some((p) => p.id === product.id) ? (
						<Button variant="outline" className='border-red-400 ' onClick={handleClickAdd}>
							<span className="text-12-regular text-red-400">Eliminar</span>
						</Button>
					) : (
						<Button variant="outline" onClick={handleClickAdd}>
							<span className="text-12-regular">Agregar</span>
						</Button>
					)}
				</div>
			</div>
		</article>
	);
}

export default Product;
