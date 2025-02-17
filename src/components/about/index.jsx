"use client";
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import { Dot } from "lucide-react";

const AboutDetails = () => {
	return (
		<section className="py-20 w-full">
			<div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
				<ItemLayout
					className={
						"col-span-full lg:col-span-5 row-span-2 flex-col justify-start"
					}
				>
					<h2 className="text-xl md:text-4xl text-accent text-left w-full capitalize font-semibold">
						information
					</h2>

					<div className="w-full text-xs sm:text-sm md:text-base space-y-4">
						<p>
							<strong>Phone:</strong> 032 96 26 567
						</p>
						<p>
							<strong>Email:</strong> vinhnguyen471199@gmail.com
						</p>
						<p>
							<strong>Address:</strong> 82 Trần Đình Tri, Liên
							Chiểu, TP.Đà Nẵng
						</p>
						<p>
							<Link
								target="_blank"
								className="cursor-pointer hover:text-accent"
								href="https://www.facebook.com/01629626567a"
							>
								<strong>Website:</strong>{" "}
								https://www.facebook.com/01629626567a
							</Link>
						</p>
						<p>
							<strong>Dob:</strong> 01/01/1999
						</p>
						<p>
							<strong>Gender:</strong> male{" "}
						</p>
					</div>
				</ItemLayout>

				<ItemLayout
					className={
						"col-span-full lg:col-span-7 row-span-2 flex-col items-start"
					}
				>
					<h2 className="text-xl md:text-4xl text-accent text-left w-full capitalize font-semibold">
						introduce
					</h2>
					<p className="font-normal text-xs sm:text-sm md:text-base w-full">
						- Là một người trái ngành mong muốn phát triển bản thân,
						không ngừng cố gắng học hỏi và cập nhật để trở thành một
						lập trình viên chuyên nghiệp. <br /> - Mong muốn tìm kiếm
						cơ hội để học hỏi và cải thiện kỹ năng trong môi trường
						chuyên nghiệp, để có thể đóng góp cho công ty. <br />{" "}
						- Tính cách hòa đồng, dễ thích nghi với môi trường. Lắng
						nghe, rút kinh nghiệm và sẵn sàng hợp tác với đồng
						nghiệp.
					</p>
				</ItemLayout>

				<ItemLayout className={"col-span-full flex flex-col"}>
					<h2 className="text-xl md:text-4xl text-accent text-left w-full capitalize font-semibold">
						Skills
					</h2>
					<img
						className="w-full h-auto"
						src="https://skillicons.dev/icons?i=html,css,js,github,react,tailwind,ts,nextjs"
						alt="CodeBucks"
						loading="lazy"
					/>
				</ItemLayout>

				<ItemLayout className={"col-span-6 flex flex-col"}>
					<h2 className="text-xl md:text-4xl text-accent text-left w-full capitalize font-semibold">
						Projects
					</h2>
					<div className="w-full flex flex-col justify-start text-normal text-lg text-normal gap-2">
						<Link
							target="_blank"
							className="cursor-pointer hover:text-accent"
							href="https://github.com/vinhraudaklak/krist-shop"
						>
							https://github.com/vinhraudaklak/krist-shop
						</Link>
						<Link
							target="_blank"
							className="cursor-pointer hover:text-accent"
							href="https://github.com/vinhraudaklak/tailwindcss-coffee-style "
						>
							https://github.com/vinhraudaklak/tailwindcss-coffee-style
						</Link>
						<Link
							target="_blank"
							className="cursor-pointer hover:text-accent"
							href="https://github.com/vinhraudaklak/krist-shop"
						>
							https://github.com/vinhraudaklak/krist-shop
						</Link>
					</div>
				</ItemLayout>

				<ItemLayout className={"col-span-6 flex flex-col"}>
					<h2 className="text-xl md:text-4xl text-accent text-left w-full capitalize font-semibold">
						Learning sources
					</h2>
					<div className="flex justify-start gap-2">
						<Dot strokeWidth="8px" />
						<p>Mentored by a Senior Developer</p>
					</div>
					<div className="flex justify-start gap-2">
						<Dot strokeWidth="8px" />
						<p>Learn HTML, CSS, JavaScript, ReactJS from F8.</p>
					</div>
					<div className="flex justify-start gap-2">
						<div>
							<Dot strokeWidth="8px" />
						</div>
						<p>
							Learning by practicing projects from YouTube
							channels such as: Lama Dev, HoleTex, Hỏi Dân IT,
							TrungQuanDev...
						</p>
					</div>
					<div className="flex justify-start gap-2">
						<Dot strokeWidth="8px" />
						<p>Refer to documents on Google/Github...</p>
					</div>
				</ItemLayout>
			</div>
		</section>
	);
};

export default AboutDetails;
