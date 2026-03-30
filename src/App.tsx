import { useState } from 'react';
import './index.css';
import Home from './Components/Home';
import SplashScreen from './Components/SplashScreen';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Home />
      <SpeedInsights />
    </>
  );
}

export default App;
