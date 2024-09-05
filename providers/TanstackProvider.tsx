'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 6 * 1000,
						refetchInterval: 6 * 1000,
					},
				},
			})
	);

	return (
		<QueryClientProvider client={queryClient}>
			{/* <ReactQueryDevtools /> */}
			{children}
		</QueryClientProvider>
	);
};

export default ReactQueryProvider;
