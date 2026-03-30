import { useState } from 'react';
import './index.css';
import Home from './Components/Home';
import SplashScreen from './Components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Home />
    </>
  );
}

export default App;
