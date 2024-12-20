import { FC } from "react";
import { WavyLines, SunriseAlarm, SunshineHeart } from "@/icons";
import { Card } from "@/components";
import styles from "./FeaturePanels.module.scss";

type DisplayCard = {
	icon: FC;
	text: string;
};

const displayCards: Array<DisplayCard> = [
	{
		icon: WavyLines,
		text: "Wavy",
	},
	{
		icon: SunshineHeart,
		text: "Sunshine",
	},
	{
		icon: SunriseAlarm,
		text: "Sunrise",
	},
];

export function FeaturePanels() {
	return (
		<section className={styles["FeaturePanels"]}>
			<h2>Your heading here</h2>
			<ul className={styles["CardList"]}>
				{displayCards.map(({ icon: Icon, text }, index) => (
					<Card key={index + text}>
						<Icon />
						<p>{text}</p>
					</Card>
				))}
			</ul>
		</section>
	);
}
