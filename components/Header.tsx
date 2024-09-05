'use client';
import { Icons } from '@/components/Icons';
import NotificationCircle from '@/components/NotificationCircle';
import { Button } from './ui/button';
import { useCounterStore } from '@/store/cart';

export  function Header() {
	const { products } = useCounterStore((state) => ({
		products: state.products,
	}));
	return (
		<header className="header border-solid border-0 border-b border-light-200">
			<div className="sub-header container flex-between">
				<h1>Tienda</h1>
				{JSON.stringify(products)}
				<Button aria-label="home" className="relative">
					<NotificationCircle />
					<Icons.shoppingCart className="h-7 w-7" aria-hidden="true" />
				</Button>
			</div>
		</header>
	);
}
