import Image from "next/image";

import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import dynamic from "next/dynamic";
import AboutDetails from "@/components/about";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
	ssr: false,
});

export default function Home() {
	return (
		<>
			{/* Fill is prop special => Help cover card farther  => No set width and hight card child => Request card parent must have relative */}
			<Image
				priority
				size="100vw"
				src={bg}
				alt="background-image"
				className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
			/>

			<div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 -z-10">
				<RenderModel>
					<HatModel></HatModel>
				</RenderModel>
			</div>

			<div className="relative f-full h-screen flex items-center justify-center flex-col">
				<div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
					<h1 className="font-bold text-xl xs:text-2xl sm:text-4xl lg:text-6xl text-accent whitespace-nowrap">
						Nguyen Trong Hoai Vinh
					</h1>
					<p className="font-light text-foreground text-lg md:text-2xl mt-4">
						Intern / Front-End ReactJS/NextJS
					</p>
				</div>
			</div>

			<AboutDetails />
		</>
	);
}
