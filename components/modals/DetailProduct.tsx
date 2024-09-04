'use client';

import { useState } from 'react';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

export const DetailProductModal = () => {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="link" className="p-0">
					<span className="flex items-center gap-2 text-12-regular">
						<Icons.badgeHelp className="h-4 w-4" aria-hidden="true" />
						Vista previa
					</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="shad-dialog sm:max-w-md">
				<DialogHeader className="mb-4 space-y-3">
					<DialogTitle>Producto</DialogTitle>
					<DialogDescription className="lowercase first-letter:uppercase">
						información adicional
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
