import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Image from "@rasenganjs/image";
import { Inbox, User, Mail, ArrowRight, MoveRight } from "lucide-react";
import { PageComponent, Link } from "rasengan";

const Home: PageComponent = () => {
	return (
		<section className='w-full min-h-screen bg-background flex flex-col font-raleway'>
			<div className="fixed -top-[350px] blur-[400px] left-1/2 -translate-x-1/2 size-[300px] rounded-full bg-violet"></div>

			<header className="w-full h-[80px] flex justify-end items-center gap-2 px-8 text-foreground">
				<Button className="h-10">Updates</Button>
				<Button className="size-10 px-0 flex items-center justify-center">
					<Inbox size={16} />
				</Button>
			</header>

			<main className="w-full min-h-[580px] flex justify-center items-center text-foreground">
				<div className="w-full md:w-[500px] h-[500px] flex flex-col justify-start items-center px-4">
					<Image src="/rasengan.svg" alt="Rasengan Logo" width={90} height={90} />
					<p className="text-sm font-medium text-foreground/40 uppercase mt-4">Bootcamp Waitlist</p>

					<h1 className="text-4xl font-bold text-center mt-4 text-pretty">
						<span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#6A6770] to-[#E3E3E7]">Join the waitlist for the</span>
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink to-violet">DEV Girls Bootcamp</span>
					</h1>

					<form className="w-full sm:w-[300px] max-w-[300px] h-auto mt-10">
						<div className="relative">
							<Input placeholder="Full name..." className="w-full text-sm pl-10" />
							<User size={16} className="absolute top-1/2 -translate-y-1/2 left-3" />
						</div>

						<div className="relative mt-4">
							<Input placeholder="Email address..." className="w-full text-sm pl-10" />
							<Mail size={16} className="absolute top-1/2 -translate-y-1/2 left-3" />
						</div>

						<Button className="mt-4 w-full text-foreground/60 relative">
							<span>Continue</span>
							<MoveRight size={16} className="absolute top-1/2 -translate-y-1/2 right-3" />
						</Button>
					</form>
				</div>
			</main>

			<footer className="min-h-[150px] text-[12px] w-full flex flex-col justify-center items-center text-foreground/60">
				<p>Join the waitlist for the DEV Girls Bootcamp</p>
				<p className="flex gap-1">
					<span>Designed by</span>
					<Link to="https://dilane3.dev" className="text-foreground font-medium">@dilane3</Link>
					<span>to give you back your time</span>
				</p>
				<p className="mt-2">Powered by <Link to="https://rasengan.dev" className="text-foreground font-medium">Rasengan.js</Link></p>
			</footer>
		</section>
	);
};
	
Home.path = "/";
Home.metadata = {
	title: "Bootcamp Waitlist",
	description: "Keep track of newest updates from bootcamp",
};

export default Home;
