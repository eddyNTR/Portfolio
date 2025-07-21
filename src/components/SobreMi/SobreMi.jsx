import React from "react";
import Logo from "../../assets/espadas.png";
import Persona from "../../assets/Persona.png";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { slipeUp } from "../../utility/animation";

const SobreMi = () => {
  return (
    <motion.div
      id="sobremi"
      className="grid grid-cols-1 md:grid-cols-2 pt-20"
      variants={slipeUp(0.4)}
      initial="initial"
      animate="animate"
    >
      {/* Textos y descripcion */}
      <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36">
        <img
          src={Logo}
          alt=""
          className="w-20 h-20 flex justify-center mx-auto"
        />
        <span className="text-white flex justify-center text-2xl">
          SOBRE MI
        </span>

        <p className="py-5 text-white">
          Mi nombre es Eddy Noe Torrico Rocha, soy un apasionado del desarrollo
          web y de aplicaciones de escritorio, donde encuentro un equilibrio
          perfecto entre creatividad y tecnología. Me encanta transformar ideas
          en soluciones funcionales y visuales, ya sea creando experiencias
          interactivas en la web o desarrollando software robusto para el
          escritorio. Mi objetivo es seguir aprendiendo y perfeccionando mis
          habilidades, siempre con el enfoque de crear herramientas que sean
          útiles y accesibles para los usuarios.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/eddyNTR"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 py-2 px-6 rounded-3xl text-white hover:bg-purple-800 transition-all duration-300 items-center cursor-pointer"
          >
            github
            <i className="bi bi-git text-xl ml-2"></i>
          </a>
          <a href="" className="text-white flex items-center cursor-pointer">
            Contactame
            <i className="bi bi-google ml-2 text-xl"></i>
          </a>
        </div>
      </div>
      <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36 flex justify-center">
        <img src={Persona} alt="Foto persona" className="rounded-full" />
      </div>
    </motion.div>
  );
};

export default SobreMi;
