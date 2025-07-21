import { Navbar } from "./components/Navbar/Navbar";
import Fondo from "./assets/Fondo.jpg";
import Proyectos from "./components/Proyectos/Proyectos";
import SobreMi from "./components/SobreMi/SobreMi";
import MisHabilidades from "./components/MisHabilidades/MisHabilidades";

function App() {
  const bgImagen = {
    backgroundImage: `url(${Fondo})`,

    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",

    backgroundSize: "Cover",
    position: "relative",
  };
  return (
    <div style={bgImagen} className="overflow-hidden min-h-screen">
      <Navbar />
      <SobreMi />
      <MisHabilidades />
      <Proyectos />
    </div>
  );
}

export default App;
