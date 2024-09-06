import { getProducts } from '@/lib/data/product';

import DataProducts from '@/components/DataProducts';
import { ProductList } from '@/types';
import { revalidatePath } from 'next/cache';
export default async function Home() {
	// Fetch products from the server
	revalidatePath('/', 'layout')
	const { data, success } = await getProducts();
	

	return (
		<main className="flex container">
			<section className="remove-scrollbar py-10">
				<DataProducts products={data as ProductList} />
			</section>
		</main>
	);
}
