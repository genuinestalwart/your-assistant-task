import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

const navItems = [
	{ path: "/", text: "Product" },
	{ path: "/", text: "Features" },
	{ path: "/", text: "Pricing" },
	{ path: "/", text: "Resources" },
];

const Header = () => {
	return (
		<header className='flex font-semibold h-20 items-center justify-between max-w-[150ch] mx-auto px-4 text-sm'>
			<img alt='logo' className='block max-w-24' src={logo} />

			<nav className='flex gap-8'>
				{navItems.map((item, i) => (
					<Link
						className='hover:underline underline-offset-2'
						key={i}
						to={item.path}>
						{item.text}
					</Link>
				))}
			</nav>

			<div className='flex gap-2'>
				<button className='px-4 py-2 rounded-md'>Log In</button>

				<button className='bg-primary px-4 py-2 rounded-md'>
					Sign Up
				</button>
			</div>
		</header>
	);
};

export default Header;
