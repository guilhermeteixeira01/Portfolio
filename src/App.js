
import { useEffect, useRef } from "react";
import './css/global.css';
import { initStars } from "./components/stars";
import StarCanvas from "./components/StarCanvas";

import Header from './components/header';
import Main from './components/Main';

console.log('%c⚡💥 Bem-vindo, desenvolvedor curioso! 💥⚡', 'color: purple; font-size: 15px; font-family: monospace; font-weight: bold;');
console.log('%c⚡ Creditos: Guilherme Teixeira ⚡', 'background: linear-gradient(to right, red, black); color: white; font-size: 15px; font-weight: bold; padding: 4px;');

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
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          pointerEvents: "none"
        }}
      />
      {/* Conteúdo do site */}
      <StarCanvas />
      {/* <Header /> */}
      <Main />
    </div>
  );
}

export default App;
