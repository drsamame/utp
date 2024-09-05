import React from 'react';
import { SkeletonCard } from '@/components/SkeletonProduct';

function loading() {
	return (
		<main className="flex container">
			<section className="remove-scrollbar py-10 w-full">
				<div className="grid md:grid-cols-3 xl:grid-cols-5 grid-cols-1 gap-10  w-full content-start">
					{[...Array(20)].map((x, i) => (
						<SkeletonCard key={i} />
					))}
				</div>
			</section>
		</main>
	);
}

export default loading;
