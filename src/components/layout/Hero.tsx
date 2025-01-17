import { Button } from "@/components/ui/button";
import { CONTENT } from "@/constants/content";
import { CarTaxiFront } from "lucide-react";

const CarTaxiFrontIcon = () => (
	<CarTaxiFront className="size-5" strokeWidth={2} />
);

export default function HeroSection() {
	return (
		<>
			{/* Hero */}
			<div className="relative overflow-hidden py-24 lg:py-32">
				{/* Gradients */}
				<div
					aria-hidden="true"
					className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
				>
					<div className="bg-gradient-to-r from-primary/10 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
					<div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary/20 via-primary-foreground to-background" />
				</div>
				{/* End Gradients */}
				<div className="relative z-10">
					<div className="container py-10 lg:py-16">
						<div className="max-w-2xl text-center mx-auto">
							<p className="text-xs md:text-sm">{CONTENT.HERO_SUBTITLE}</p>
							{/* Title */}
							<div className="mt-5 max-w-2xl">
								<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
									{CONTENT.HERO_TITLE}
								</h1>
							</div>
							{/* End Title */}
							<div className="mt-5 max-w-3xl">
								<p className="text-base text-balance lg:text-xl text-muted-foreground">
									{CONTENT.HERO_DESCRIPTION}
								</p>
							</div>
							{/* Buttons */}
							<div className="mt-16 gap-3 flex flex-col mx-4 md:mx-0 gap-y-4 md:flex-row justify-center">
								<Button
									size={"lg"}
									variant={"expandIcon"}
									Icon={CarTaxiFrontIcon}
									iconPlacement="right"
								>
									Book a ride
								</Button>
								<Button size={"lg"} variant={"outline"}>
									Continue as guest
								</Button>
							</div>
							{/* End Buttons */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
