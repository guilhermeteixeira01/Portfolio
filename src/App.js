import { useEffect, useRef } from "react";
import './App.css';
import { initStars } from "./components/stars";

import Header from './components/header';
import Main from './components/Main'

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = initStars(canvasRef.current);
    return cleanup;
  }, []);

  return (
    <div className="App">
      {/* Fundo de estrelas */}
      <canvas
        ref={canvasRef}
        id="stars"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          pointerEvents: "none"
        }}
      />

      {/* Conteúdo do site */}
      <Header />
      <Main />
    </div>
  );
}

export default App;
