import GooeyEffect from "@/components/GooeyEffect/index.jsx";
import TransitionLink from "@/RouteTransition/TransitionLink.jsx";

const Buttons = ({label, to, className = '', hoverSrc}) => {
    const buttonContent = (
        <>
            <svg
                viewBox="0 0 211.93 90.03"
                preserveAspectRatio="none"
                aria-hidden
                focusable="false"
                className="absolute inset-0 w-full h-full pointer-events-none"
            >
                <use href="#btn-frame"/>
            </svg>
            <span
                className="relative uppercase text-center block leading-tight button-design"
                dangerouslySetInnerHTML={{__html: label}}
            />
        </>
    );

    return (
        <TransitionLink to={to} className={`${className} relative inline-block group w-[300px]`}>
            <div
                className="relative aspect-[211.93/90.03] w-full transform duration-200 hover:scale-105 flex items-center justify-center">
                {hoverSrc ? (
                    <GooeyEffect
                        hoverSrc={hoverSrc}
                        className="absolute inset-0 w-full h-full"
                        childrenClassName="w-full h-full flex items-center justify-center"
                        style={{clipPath: 'url(#btn-clip)'}}
                    >
                        {buttonContent}
                    </GooeyEffect>
                ) : (
                    buttonContent
                )}
            </div>
        </TransitionLink>
    );
};

export default Buttons;