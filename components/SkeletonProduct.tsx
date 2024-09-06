import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
	return (
		<div className="flex flex-col space-y-3">
			<Skeleton className="h-[175px] w-full rounded-xl bg-light-300" />
			<div className="space-y-2">
				<Skeleton className="h-5 w-full bg-light-300" />
			</div>
			<div className="space-y-2">
				<Skeleton className="h-3 w-full bg-light-300" />
				<Skeleton className="h-3 w-full bg-light-300" />
        <Skeleton className="h-3 w-[110px] bg-light-300" />
        <Skeleton className="h-3 w-[110px] bg-light-300" />
			</div>
			<div className="space-y-5">
				<Skeleton className="float-end h-10 w-[120px] bg-light-300" />
			</div>
		</div>
	);
}
