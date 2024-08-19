import Navbar from "./Navbar.jsx";
import General from "./General.jsx";
import Skills from "./Skills.jsx";
import Works from "./Works.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <General />
        <Skills />
        <Works />
      </main>
    </>
  );
}

export default App;
