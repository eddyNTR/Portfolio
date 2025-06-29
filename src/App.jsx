import { Navbar } from "./components/Navbar/Navbar"
import Fondo from './assets/Fondo.jpg'
import Contenido from "./components/Contenido/Contenido"


function App() {
  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepear: 'no-repeat',
    backgroundPosition: "bottom",
    backgroundSize: "Cover",
    position: "relative"
  }
  return (
    <div style={bgImagen} className="overflow-hidden min-h-screen">
      <Navbar />
      <Contenido/>
    </div>
  )
}

export default App
