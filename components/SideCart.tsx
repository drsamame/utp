'use client';
import React, { useState } from 'react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { useCounterStore } from '@/store/cart';
import { Icons } from '@/components/Icons';

function SideCart() {
	const { open, products } = useCounterStore((state) => ({
		open: state.isOpenCart,
		products: state.products,
	}));
	const { setOpenCart, removeProduct, cleanAllCart } = useCounterStore();
	const total = products.reduce((acc, product) => acc + product.price, 0);
	return (
		<Sheet open={open} onOpenChange={setOpenCart}>
			<SheetContent className="shad-sheet">
				<SheetHeader>
					<SheetTitle />
					<SheetDescription />
					<div className="flex w-full justify-between items-baseline">
						<h1 className="text-24-bold mb-7 mt-9">Carrito</h1>
						<Icons.trashIcon
							className="h-5 w-5 cursor-pointer"
							onClick={cleanAllCart}
							aria-hidden="true"
						/>
					</div>

					<ul>
						{products.map((product) => {
							return (
								<li className=" flex justify-between mb-3" key={product.id}>
									<p className="text-14-medium line-clamp-1 max-w-[80%]">
										{product.title}
									</p>
									<span
										className="cursor-pointer"
										onClick={() => removeProduct(product.id)}
									>
										<Icons.deleteIcon className="h-5 w-5" aria-hidden="true" />
									</span>
								</li>
							);
						})}
					</ul>
					<div className="flex justify-between mb-3 mt-10">
						<p className="text-16-semibold text-right">Total: </p>
						<span className="text-16-semibold">S/{total}</span>
					</div>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}

export default SideCart;
