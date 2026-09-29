import "./styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useReveal } from "./hooks/useReveal";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  useReveal();

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education theme={theme} />
        <Contact />
      </main>
    </>
  );
}
