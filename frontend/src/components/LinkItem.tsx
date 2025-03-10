import { useState } from "react";
import { colors } from "../utils";
export interface LinkProps {
	icon: string;
	title: string;
	desc: string;
	href: string;
}

export const Link = ({ icon, title, desc, href }: LinkProps) => {
	const [randomColor] = useState<string>(
		colors[Math.floor(Math.random() * colors.length)]
	);
	return (
		<div className="link-item bg-transparent p-4 flex items-center flex-col">
			<a
				href={href}
				className={`bg-(--bg-body) text-6xl w-24 h-24 flex justify-center items-center rounded-full transition-all duration-300 ease-in-out link ${randomColor}`}
				target="_blank"
				rel="noreferrer"
				title={title}
			>
				<i className={icon} />
			</a>
			<div className="flex justify-center items-center flex-col gap-2 mt-6 link-content">
				<h3 className="m-0 text-center">{title}</h3>
				<p className="m-0 text-center">{desc}</p>
			</div>
		</div>
	);
};
