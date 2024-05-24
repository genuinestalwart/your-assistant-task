import logoIcon from "@/assets/logo-icon.svg";
import apple from "@/assets/apple.svg";
import facebook from "@/assets/facebook.svg";
import google from "@/assets/google.svg";

const loginButtons = [
	{ icon: google, text: "Google" },
	{ icon: facebook, text: "Facebook" },
	{ icon: apple, text: "Apple" },
];

const HeroForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className='bg-white rounded-2xl shadow-sm text-center w-[45%]'>
			<img
				alt='logo icon'
				className='block h-16 mb-6 mx-auto -mt-8 w-16'
				src={logoIcon}
			/>

			<h2 className='font-bold text-3xl text-secondary'>
				Join our community
			</h2>

			<p className='font-semibold my-4'>Start your free trial</p>

			<form
				className='*:block mx-auto space-y-3 text-left text-sm w-4/5 *:w-full'
				onSubmit={handleSubmit}>
				<label className='font-semibold text-secondary' htmlFor='email'>
					Email
				</label>

				<input
					className='border-2 border-secondary/25 focus-visible:border-primary focus-visible:outline-none p-3 rounded-lg'
					name='email'
					placeholder='Enter your email address'
					type='email'
				/>

				<button className='bg-primary py-3 rounded-lg' type='submit'>
					Get Started
				</button>
			</form>

			<div className='flex items-center justify-between mx-auto my-4 w-4/5'>
				<hr className='w-[45%]' />
				<p className='text-sm'>OR</p>
				<hr className='w-[45%]' />
			</div>

			{loginButtons.map((item, i) => (
				<button
					className='border-2 border-secondary/25 flex gap-2 items-center justify-center mx-auto my-3 py-3 rounded-lg text-sm w-4/5'
					key={i}>
					<img alt={item.text} className='h-6 w-6' src={item.icon} />
					<span>Sign in with {item.text}</span>
				</button>
			))}

			<p className='mb-8 mt-6 text-sm'>
				Already have an account?{" "}
				<span className='hover:cursor-pointer hover:underline underline-offset-2 text-primary'>
					Sign In
				</span>
			</p>
		</div>
	);
};

export default HeroForm;
