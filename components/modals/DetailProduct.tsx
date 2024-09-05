'use client';

import { useEffect, useState } from 'react';
import { Icons } from '@/components/Icons';
import PreviewBtn from '@/components/PreviewBtn';
import type { Product } from '@/types';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

export const DetailProductBtn = ({
	isLoading = false,
	onClickDetail,
}: {
	onClickDetail: () => void;
	isLoading: boolean;
}) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<PreviewBtn isLoading={isLoading} asChild={true} className="p-0 ">
				<span
					className="flex items-center gap-2 text-12-regular cursor-pointer"
					onClick={onClickDetail}
				>
					<Icons.badgeHelp className="h-4 w-4" aria-hidden="true" />
					Vista previa
				</span>
			</PreviewBtn>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="shad-dialog sm:max-w-md">
					<DialogHeader className="mb-4 space-y-3">
						<DialogTitle>Producto</DialogTitle>
						<DialogDescription className="lowercase first-letter:uppercase">
							Información adicional
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</>
	);
};

export const ModalDetail = ({
	isLoading = false,
	onClickDetail,
	data,
}: {
	onClickDetail: () => void;
	isLoading: boolean;
	data: Product;
}) => {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="shad-dialog sm:max-w-md">
				<DialogHeader className="mb-4 space-y-3">
					<DialogTitle>Producto</DialogTitle>
					<DialogDescription className="lowercase first-letter:uppercase">
						{JSON.stringify(data)}
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
