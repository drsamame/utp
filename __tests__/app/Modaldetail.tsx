import { render, screen, fireEvent } from '@testing-library/react';
import { ModalDetail } from '@/components/modals/ModalDetail';
describe('modalDetail', () => {
	const product = {
		id: 1,
		title: 'Product 1',
		price: 12,
		description: 'Description',
		category: 'test category',
		image: 'https://loremflickr.com/320/240/dog?random=1',
		rating: {
			rate: 4,
			count: 20,
		},
	};

	it('should renders component', () => {
		render(
			<ModalDetail
				isRefechting={false}
				open={true}
				isLoading={false}
				data={product}
			/>
		);
		expect(screen.getByText('Product 1')).toBeInTheDocument();
		expect(screen.getByText('S/12')).toBeInTheDocument();
		expect(screen.getByText('Description')).toBeInTheDocument();
		expect(screen.getByText('test category')).toBeInTheDocument();
	});

	it('should change the button text on add', async () => {
		render(
			<ModalDetail
				isRefechting={false}
				open={true}
				isLoading={false}
				data={product}
			/>
		);
		const button = screen.getByText('Agregar');
		await fireEvent.click(button);
		expect(screen.getByText('Eliminar')).toBeInTheDocument();
	});

	it('should show a skeleton', async () => {
		render(
			<ModalDetail
				isRefechting={false}
				open={true}
				isLoading={true}
				data={product}
			/>
		);
		expect(screen.getByRole('skeleton')).toBeInTheDocument();
	});
});
