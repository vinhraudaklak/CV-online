import Image from "next/image";

import bg from "../../../../public/background/projects-background.png";
import { projectsData } from "@/app/data";
import ProjectList from "@/components/projects";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
// import StaffModel from "@/components/models/staff";

const StaffModel = dynamic(() => import("@/components/models/staff"), {ssr: false})

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

			<ProjectList projects={projectsData} />

			<div className=" flex items-center justify-center fixed top-16 lg:top-20 left-1/2 lg:-left-20 h-screen -translate-x-1/2 lg:translate-x-0 -z-10">
				<RenderModel>
					<StaffModel></StaffModel>
				</RenderModel>
			</div>
		</>
	);
}
