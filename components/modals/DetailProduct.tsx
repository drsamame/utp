'use client';

import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
export const DetailProductBtn = ({
	onClickDetail,
}: {
	onClickDetail: () => void;
}) => {
	return (
		<Button variant={'ghost'} asChild={true} className="p-0 ">
			<span
				className="flex items-center gap-2 text-12-regular cursor-pointer"
				onClick={onClickDetail}
			>
				<Icons.badgeHelp className="h-4 w-4" aria-hidden="true" />
				Vista previa
			</span>
		</Button>
	);
};
