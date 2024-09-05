'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@/lib/data/product';
import { ModalDetail } from '@/components/modals/ModalDetail';
import ProductItem from '@/components/Product';
import { Product, ProductList } from '@/types';
function DataProducts({ products }: { products: ProductList }) {
	const [open, setOpen] = useState<boolean>(false);
	const [openSideCart, setOpenSideCart] = useState<boolean>(false);
	const [productSelected, setProductSelected] = useState<Product | null>(null);

	// Fetch from the client
	const { data, isLoading, refetch, isRefetching } = useQuery({
		refetchInterval: 120000,
		queryKey: ['productSelected.id'],
		queryFn: async () => await getProductById(productSelected!.id),
	});

	const handleClickDetail = async (product: Product) => {
		await setProductSelected({ ...product });
		refetch();
		setOpen((prev) => !prev);
	};
	return (
		<>
			<div className="grid md:grid-cols-3 xl:grid-cols-5 grid-cols-1 gap-10  w-full content-start">
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

			<ModalDetail
				data={data as Product}
				isOpen={setOpen}
				open={open}
				isLoading={isLoading}
				isRefechting={isRefetching}
			/>
		</>
	);
}

export default DataProducts;
