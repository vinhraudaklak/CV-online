import Image from "next/image";

import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";

const Wizard = dynamic(() => import("@/components/models/Wizard"), {ssr: false})


export default function Home() {
	return (
		<main  className="flex min-h-screen flex-col items-center justify-between relative">
			{/* Fill is prop special => Help cover card farther  => No set width and hight card child => Request card parent must have relative */}
			<Image
				priority
				size='100vw'
				src={bg}
				alt="background-image"
				fill
				className="-z-50 w-full h-full object-cover object-center opacity-25"
			/>

			<div className="w-full h-screen">
				{/* Navigation and 3D model component */}
				<Navigation />
					<RenderModel>
						<Wizard></Wizard>
					</RenderModel>
			</div>
		</main>
	);
}
