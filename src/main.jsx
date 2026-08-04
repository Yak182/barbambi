import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TransitionProvider } from "@/RouteTransition/TransitionProvider.jsx";
import ButtonFrameSprite from "@/components/ButtonFrameSprite.jsx";

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<TransitionProvider>
				<ButtonFrameSprite/>
				<App/>
			</TransitionProvider>
		</BrowserRouter>
	</StrictMode>,
)
