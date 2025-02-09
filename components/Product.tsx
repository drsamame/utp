'use client';
import React from 'react';
import type { Product } from '@/types';
import Image from 'next/image';
import { DetailProductBtn } from '@/components/modals/DetailProduct';
import AddToCartBtn from '@/components/AddToCartBtn';

interface Props {
	product: Product;
	onClickDetail: () => void;
}
function Product({ product, onClickDetail }: Props) {
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
					<AddToCartBtn item={product} />
				</div>
			</div>
		</article>
	);
}

export default Product;
