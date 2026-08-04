import { createContext, useContext, useCallback, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const TransitionContext = createContext(null)

// eslint-disable-next-line react-refresh/only-export-components
export const usePageTransition = () => {
	const ctx = useContext(TransitionContext)
	if (!ctx) throw new Error('usePageTransition must be used inside <TransitionProvider>')
	return ctx
}

export const TRANSITION_MS = 600

export function TransitionProvider({ children }) {
	const navigate = useNavigate()
	const location = useLocation()
	const [phase, setPhase] = useState('idle')
	const busy = useRef(false)
	
	const navigateWithTransition = useCallback((to, options) => {
		if (busy.current) return
		if (to === location.pathname) return
		
		busy.current = true
		setPhase('covering')
		
		setTimeout(() => {
			navigate(to, options)
			window.scrollTo(0, 0)
			setPhase('uncovering')
			
			setTimeout(() => {
				setPhase('idle')
				busy.current = false
			}, TRANSITION_MS)
		}, TRANSITION_MS)
	}, [navigate, location.pathname])
	
	return (
		<TransitionContext.Provider value={{ navigateWithTransition, phase }}>
			{children}
			{phase !== 'idle' && (
				<div aria-hidden className="pointer-events-none fixed inset-0 z-[200] overflow-hidden">
					<div className={`page-curtain ${phase === 'covering' ? 'is-covering' : 'is-uncovering'}`} />
				</div>
			)}
		</TransitionContext.Provider>
	)
}