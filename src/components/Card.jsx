const EventDetailCard = ({
							 facts = [],
							 children,
							 className = "",
							 bgClassName,
						 }) => {
	return (
		<div
			className={ `flex w-full max-h-full ${ bgClassName } z-[70] ${ className }` }
		>
			<div className="flex shrink-0 divide-x divide-bar-bambi-gold/20">
				{ facts.map(({ label, value }, i) => (
					<div
						key={ i }
						className="flex flex-col items-center justify-center gap-2 px-2 sm:px-3 py-6"
					>
						<p
							className="text-bar-bambi-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase "
						>
							{ label }
						</p>
						{ value && (
							<p
								className="text-bar-bambi-gold text-sm sm:text-base"
							>
								{ value }
							</p>
						) }
					</div>
				)) }
			</div>

			<div className="flex flex-1 items-center px-4 sm:px-8 py-6">
				<div className="flex flex-col text-bar-bambi-gold gap-3 text-sm sm:text-base">
					{ children }
				</div>
			</div>
		</div>
	);
};

export default EventDetailCard;