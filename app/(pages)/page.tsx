import Product from '@/components/Product';
import { getProducts } from '@/lib/data/product';

export default async function Home() {
	const { data } = await getProducts();

	return (
		<main className="flex  container">
			<section className="remove-scrollbar py-10 grid md:grid-cols-3 xl:grid-cols-5 grid-cols-1 gap-5  w-full content-start">
				{data && (
					<>
						{data.map((product) => (
							<Product key={product.id} product={product} />
						))}
					</>
				)}
			</section>
		</main>
	);
}
