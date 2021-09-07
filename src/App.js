import { About, Navbar, Home, Projects } from "./components/index";
import InitlizeReactGA from "./helper/InitializeReactGa";

function App() {
  InitlizeReactGA();
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
