import Logo from "../../assets/Espadas.png";
import css from "../../assets/css-3.png";
import html from "../../assets/html-5.png";
import javascript from "../../assets/javascript.png";
import python from "../../assets/python.png";
import github from "../../assets/github.svg";
import teatro from "../../assets/teatro.png";
import juegos from "../../assets/tienda_juegos.png";
import municipio from "../../assets/municipio.png";
import calculadora from "../../assets/calculadora.png";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { slipeUp } from "../../utility/animation";

const Contenido = () => {
  return (
    <motion.section
      className="mt-20"
      variants={slipeUp(0.4)}
      initial="initial"
      animate="animate"
    >
      {/*tarjetas con los proyectos*/}
      <span id="proyectos" className="text-white text-4xl flex justify-center">
        Mis Proyectos
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36">
        <article className="bg-white rounded-2xl shadow-sm h-[340px] overflow-hidden">
          <img
            src={municipio}
            alt="proyecto 1"
            className="h-[180px] w-full object-cover"
          />
          <div className="flex gap-4 p-6">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <div>
              <h2 className="font-bold text-xl">Pagina municipio</h2>
              <p className="text-xs text-[#757575] font-light">
                lenguajes: HTML, CSS
              </p>
            </div>
          </div>
          {/*Contenido de la tarjeta */}
          <div className="flex h-[64px] items-center justify-around border-t-[1px] border-[#c0bcbc]">
            <div className="grow">
              <img src={html} alt="" className="h-10 w-10 mx-auto" />
            </div>
            <hr className="mx-4 h-4 w-[1px] border-none bg-black/10" />
            <div className="grow">
              <img src={css} alt="" className="h-10 w-10 mx-auto" />
            </div>
            <hr className="mx-4 h-4 w-[1px] border-none bg-black/10" />
            <div className="grow">
              <a
                href="https://github.com/eddyNTR/Pagina-municipio.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="" className="h-10 w-10 mx-auto" />
              </a>
            </div>
          </div>
        </article>

        <article className="bg-white rounded-2xl shadow-sm h-[340px] overflow-hidden">
          <img
            src={juegos}
            alt="proyecto 1"
            className="h-[180px] w-full object-cover"
          />
          <div className="flex gap-4 p-6">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <div>
              <h2 className="font-bold text-xl">Pagina Tienda juegos</h2>
              <p className="text-xs text-[#757575] font-light">
                lenguajes: HTML, CSS, JavaScript
              </p>
            </div>
          </div>
          {/*Contenido de la tarjeta */}
          <div className="flex h-[64px] items-center justify-around border-t-[1px] border-[#c0bcbc]">
            <div className="grow">
              <img src={html} alt="" className="h-10 w-10 mx-auto" />
            </div>
            <hr className="mx-4 h-4 w-[1px] border-none bg-black/10" />
            <div className="grow">
              <img src={css} alt="" className="h-10 w-10 mx-auto" />
            </div>
            <hr className="mx-4 h-4 w-[1px] border-none bg-black/10" />
            <div className="grow">
              <img src={javascript} alt="" className="h-10 w-10 mx-auto" />
            </div>
            <hr className="mx-4 h-4 w-[1px] border-none bg-black/10" />
            <div className="grow">
              <a
                href="https://github.com/eddyNTR/paginas-web.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="" className="h-10 w-10 mx-auto" />
              </a>
            </div>
          </div>
        </article>

        <article className="bg-white rounded-2xl shadow-sm h-[340px] overflow-hidden">
          <img
            src={calculadora}
            alt="proyecto 1"
            className="h-[180px] w-full object-cover"
          />
          <div className="flex gap-4 p-6">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <div>
              <h2 className="font-bold text-xl">Calculadora</h2>
              <p className="text-xs text-[#757575] font-light">
                lenguajes: HTML, CSS
              </p>
            </div>
          </div>
          {/*Contenido de la tarjeta */}
          <div className="flex h-[64px] items-center justify-around border-t-[1px] border-[#c0bcbc]">
            <div className="grow">
              <img src={html} alt="" className="h-10 w-10 mx-auto" />
            </div>
            <hr className="mx-4 h-4 w-[1px] border-none bg-black/10" />
            <div className="grow">
              <img src={css} alt="" className="h-10 w-10 mx-auto" />
            </div>
            <hr className="mx-4 h-4 w-[1px] border-none bg-black/10" />
            <div className="grow">
              <img src={javascript} alt="" className="h-10 w-10 mx-auto" />
            </div>
            <hr className="mx-4 h-4 w-[1px] border-none bg-black/10" />
            <div className="grow">
              <a
                href="https://github.com/eddyNTR/paginas-web.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="" className="h-10 w-10 mx-auto" />
              </a>
            </div>
          </div>
        </article>

        <article className="bg-white rounded-2xl shadow-sm h-[340px] overflow-hidden">
          <img
            src={teatro}
            alt="proyecto 1"
            className="h-[180px] w-full object-cover"
          />
          <div className="flex gap-4 p-6">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <div>
              <h2 className="font-bold text-xl">Pagina Teatro</h2>
              <p className="text-xs text-[#757575] font-light">
                Lenguajes: HTML, CSS, JavaScript, Python
              </p>
            </div>
          </div>
          {/*Contenido de la tarjeta */}
          <div className="flex h-[64px] items-center justify-around border-t-[1px] border-[#c0bcbc]">
            <div className="grow">
              <img src={html} alt="" className="h-10 w-10 mx-auto" />
            </div>
            <hr className="mx-4 h-4 w-[1px] border-none bg-black/10" />
            <div className="grow">
              <img src={css} alt="" className="h-10 w-10 mx-auto" />
            </div>
            <hr className="mx-4 h-4 w-[1px] border-none bg-black/10" />
            <div className="grow">
              <img src={javascript} alt="" className="h-10 w-10 mx-auto" />
            </div>
            <hr className="mx-4 h-4 w-[1px] border-none bg-black/10" />
            <div className="grow">
              <img src={python} alt="" className="h-10 w-10 mx-auto" />
            </div>
            <hr className="mx-4 h-4 w-[1px] border-none bg-black/10" />
            <div className="grow">
              <a
                href="https://github.com/adrixVic/Dessingg_teatro.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="" className="h-10 w-10 mx-auto" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </motion.section>
  );
};

export default Contenido;
