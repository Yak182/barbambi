

/**
 * EventDetailCard
 *
 * A card with a vertical "spine" of labeled facts (e.g. Attire, Cost, Time)
 * running down the left side, and a free-form description area on the right.
 *
 * Usage:
 *
 * <EventDetailCard
 *   facts={[
 *     { label: "Attire", value: "Vintage Glam" },
 *     { label: "Cost", value: "$89pp" },
 *   ]}
 * >
 *   <p>Bambi Burlesque, presented by Corset Entertainment...</p>
 *   <p>Guests enjoy photo opportunities with showgirls...</p>
 * </EventDetailCard>
 */
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
			{/* Vertical label spine */ }
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

			{/* Description area */ }
			<div className="flex flex-1 items-center px-4 sm:px-8 py-6">
				<div className="flex flex-col text-bar-bambi-gold gap-3 text-sm sm:text-base">
					{ children }
				</div>
			</div>
		</div>
	);
};

export default EventDetailCard;