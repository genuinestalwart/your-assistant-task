import checkbox from "@/assets/checkbox.svg";
import HeroForm from "@/components/home/HeroForm";

const bullets = [
	"Mauris pellentesque congue libero nec",
	"Suspendisse mollis tincidunt",
	"Praesent varius justo vel justo pulvinar",
];

const Hero = () => {
	return (
		<section className='flex items-center justify-between max-w-[110ch] min-h-[calc(100vh_-_5rem)] mx-auto py-24'>
			<div className='space-y-4 w-[45%]'>
				<span className='bg-primary px-2 py-0.5 rounded-2xl text-xs uppercase'>
					Header
				</span>

				<h1 className='font-bold leading-snug text-5xl text-secondary'>
					A small business is only as good as its tools.{" "}
				</h1>

				<p className='font-semibold'>
					Lorem ipsum dolor sit amet, consectetur adipisng.
				</p>

				<div className='font-semibold space-y-2'>
					{bullets.map((item, i) => (
						<div className='flex gap-2 items-center' key={i}>
							<img
								alt='checked'
								className='h-6 w-6'
								src={checkbox}
							/>
							<p>{item}</p>
						</div>
					))}
				</div>
			</div>

			<HeroForm />
		</section>
	);
};

export default Hero;
