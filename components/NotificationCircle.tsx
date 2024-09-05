'use client'
import { useCounterStore } from '@/store/cart';
import React from 'react';

function NotificationCircle() {
	const { count } = useCounterStore((state) => ({
		count: state.count,
	}));

	return (
		<span className="w-5 h-5 rounded-full  text-xs font-bold bg-blue-600 absolute flex-center text-blue-500 right-1 top-1">
			{count}
		</span>
	);
}

export default NotificationCircle;
