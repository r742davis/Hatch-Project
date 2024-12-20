import * as AccessibleIcon from "@radix-ui/react-accessible-icon";

export function WavyLines({ label = "Wavy Lines" }) {
	return (
		<AccessibleIcon.Root label={label}>
			<svg width='52' height='34' viewBox='0 0 52 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<g clipPath='url(#clip0_2_309)'>
					<path
						d='M1.83331 4.63417C7.61708 9.81745 12.2575 10.7749 15.4184 10.6758C24.6657 10.4117 28.6 1.20067 37.9818 1.00258C43.2276 0.903535 47.599 3.67675 50.39 5.95475'
						stroke='#13294B'
						strokeWidth='2'
						strokeLinecap='round'
					/>
					<path
						d='M1.83331 15.7929C7.61708 20.9761 12.2575 21.9336 15.4184 21.8345C24.6657 21.6034 28.6 12.3924 37.9818 12.1613C43.2276 12.0622 47.599 14.8354 50.39 17.1134'
						stroke='#13294B'
						strokeWidth='2'
						strokeLinecap='round'
					/>
					<path
						d='M1.83331 26.9518C7.61708 32.135 12.2575 33.0924 15.4184 32.9933C24.6657 32.7622 28.6 23.5514 37.9818 23.3533C43.2276 23.2542 47.599 26.0274 50.39 28.3054'
						stroke='#13294B'
						strokeWidth='2'
						strokeLinecap='round'
					/>
				</g>
				<defs>
					<clipPath id='clip0_2_309'>
						<rect width='51' height='34' fill='white' transform='translate(0.833313)' />
					</clipPath>
				</defs>
			</svg>
		</AccessibleIcon.Root>
	);
}
