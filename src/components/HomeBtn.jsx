'use client'
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";


const NavLink = motion(Link)
const HomeBtn = () => {
	return (
		<NavLink
		 	initial={{scale: 0}}
			animate={{ scale: 1 }}
			transition={{delay: 1}}
			href={"/"}
			target={"_self"}
			name={"home"}
			// aria-label => Mô tả rõ hơn cho phần tử k có text and user icon(nút/liên kết).
			aria-label={"home"}
			// backdrop-blur => tạo hiệu ứng mờ phía sau 1 phần tử.
			className="text-foreground rounded-full flex items-center justify-center custom-bg fixed top-6 left-6 w-fit self-start z-50"
		>
			<span className="relative h-14 w-14 p-4  hover:text-accent">
				<Home className="w-full h-auto" strokeWidth={1.5} />
				{/* thêm lớp giả để chọn đúng element cần hover */}
				<span
					className="absolute hidden hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
              bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap"
				>
					Home
				</span>
			</span>
		</NavLink>
	);
};

export default HomeBtn;
