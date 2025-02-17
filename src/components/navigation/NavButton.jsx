import {
	Github,
	Home,
	Facebook ,
	NotebookText,
	Palette,
	Phone,
	Twitch,
	User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponSiveComponent";
import clsx from "clsx";
import  { motion } from 'framer-motion';

// function getIcon in bootstrap.
const getIcon = (icon) => {
	switch (icon) {
		case "home":
			return <Home className="w-full h-auto" strokeWidth={1.5} />; // strokeWidth => xđ độ dầy của viền icon.
		case "about":
			return <User className="w-full h-auto" strokeWidth={1.5} />;
		case "projects":
			return <Palette className="w-full h-auto" strokeWidth={1.5} />;
		case "contact":
			return <Phone className="w-full h-auto" strokeWidth={1.5} />;
		case "github":
			return <Github className="w-full h-auto" strokeWidth={1.5} />;
		case "Facebook":
			return <Facebook  className="w-full h-auto" strokeWidth={1.5} />;
		case "twitter":
			return <Twitch className="w-full h-auto" strokeWidth={1.5} />;
		case "resume":
			return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;

		default:
			return <Home className="w-full h-auto" strokeWidth={1.5} />;
	}
};

const NavLink = motion(Link)

const item = {
	hidden: {scale: 0},
	show: {scale: 1},
}

const NavButton = ({
	x,
	y,
	label,
	link,
	icon,
	newTab,
	labelDirection = "right",
}) => {
	return (
		<ResponsiveComponent>
			{({ size }) => {
				return size && size >= 480 ? (
					<div
						className="absolute cursor-pointer z-50"
						style={{
							// Thiết lập vị trí nút.
							transform: `translate(${x}, ${y})`,
						}}
					>
						<NavLink
							variants={item}
							href={link}
							target={newTab ? "_blank" : "_self"}
							name={label}
							// aria-label => Mô tả rõ hơn cho phần tử k có text and user icon(nút/liên kết).
							aria-label={label}
							// backdrop-blur => tạo hiệu ứng mờ phía sau 1 phần tử.
							className="text-foreground rounded-full flex items-center justify-center custom-bg"
						>
							<span className="relative h-14 w-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
								{getIcon(icon)}
								{/* thêm lớp giả để chọn đúng element cần hover */}
								<span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
								<span
									className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
										bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap"
								>
									{label}
								</span>
							</span>
						</NavLink>
					</div>
				) : (
					<div className="cursor-pointer z-50">
						<NavLink
							variants={item}
							href={link}
							target={newTab ? "_blank" : "_self"}
							name={label}
							// aria-label => Mô tả rõ hơn cho phần tử k có text and user icon(nút/liên kết).
							aria-label={label}
							// backdrop-blur => tạo hiệu ứng mờ phía sau 1 phần tử.
							className="text-foreground rounded-full flex items-center justify-center custom-bg"
						>
							<span className="relative w-10 h-10 xs:h-14 xs:w-14 p-2.5 xs:p-4 hover:text-accent">
								{getIcon(icon)}
								{/* thêm lớp giả để chọn đúng element cần hover */}
								<span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
								<span
									className={clsx(
										"absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
										labelDirection === "left"
											? "right-full left-auto"
											: ""
									)}
								>
									{label}
								</span>
							</span>
						</NavLink>
					</div>
				);
			}}
		</ResponsiveComponent>
	);
};

export default NavButton;
