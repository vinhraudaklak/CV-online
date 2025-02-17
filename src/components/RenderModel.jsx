"use client";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { clsx } from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }) => {
	return (
		// Các component 3D sẽ được render trong <Canvas />.
		<Canvas className={clsx("w-screen h-screen -z-10 relative", className)}>

			{/* Suspense là một component của React giúp quản lý trạng thái tải (loading state) khi tải dữ liệu hoặc component bất đồng bộ. */}
			<Suspense fallback={null}>
				{children}
			</Suspense>
			
			{/* Set môi trường a/s. */}
			<Environment preset="dawn"/>
		</Canvas>
	);
};

export default RenderModel;
