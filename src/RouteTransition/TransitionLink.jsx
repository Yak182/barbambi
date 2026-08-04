import { Link } from 'react-router-dom'
import { usePageTransition } from './TransitionProvider.jsx'

const TransitionLink = ({ to, children, onClick, ...rest }) => {
	const { navigateWithTransition } = usePageTransition()
	
	const handleClick = (e) => {
		// let cmd/ctrl/shift-click and middle-click open new tabs normally
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
		e.preventDefault()
		onClick?.(e)
		navigateWithTransition(to)
	}
	
	return <Link to={to} onClick={handleClick} {...rest}>{children}</Link>
}

export default TransitionLink