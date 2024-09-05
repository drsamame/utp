'use client';
import React from 'react';
import { Icons } from '@/components/Icons';
import NotificationCircle from '@/components/NotificationCircle';
import { Button } from './ui/button';
import { useCounterStore } from '@/store/cart';
function BtnCart() {
	const { setOpenCart } = useCounterStore();
	return (
		<Button
			onClick={() => setOpenCart(true)}
			aria-label="home"
			className="relative"
		>
			<NotificationCircle />
			<Icons.shoppingCart className="h-7 w-7" aria-hidden="true" />
		</Button>
	);
}

export default BtnCart;
