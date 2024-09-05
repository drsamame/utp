import BtnCart from "@/components/BtnCart";

export async function Header() {
	return (
		<header className="header border-solid border-0 border-b border-light-200">
			<div className="sub-header container flex-between">
				<h1>Tienda</h1>
				<BtnCart></BtnCart>
			</div>
		</header>
	);
}
