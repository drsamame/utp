'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@/lib/data/product';
import { ModalDetail } from '@/components/modals/DetailProduct';
import ProductItem from '@/components/Product';
import { Product, ProductList } from '@/types';
function DataProducts({ products }: { products: ProductList }) {
	const [open, setOpen] = useState();
	const [productSelected, setProductSelected] = useState<Product>(null);

	const handleClickDetail = (product: Product) => {
		setProductSelected({ ...product });
		console.log('handleClickDetail', product);
	};

	return (
		<>
			<div className="grid md:grid-cols-3 xl:grid-cols-5 grid-cols-1 gap-5  w-full content-start">
				{products && (
					<>
						{products.map((product) => (
							<ProductItem
								key={product.id}
								onClickDetail={() => handleClickDetail(product)}
								product={product}
							/>
						))}
					</>
				)}
			</div>

			<ModalDetail />
		</>
	);
}

export default DataProducts;
