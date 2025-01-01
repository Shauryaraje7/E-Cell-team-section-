import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatedBackground } from 'animated-backgrounds'
import LeadershipTeam from './Leadership';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimatedBackground animationName="starryNight" style={{
                opacity: 1,

            }} />
            <div className='Leadership' >
 <  LeadershipTeam />
 </div>
    <App />
  </StrictMode>,
)
