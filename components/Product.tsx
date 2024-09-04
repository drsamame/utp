'use client';
import React, { useState } from 'react';
import type { Product } from '@/types';
import Image from 'next/image';
import { Button } from './ui/button';

import { DetailProductModal } from '@/components/modals/DetailProduct';
interface Props {
	product: Product;
}
function Product({ product }: Props) {
	const [open, setOpen] = useState(false);
	return (
		<article className="bg-blue-600">
			<div className="w-full h-80 flex-center bg-white overflow-hidden p-4">
				<Image
					width={400}
					height={400}
					alt="product imagen"
					src={product.image}
				/>
			</div>
			<div className="body px-4 py-6">
				<h2 className="text-16-medium line-clamp-1 ">{product.title}</h2>
				<p className="line-clamp-4 my-2 text-12-regular min-h-16">
					{product.description}
				</p>
				<span className="text-16-semibold mt-5 relative text-right block">
					S/{product.price}
				</span>
				<div className="flex justify-between mt-7 gap-3">
					<DetailProductModal />
					<Button variant="outline">
						<span className="text-12-regular">Agregar</span>
					</Button>
				</div>
			</div>
		</article>
	);
}

export default Product;
