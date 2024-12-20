import Image from "next/image";
import { Button } from "@/components";
import styles from "./Hero.module.scss";
import heroImage from "../../../public/hero-image.png";

export function Hero() {
	const simulateAction = () => {
		console.log("Click");
	};

	return (
		<section className={styles["Hero"]}>
			<div className={styles["ContentContainer"]}>
				<div className={styles["Content"]}>
					<h1>Rise & Shine</h1>
					<p>
						Coffee cortado, qui beans galāo froth to go. Blue mountain el single origin aged flavour variety
						affogato.
					</p>
					<Button href='/' onClick={() => simulateAction()}>
						Learn More
					</Button>
				</div>
			</div>
			<Image className={styles["Image"]} src={heroImage} alt='Woman in bed raising arms up as if waking up' />
		</section>
	);
}
