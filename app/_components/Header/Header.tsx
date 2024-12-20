import cn from "classnames";
import { SunriseAlarm } from "@/icons";
import styles from "./Header.module.scss";

export const SCROLL_DEBOUNCE_DELAY = 10;

export function Header() {
	return (
		<header className={cn(styles["Header"])}>
			<SunriseAlarm />
		</header>
	);
}
