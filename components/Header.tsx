import { Icons } from '@/components/Icons';
import NotificationCircle from '@/components/NotificationCircle';
import { Button } from './ui/button';

export async function Header() {
	return (
		<header className="header border-solid border-0 border-b border-light-200">
			<div className="sub-header container flex-between">
				<h1>Tienda</h1>
				<Button aria-label="home" className="relative">
					<NotificationCircle />
					<Icons.shoppingCart className="h-7 w-7" aria-hidden="true" />
				</Button>
			</div>
		</header>
	);
}
