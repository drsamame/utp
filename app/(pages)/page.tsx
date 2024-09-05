import Product from '@/components/Product';
import { getProducts } from '@/lib/data/product';

import DataProducts from '@/components/DataProducts';
import { ProductList } from '@/types';
export default async function Home() {
	// Fetch products from the server
	const { data, success } = await getProducts();

	// Fetch products from the client

	return (
		<main className="flex container">
			<section className="remove-scrollbar py-10">
				<DataProducts products={data as ProductList} />
			</section>
		</main>
	);
}
