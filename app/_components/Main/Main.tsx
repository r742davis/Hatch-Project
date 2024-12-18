import { ReactNode } from "react";
import styles from "./Main.module.scss";

type MainProps = {
	children: ReactNode;
};

export function Main({ children }: MainProps) {
	return (
		<main role='main' className={styles["Main"]}>
			{children}
		</main>
	);
}
