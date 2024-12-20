import { useCallback, MouseEvent } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large";

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	disabled?: boolean;
	size?: ButtonSize;
	variant?: ButtonVariant;
	href?: string;
	type?: "button" | "submit" | "reset";
	onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

export function Button({
	children,
	className,
	disabled = false,
	size = "medium",
	variant = "primary",
	href,
	type = "button",
	onClick,
}: ButtonProps) {
	const handleClick = useCallback(
		(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
			if (disabled) {
				event.preventDefault();
				return;
			}
			if (onClick) {
				onClick(event);
			}
		},
		[disabled, onClick]
	);

	const classNames = cn(styles["Button"], styles[variant], styles[size], {
		[`${className}`]: !!className,
		disabled: styles["disabled"],
	});

	if (href) {
		return (
			<Link className={classNames} href={href} onClick={handleClick} aria-disabled={disabled} passHref>
				{children}
			</Link>
		);
	}

	return (
		<button type={type} className={classNames} onClick={handleClick} disabled={disabled}>
			{children}
		</button>
	);
}
