"use client";

import { FC } from "react";
import Image from "next/image";
import { SunriseAlarm, SunshineHeart, WavyLines } from "app/_icons";
import { Button, Card } from "@/components";
import styles from "./page.module.scss";
import heroImage from "../public/hero-image.png";

type DisplayCard = {
	icon: FC;
	text: string;
};

const cardsSchema: Array<DisplayCard> = [
	{
		icon: WavyLines,
		text: "Wavy",
	},
	{
		icon: SunriseAlarm,
		text: "Sunrise",
	},
	{
		icon: SunshineHeart,
		text: "Sunshine",
	},
];

export default function Home() {
	return (
		<div className={styles["Home"]}>
			<header>SVG</header>
			<div className={styles["Hero"]}>
				<div>
					<h1>Rise & Shine</h1>
					<p>
						Coffee cortado, qui beans galāo froth to go. Blue mountain el single origin aged flavour variety
						affogato.
					</p>
					<Button>Learn More</Button>
				</div>
				<Image src={heroImage} alt='Woman in bed raising arms up as if waking up' />
			</div>
			<div className={styles["Section"]}>
				<h2>Your heading here</h2>
				<ul className={styles["CardList"]}>
					{cardsSchema.map(({ icon: Icon, text }, index) => (
						<Card key={index + text}>
							<Icon />
							<p>{text}</p>
						</Card>
					))}
				</ul>
			</div>
		</div>
	);
}
