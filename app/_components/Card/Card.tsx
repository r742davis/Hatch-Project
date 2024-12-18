import { ReactNode } from "react";
import styles from "./Card.module.scss";

type CardProps = {
	children?: ReactNode;
};

export function Card({ children }: CardProps) {
	return <li className={styles["Card"]}>{children}</li>;
}
