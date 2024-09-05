'use client';

import { Icons } from '@/components/Icons';
import Image from 'next/image';
import PreviewBtn from '@/components/PreviewBtn';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { SkeletonCard } from '@/components/SkeletonProduct';
import { useCounterStore } from '@/store/cart';
export const DetailProductBtn = ({
	onClickDetail,
}: {
	onClickDetail: () => void;
}) => {
	return (
		<>
			<PreviewBtn isLoading={false} asChild={true} className="p-0 ">
				<span
					className="flex items-center gap-2 text-12-regular cursor-pointer"
					onClick={onClickDetail}
				>
					<Icons.badgeHelp className="h-4 w-4" aria-hidden="true" />
					Vista previa
				</span>
			</PreviewBtn>
		</>
	);
};

interface PropsModalDetail {
	data: Product;
	isOpen: (isOpen: boolean) => void;
	open: boolean;
	isLoading: boolean;
	isRefechting: boolean;
}
export const ModalDetail = ({
	data,
	isOpen,
	open,
	isLoading,
	isRefechting,
}: PropsModalDetail) => {
	const { products } = useCounterStore((state) => ({
		products: state.products,
	}));
	const { addProduct } = useCounterStore();
	const handleClickAdd = () => {
		addProduct(data);
	};
	return (
		<Dialog open={open} onOpenChange={isOpen}>
			<DialogTitle>Detail</DialogTitle>
			<DialogContent className="shad-dialog sm:max-w-md">
				{isLoading || isRefechting ? (
					<SkeletonCard />
				) : (
					<>
						<div className="w-full h-40 flex-center bg-white overflow-hidden p-4 relative">
							<Image
								objectFit="contain"
								alt="product"
								layout="fill"
								src={data?.image}
							/>
						</div>
						<div className="py-6">
							<div className="flex justify-between gap-8 items-start mb-4">
								<span className="text-16-semibold">{data?.title}</span>
								<span className="text-24-bold relative text-right block">
									S/{data?.price}
								</span>
							</div>
							<p className="my-2 text-12-regular">{data?.description}</p>
							<h5 className="text-16-semibold mt-7">Información Adicional</h5>
							<p className=" text-12-regular">
								<span className="text-12-semibold">Categoría:</span>{' '}
								{data?.category}
							</p>
							<p className=" text-12-regular">
								<span className="text-12-semibold">Rating:</span>{' '}
								{data?.rating?.rate} ⭐
							</p>
							<div className="flex justify-end mt-7 gap-3">
								{products.some((p) => p.id === data?.id) ? (
									<Button
										variant="outline"
										className="border-red-400 "
										onClick={handleClickAdd}
									>
										<span className="text-12-regular text-red-400">
											Eliminar
										</span>
									</Button>
								) : (
									<Button variant="outline" onClick={handleClickAdd}>
										<span className="text-12-regular">Agregar</span>
									</Button>
								)}
							</div>
						</div>
					</>
				)}
			</DialogContent>
		</Dialog>
	);
};
